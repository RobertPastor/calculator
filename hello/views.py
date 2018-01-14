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
        results = 'error'
        
        try:
            line = request.POST['data']
            #print 'received line to compute= ' + line
                
            inputStream = InputStream(line)            
            lexer = CalculatorLexer(inputStream)
            commonTokenStream = CommonTokenStream(lexer)
            parser = CalculatorParser(commonTokenStream)            
            tree = parser.start()
            extendedVisitor = ExtendedVisitor()
            results = extendedVisitor.visit(tree)
            
    
            #except Exception as err:
            #    print 'Calculator views - err= {err}'.format(err=err)
            #    results = 'error'
            variable = extendedVisitor.getFirstVariable()
            results = extendedVisitor.getValue(variable)
            print 'expression= {0} - result= {1}'.format(line, results)
            ok = True
            
            response_data = { 
                             'ok':  ok,
                             'variable': variable,
                             'results' :  results,
                             'histories': extendedVisitor.getHistories(),
                             'exception': ""
                             }
        except Exception as ex:
            print 'views - compute - exception= {ex}'.format(ex=ex)
            ok = False
            response_data = { 
                             'ok':  ok,
                             'variable': "",
                             'results' :  "",
                             'histories': [],
                             'exception': str(ex)
                             }
            
        return HttpResponse(json.dumps(response_data, encoding=encoding), content_type="application/json")
