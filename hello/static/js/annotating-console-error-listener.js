// class for gathering errors and posting them to ACE editor
var antlr4 = require('/static/js/antlr4/index');

var AnnotatingConsoleErrorListener = function(annotations) {
	console.log("AnnotatingConsoleErrorListener - before ConsoleErrorListener call this")
    antlr4.error.ConsoleErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingConsoleErrorListener.prototype = Object.create(antlr4.error.ConsoleErrorListener.prototype);
AnnotatingConsoleErrorListener.prototype.constructor = AnnotatingConsoleErrorListener;

AnnotatingConsoleErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
	// annotation array
	console.log('Annotating-Console-Error-Listener -- message is= ' + String(msg));
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error",
        raw: String(offendingSymbol)
 });
};

exports.AnnotatingConsoleErrorListener = AnnotatingConsoleErrorListener;