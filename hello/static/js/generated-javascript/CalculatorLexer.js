// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013o\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0007\u0010O",
    "\n\u0010\f\u0010\u000e\u0010R\u000b\u0010\u0003\u0011\u0005\u0011U\n",
    "\u0011\u0003\u0012\u0003\u0012\u0005\u0012Y\n\u0012\u0003\u0013\u0006",
    "\u0013\\\n\u0013\r\u0013\u000e\u0013]\u0003\u0013\u0005\u0013a\n\u0013",
    "\u0003\u0013\u0007\u0013d\n\u0013\f\u0013\u000e\u0013g\u000b\u0013\u0003",
    "\u0014\u0006\u0014j\n\u0014\r\u0014\u000e\u0014k\u0003\u0014\u0003\u0014",
    "\u0002\u0002\u0015\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0002#\u0002%\u0012\'\u0013\u0003\u0002",
    "\u0006\u0004\u0002RRrr\u0004\u0002KKkk\u0005\u0002C\\aac|\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002r\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0003",
    ")\u0003\u0002\u0002\u0002\u0005+\u0003\u0002\u0002\u0002\u0007-\u0003",
    "\u0002\u0002\u0002\t/\u0003\u0002\u0002\u0002\u000b1\u0003\u0002\u0002",
    "\u0002\r3\u0003\u0002\u0002\u0002\u000f5\u0003\u0002\u0002\u0002\u0011",
    "7\u0003\u0002\u0002\u0002\u00139\u0003\u0002\u0002\u0002\u0015;\u0003",
    "\u0002\u0002\u0002\u0017=\u0003\u0002\u0002\u0002\u0019A\u0003\u0002",
    "\u0002\u0002\u001bE\u0003\u0002\u0002\u0002\u001dI\u0003\u0002\u0002",
    "\u0002\u001fL\u0003\u0002\u0002\u0002!T\u0003\u0002\u0002\u0002#X\u0003",
    "\u0002\u0002\u0002%[\u0003\u0002\u0002\u0002\'i\u0003\u0002\u0002\u0002",
    ")*\u0007?\u0002\u0002*\u0004\u0003\u0002\u0002\u0002+,\u0007@\u0002",
    "\u0002,\u0006\u0003\u0002\u0002\u0002-.\u0007>\u0002\u0002.\b\u0003",
    "\u0002\u0002\u0002/0\u0007`\u0002\u00020\n\u0003\u0002\u0002\u00021",
    "2\u0007,\u0002\u00022\f\u0003\u0002\u0002\u000234\u00071\u0002\u0002",
    "4\u000e\u0003\u0002\u0002\u000256\u0007-\u0002\u00026\u0010\u0003\u0002",
    "\u0002\u000278\u0007/\u0002\u00028\u0012\u0003\u0002\u0002\u00029:\u0007",
    "*\u0002\u0002:\u0014\u0003\u0002\u0002\u0002;<\u0007+\u0002\u0002<\u0016",
    "\u0003\u0002\u0002\u0002=>\u0007e\u0002\u0002>?\u0007q\u0002\u0002?",
    "@\u0007u\u0002\u0002@\u0018\u0003\u0002\u0002\u0002AB\u0007u\u0002\u0002",
    "BC\u0007k\u0002\u0002CD\u0007p\u0002\u0002D\u001a\u0003\u0002\u0002",
    "\u0002EF\u0007v\u0002\u0002FG\u0007c\u0002\u0002GH\u0007p\u0002\u0002",
    "H\u001c\u0003\u0002\u0002\u0002IJ\t\u0002\u0002\u0002JK\t\u0003\u0002",
    "\u0002K\u001e\u0003\u0002\u0002\u0002LP\u0005!\u0011\u0002MO\u0005#",
    "\u0012\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q \u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002SU\t\u0004\u0002\u0002TS\u0003\u0002\u0002",
    "\u0002U\"\u0003\u0002\u0002\u0002VY\u0005!\u0011\u0002WY\u00042;\u0002",
    "XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002Y$\u0003\u0002\u0002",
    "\u0002Z\\\u00042;\u0002[Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003\u0002",
    "\u0002\u0002_a\u00070\u0002\u0002`_\u0003\u0002\u0002\u0002`a\u0003",
    "\u0002\u0002\u0002ae\u0003\u0002\u0002\u0002bd\u00042;\u0002cb\u0003",
    "\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002",
    "ef\u0003\u0002\u0002\u0002f&\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002",
    "\u0002hj\t\u0005\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002",
    "\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\b\u0014\u0002\u0002n(\u0003\u0002\u0002\u0002\n",
    "\u0002PTX]`ek\u0003\b\u0002\u0002"].join("");


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
CalculatorLexer.COS = 11;
CalculatorLexer.SIN = 12;
CalculatorLexer.TAN = 13;
CalculatorLexer.PI = 14;
CalculatorLexer.VARIABLE = 15;
CalculatorLexer.INT = 16;
CalculatorLexer.WS = 17;

CalculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalculatorLexer.prototype.literalNames = [ null, "'='", "'>'", "'<'", "'^'", 
                                           "'*'", "'/'", "'+'", "'-'", "'('", 
                                           "')'", "'cos'", "'sin'", "'tan'" ];

CalculatorLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, "COS", "SIN", "TAN", "PI", 
                                            "VARIABLE", "INT", "WS" ];

CalculatorLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "COS", "SIN", "TAN", 
                                        "PI", "VARIABLE", "VALID_ID_START", 
                                        "VALID_ID_CHAR", "INT", "WS" ];

CalculatorLexer.prototype.grammarFileName = "Calculator.g4";



exports.CalculatorLexer = CalculatorLexer;

