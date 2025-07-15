/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var r=n.util.type(e);switch(t=t||{},r){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};t[n.util.objId(e)]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=n.util.clone(e[l],t));return a;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a=[];return t[n.util.objId(e)]=a,e.forEach(function(e,r){a[r]=n.util.clone(e,t)}),a}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){a=a||n.languages;var l=a[e];if(2==arguments.length){r=arguments[1];for(var i in r)r.hasOwnProperty(i)&&(l[i]=r[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);o[s]=l[s]}var u=a[e];return a[e]=o,n.languages.DFS(n.languages,function(t,n){n===u&&t!=e&&(this[t]=o)}),o},DFS:function(e,t,r,a){a=a||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],r||l),"Object"!==n.util.type(e[l])||a[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||a[n.util.objId(e[l])]||(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,a)):(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var a={callback:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var l,i=a.elements||e.querySelectorAll(a.selector),o=0;l=i[o++];)n.highlightElement(l,t===!0,a.callback)},highlightElement:function(t,r,a){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),r&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var l={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",l),l.tokens=n.tokenize(l.code,l.grammar),n.hooks.run("after-tokenize",l),r.stringify(n.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,r,a,l,i,o){var s=n.Token;for(var u in r)if(r.hasOwnProperty(u)&&r[u]){if(u==o)return;var g=r[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=a,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){if(m&&b!=t.length-1){h.lastIndex=k;var _=h.exec(e);if(!_)break;for(var j=_.index+(d?_[1].length:0),P=_.index+_[0].length,A=b,x=k,O=t.length;O>A&&(P>x||!t[A].type&&!t[A-1].greedy);++A)x+=t[A].length,j>=x&&(++b,k=x);if(t[b]instanceof s)continue;I=A-b,w=e.slice(k,x),_.index-=k}else{h.lastIndex=0;var _=h.exec(w),I=1}if(_){d&&(p=_[1]?_[1].length:0);var j=_.index+p,_=_[0].slice(p),P=j+_.length,N=w.slice(0,j),S=w.slice(P),C=[b,I];N&&(++b,k+=N.length,C.push(N));var E=new s(u,f?n.tokenize(_,f):_,y,_,m);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(t,C),1!=I&&n.matchGrammar(e,t,r,b,k,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,t){var r=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,l=0;a=r[l++];)a(t)}}},r=n.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var l={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,a=t.code,l=t.immediateClose;_self.postMessage(n.highlight(a,n.languages[r],r)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(n.filename=a.src,n.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],/[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"function":/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript;

var RENDERER = {
	JELLYFISH_RATE: 0.00015,
	DUST_RATE: 0.0005,
	ADJUST_DISTANCE : 100,
	ADJUST_OFFSET : 5,
	
	init : function(){
		this.setParameters();
		this.reconstructMethod();
		this.createElements();
		this.bindEvent();
		this.render();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$container = $('#jsi-jellyfish-container');
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.radius = Math.sqrt(Math.pow(this.width / 2, 2) + Math.sqrt(this.height/ 2, 2));
		this.distance = Math.sqrt(Math.pow(this.width, 2) + Math.sqrt(this.height, 2));
		this.canvas = $('<canvas />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0);
		this.context = this.canvas.getContext('2d');
		this.jellyfishes = [];
		this.theta = 0;
		this.x =  0;
		this.y =  0;
		this.destinationX = this.x;
		this.destinationY = this.y;
		this.dusts = [];
	},
	reconstructMethod : function(){
		this.render = this.render.bind(this);
	},
	getRandomValue : function(range){
		return range.min + (range.max - range.min) * Math.random();
	},
	createElements : function(){
		for(var i = 0, length = this.JELLYFISH_RATE * this.width * this.height; i < length; i++){
			this.jellyfishes.push(new JELLYFISH(this));
		}
		for(var i = 0, length = this.DUST_RATE * this.width * this.height; i < length; i++){
			this.dusts.push(new DUST(this));
		}
	},
	bindEvent : function(){
		this.$container.on('mousemove', this.translateCenter.bind(this, false));
		this.$container.on('mouseout', this.translateCenter.bind(this, true));
	},
	translateCenter : function(toAdjust, event){
		var offset = this.$container.offset();
		this.destinationX = event.clientX - offset.left + this.$window.scrollLeft();
		this.destinationY = event.clientY - offset.top + this.$window.scrollTop();
		
		if(!toAdjust){
			return;
		}
		if(this.destinationX < this.ADJUST_OFFSET){
			this.destinationX = 0;
		}else if(this.radius > this.width - this.ADJUST_OFFSET){
			this.destinationX = this.width;
		}
		if(this.destinationY < this.ADJUST_OFFSET){
			this.destinationY = 0;
		}else if(this.radius > this.height - this.ADJUST_OFFSET){
			this.destinationY = this.height;
		}
	},
	render : function(){
		requestAnimationFrame(this.render);
		
		if(this.destinationX > this.x){
			this.x = Math.min(this.x + this.ADJUST_DISTANCE, this.destinationX);
		}else{
			this.x = Math.max(this.x - this.ADJUST_DISTANCE, this.destinationX);
		}
		if(this.destinationY > this.y){
			this.y = Math.min(this.y + this.ADJUST_DISTANCE, this.destinationY);
		}else{
			this.y = Math.max(this.y - this.ADJUST_DISTANCE, this.destinationY);
		}
		var gradient = this.context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
		gradient.addColorStop(0, 'hsl(245, 100%, 50%)');
		gradient.addColorStop(0.3, 'hsl(245, 100%, 30%)');
		gradient.addColorStop(1, 'hsl(245, 100%, 10%)');
		this.context.fillStyle = gradient;
		this.context.fillRect(0, 0, this.width, this.height);
		
		for(var i = 0, length = this.dusts.length; i < length; i++){
			this.dusts[i].render(this.context, this.x, this.y);
		}
		for(var i = 0, length = this.jellyfishes.length; i < length; i++){
			this.jellyfishes[i].render(this.context, this.x, this.y);
		}
	}
};
var JELLYFISH = function(renderer){
	this.renderer = renderer;
	this.init(true);
};
JELLYFISH.prototype = {
	EXPANSION_RANGE : {min : Math.PI / 120, max : Math.PI / 30},
	DIRECTION_RANGE : {min : 0, max : Math.PI * 2},
	BASE_RANGE_X : {min : 10, max : 15},
	BASE_RANGE_Y : {min : 0, max : 5},
	BASE_RANGE_CP_X : {min : 20, max : 50},
	BASE_RANGE_CP_Y : {min : -40, max : -20},
	EXPANTION_OFFSET_RANGE : {min : 0.2, max : 0.5},
	EXTENSION_RATE_RANGE : {min : 0.5, max : 1.5},
	FEELER_LENGTH_RANGE : {min : 15, max : 30},
	FEELER_WIDTH_RANGE : {min : 2, max : 4},
	ACCELERATION_RATE : 0.2,
	OFFSET_TO_JUDGE : 100,
	FRICTION : 0.96,
	EXTENSION_COUNT : 100,
	
	init : function(toInit){
		this.radius = this.renderer.radius + this.OFFSET_TO_JUDGE * 2;
		
		if(toInit){
			this.x = this.renderer.getRandomValue({min : -this.OFFSET_TO_JUDGE, max : this.renderer.width + this.OFFSET_TO_JUDGE});
			this.y = this.renderer.getRandomValue({min : -this.OFFSET_TO_JUDGE, max : this.renderer.height + this.OFFSET_TO_JUDGE});
			this.direction = this.renderer.getRandomValue(this.DIRECTION_RANGE);
		}else{
			switch(condition = Math.random() * 4 | 0){
			case 0:
				this.x = -this.OFFSET_TO_JUDGE;
				this.y = this.renderer.getRandomValue({min : 0, max : this.renderer.height});
				this.direction = this.renderer.getRandomValue({min : Math.PI / 4, max : Math.PI * 3 / 4});
				break;
			case 1:
				this.x = this.renderer.getRandomValue({min : 0, max : this.renderer.width});
				this.y = -this.OFFSET_TO_JUDGE;
				this.direction = this.renderer.getRandomValue({min : Math.PI * 3 / 4, max : Math.PI * 5 / 4});
				break;
			case 2:
				this.x = this.renderer.width + this.OFFSET_TO_JUDGE;
				this.y = this.renderer.getRandomValue({min : 0, max : this.renderer.height});
				this.direction = this.renderer.getRandomValue({min : Math.PI * 5 / 4, max : Math.PI * 7 / 4});
				break;
			case 3:
				this.x = this.renderer.getRandomValue({min : 0, max : this.renderer.width});
				this.y = this.renderer.height + this.OFFSET_TO_JUDGE;
				this.direction = this.renderer.getRandomValue({min : Math.PI * 3 / 4, max : Math.PI * 5 / 4});
			}
		}
		this.expansion = 0;
		this.expansionDelta = this.renderer.getRandomValue(this.EXPANSION_RANGE);
		this.vx = 0;
		this.vy = 0;
		this.ax = Math.sin(this.direction) * this.expansionDelta * this.ACCELERATION_RATE;
		this.ay = -Math.cos(this.direction) * this.expansionDelta * this.ACCELERATION_RATE;
		this.baseX = this.renderer.getRandomValue(this.BASE_RANGE_X);
		this.baseY = this.renderer.getRandomValue(this.BASE_RANGE_Y);
		this.baseCPX = this.renderer.getRandomValue(this.BASE_RANGE_CP_X);
		this.baseCPY = this.renderer.getRandomValue(this.BASE_RANGE_CP_Y);
		this.expansionOffset = this.renderer.getRandomValue(this.EXPANTION_OFFSET_RANGE);
		this.feelerLength = this.renderer.getRandomValue(this.FEELER_LENGTH_RANGE);
		this.feelerWidth = this.renderer.getRandomValue(this.FEELER_WIDTH_RANGE);
		this.extensionRate = this.renderer.getRandomValue(this.EXTENSION_RATE_RANGE);
		this.theta = 0;
	},
	render : function(context, x, y){
		context.save();
		context.translate(this.x, this.y);
		context.rotate(this.direction);
		
		var opacity = 0.1 + 0.9 * Math.pow(1 - Math.min(1, Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) / this.renderer.distance), 2),
			feelerColor = 'hsla(240, 80%, 80%, ' + 0.5 * opacity + ')',
			patternColor = 'hsla(240, 80%, 80%, ' + 0.8 * opacity + ')',
			gradient = context.createRadialGradient(0, this.baseCPY, 0, 0, this.baseCPY, this.baseY - this.baseCPY);
			
		gradient.addColorStop(0, 'hsla(245, 100%, 100%, ' + opacity + ')');
		gradient.addColorStop(0.5, 'hsla(245, 100%, 80%, ' + 0.6 * opacity + ')');
		gradient.addColorStop(1, 'hsla(245, 100%, 60%, ' + 0.4 * opacity + ')');
		
		context.fillStyle = gradient;
		context.strokeStyle = patternColor;
		context.lineWidth = 2;
		
		var baseX = this.baseX * (1 + this.expansionOffset * Math.cos(this.expansion)),
			theta = Math.PI / 2 - Math.abs((Math.PI - this.expansion)) / 2;
		
		context.save();
		this.createHead(context, baseX);
		context.restore();
		
		this.createMainPattern(context, baseX);
		this.createSubPattern(context, 0, this.baseCPY * 0.45, 0);
		this.createSubPattern(context, -7, this.baseCPY * 0.4, -theta);
		this.createSubPattern(context, 7, this.baseCPY * 0.4, theta);
		this.createFeeler(context, feelerColor);
		context.restore();
		
		if(this.expansion >= Math.PI - this.expansionDelta && this.expansion <= Math.PI){
			this.expansion += this.expansionDelta / this.EXTENSION_COUNT;
		}else{
			this.expansion += this.expansionDelta;
		}
		this.expansion %= Math.PI * 2;
		this.x += this.vx;
		this.y += this.vy;
		
		if(this.expansion >= 0 && this.expansion <= Math.PI){
			this.vx += this.ax;
			this.vy += this.ay;
		}
		this.vx *= this.FRICTION;
		this.vy *= this.FRICTION;
		
		this.judgeToReset();
	},
	createHead : function(context, baseX){
		context.beginPath();
		context.moveTo(-baseX, this.baseY);
		context.bezierCurveTo(-this.baseCPX, this.baseCPY, this.baseCPX, this.baseCPY, baseX, this.baseY);
		context.closePath();
		context.fill();
	},
	createMainPattern : function(context, baseX){
		context.beginPath();
		context.moveTo(-baseX * 0.6, this.baseY);
		context.bezierCurveTo(-this.baseCPX * 0.8, this.baseCPY * 0.5, this.baseCPX * 0.8, this.baseCPY * 0.5, baseX * 0.6, this.baseY);
		context.stroke();
	},
	createSubPattern : function(context, translateX, translateY, rotate){
		context.save();
		context.beginPath();
		context.translate(translateX, translateY);
		context.rotate(rotate);
		context.scale(1, 0.5);
		context.arc(0, 0, 4, 0, Math.PI * 2, false);
		context.stroke();
		context.restore();
	},
	createFeeler : function(context, feelerColor){
		for(var i = -3; i <= 3; i++){
			context.save();
			context.beginPath();
			context.strokeStyle = feelerColor;
			context.translate(i * 2, this.baseY);
			context.moveTo(0, 0);
			
			var x, cy;
			
			if(this.expansion >= 0 && this.expansion <= Math.PI){
				cy = (Math.PI - this.expansion) / Math.PI;
				x = i * this.feelerWidth * cy;
			}else{
				cy = (this.expansion - Math.PI) / Math.PI;
				x = i * this.feelerWidth * cy;
			}
			var rate = (cy > 0.5) ? (1 - cy) : cy;
			context.bezierCurveTo(x * this.extensionRate, this.feelerLength * rate, x * this.extensionRate, this.feelerLength * (1 - rate), x, this.feelerLength);
			context.stroke();
			context.restore();
		}
	},
	judgeToReset : function(){
		if(this.x < -this.OFFSET_TO_JUDGE && this.vx < 0 || this.x > this.renderer.width + this.OFFSET_TO_JUDGE && this.vx > 0
			|| this.y < -this.OFFSET_TO_JUDGE && this.vy < 0 || this.y > this.renderer.height + this.OFFSET_TO_JUDGE && this.vy > 0){
			this.init(false);
		}
	}
};
var DUST = function(renderer){
	this.renderer = renderer;
	this.init();
};
DUST.prototype = {
	RADIUS : 5,
	VELOCITY : 0.1,
	
	init : function(){
		var phi = this.renderer.getRandomValue({min : 0, max : Math.PI * 2});
		this.x = this.renderer.getRandomValue({min : 0, max : this.renderer.width});
		this.y = this.renderer.getRandomValue({min : 0, max : this.renderer.height});
		this.vx = this.VELOCITY * Math.sin(phi);
		this.vy = this.VELOCITY * Math.cos(phi);
		this.opacity = 0;
		this.theta = 0;
		this.deltaTheta = this.renderer.getRandomValue({min : Math.PI / 500, max : Math.PI / 100});
		this.gradient = this.renderer.context.createRadialGradient(0, 0, 0, 0, 0, this.RADIUS);
		this.gradient.addColorStop(0, 'hsla(220, 80%, 100%, 1)');
		this.gradient.addColorStop(0.1, 'hsla(220, 80%, 80%, 1)');
		this.gradient.addColorStop(0.25, 'hsla(220, 80%, 50%, 1)');
		this.gradient.addColorStop(1, 'hsla(220, 80%, 30%, 0)');
	},
	render : function(context, x, y){
		context.save();
		context.translate(this.x, this.y);
		context.globalAlpha = Math.abs(Math.sin(this.theta)) * (0.2 + 0.8 * Math.pow(Math.min(1, Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) / this.renderer.distance), 2));
		context.fillStyle = this.gradient;
		context.beginPath();
		context.arc(0, 0, this.RADIUS, 0, Math.PI * 2, false);
		context.fill();
		context.restore();
		this.x += this.vx;
		this.y += this.vy;
		this.theta += this.deltaTheta;
		this.theta %= Math.PI * 2;
		
		if(this.x < -this.RADIUS || this.x > this.renderer.width + this.RADIUS
			|| this.y < -this.RADIUS || this.y > this.renderer.height + this.RADIUS){
			this.init();
		}
	}
};
$(function(){
	RENDERER.init();
});