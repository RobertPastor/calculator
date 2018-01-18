# Integrating antlr4, the ace web editor in Django
January 2018

## Overview

For a language dedicated editor, the state of art is to combine syntax highlighting, syntax and semantic checks. In this development we want to have all three features available at the same time for instance in a browser. 
Coupled to an additional code completion capability and our editor would be the smartest tool to use on a daily basis.

## What is it about?

The overall purpose of the tool is to propose a basic algebraic calculator. We will describe later the minimal features of this implementation but one key requirement would allow for this tool to return results and more over return the sequence of intermediate commutations in order for the student to understand precedence between the main additive and multiplicative operations.
Another nice feature would be to show to the end user the abstract Syntax tree (as a representation of the input expression) as a way to visualize its algebraic expression, taking into account the effect of braces or the results of applying operators precedence.

## Who is our end user?

The very first end user is an undergraduate student facing difficulties while understanding and solving complex algebraic expressions. See https://en.m.wikipedia.org/wiki/Algebraic_expression

## Goal

Provide a minimal web application which could be deployed for instance in heroku https://www.heroku.com and hence be accessible over the internet. 

## Credits - Reference Post

The base for this post and the relevant code development was inspired by the following post:
https://github.com/antlr/antlr4/blob/master/doc/ace-javascript-target.md

## Ace front end

Ace https://ace.c9.io/ is a high performance code editor. Ace has a large base of supported language such as JavaScript, html, CSS and more. Ace is written in JavaScript and hence integrates straight within a browser. Ace has token highlighting features, syntax checks and more such code folding...

Ace needs a theme for its cosmetics and a so called “mode” to manage all the syntax highlighting and the annotations (error messages) provided to the user.
The “mode” interacts with a “worker”. This worker runs in its own environment. The worker is independent of the user input loop running. 
As described in the reference post, the antlr4 part lies in the worker environment. The following picture is taken from the reference post.

