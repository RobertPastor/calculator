// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016}\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0007\u0013]\n\u0013\f\u0013\u000e\u0013`\u000b\u0013",
    "\u0003\u0014\u0005\u0014c\n\u0014\u0003\u0015\u0003\u0015\u0005\u0015",
    "g\n\u0015\u0003\u0016\u0006\u0016j\n\u0016\r\u0016\u000e\u0016k\u0003",
    "\u0016\u0005\u0016o\n\u0016\u0003\u0016\u0007\u0016r\n\u0016\f\u0016",
    "\u000e\u0016u\u000b\u0016\u0003\u0017\u0006\u0017x\n\u0017\r\u0017\u000e",
    "\u0017y\u0003\u0017\u0003\u0017\u0002\u0002\u0018\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012",
    "#\u0013%\u0014\'\u0002)\u0002+\u0015-\u0016\u0003\u0002\u0006\u0004",
    "\u0002RRrr\u0004\u0002KKkk\u0005\u0002C\\aac|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002\u0080\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0003/\u0003\u0002\u0002\u0002\u00051\u0003\u0002\u0002",
    "\u0002\u00073\u0003\u0002\u0002\u0002\t5\u0003\u0002\u0002\u0002\u000b",
    "8\u0003\u0002\u0002\u0002\r:\u0003\u0002\u0002\u0002\u000f=\u0003\u0002",
    "\u0002\u0002\u0011?\u0003\u0002\u0002\u0002\u0013A\u0003\u0002\u0002",
    "\u0002\u0015C\u0003\u0002\u0002\u0002\u0017E\u0003\u0002\u0002\u0002",
    "\u0019G\u0003\u0002\u0002\u0002\u001bI\u0003\u0002\u0002\u0002\u001d",
    "K\u0003\u0002\u0002\u0002\u001fO\u0003\u0002\u0002\u0002!S\u0003\u0002",
    "\u0002\u0002#W\u0003\u0002\u0002\u0002%Z\u0003\u0002\u0002\u0002\'b",
    "\u0003\u0002\u0002\u0002)f\u0003\u0002\u0002\u0002+i\u0003\u0002\u0002",
    "\u0002-w\u0003\u0002\u0002\u0002/0\u0007=\u0002\u00020\u0004\u0003\u0002",
    "\u0002\u000212\u0007?\u0002\u00022\u0006\u0003\u0002\u0002\u000234\u0007",
    "@\u0002\u00024\b\u0003\u0002\u0002\u000256\u0007@\u0002\u000267\u0007",
    "?\u0002\u00027\n\u0003\u0002\u0002\u000289\u0007>\u0002\u00029\f\u0003",
    "\u0002\u0002\u0002:;\u0007>\u0002\u0002;<\u0007?\u0002\u0002<\u000e",
    "\u0003\u0002\u0002\u0002=>\u0007`\u0002\u0002>\u0010\u0003\u0002\u0002",
    "\u0002?@\u0007,\u0002\u0002@\u0012\u0003\u0002\u0002\u0002AB\u00071",
    "\u0002\u0002B\u0014\u0003\u0002\u0002\u0002CD\u0007-\u0002\u0002D\u0016",
    "\u0003\u0002\u0002\u0002EF\u0007/\u0002\u0002F\u0018\u0003\u0002\u0002",
    "\u0002GH\u0007*\u0002\u0002H\u001a\u0003\u0002\u0002\u0002IJ\u0007+",
    "\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\u0007e\u0002\u0002LM\u0007",
    "q\u0002\u0002MN\u0007u\u0002\u0002N\u001e\u0003\u0002\u0002\u0002OP",
    "\u0007u\u0002\u0002PQ\u0007k\u0002\u0002QR\u0007p\u0002\u0002R \u0003",
    "\u0002\u0002\u0002ST\u0007v\u0002\u0002TU\u0007c\u0002\u0002UV\u0007",
    "p\u0002\u0002V\"\u0003\u0002\u0002\u0002WX\t\u0002\u0002\u0002XY\t\u0003",
    "\u0002\u0002Y$\u0003\u0002\u0002\u0002Z^\u0005\'\u0014\u0002[]\u0005",
    ")\u0015\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^",
    "\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_&\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002ac\t\u0004\u0002\u0002ba\u0003\u0002",
    "\u0002\u0002c(\u0003\u0002\u0002\u0002dg\u0005\'\u0014\u0002eg\u0004",
    "2;\u0002fd\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002g*\u0003",
    "\u0002\u0002\u0002hj\u00042;\u0002ih\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002",
    "ln\u0003\u0002\u0002\u0002mo\u00070\u0002\u0002nm\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002os\u0003\u0002\u0002\u0002pr\u00042",
    ";\u0002qp\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003",
    "\u0002\u0002\u0002st\u0003\u0002\u0002\u0002t,\u0003\u0002\u0002\u0002",
    "us\u0003\u0002\u0002\u0002vx\t\u0005\u0002\u0002wv\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z{\u0003\u0002\u0002\u0002{|\b\u0017\u0002\u0002|.\u0003",
    "\u0002\u0002\u0002\n\u0002^bfknsy\u0003\b\u0002\u0002"].join("");


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
CalculatorLexer.T__9 = 10;
CalculatorLexer.T__10 = 11;
CalculatorLexer.T__11 = 12;
CalculatorLexer.T__12 = 13;
CalculatorLexer.COS = 14;
CalculatorLexer.SIN = 15;
CalculatorLexer.TAN = 16;
CalculatorLexer.PI = 17;
CalculatorLexer.VARIABLE = 18;
CalculatorLexer.INT = 19;
CalculatorLexer.WS = 20;

CalculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalculatorLexer.prototype.literalNames = [ null, "';'", "'='", "'>'", "'>='", 
                                           "'<'", "'<='", "'^'", "'*'", 
                                           "'/'", "'+'", "'-'", "'('", "')'", 
                                           "'cos'", "'sin'", "'tan'" ];

CalculatorLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, "COS", 
                                            "SIN", "TAN", "PI", "VARIABLE", 
                                            "INT", "WS" ];

CalculatorLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "COS", "SIN", "TAN", "PI", 
                                        "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", 
                                        "INT", "WS" ];

CalculatorLexer.prototype.grammarFileName = "Calculator.g4";



exports.CalculatorLexer = CalculatorLexer;

