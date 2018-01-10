var ace_require;
var antlr4_require;
try {
    //console.log(typeof(net.qualifyURL()));
	importScripts("http://localhost:8000/static/js/ace/worker/worker-base.js");
	
	if (require != undefined){
		console.log('MyWorker -- require is already defined');
		ace_require = require;
	}
	
} catch (e) {
    var strMsg = 'My Worker - importScripts exception ' + String(e);
    console.log(strMsg);
}

ace.define('ace/worker/MyWorker',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var MyWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(MyWorker, Mirror);

    (function() {

        this.onUpdate = function() {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(MyWorker.prototype);

    exports.MyWorker = MyWorker;
});

var validate = function(input) {
	var antlr4;
	var CalculatorLanguage;
	try {
		ace_require = require;
		require = undefined;
		console.log('MyWorker - validate - require is now undefined ');
		
		importScripts("http://localhost:8000/static/js/smoothie-require.js");
		console.log('MyWorker -- validate -- require for antlr4 is loaded');
			    
		window.Smoothie = { 'requirePath': ['/static/js/antlr4/', '/static/js/generated-javascript/'] }; // walk up to js folder, see Smoothie docs
	    antlr4 = require('/static/js/antlr4/index');
	    console.log('MyWorker -- validate -- antlr4 is loaded');
	    
		CalculatorLanguage = require("/static/js/generated-javascript/index");
	    console.log('MyWorker -- validate -- generated javascript calculator index loaded');

	    var stream = antlr4.CharStreams.fromString(input);
	    console.log('MyWorker -- stream initialized');
	    
	    var lexer = new CalculatorLanguage.CalculatorLexer(stream);
	    console.log('MyWorker -- Calculator Lexer initialized');
	    
	    var tokens = new antlr4.CommonTokenStream(lexer);
	    console.log ('MyWorker -- validate -- Token Stream ready');
	    
	    var parser = new CalculatorLanguage.CalculatorParser(tokens);
	    var annotations = [];
	    
	    var AnnotatingErrorListener = require('/static/js/AnnotatingErrorListener').AnnotatingErrorListener;
	    var listener = new AnnotatingErrorListener(annotations)
	    
	    parser.removeErrorListeners();
	    parser.addErrorListener(listener);
	    parser.start();
	    
	    require = ace_require;
	    return annotations;
	    //return [ { row: 0, column: 0, text: "MyMode says Hello!", type: "error" } ];
	    
	}   catch (e) {
	    console.log('MyWorker -- validate -- error= ' + String(e));
	} finally {
	    require = ace_require;
	}
	
};
