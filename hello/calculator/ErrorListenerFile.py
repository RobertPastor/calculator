'''
Created on Jun 27, 2016

@author: t0007330
'''

from antlr4.error.ErrorListener import ErrorListener


class ThrowingErrorListener(ErrorListener):
    
    errorsList = []
    def __init__(self):
        self.errorsList = []
    
    def getErrorsList(self):
        return self.errorsList
    
    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        errorMsg = 'syntaxError - symbol= {offendingSymbol}'.format(offendingSymbol=offendingSymbol)
        errorMsg += ' - line= {line}'.format(line=line)
        errorMsg += ' : {column}'.format(column=column)
        errorMsg += ' {msg}'.format(msg=msg)
        self.errorsList.append(errorMsg)


#     def reportAmbiguity(self, recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs):
#         errorMsg = 'report Ambiguity dfa= {dfa}'.format(dfa=str(dfa)[:50])
#         errorMsg += ' - startIndex= {startIndex}'.format(startIndex=startIndex)
#         errorMsg += ' : {stopIndex}'.format(stopIndex=stopIndex)
#         errorMsg += ' {exact}'.format(exact=exact)
#         self.errorsList.append(errorMsg)

#     def reportAttemptingFullContext(self, recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs):
#         errorMsg = 'report AttemptingFullContext dfa= {dfa}'.format(dfa=dfa)
#         errorMsg += ' - startIndex= {startIndex}'.format(startIndex=startIndex)
#         errorMsg += ' : {stopIndex}'.format(stopIndex=stopIndex)
#         errorMsg += ' {conflictingAlts}'.format(conflictingAlts=conflictingAlts)
#         self.errorsList.append(errorMsg)
 
#     def reportContextSensitivity(self, recognizer, dfa, startIndex, stopIndex, prediction, configs):
#         errorMsg = 'report Context Sensitivity dfa= {dfa}'.format(dfa=dfa)
#         errorMsg += ' - startIndex= {startIndex}'.format(startIndex=startIndex)
#         errorMsg += ' : {stopIndex}'.format(stopIndex=stopIndex)
#         errorMsg += ' {prediction}'.format(prediction=prediction)
#         self.errorsList.append(errorMsg)