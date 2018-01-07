# Generated from Calculator.g4 by ANTLR 4.7.1
# encoding: utf-8
from __future__ import print_function
from antlr4 import *
from io import StringIO
import sys


def serializedATN():
    with StringIO() as buf:
        buf.write(u"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2")
        buf.write(u"\17O\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7")
        buf.write(u"\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t")
        buf.write(u"\r\4\16\t\16\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6")
        buf.write(u"\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13")
        buf.write(u"\3\13\3\13\3\13\3\f\3\f\3\f\3\r\6\r<\n\r\r\r\16\r=\3")
        buf.write(u"\r\5\rA\n\r\3\r\7\rD\n\r\f\r\16\rG\13\r\3\16\6\16J\n")
        buf.write(u"\16\r\16\16\16K\3\16\3\16\2\2\17\3\3\5\4\7\5\t\6\13\7")
        buf.write(u"\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\3\2\5\4\2")
        buf.write(u"RRrr\4\2KKkk\5\2\13\f\17\17\"\"\2R\2\3\3\2\2\2\2\5\3")
        buf.write(u"\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2")
        buf.write(u"\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2")
        buf.write(u"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\3\35\3\2\2")
        buf.write(u"\2\5\37\3\2\2\2\7!\3\2\2\2\t#\3\2\2\2\13%\3\2\2\2\r\'")
        buf.write(u"\3\2\2\2\17)\3\2\2\2\21+\3\2\2\2\23/\3\2\2\2\25\63\3")
        buf.write(u"\2\2\2\27\67\3\2\2\2\31;\3\2\2\2\33I\3\2\2\2\35\36\7")
        buf.write(u"`\2\2\36\4\3\2\2\2\37 \7,\2\2 \6\3\2\2\2!\"\7\61\2\2")
        buf.write(u"\"\b\3\2\2\2#$\7-\2\2$\n\3\2\2\2%&\7/\2\2&\f\3\2\2\2")
        buf.write(u"\'(\7*\2\2(\16\3\2\2\2)*\7+\2\2*\20\3\2\2\2+,\7e\2\2")
        buf.write(u",-\7q\2\2-.\7u\2\2.\22\3\2\2\2/\60\7u\2\2\60\61\7k\2")
        buf.write(u"\2\61\62\7p\2\2\62\24\3\2\2\2\63\64\7v\2\2\64\65\7c\2")
        buf.write(u"\2\65\66\7p\2\2\66\26\3\2\2\2\678\t\2\2\289\t\3\2\29")
        buf.write(u"\30\3\2\2\2:<\4\62;\2;:\3\2\2\2<=\3\2\2\2=;\3\2\2\2=")
        buf.write(u">\3\2\2\2>@\3\2\2\2?A\7\60\2\2@?\3\2\2\2@A\3\2\2\2AE")
        buf.write(u"\3\2\2\2BD\4\62;\2CB\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3")
        buf.write(u"\2\2\2F\32\3\2\2\2GE\3\2\2\2HJ\t\4\2\2IH\3\2\2\2JK\3")
        buf.write(u"\2\2\2KI\3\2\2\2KL\3\2\2\2LM\3\2\2\2MN\b\16\2\2N\34\3")
        buf.write(u"\2\2\2\7\2=@EK\3\b\2\2")
        return buf.getvalue()


class CalculatorLexer(Lexer):

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    T__0 = 1
    T__1 = 2
    T__2 = 3
    T__3 = 4
    T__4 = 5
    T__5 = 6
    T__6 = 7
    COS = 8
    SIN = 9
    TAN = 10
    PI = 11
    INT = 12
    WS = 13

    channelNames = [ u"DEFAULT_TOKEN_CHANNEL", u"HIDDEN" ]

    modeNames = [ u"DEFAULT_MODE" ]

    literalNames = [ u"<INVALID>",
            u"'^'", u"'*'", u"'/'", u"'+'", u"'-'", u"'('", u"')'", u"'cos'", 
            u"'sin'", u"'tan'" ]

    symbolicNames = [ u"<INVALID>",
            u"COS", u"SIN", u"TAN", u"PI", u"INT", u"WS" ]

    ruleNames = [ u"T__0", u"T__1", u"T__2", u"T__3", u"T__4", u"T__5", 
                  u"T__6", u"COS", u"SIN", u"TAN", u"PI", u"INT", u"WS" ]

    grammarFileName = u"Calculator.g4"

    def __init__(self, input=None, output=sys.stdout):
        super(CalculatorLexer, self).__init__(input, output=output)
        self.checkVersion("4.7.1")
        self._interp = LexerATNSimulator(self, self.atn, self.decisionsToDFA, PredictionContextCache())
        self._actions = None
        self._predicates = None


