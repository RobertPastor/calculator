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

## Credits

The base for this post and the relevant code development was inspired by the following post:
https://github.com/antlr/antlr4/blob/master/doc/ace-javascript-target.md



Ace https://ace.c9.io/ is a high performance code editor. Ace has a large base of supported language such as JavaScript, html, CSS and more. Ace is written in JavaScript and hence integrates straight within a browser. Ace has token highlighting features, syntax checks and more such code folding...

## Goal

Provide a minimal web application which could be deployed for instance in heroku https://www.heroku.com and hence be accessible over the internet. 

## Web framework

We chose to work with Django https://www.djangoproject.com/  as we did already deploy a Django website within heroku.
Until now our Django site doesn't have any models and hence a lighter solution should suffice. The server side covers only the computation part (providing computation results). It could be extended to provide a graphical view of an algebraic expression as the one provided by the antlr4 test-rig (alias grun).


## Ace Characteristics

Ace integrates naturally within an HTML web page. It needs a theme for its cosmetics part and a so called “mode” to manage all the syntax highlighting and the annotations (error messages) provided to the user.
The “mode” interacts with a “worker”. This worker runs in its own environment. The worker is independent of the user input loop running in the editor. 
As described in the reference post, the antlr4 part lies in the worker environment. WorkerWorkerWorkerWorker and antlr4 Integration
Antlr4 has various targets. In this development, we used both a python 2 target for the Django view (on the server side) and a JavaScript target for the part of the worker responsible for sending annotations to the ace mode.
We started with the latest JavaScript worker and as described in the reference post we modified the Mirror OnUpdate function to allow our JavaScript antlr4 instance to retrieve syntax check messages.
In order to integrate the antlr4 code we need to use a module loader feature compatible with the one expected by antlr4. We used the Smoothie module loader available from here:
https://github.com/letorbi/smoothie/blob/master/standalone/require.js 
All recurrent logic, such as running the lexer and spending annotations is bound in the OnUpdate function of the worker.
The initialization part, the one responsible for loading dynamically the antlr4 environment, is added to the worker and triggered once.


## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open ki
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
