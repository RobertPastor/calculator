# Generated from Calculator.g4 by ANTLR 4.7.1
from antlr4 import *

# This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

class CalculatorVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by CalculatorParser#start.
    def visitStart(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#relop.
    def visitRelop(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#varExpr.
    def visitVarExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#PiExpr.
    def visitPiExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#opExpr.
    def visitOpExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#trigExpr.
    def visitTrigExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#atomExpr.
    def visitAtomExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#parenExpr.
    def visitParenExpr(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#variable.
    def visitVariable(self, ctx):
        return self.visitChildren(ctx)


