'''
Created on 21 janv. 2018

@author: PASTOR Robert
'''

from io import StringIO

from antlr4.tree.Trees import Trees
from antlr4.Utils import escapeWhitespace

class SubTrees(Trees):
    
    
    @classmethod
    def toStringTree(cls, obj, t, ruleNames=None, recog=None):
        if recog is not None:
            ruleNames = recog.ruleNames
        s = escapeWhitespace(cls.getNodeText(t, ruleNames), False)
        print s
        if t.getChildCount()==0:
            return s
        with StringIO() as buf:
            buf.write(u"(")
            obj = dict()
            obj['name'] = s 
            obj['children'] = []
            #buf.write(s)
            #buf.write(u' ')
            for i in range(0, t.getChildCount()):
                if i > 0:
                    #buf.write(u' ')
                    print t.getChildCount()
                     
                #buf.write(listElements)
                obj['children'].append(cls.toStringTree(obj, t.getChild(i), ruleNames))
            #buf.write(u")")
            #return buf.getvalue()
            return (obj)