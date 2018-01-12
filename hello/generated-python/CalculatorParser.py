# Generated from Calculator.g4 by ANTLR 4.7.1
# encoding: utf-8
from __future__ import print_function
from antlr4 import *
from io import StringIO
import sys

def serializedATN():
    with StringIO() as buf:
        buf.write(u"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3")
        buf.write(u"\23*\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\3\2\3\2\3\2\3\2")
        buf.write(u"\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4")
        buf.write(u"\33\n\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4#\n\4\f\4\16\4&\13")
        buf.write(u"\4\3\5\3\5\3\5\2\3\6\6\2\4\6\b\2\6\3\2\3\5\3\2\r\17\3")
        buf.write(u"\2\6\b\3\2\t\n\2+\2\n\3\2\2\2\4\16\3\2\2\2\6\32\3\2\2")
        buf.write(u"\2\b\'\3\2\2\2\n\13\5\6\4\2\13\f\5\4\3\2\f\r\5\6\4\2")
        buf.write(u"\r\3\3\2\2\2\16\17\t\2\2\2\17\5\3\2\2\2\20\21\b\4\1\2")
        buf.write(u"\21\22\7\13\2\2\22\23\5\6\4\2\23\24\7\f\2\2\24\33\3\2")
        buf.write(u"\2\2\25\26\t\3\2\2\26\33\5\6\4\6\27\33\7\22\2\2\30\33")
        buf.write(u"\7\20\2\2\31\33\5\b\5\2\32\20\3\2\2\2\32\25\3\2\2\2\32")
        buf.write(u"\27\3\2\2\2\32\30\3\2\2\2\32\31\3\2\2\2\33$\3\2\2\2\34")
        buf.write(u"\35\f\t\2\2\35\36\t\4\2\2\36#\5\6\4\n\37 \f\b\2\2 !\t")
        buf.write(u"\5\2\2!#\5\6\4\t\"\34\3\2\2\2\"\37\3\2\2\2#&\3\2\2\2")
        buf.write(u"$\"\3\2\2\2$%\3\2\2\2%\7\3\2\2\2&$\3\2\2\2\'(\7\21\2")
        buf.write(u"\2(\t\3\2\2\2\5\32\"$")
        return buf.getvalue()


