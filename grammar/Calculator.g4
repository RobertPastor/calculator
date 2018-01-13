grammar Calculator;

start : expr relop expr ';';

relop : '=' | '>' | '<'; 

expr  : left=expr op=('^'|'*'|'/') right=expr    #opExpr
      | left=expr op=('+'|'-') right=expr        #opExpr
      | '(' expr ')'                             #parenExpr
	  | op=(COS|SIN|TAN) right=expr 		     #trigExpr
      | atom=INT                                 #atomExpr
	  | PI										 #PiExpr
	  | variable=var						     #varExpr
      ;
	  
COS : 'cos';
SIN : 'sin';
TAN : 'tan';
PI	: [Pp][Ii];

var : VARIABLE;

VARIABLE : VALID_ID_START VALID_ID_CHAR*  ;

fragment VALID_ID_START : ('a' .. 'z') | ('A' .. 'Z') | '_'  ;

fragment VALID_ID_CHAR : VALID_ID_START | ('0' .. '9') ;

INT   : ('0'..'9')+ ('.')? ('0'..'9')* ;
WS    : [ \t\r\n]+ -> skip ;
