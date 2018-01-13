'''
Created on 2 janv. 2018

@author: t0007330
'''
from hello.antlr4 import InputStream
from hello.antlr4 import  CommonTokenStream
from hello.generated.CalculatorLexer import  CalculatorLexer
from hello.generated.CalculatorParser import CalculatorParser
from ExtendedVisitorFile import ExtendedVisitor

if __name__ == '__main__':
    print 'start'
    
    expression = "2 * (3 + 4)"
    expression = " (3.1 * 9.2) + (5.5 * 7.2)"
    expression = " 2 ^ 3"
    inputStream = InputStream(expression)
    print inputStream
    lexer = CalculatorLexer(inputStream)
    commonTokenStream = CommonTokenStream(lexer)
    parser = CalculatorParser(commonTokenStream)
    tree = parser.start()
    extendedVisitor = ExtendedVisitor()
    result = extendedVisitor.visit(tree)
    print 'expression= {0} - result= {1}'.format(expression, result)

    print 'end'