[[https://github.com/RobertPastor/calculator/hello/static/images/Ace-architecture.png]]

## Web framework

We chose to work with Django https://www.djangoproject.com/  as we did already deploy a Django website within heroku.
Until now our Django site doesn't have any models and hence a lighter solution should suffice. The server side covers only the computation part (providing computation results). It could be extended to provide a graphical view of an algebraic expression as the one provided by the antlr4 test-rig (alias grun).

## Worker and antlr4 Integration

Antlr4 has various targets. In this development, we used both a python 2 target for the Django view (on the server side) and a JavaScript target for the part of the worker responsible for sending annotations to the ace "mode".

We started with the latest JavaScript worker and as described in the reference post. We modified the Mirror OnUpdate function to allow our JavaScript antlr4 instance to retrieve syntax check messages.

In order to integrate the antlr4 code (with the worker) we need a module loader feature compatible with the one expected by antlr4. We used the Smoothie module loader available from here:

https://github.com/letorbi/smoothie/blob/master/standalone/require.js 

All recurrent logic, such as running the lexer and spending annotations is bound in the OnUpdate function of the worker.
The initialization part, the one responsible for loading dynamically the antlr4 environment, is added to the worker and triggered once.

## Antlr4 initialization within the worker

The following code is the antlr4 initialization code that sits inside the worker. It is called once at worker initialization.

In the following code, please note that the initialization function is self-invoking. It will be run only once at startup.
We use the requirePath feature of the Smoothie require module loader to take into account our static javascript folder in the code tree. 

Finally we use the window.location.origin to get the site http address. This should retrieve either with the localhost and inside the target heroku server.

```

var antlr4;
var CalculatorLanguage;
var AnnotatingListener;
var AnnotatingConsoleListener;
var ace_require;

// self invoking antlr4 initialisation function
(function () {

	console.log('init antlr4');
  
	try {
	    ace_require = require;
	    window.require = undefined;
	    //console.log('worker - validate - require is now undefined ');
	    //console.log('window location origin= ' + window.location.origin);
	    window.Smoothie = { 'requirePath': ['/static/js/'] }; 
	    // using import scripts : please provide the full path
	    importScripts(window.location.origin + "/static/js/smoothie-require.js");
	    //console.log('worker -- init -- require for antlr4 is loaded');
	    antlr4 = window.require('antlr4/index');
	    //console.log('worker -- init -- antlr4 is loaded');
	    CalculatorLanguage = window.require("generated-javascript/index");
	    //console.log('worker -- init -- generated javascript calculator index loaded');
	    // this is the lexer error listener
	    AnnotatingListener = window.require("annotating-error-listener");
	    //console.log('worker -- init -- annotating error listener loaded');
	    // this is the parser error listener
	    AnnotatingConsoleListener = window.require("annotating-console-error-listener");
	    //console.log('worker -- init -- annotating console error listener loaded');
	} catch (e) {
	    console.log('worker -- init -- error= ' + String(e));
	} finally {
	    require = ace_require;
	}
  
} )();

```
## Antlr4 annotations generation within the worker

The following code shows the modifications made to the OnUpdate function of the worker.

```

this.onUpdate = function() {
        var value = this.doc.getValue();
        value = value.replace(/^#!.*\n/, "\n");
        if (!value) {
            return this.sender.emit("annotate", []);
        }
	var stream = antlr4.CharStreams.fromString(value);
	//console.log('worker -- stream initialized');
	var lexer = new CalculatorLanguage.CalculatorLexer(stream);
	//console.log('worker -- Calculator Lexer initialized');
	var tokens = new antlr4.CommonTokenStream(lexer);
	//console.log ('worker -- validate -- Token Stream ready');
	var parser = new CalculatorLanguage.CalculatorParser(tokens);
	var lexerAnnotations = [];
	var parserAnnotations = [];
	var lexerListener = new AnnotatingListener.AnnotatingErrorListener(lexerAnnotations);
	var parserListener = new AnnotatingConsoleListener.AnnotatingConsoleErrorListener(parserAnnotations);
	// need to remove previous listener otherwise they will be still active
	lexer.removeErrorListeners();
	lexer.addErrorListener(lexerListener)
	parser.removeErrorListeners();
	parser.addErrorListener(parserListener);
	// start is the main entry rule of the grammar
	parser.start();
	// group annotations
	var annotations = [];
	lexerAnnotations.forEach( function (annotation) {
	    	//console.log(annotation);
	    	annotations.push(annotation);
	});
	parserAnnotations.forEach( function (annotation) {
	    	//console.log(annotation);
	    	annotations.push(annotation);
	});
	// send annotations from the worker back to the mode
        this.sender.emit("annotate", annotations);
    };


```

## Antlr4 and Django integration

One would be confused by having both antlr4 JavaScript code generated from the grammar (running in the browser and tightly coupled with the ace worker) and antlr4 python code generated by the same grammar and computing the end results of an algebraic expression in the Django server.
Warning: inside our Django code tree, please note that the antlr4 python target code must be at the higher python package level. This python target code must have the same version as the antlr4 jar code used to generate the code from the grammar.
This is done to avoid a strange incompatibility error raised by antlr4 when it is comparing both embedded versions.

[[https://github.com/RobertPastor/calculator/hello/static/images/Calculator-Code-Tree.png]]

## Antlr4 Grammar

The grammar is able to cope with multiple expressions. The antlr4 visitor code closes the gap between these expressions and reports the result of a variable in one expression to the next expression. 

```

grammar Calculator;

start : expr op=relop expr ';';

relop : '=' | '>' | '<'; 

expr  : left=expr op=('^'|'*'|'/') right=expr    #opExpr
      | left=expr op=('+'|'-') right=expr        #opExpr
      | '(' expr ')'                             #parenExpr
      | op=(COS|SIN|TAN) right=expr              #trigExpr
      | atom=INT                                 #atomExpr
      | PI                                       #PiExpr
      | name=variable                            #varExpr
      ;
	  
COS : 'cos';
SIN : 'sin';
TAN : 'tan';
PI  : [Pp][Ii];

variable : VARIABLE;

VARIABLE : VALID_ID_START VALID_ID_CHAR*  ;

fragment VALID_ID_START : ('a' .. 'z') | ('A' .. 'Z') | '_'  ;

fragment VALID_ID_CHAR : VALID_ID_START | ('0' .. '9') ;

INT   : ('0'..'9')+ ('.')? ('0'..'9')* ;
WS    : [ \t\r\n]+ -> skip ;

```

## Regressions Testing

In order to verify non regression, there is a folder dedicated to unit tests files, a Main python module to test one grammar pattern and a MainAll module to run all the test files.
These regression tests have to be run each time the grammar is changed.
An improvement would be to define the expected results.

## Calculator Visitor

The visitor aims at returning both intermediate results obtained when parsing an operator and final results as the results of the assignment operator.
In order to deal with several expressions, the variables are stored in a dictionary with the name of the variable as a key and the result as the value.

## Github code branch

The code available in github https://github.com/RobertPastor/calculator/ .

It has following dependencies:

Python version is 2.7.7

Django version is 1.9.3

Ace version is 1.2.9

Smoothie require version is …

Antlr4 version is 4.7.1

If one would start again from scratch from the getting started Django code provided as an example by heroku, he would have to change little code to make it work again.


## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