class CalculatorParser ( Parser ):

    grammarFileName = "Calculator.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ u"<INVALID>", u"'='", u"'>'", u"'<'", u"'^'", u"'*'", 
                     u"'/'", u"'+'", u"'-'", u"'('", u"')'", u"'cos'", u"'sin'", 
                     u"'tan'" ]

    symbolicNames = [ u"<INVALID>", u"<INVALID>", u"<INVALID>", u"<INVALID>", 
                      u"<INVALID>", u"<INVALID>", u"<INVALID>", u"<INVALID>", 
                      u"<INVALID>", u"<INVALID>", u"<INVALID>", u"COS", 
                      u"SIN", u"TAN", u"PI", u"VARIABLE", u"INT", u"WS" ]

    RULE_start = 0
    RULE_relop = 1
    RULE_expr = 2
    RULE_variable = 3

    ruleNames =  [ u"start", u"relop", u"expr", u"variable" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    T__2=3
    T__3=4
    T__4=5
    T__5=6
    T__6=7
    T__7=8
    T__8=9
    T__9=10
    COS=11
    SIN=12
    TAN=13
    PI=14
    VARIABLE=15
    INT=16
    WS=17

    def __init__(self, input, output=sys.stdout):
        super(CalculatorParser, self).__init__(input, output=output)
        self.checkVersion("4.7.1")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None



    class StartContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(CalculatorParser.StartContext, self).__init__(parent, invokingState)
            self.parser = parser

        def expr(self, i=None):
            if i is None:
                return self.getTypedRuleContexts(CalculatorParser.ExprContext)
            else:
                return self.getTypedRuleContext(CalculatorParser.ExprContext,i)


        def relop(self):
            return self.getTypedRuleContext(CalculatorParser.RelopContext,0)


        def getRuleIndex(self):
            return CalculatorParser.RULE_start

        def enterRule(self, listener):
            if hasattr(listener, "enterStart"):
                listener.enterStart(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitStart"):
                listener.exitStart(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitStart"):
                return visitor.visitStart(self)
            else:
                return visitor.visitChildren(self)




    def start(self):

        localctx = CalculatorParser.StartContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_start)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 8
            self.expr(0)
            self.state = 9
            self.relop()
            self.state = 10
            self.expr(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class RelopContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(CalculatorParser.RelopContext, self).__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return CalculatorParser.RULE_relop

        def enterRule(self, listener):
            if hasattr(listener, "enterRelop"):
                listener.enterRelop(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitRelop"):
                listener.exitRelop(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitRelop"):
                return visitor.visitRelop(self)
            else:
                return visitor.visitChildren(self)




    def relop(self):

        localctx = CalculatorParser.RelopContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_relop)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 12
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << CalculatorParser.T__0) | (1 << CalculatorParser.T__1) | (1 << CalculatorParser.T__2))) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class ExprContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(CalculatorParser.ExprContext, self).__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return CalculatorParser.RULE_expr

     
        def copyFrom(self, ctx):
            super(CalculatorParser.ExprContext, self).copyFrom(ctx)


    class VarExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.VarExprContext, self).__init__(parser)
            self.copyFrom(ctx)

        def variable(self):
            return self.getTypedRuleContext(CalculatorParser.VariableContext,0)


        def enterRule(self, listener):
            if hasattr(listener, "enterVarExpr"):
                listener.enterVarExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitVarExpr"):
                listener.exitVarExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitVarExpr"):
                return visitor.visitVarExpr(self)
            else:
                return visitor.visitChildren(self)


    class PiExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.PiExprContext, self).__init__(parser)
            self.copyFrom(ctx)

        def PI(self):
            return self.getToken(CalculatorParser.PI, 0)

        def enterRule(self, listener):
            if hasattr(listener, "enterPiExpr"):
                listener.enterPiExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitPiExpr"):
                listener.exitPiExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitPiExpr"):
                return visitor.visitPiExpr(self)
            else:
                return visitor.visitChildren(self)


    class OpExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.OpExprContext, self).__init__(parser)
            self.left = None # ExprContext
            self.op = None # Token
            self.right = None # ExprContext
            self.copyFrom(ctx)

        def expr(self, i=None):
            if i is None:
                return self.getTypedRuleContexts(CalculatorParser.ExprContext)
            else:
                return self.getTypedRuleContext(CalculatorParser.ExprContext,i)


        def enterRule(self, listener):
            if hasattr(listener, "enterOpExpr"):
                listener.enterOpExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitOpExpr"):
                listener.exitOpExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitOpExpr"):
                return visitor.visitOpExpr(self)
            else:
                return visitor.visitChildren(self)


    class TrigExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.TrigExprContext, self).__init__(parser)
            self.op = None # Token
            self.right = None # ExprContext
            self.copyFrom(ctx)

        def expr(self):
            return self.getTypedRuleContext(CalculatorParser.ExprContext,0)

        def COS(self):
            return self.getToken(CalculatorParser.COS, 0)
        def SIN(self):
            return self.getToken(CalculatorParser.SIN, 0)
        def TAN(self):
            return self.getToken(CalculatorParser.TAN, 0)

        def enterRule(self, listener):
            if hasattr(listener, "enterTrigExpr"):
                listener.enterTrigExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitTrigExpr"):
                listener.exitTrigExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitTrigExpr"):
                return visitor.visitTrigExpr(self)
            else:
                return visitor.visitChildren(self)


    class AtomExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.AtomExprContext, self).__init__(parser)
            self.atom = None # Token
            self.copyFrom(ctx)

        def INT(self):
            return self.getToken(CalculatorParser.INT, 0)

        def enterRule(self, listener):
            if hasattr(listener, "enterAtomExpr"):
                listener.enterAtomExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitAtomExpr"):
                listener.exitAtomExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitAtomExpr"):
                return visitor.visitAtomExpr(self)
            else:
                return visitor.visitChildren(self)


    class ParenExprContext(ExprContext):

        def __init__(self, parser, ctx): # actually a CalculatorParser.ExprContext)
            super(CalculatorParser.ParenExprContext, self).__init__(parser)
            self.copyFrom(ctx)

        def expr(self):
            return self.getTypedRuleContext(CalculatorParser.ExprContext,0)


        def enterRule(self, listener):
            if hasattr(listener, "enterParenExpr"):
                listener.enterParenExpr(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitParenExpr"):
                listener.exitParenExpr(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitParenExpr"):
                return visitor.visitParenExpr(self)
            else:
                return visitor.visitChildren(self)



    def expr(self, _p=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = CalculatorParser.ExprContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 4
        self.enterRecursionRule(localctx, 4, self.RULE_expr, _p)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 24
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [CalculatorParser.T__8]:
                localctx = CalculatorParser.ParenExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx

                self.state = 15
                self.match(CalculatorParser.T__8)
                self.state = 16
                self.expr(0)
                self.state = 17
                self.match(CalculatorParser.T__9)
                pass
            elif token in [CalculatorParser.COS, CalculatorParser.SIN, CalculatorParser.TAN]:
                localctx = CalculatorParser.TrigExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 19
                localctx.op = self._input.LT(1)
                _la = self._input.LA(1)
                if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << CalculatorParser.COS) | (1 << CalculatorParser.SIN) | (1 << CalculatorParser.TAN))) != 0)):
                    localctx.op = self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 20
                localctx.right = self.expr(4)
                pass
            elif token in [CalculatorParser.INT]:
                localctx = CalculatorParser.AtomExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 21
                localctx.atom = self.match(CalculatorParser.INT)
                pass
            elif token in [CalculatorParser.PI]:
                localctx = CalculatorParser.PiExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 22
                self.match(CalculatorParser.PI)
                pass
            elif token in [CalculatorParser.VARIABLE]:
                localctx = CalculatorParser.VarExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 23
                self.variable()
                pass
            else:
                raise NoViableAltException(self)

            self._ctx.stop = self._input.LT(-1)
            self.state = 34
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,2,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    self.state = 32
                    self._errHandler.sync(self)
                    la_ = self._interp.adaptivePredict(self._input,1,self._ctx)
                    if la_ == 1:
                        localctx = CalculatorParser.OpExprContext(self, CalculatorParser.ExprContext(self, _parentctx, _parentState))
                        localctx.left = _prevctx
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 26
                        if not self.precpred(self._ctx, 7):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 7)")
                        self.state = 27
                        localctx.op = self._input.LT(1)
                        _la = self._input.LA(1)
                        if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << CalculatorParser.T__3) | (1 << CalculatorParser.T__4) | (1 << CalculatorParser.T__5))) != 0)):
                            localctx.op = self._errHandler.recoverInline(self)
                        else:
                            self._errHandler.reportMatch(self)
                            self.consume()
                        self.state = 28
                        localctx.right = self.expr(8)
                        pass

                    elif la_ == 2:
                        localctx = CalculatorParser.OpExprContext(self, CalculatorParser.ExprContext(self, _parentctx, _parentState))
                        localctx.left = _prevctx
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 29
                        if not self.precpred(self._ctx, 6):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 6)")
                        self.state = 30
                        localctx.op = self._input.LT(1)
                        _la = self._input.LA(1)
                        if not(_la==CalculatorParser.T__6 or _la==CalculatorParser.T__7):
                            localctx.op = self._errHandler.recoverInline(self)
                        else:
                            self._errHandler.reportMatch(self)
                            self.consume()
                        self.state = 31
                        localctx.right = self.expr(7)
                        pass

             
                self.state = 36
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,2,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx

    class VariableContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(CalculatorParser.VariableContext, self).__init__(parent, invokingState)
            self.parser = parser

        def VARIABLE(self):
            return self.getToken(CalculatorParser.VARIABLE, 0)

        def getRuleIndex(self):
            return CalculatorParser.RULE_variable

        def enterRule(self, listener):
            if hasattr(listener, "enterVariable"):
                listener.enterVariable(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitVariable"):
                listener.exitVariable(self)

        def accept(self, visitor):
            if hasattr(visitor, "visitVariable"):
                return visitor.visitVariable(self)
            else:
                return visitor.visitChildren(self)




    def variable(self):

        localctx = CalculatorParser.VariableContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_variable)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 37
            self.match(CalculatorParser.VARIABLE)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx



    def sempred(self, localctx, ruleIndex, predIndex):
        if self._predicates == None:
            self._predicates = dict()
        self._predicates[2] = self.expr_sempred
        pred = self._predicates.get(ruleIndex, None)
        if pred is None:
            raise Exception("No predicate with index:" + str(ruleIndex))
        else:
            return pred(localctx, predIndex)

    def expr_sempred(self, localctx, predIndex):
            if predIndex == 0:
                return self.precpred(self._ctx, 7)
         

            if predIndex == 1:
                return self.precpred(self._ctx, 6)
         




