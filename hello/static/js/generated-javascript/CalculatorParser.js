// Generated from Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorListener = require('./CalculatorListener').CalculatorListener;
var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003",
    "\u0003\u0003\u0002\u0003\u0004\u0004\u0002\u0004\u0002\u0005\u0003\u0002",
    "\n\f\u0003\u0002\u0003\u0005\u0003\u0002\u0006\u0007\u0002!\u0002\u0006",
    "\u0003\u0002\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0007",
    "\u0005\u0004\u0003\u0002\u0007\u0003\u0003\u0002\u0002\u0002\b\t\b\u0003",
    "\u0001\u0002\t\n\u0007\b\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002",
    "\u000b\f\u0007\t\u0002\u0002\f\u0012\u0003\u0002\u0002\u0002\r\u000e",
    "\t\u0002\u0002\u0002\u000e\u0012\u0005\u0004\u0003\u0005\u000f\u0012",
    "\u0007\u000e\u0002\u0002\u0010\u0012\u0007\r\u0002\u0002\u0011\b\u0003",
    "\u0002\u0002\u0002\u0011\r\u0003\u0002\u0002\u0002\u0011\u000f\u0003",
    "\u0002\u0002\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u001b\u0003",
    "\u0002\u0002\u0002\u0013\u0014\f\b\u0002\u0002\u0014\u0015\t\u0003\u0002",
    "\u0002\u0015\u001a\u0005\u0004\u0003\t\u0016\u0017\f\u0007\u0002\u0002",
    "\u0017\u0018\t\u0004\u0002\u0002\u0018\u001a\u0005\u0004\u0003\b\u0019",
    "\u0013\u0003\u0002\u0002\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u001a",
    "\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u0005\u0011\u0019\u001b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'^'", "'*'", "'/'", "'+'", "'-'", "'('", "')'", 
                     "'cos'", "'sin'", "'tan'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "COS", 
                      "SIN", "TAN", "PI", "INT", "WS" ];

var ruleNames =  [ "start", "expr" ];

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
CalculatorParser.COS = 8;
CalculatorParser.SIN = 9;
CalculatorParser.TAN = 10;
CalculatorParser.PI = 11;
CalculatorParser.INT = 12;
CalculatorParser.WS = 13;

CalculatorParser.RULE_start = 0;
CalculatorParser.RULE_expr = 1;

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
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
        this.state = 4;
        this.expr(0);
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
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CalculatorParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalculatorParser.T__5:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 7;
            this.match(CalculatorParser.T__5);
            this.state = 8;
            this.expr(0);
            this.state = 9;
            this.match(CalculatorParser.T__6);
            break;
        case CalculatorParser.COS:
        case CalculatorParser.SIN:
        case CalculatorParser.TAN:
            localctx = new TrigExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.COS) | (1 << CalculatorParser.SIN) | (1 << CalculatorParser.TAN))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 12;
            localctx.right = this.expr(3);
            break;
        case CalculatorParser.INT:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            localctx.atom = this.match(CalculatorParser.INT);
            break;
        case CalculatorParser.PI:
            localctx = new PiExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.match(CalculatorParser.PI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 25;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 23;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new OpExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 17;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 18;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__0) | (1 << CalculatorParser.T__1) | (1 << CalculatorParser.T__2))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 19;
                    localctx.right = this.expr(7);
                    break;

                case 2:
                    localctx = new OpExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 20;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 21;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__3 || _la===CalculatorParser.T__4)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 22;
                    localctx.right = this.expr(6);
                    break;

                } 
            }
            this.state = 27;
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


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
