// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('/static/js/antlr4/index');

// This class defines a complete listener for a parse tree produced by CalculatorParser.
function CalculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CalculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CalculatorListener.prototype.constructor = CalculatorListener;

// Enter a parse tree produced by CalculatorParser#start.
CalculatorListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#start.
CalculatorListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#PiExpr.
CalculatorListener.prototype.enterPiExpr = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#PiExpr.
CalculatorListener.prototype.exitPiExpr = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#opExpr.
CalculatorListener.prototype.enterOpExpr = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#opExpr.
CalculatorListener.prototype.exitOpExpr = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#trigExpr.
CalculatorListener.prototype.enterTrigExpr = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#trigExpr.
CalculatorListener.prototype.exitTrigExpr = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#atomExpr.
CalculatorListener.prototype.enterAtomExpr = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#atomExpr.
CalculatorListener.prototype.exitAtomExpr = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#parenExpr.
CalculatorListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#parenExpr.
CalculatorListener.prototype.exitParenExpr = function(ctx) {
};


exports.CalculatorListener = CalculatorListener;