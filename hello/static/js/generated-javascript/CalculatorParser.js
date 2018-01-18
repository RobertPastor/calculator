// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorListener = require('./CalculatorListener').CalculatorListener;
var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016+\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004$\n\u0004",
    "\f\u0004\u000e\u0004\'\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0002\u0003\u0006\u0006\u0002\u0004\u0006\b\u0002\u0006\u0003\u0002",
    "\u0004\b\u0003\u0002\u0010\u0012\u0003\u0002\t\u000b\u0003\u0002\f\r",
    "\u0002,\u0002\n\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002",
    "\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b(\u0003\u0002\u0002\u0002",
    "\n\u000b\u0005\u0006\u0004\u0002\u000b\f\u0005\u0004\u0003\u0002\f\r",
    "\u0005\u0006\u0004\u0002\r\u000e\u0007\u0003\u0002\u0002\u000e\u0003",
    "\u0003\u0002\u0002\u0002\u000f\u0010\t\u0002\u0002\u0002\u0010\u0005",
    "\u0003\u0002\u0002\u0002\u0011\u0012\b\u0004\u0001\u0002\u0012\u0013",
    "\u0007\u000e\u0002\u0002\u0013\u0014\u0005\u0006\u0004\u0002\u0014\u0015",
    "\u0007\u000f\u0002\u0002\u0015\u001c\u0003\u0002\u0002\u0002\u0016\u0017",
    "\t\u0003\u0002\u0002\u0017\u001c\u0005\u0006\u0004\u0006\u0018\u001c",
    "\u0007\u0015\u0002\u0002\u0019\u001c\u0007\u0013\u0002\u0002\u001a\u001c",
    "\u0005\b\u0005\u0002\u001b\u0011\u0003\u0002\u0002\u0002\u001b\u0016",
    "\u0003\u0002\u0002\u0002\u001b\u0018\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c%",
    "\u0003\u0002\u0002\u0002\u001d\u001e\f\t\u0002\u0002\u001e\u001f\t\u0004",
    "\u0002\u0002\u001f$\u0005\u0006\u0004\n !\f\b\u0002\u0002!\"\t\u0005",
    "\u0002\u0002\"$\u0005\u0006\u0004\t#\u001d\u0003\u0002\u0002\u0002#",
    " \u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002",
    "\u0002%&\u0003\u0002\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002()\u0007\u0014\u0002\u0002)\t\u0003\u0002\u0002\u0002",
    "\u0005\u001b#%"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'='", "'>'", "'>='", "'<'", "'<='", "'^'", 
                     "'*'", "'/'", "'+'", "'-'", "'('", "')'", "'cos'", 
                     "'sin'", "'tan'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "COS", "SIN", "TAN", 
                      "PI", "VARIABLE", "INT", "WS" ];

var ruleNames =  [ "start", "relop", "expr", "variable" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.T__11 = 12;
CalculatorParser.T__12 = 13;
CalculatorParser.COS = 14;
CalculatorParser.SIN = 15;
CalculatorParser.TAN = 16;
CalculatorParser.PI = 17;
CalculatorParser.VARIABLE = 18;
CalculatorParser.INT = 19;
CalculatorParser.WS = 20;

CalculatorParser.RULE_start = 0;
CalculatorParser.RULE_relop = 1;
CalculatorParser.RULE_expr = 2;
CalculatorParser.RULE_variable = 3;

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_start;
    this.op = null; // RelopContext
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

StartContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitStart(this);
	}
};




CalculatorParser.StartContext = StartContext;

CalculatorParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.expr(0);
        this.state = 9;
        localctx.op = this.relop();
        this.state = 10;
        this.expr(0);
        this.state = 11;
        this.match(CalculatorParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;


RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitRelop(this);
	}
};




CalculatorParser.RelopContext = RelopContext;

CalculatorParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalculatorParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__1) | (1 << CalculatorParser.T__2) | (1 << CalculatorParser.T__3) | (1 << CalculatorParser.T__4) | (1 << CalculatorParser.T__5))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function VarExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.name = null; // VariableContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarExprContext.prototype = Object.create(ExprContext.prototype);
VarExprContext.prototype.constructor = VarExprContext;

CalculatorParser.VarExprContext = VarExprContext;

VarExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VarExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterVarExpr(this);
	}
};

VarExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitVarExpr(this);
	}
};


function PiExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PiExprContext.prototype = Object.create(ExprContext.prototype);
PiExprContext.prototype.constructor = PiExprContext;

CalculatorParser.PiExprContext = PiExprContext;

PiExprContext.prototype.PI = function() {
    return this.getToken(CalculatorParser.PI, 0);
};
PiExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterPiExpr(this);
	}
};

PiExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitPiExpr(this);
	}
};


function OpExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpExprContext.prototype = Object.create(ExprContext.prototype);
OpExprContext.prototype.constructor = OpExprContext;

CalculatorParser.OpExprContext = OpExprContext;

OpExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
OpExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterOpExpr(this);
	}
};

OpExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitOpExpr(this);
	}
};


function TrigExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrigExprContext.prototype = Object.create(ExprContext.prototype);
TrigExprContext.prototype.constructor = TrigExprContext;

CalculatorParser.TrigExprContext = TrigExprContext;

TrigExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

TrigExprContext.prototype.COS = function() {
    return this.getToken(CalculatorParser.COS, 0);
};

TrigExprContext.prototype.SIN = function() {
    return this.getToken(CalculatorParser.SIN, 0);
};

TrigExprContext.prototype.TAN = function() {
    return this.getToken(CalculatorParser.TAN, 0);
};
TrigExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterTrigExpr(this);
	}
};

TrigExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitTrigExpr(this);
	}
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.atom = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

CalculatorParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.INT = function() {
    return this.getToken(CalculatorParser.INT, 0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitAtomExpr(this);
	}
};


function ParenExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

CalculatorParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitParenExpr(this);
	}
};



CalculatorParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, CalculatorParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalculatorParser.T__11:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 16;
            this.match(CalculatorParser.T__11);
            this.state = 17;
            this.expr(0);
            this.state = 18;
            this.match(CalculatorParser.T__12);
            break;
        case CalculatorParser.COS:
        case CalculatorParser.SIN:
        case CalculatorParser.TAN:
            localctx = new TrigExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.COS) | (1 << CalculatorParser.SIN) | (1 << CalculatorParser.TAN))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 21;
            localctx.right = this.expr(4);
            break;
        case CalculatorParser.INT:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            localctx.atom = this.match(CalculatorParser.INT);
            break;
        case CalculatorParser.PI:
            localctx = new PiExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 23;
            this.match(CalculatorParser.PI);
            break;
        case CalculatorParser.VARIABLE:
            localctx = new VarExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            localctx.name = this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 35;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 33;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new OpExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 27;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 28;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__6) | (1 << CalculatorParser.T__7) | (1 << CalculatorParser.T__8))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 29;
                    localctx.right = this.expr(8);
                    break;

                case 2:
                    localctx = new OpExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 30;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 31;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__9 || _la===CalculatorParser.T__10)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 32;
                    localctx.right = this.expr(7);
                    break;

                } 
            }
            this.state = 37;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(CalculatorParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitVariable(this);
	}
};




CalculatorParser.VariableContext = VariableContext;

CalculatorParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalculatorParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(CalculatorParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
