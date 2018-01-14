# -*- coding: utf-8 -*-
import time
import profile

from antlr4 import FileStream, CommonTokenStream
#from antlr4.PredictionContext import PredictionContextCache
#from antlr4.dfa.DFA import DFA
#from antlr4.atn.ParserATNSimulator import ParserATNSimulator
#from antlr4.tree.Tree import ParseTreeWalker

from hello.generated.CalculatorLexer  import CalculatorLexer
from hello.generated.CalculatorParser import CalculatorParser

from ExtendedVisitorFile import ExtendedVisitor
from ErrorListenerFile import ThrowingErrorListener

class TestFile(object):
    filePath = ""
    analysisResult = ""

    def __init__(self, _filePath, trace=False, _profiling=False):
        self.filePath = _filePath
        self.errorsList = []
        self.identifierSet = set()
        self.trace = trace
        self.analysisDurationSeconds = 0
        self.profiling = _profiling
        
    def launchProfiling(self):
        profile.runctx('self.analyseSqlTestFile()',  globals(), locals())

    def getAnalysisDurationSeconds(self):
        return self.analysisDurationSeconds

    def getIdentifierSet(self):
        return self.identifierSet
    
    def getErrorsList(self):
        return self.errorsList

    def analyseTestFile(self):

        try:
            # measure process time in seconds
            t0 = time.clock()
            
            fileStream = FileStream(fileName=self.filePath, encoding='utf8')
            lexer = CalculatorLexer(fileStream)
            commonTokenStream = CommonTokenStream(lexer)
            parser = CalculatorParser(commonTokenStream)
            
            ''' Define new cache '''
            #predictionContextCache = PredictionContextCache();
             
            ''' Define new/clean DFA array '''
            #decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(parser.atn.decisionToState) ]
     
            #parser._interp = ParserATNSimulator(parser, parser.atn, decisionsToDFA, predictionContextCache)

            #===================================================================
            parser.removeErrorListeners()
            throwingErrorListener = ThrowingErrorListener()
            parser.addErrorListener(throwingErrorListener)
            #===================================================================
            #if (self.trace):
            #    parser.setTrace(True)
            ''' try PredictionMode.LL first '''
            #parser._interp.predictionMode = PredictionMode.LL
            #parser.errHandler = BailErrorStrategy()
            ''' try PredictionMode.SLL '''
            #parser._interp.predictionMode = PredictionMode.SLL;
            
            ''' parse using entry rule sql_script '''
            tree = parser.start()
                
            extendedVisitor = ExtendedVisitor()
            result = extendedVisitor.visit(tree)
            variable = extendedVisitor.getFirstVariable()
            print "First Variable = {variable} --- Result: {result}".format(variable=variable, result=extendedVisitor.getValue(variable))
                
            #===================================================================
            # listener = RuleParserListener()
            # walker = ParseTreeWalker()
            # walker.walk(listener, tree)
            #     
            #===================================================================
            t1 = time.clock()
            self.analysisDurationSeconds = t1-t0
            self.errorsList = throwingErrorListener.getErrorsList()
            if len(self.errorsList)>0:
                print 'Test File - error List = {0}'.format(self.errorsList)
            # print ' identifiers set = {0}'.format(self.identifierSet)

            self.analysisResult = "Success"
            ''' clear cache '''
            
        except Exception as ex:
            print 'analyseSqlTestFile - exception during parse {filePath} - exception = {ex}'.format(filePath=self.filePath, ex=ex)
            self.identifierSet = set()
            self.analysisResult = "Failed"

    def isSuccess(self):
        if self.analysisResult == "Success":
            return True
        return False

    def isFailed(self):
        if self.analysisResult == "Failed":
            return True
        return False