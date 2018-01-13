# coding: utf8
'''
Created on 2 janv. 2018

@author: t0007330
'''
import math 

from hello.generated.CalculatorVisitor import CalculatorVisitor
from hello.generated.CalculatorParser import CalculatorParser

class ExtendedVisitor(CalculatorVisitor):
    
    def visitStart(self , ctx):
        assert isinstance(ctx, CalculatorParser.StartContext)
        return self.visitChildren(ctx)
    
        # Visit a parse tree produced by CalculatorParser#relop.
    def visitRelop(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#varExpr.
    def visitVarExpr(self, ctx):
        variable = ctx.var.text
        print 'Extended Visitor - variable = {variable}'.format(variable=variable)
        return self.visitChildren(ctx)


    def visitOpExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.OpExprContext)
        left = self.visit(ctx.left)
        right = self.visit(ctx.right)
        op = ctx.op.text;
        print 'Extended Visitor - visit Op Expr -- op= {op}'.format(op=op)
        if str(op).startswith('^'):
            result = math.pow(left, right)
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result

        if str(op).startswith('*'):
            result = left*right
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result
        
        if str(op).startswith('/'):
            result = 0.0
            if (right == 0.0):
                raise 'Division per Zero'
            else:
                result = left/right
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result
        
        if str(op).startswith('+'):
            result = left+right
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result
        
        if str(op).startswith('-'):
            result = left-right
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result
            
        raise Exception("Unknown operator " + op);

    # Visit a parse tree produced by CalculatorParser#trigExpr.
    def visitTrigExpr(self, ctx):       
        assert isinstance(ctx, CalculatorParser.TrigExprContext)
        op = ctx.op.text;
        right = self.visit(ctx.right)
        if str(op).startswith('cos'):
            result = math.cos(right)
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result
        
        if str(op).startswith('sin'):
            result = math.sin(right)
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result

        if str(op).startswith('cos'):
            result = math.tan(right)
            print 'Extended Visitor - intermediate result - ctx={0} -- result= {1}'.format(ctx.getText(), result)
            return result

        raise 'Extended Visitor - Opérateur trigonometrique inconnu'       
        return self.visitChildren(ctx)

    
    def visitAtomExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.AtomExprContext)
        return float(ctx.getText())

    def visitParenExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.ParenExprContext)
        return self.visit(ctx.expr())
    

    # Visit a parse tree produced by CalculatorParser#PiExpr.
    def visitPiExpr(self, ctx):
        result = math.pi
        return result
    
    

    
    