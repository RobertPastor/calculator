from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from hello.models import Greeting
encoding = 'utf-8'
import json

from antlr4 import InputStream
from antlr4 import  CommonTokenStream

from hello.generated.CalculatorLexer import  CalculatorLexer
from hello.generated.CalculatorParser import CalculatorParser
from hello.calculator.ExtendedVisitorFile import ExtendedVisitor

from hello.calculator.TreesSubClassFile import SubTrees


# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, 'index.html')


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})

@csrf_exempt
def compute(request):
    
    print 'calculator compute = {user}'.format(user=request.user)
    if request.method == 'POST':
        
        print 'method is POST {0}'.format(request.POST)
        ''' results and histories are dictionnaries with results for each variable '''
        results = dict()
        histories = dict()
        jsonDumps = dict()
        try:
            expression = request.POST['data']
            arraySplit = str(expression).strip().split(';');
            for index in range(len(arraySplit)-1):
                #print index
                #print '=============== '
                statement = str(arraySplit[index]).strip()
                statement = statement + ';'
                statement = str(statement).strip()
                print ' =========== {statement} ==============='.format(statement=statement)
                print 'index = {index} - expression= {statement}'.format(index=index, statement=statement) 
        
                if (statement != ';'):
                    #print 'received line to compute= ' + line
                
                    inputStream = InputStream(statement)            
                    lexer = CalculatorLexer(inputStream)
                    commonTokenStream = CommonTokenStream(lexer)
                    parser = CalculatorParser(commonTokenStream)            
                    tree = parser.start()
                    extendedVisitor = ExtendedVisitor()
                    extendedVisitor.visit(tree)
                    
                    variable = extendedVisitor.getFirstVariable()
                    result = extendedVisitor.getValue(variable)
                    results[str(variable)] = result
                    
                    ''' build a json output that will be converted with library d3 in a tree '''
                    subTree = SubTrees()
                    obj = dict()
                    obj = subTree.toJson(obj=obj, t=tree, ruleNames=None, recog=parser)
                    print json.dumps(obj)
                    jsonDumps[str(variable)] = json.dumps(obj)

                    ''' define an history table for each variable '''
                    histories[str(variable)] = []
                    print 'statement=> {statement} - variable=> {variable} - result=> {result}'.format(statement=statement, variable=variable, result=result)
                    for history in extendedVisitor.getHistories():
                        histories[str(variable)].append(history);
                    ok = True
            
            response_data = { 
                             'ok':  ok,
                             'results' :  results,
                             'histories': histories,
                             'jsonDumps': jsonDumps,
                             'exception': ""
                             }
        except Exception as ex:
            print 'views - compute - exception= {ex}'.format(ex=ex)
            ok = False
            response_data = { 
                             'ok':  ok,
                             'results' :  {},
                             'histories': {},
                             'jsonDumps': {},
                             'exception': str(ex)
                             }
            
        return HttpResponse(json.dumps(response_data, encoding=encoding), content_type="application/json")
