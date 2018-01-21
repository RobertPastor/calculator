'''
Created on 2 janv. 2018

@author: t0007330
'''
import json

from antlr4 import InputStream
from antlr4 import  CommonTokenStream
from antlr4.tree import Trees
from hello.generated.CalculatorLexer import  CalculatorLexer
from hello.generated.CalculatorParser import CalculatorParser
from ExtendedVisitorFile import ExtendedVisitor
from TreesSubClassFile import SubTrees

if __name__ == '__main__':
    print ' ------------------- start ------------------'
    
    expression = "y = 2 * (3 + 4)"
    #expression = " (3.1 * 9.2) + (5.5 * 7.2)"
    #expression = " 2 ^ 3"
    expression = " y = (3.1 * 9.2) + (5.5 / 7.2) ;"
    arraySplit = str(expression).strip().split(';');
    for index in range(len(arraySplit)-1):
        #print index
        #print '=============== '
        statement = str(arraySplit[index]).strip()
        statement = statement + ';'
        print ' =========== statement = {statement} ==============='.format(statement=statement)
        print 'index = {index} - expression= {statement}'.format(index=index, statement=statement) 

        if (str(statement).strip() != ';'):
            inputStream = InputStream(statement)
            print inputStream
            lexer = CalculatorLexer(inputStream)
            commonTokenStream = CommonTokenStream(lexer)
            parser = CalculatorParser(commonTokenStream)
            tree = parser.start()
            extendedVisitor = ExtendedVisitor()
            result = extendedVisitor.visit(tree)
            
            # check that there is at least one variable
            ruleNames  = ['start','relop', 'expr', 'variable']
            subTree = SubTrees()
            obj = dict()
            obj = subTree.toStringTree(obj=obj, t=tree, ruleNames=None, recog=parser)
            print json.dumps(obj)
            if (extendedVisitor.getFirstVariable()):
                variable = extendedVisitor.getFirstVariable()
                print 'variable = {variable}'.format(variable=variable)
                print 'expression= {variable} - result= {value}'.format(variable=variable, value=extendedVisitor.getValue(variable))

    print '-------------------- end --------------------------'