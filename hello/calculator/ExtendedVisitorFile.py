# coding: utf8
'''
Created on 2 janv. 2018

@author: t0007330
'''
import math 

from hello.generated.CalculatorVisitor import CalculatorVisitor
from hello.generated.CalculatorParser import CalculatorParser

class ExtendedVisitor(CalculatorVisitor):
    variables = {}
    histories = []
    relationalOperator = ''
    
    def __init__(self):
        self.variables = {}
        self.histories = []
        
        
    def storeHistory(self, history):
        print history
        self.histories.append(history)
        
        
    def getHistories(self):
        return self.histories
        
    
    def storeResult(self, result):
        
        if len(self.variables.keys())>0:
            for variable in self.variables.keys():
                self.storeHistory('variable {variable} with result= {result}'.format(result=result, variable=variable))
                self.variables[variable] = result
                print self.variables
        
        
    def getFirstVariable(self):
        return self.getVariable(1)
    
        
    def getVariable(self, variableIndex):
        count = 1
        if len(self.variables.keys())>0:
            for key in self.variables.keys():
                if (count == variableIndex):
                    return key
        self.storeHistory('Visitor - getVariable - no variable found!!!')
        return 'no variable found'
    
    
    def getValue(self, variable):
        if len(self.variables.keys())>0:
            for key in self.variables.keys():
                if (key == variable):
                    return self.variables[key]
        return 0.0
                
    
    def visitStart(self , ctx):
        assert isinstance(ctx, CalculatorParser.StartContext)
        return self.visitChildren(ctx)
    
    
    # Visit a parse tree produced by CalculatorParser#relop.
    def visitRelop(self, ctx):
        assert isinstance(ctx, CalculatorParser.RelopContext)
        self.relationalOperator = ctx.getText()
        self.storeHistory('Relational Operator is "{0}"'.format(self.relationalOperator))
        return self.visitChildren(ctx)


    # Visit a parse tree produced by CalculatorParser#varExpr.
    def visitVarExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.VarExprContext)
        variable = ctx.name.getText()
        self.variables[str(variable)] = 0.0
        self.storeHistory( 'Variable is {variable}'.format(variable=variable))
        return self.visitChildren(ctx)


    def visitOpExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.OpExprContext)
        left = self.visit(ctx.left)
        right = self.visit(ctx.right)
        op = ctx.op.text;
        self.storeHistory( 'Operator is {op}'.format(op=op) )
        if str(op).startswith('^'):
            result = math.pow(left, right)
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result

        if str(op).startswith('*'):
            result = left*right
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result
        
        if str(op).startswith('/'):
            result = 0.0
            if (right == 0.0):
                self.storeHistory( 'Error - Division per Zero' )
            else:
                result = left/right
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result
        
        if str(op).startswith('+'):
            result = left+right
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result
        
        if str(op).startswith('-'):
            result = left-right
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result
            
        
        self.storeHistory("Extended Visitor - Unknown operator " + op)
        raise Exception("Unknown operator " + op);

    # Visit a parse tree produced by CalculatorParser#trigExpr.
    def visitTrigExpr(self, ctx):       
        assert isinstance(ctx, CalculatorParser.TrigExprContext)
        op = ctx.op.text;
        right = self.visit(ctx.right)
        if str(op).startswith('cos'):
            result = math.cos(right)
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result
        
        if str(op).startswith('sin'):
            result = math.sin(right)
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result

        if str(op).startswith('cos'):
            result = math.tan(right)
            self.storeHistory( 'Expression is {0} -- result is {1}'.format(ctx.getText(), result) )
            self.storeResult(result)
            return result

        self.storeHistory( 'Extended Visitor - Opérateur trigonometrique inconnu' )
        raise 'Extended Visitor - Opérateur trigonometrique inconnu'       
        return self.visitChildren(ctx)

    
    def visitAtomExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.AtomExprContext)
        self.storeHistory('atom expression -- result is {0}'.format( float(ctx.getText()) ) )
        self.storeResult(float(ctx.getText()))
        return float(ctx.getText())


    def visitParenExpr(self, ctx):
        assert isinstance(ctx, CalculatorParser.ParenExprContext)
        return self.visit(ctx.expr())
    

    # Visit a parse tree produced by CalculatorParser#PiExpr.
    def visitPiExpr(self, ctx):
        result = math.pi
        return result
    
    

    
    