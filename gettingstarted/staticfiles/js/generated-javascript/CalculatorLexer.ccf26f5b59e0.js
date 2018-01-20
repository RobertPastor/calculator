// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012k\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0007\u000fK\n\u000f\f\u000f\u000e\u000fN\u000b\u000f\u0003\u0010",
    "\u0005\u0010Q\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011U\n\u0011\u0003",
    "\u0012\u0006\u0012X\n\u0012\r\u0012\u000e\u0012Y\u0003\u0012\u0005\u0012",
    "]\n\u0012\u0003\u0012\u0007\u0012`\n\u0012\f\u0012\u000e\u0012c\u000b",
    "\u0012\u0003\u0013\u0006\u0013f\n\u0013\r\u0013\u000e\u0013g\u0003\u0013",
    "\u0003\u0013\u0002\u0002\u0014\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0002!\u0002#\u0011%\u0012\u0003",
    "\u0002\u0006\u0004\u0002RRrr\u0004\u0002KKkk\u0005\u0002C\\aac|\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002n\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002",
    "\u0002\u0002%\u0003\u0002\u0002\u0002\u0003\'\u0003\u0002\u0002\u0002",
    "\u0005)\u0003\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002\t-\u0003",
    "\u0002\u0002\u0002\u000b/\u0003\u0002\u0002\u0002\r1\u0003\u0002\u0002",
    "\u0002\u000f3\u0003\u0002\u0002\u0002\u00115\u0003\u0002\u0002\u0002",
    "\u00137\u0003\u0002\u0002\u0002\u00159\u0003\u0002\u0002\u0002\u0017",
    "=\u0003\u0002\u0002\u0002\u0019A\u0003\u0002\u0002\u0002\u001bE\u0003",
    "\u0002\u0002\u0002\u001dH\u0003\u0002\u0002\u0002\u001fP\u0003\u0002",
    "\u0002\u0002!T\u0003\u0002\u0002\u0002#W\u0003\u0002\u0002\u0002%e\u0003",
    "\u0002\u0002\u0002\'(\u0007=\u0002\u0002(\u0004\u0003\u0002\u0002\u0002",
    ")*\u0007?\u0002\u0002*\u0006\u0003\u0002\u0002\u0002+,\u0007`\u0002",
    "\u0002,\b\u0003\u0002\u0002\u0002-.\u0007,\u0002\u0002.\n\u0003\u0002",
    "\u0002\u0002/0\u00071\u0002\u00020\f\u0003\u0002\u0002\u000212\u0007",
    "-\u0002\u00022\u000e\u0003\u0002\u0002\u000234\u0007/\u0002\u00024\u0010",
    "\u0003\u0002\u0002\u000256\u0007*\u0002\u00026\u0012\u0003\u0002\u0002",
    "\u000278\u0007+\u0002\u00028\u0014\u0003\u0002\u0002\u00029:\u0007e",
    "\u0002\u0002:;\u0007q\u0002\u0002;<\u0007u\u0002\u0002<\u0016\u0003",
    "\u0002\u0002\u0002=>\u0007u\u0002\u0002>?\u0007k\u0002\u0002?@\u0007",
    "p\u0002\u0002@\u0018\u0003\u0002\u0002\u0002AB\u0007v\u0002\u0002BC",
    "\u0007c\u0002\u0002CD\u0007p\u0002\u0002D\u001a\u0003\u0002\u0002\u0002",
    "EF\t\u0002\u0002\u0002FG\t\u0003\u0002\u0002G\u001c\u0003\u0002\u0002",
    "\u0002HL\u0005\u001f\u0010\u0002IK\u0005!\u0011\u0002JI\u0003\u0002",
    "\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002M\u001e\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002",
    "\u0002OQ\t\u0004\u0002\u0002PO\u0003\u0002\u0002\u0002Q \u0003\u0002",
    "\u0002\u0002RU\u0005\u001f\u0010\u0002SU\u00042;\u0002TR\u0003\u0002",
    "\u0002\u0002TS\u0003\u0002\u0002\u0002U\"\u0003\u0002\u0002\u0002VX",
    "\u00042;\u0002WV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y",
    "W\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002",
    "\u0002[]\u00070\u0002\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]a\u0003\u0002\u0002\u0002^`\u00042;\u0002_^\u0003\u0002",
    "\u0002\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003",
    "\u0002\u0002\u0002b$\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "df\t\u0005\u0002\u0002ed\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002",
    "\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002ij\b\u0013\u0002\u0002j&\u0003\u0002\u0002\u0002\n\u0002",
    "LPTY\\ag\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CalculatorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CalculatorLexer.prototype = Object.create(antlr4.Lexer.prototype);
CalculatorLexer.prototype.constructor = CalculatorLexer;

Object.defineProperty(CalculatorLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.T__0 = 1;
CalculatorLexer.T__1 = 2;
CalculatorLexer.T__2 = 3;
CalculatorLexer.T__3 = 4;
CalculatorLexer.T__4 = 5;
CalculatorLexer.T__5 = 6;
CalculatorLexer.T__6 = 7;
CalculatorLexer.T__7 = 8;
CalculatorLexer.T__8 = 9;
CalculatorLexer.COS = 10;
CalculatorLexer.SIN = 11;
CalculatorLexer.TAN = 12;
CalculatorLexer.PI = 13;
CalculatorLexer.VARIABLE = 14;
CalculatorLexer.INT = 15;
CalculatorLexer.WS = 16;

CalculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalculatorLexer.prototype.literalNames = [ null, "';'", "'='", "'^'", "'*'", 
                                           "'/'", "'+'", "'-'", "'('", "')'", 
                                           "'cos'", "'sin'", "'tan'" ];

CalculatorLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            "COS", "SIN", "TAN", "PI", "VARIABLE", 
                                            "INT", "WS" ];

CalculatorLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "COS", "SIN", "TAN", "PI", 
                                        "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", 
                                        "INT", "WS" ];

CalculatorLexer.prototype.grammarFileName = "Calculator.g4";



exports.CalculatorLexer = CalculatorLexer;

