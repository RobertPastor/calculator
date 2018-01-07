java -Xmx1g -jar "antlr-4.7.1-complete.jar" Calculator.g4 -visitor -Dlanguage=Python2 -package generated -o ..\hello\generated-python > CalculatorPython.log 2>&1
java -Xmx1g -jar "antlr-4.7.1-complete.jar" Calculator.g4 -Dlanguage=JavaScript -package generated -o ..\hello\static\js\generated-javascript > CalculatorJavaScript.log 2>&1

