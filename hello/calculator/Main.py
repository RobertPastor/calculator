'''
Created on 2 janv. 2018

@author: t0007330
'''
from antlr4 import InputStream
from antlr4 import  CommonTokenStream
from hello.generated.CalculatorLexer import  CalculatorLexer
from hello.generated.CalculatorParser import CalculatorParser
from ExtendedVisitorFile import ExtendedVisitor

if __name__ == '__main__':
    print 'start'
    
    expression = "y = 2 * (3 + 4)"
    #expression = " (3.1 * 9.2) + (5.5 * 7.2)"
    #expression = " 2 ^ 3"
    expression = " x = 2.3 ; "
    inputStream = InputStream(expression)
    print inputStream
    lexer = CalculatorLexer(inputStream)
    commonTokenStream = CommonTokenStream(lexer)
    parser = CalculatorParser(commonTokenStream)
    tree = parser.start()
    extendedVisitor = ExtendedVisitor()
    result = extendedVisitor.visit(tree)
    # check that there is at least one variable
    if (extendedVisitor.getFirstVariable()):
        variable = extendedVisitor.getFirstVariable()
        print 'variable = {variable}'.format(variable=variable)
        print 'expression= {variable} - result= {value}'.format(variable=variable, value=extendedVisitor.getValue(variable))

    print 'end'