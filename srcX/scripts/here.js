(function(global){
  Object.defineProperty(global,'__stack',{
	  get: function(){
	    var orig = Error.prepareStackTrace;
	    Error.prepareStackTrace = function(_,stack){return stack;};
	    var err = new Error;
	    Error.captureStackTrace(err,arguments.callee);
	    var stack = err.stack;
	    Error.prepareStackTrace = orig;
	    return stack;}});
	Object.defineProperty(global,'__line',{
		get:function(){return '(line '+__stack[1].getLineNumber()+')'}});
	Object.defineProperty(global,'here',{get:function(p){return console.log}});
	Object.defineProperty(global,'hereE',{get:function(){return console.error}});
	Object.defineProperty(global,'hereW',{get:function(){return console.warn}});
	Object.defineProperty(global,'hereI',{get:function(){return console.info}});
}).call(this,typeof global !== 'undefined'?global:
typeof self !== 'undefined'?self:
typeof window !== 'undefined'?window:{});
here('here is working on jnaj front end');