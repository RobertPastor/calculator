'''
Created on Jun 2, 2016

@author: t0007330
'''

import os
import glob
import xlsxwriter
import time

from datetime import datetime
from TestFileFile import TestFile


def getTestsFiles():
    
    path = os.path.realpath(r'..\TestsFiles')
    #path = os.path.realpath(r'..\SqlTestsFiles')

    print '=================== get Tests files in ' + path

    for filePath in glob.glob(path+'\\*.txt'):
        yield  filePath
    
if __name__ == '__main__':
    
    TestFiles = []
    # measure process time
    t0 = time.clock()
    
    for filePath in getTestsFiles():
        print ' ------------------------------------------------- '
        print filePath
        
        testFile = TestFile(filePath, trace=True)
        testFile.analyseTestFile()
        
        #resume = raw_input("Voulez-vous continuez - n=non - : ")
        resume = 'o'
        if (resume == 'n') or (resume == 'N'):
            break
        
        TestFiles.append(testFile)
    
    print ' ------------------------------------------------- '
    # measure process time
    t1 = time.clock()

    fileName = 'analysisResults' + '-{0}'.format(datetime.now().strftime("%d-%b-%Y-%Hh%Mm%S")) + '.xlsx'
    workbook = xlsxwriter.Workbook(fileName)
    
    resultsWorkSheet = workbook.add_worksheet('Results')
    
    col = 0
    for cellName in ['Id', 'path', 'result', 'identifiers', 'nbIdentifiers', 'errors' , 'nbErrors','analysis duration (seconds)']:
        resultsWorkSheet.write_string(row=0, col=col, string=cellName)
        col += 1

    countOfFailedAnalysis = 0
    countOfParsedWithErrors = 0
    counter = 1
    for testFile in TestFiles:
        print 'id = {0} - file path = {1} - analysis results = {2}'.format(counter, 
                                                                           testFile.filePath, 
                                                                           testFile.analysisResult)
        
        print 'id = {0} - error list = {1}'.format(testFile.filePath, testFile.getErrorsList())
        #print 'id = {0} - identifiers set = {1}'.format(testFile.filePath, testFile.getIdentifierSet())
        
        resultsWorkSheet.write_number(row=counter, col=0, number=(counter) )
        
        resultsWorkSheet.write_string(row=counter, col=1, string=testFile.filePath )
        resultsWorkSheet.write_string(row=counter, col=2, string=testFile.analysisResult )
        if testFile.isFailed():
            countOfFailedAnalysis += 1
        resultsWorkSheet.write_string(row=counter, col=3, string=repr(sorted(testFile.getIdentifierSet())) )
        resultsWorkSheet.write_number(row=counter, col=4, number=(len(testFile.getIdentifierSet())) )
        
        resultsWorkSheet.write_string(row=counter, col=5, string=repr(sorted(testFile.getErrorsList())) )
        resultsWorkSheet.write_number(row=counter, col=6, number=(len(testFile.getErrorsList())) )
        resultsWorkSheet.write_number(row=counter, col=7, number=(testFile.getAnalysisDurationSeconds()) )
        
        if len(testFile.errorsList):
            countOfParsedWithErrors += 1
        counter += 1
        
    readMeWorksheet = workbook.add_worksheet('ReadMe')
    readMeWorksheet.write_string(row=0, col=0 , string='Export Date')
    readMeWorksheet.write_string(row=0, col=1 , string='{0}'.format(datetime.now().strftime("%d-%b-%Y-%Hh%Mm%S")) )
    
    readMeWorksheet.write_string(row=1, col=0 , string='number of analysed files' )
    readMeWorksheet.write_number(row=1, col=1 , number=(counter) )
    
    readMeWorksheet.write_string(row=2, col=0 , string='number of failed analysis' )
    readMeWorksheet.write_number(row=2, col=1 , number=(countOfFailedAnalysis) )
    
    readMeWorksheet.write_string(row=3, col=0 , string='number of parsed SQL with errors' )
    readMeWorksheet.write_number(row=3, col=1 , number=(countOfParsedWithErrors) )
    
    readMeWorksheet.write_string(row=4, col=0 , string='Analysis duration (seconds)' )
    readMeWorksheet.write_number(row=4, col=1 , number=(t1-t0) )
    
    readMeWorksheet.write_string(row=5, col=0 , string='Analysis duration (minutes)' )
    readMeWorksheet.write_number(row=5, col=1 , number=((t1-t0)/60.) )
    
    workbook.close()