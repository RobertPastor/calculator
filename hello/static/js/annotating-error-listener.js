// class for gathering errors and posting them to ACE editor
var antlr4 = require('/static/js/antlr4/index');

var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
	// annotation array
	console.log('AnnotatingErrorListener -- message is= ' + String(msg));
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error",
        raw: String(offendingSymbol)
 });
};

exports.AnnotatingErrorListener = AnnotatingErrorListener;