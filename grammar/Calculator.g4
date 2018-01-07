grammar Calculator;

start : expr ;

expr  : left=expr op=('^'|'*'|'/') right=expr    #opExpr
      | left=expr op=('+'|'-') right=expr        #opExpr
      | '(' expr ')'                             #parenExpr
	  | op=(COS|SIN|TAN) right=expr 		     #trigExpr
      | atom=INT                                 #atomExpr
	  | PI										 #PiExpr
      ;
	  
COS : 'cos';
SIN : 'sin';
TAN : 'tan';
PI	: [Pp][Ii];

INT   : ('0'..'9')+ ('.')? ('0'..'9')* ;
WS    : [ \t\r\n]+ -> skip ;
