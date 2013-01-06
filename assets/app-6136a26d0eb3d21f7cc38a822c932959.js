window.Modernizr=function(e,t,n){function k(e){a.cssText=e}function L(e,t){return k(h.join(e+";")+(t||""))}function A(e,t){return typeof e===t}function O(e,t){return!!~(""+e).indexOf(t)}function M(e,t){for(var r in e){var i=e[r];if(!O(i,"-")&&a[i]!==n)return t=="pfx"?i:!0}return!1}function _(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:A(s,"function")?s.bind(r||t):s}return!1}function D(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+d.join(r+" ")+r).split(" ");return A(t,"string")||A(t,"undefined")?M(i,t):(i=(e+" "+v.join(r+" ")+r).split(" "),_(i,t,n))}function P(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)b[n[r]]=n[r]in f;return b.list&&(b.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),b}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),i.inputtypes=function(e){for(var r=0,i,o,u,a=e.length;r<a;r++)f.setAttribute("type",o=e[r]),i=f.type!=="text",i&&(f.value=l,f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&f.style.WebkitAppearance!==n?(s.appendChild(f),u=t.defaultView,i=u.getComputedStyle&&u.getComputedStyle(f,null).WebkitAppearance!=="textfield"&&f.offsetHeight!==0,s.removeChild(f)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?i=f.checkValidity&&f.checkValidity()===!1:i=f.value!=l)),y[e[r]]=!!i;return y}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.6.2",i={},s=t.documentElement,o="modernizr",u=t.createElement(o),a=u.style,f=t.createElement("input"),l=":)",c={}.toString,h=" -webkit- -moz- -o- -ms- ".split(" "),p="Webkit Moz O ms",d=p.split(" "),v=p.toLowerCase().split(" "),m={svg:"http://www.w3.org/2000/svg"},g={},y={},b={},w=[],E=w.slice,S,x=function(e,n,r,i){var u,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:o+(r+1),c.appendChild(f);return u=["&#173;",'<style id="s',o,'">',e,"</style>"].join(""),c.id=o,(h?c:p).innerHTML+=u,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=s.style.overflow,s.style.overflow="hidden",s.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),s.style.overflow=l),!!a},T=function(){function r(r,i){i=i||t.createElement(e[r]||"div"),r="on"+r;var s=r in i;return s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(r,""),s=A(i[r],"function"),A(i[r],"undefined")||(i[r]=n),i.removeAttribute(r))),i=null,s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),N={}.hasOwnProperty,C;!A(N,"undefined")&&!A(N.call,"undefined")?C=function(e,t){return N.call(e,t)}:C=function(e,t){return t in e&&A(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=E.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(E.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(E.call(arguments)))};return i}),g.flexbox=function(){return D("flexWrap")},g.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},g.canvastext=function(){return!!i.canvas&&!!A(t.createElement("canvas").getContext("2d").fillText,"function")},g.webgl=function(){return!!e.WebGLRenderingContext},g.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:x(["@media (",h.join("touch-enabled),("),o,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9}),n},g.geolocation=function(){return"geolocation"in navigator},g.postmessage=function(){return!!e.postMessage},g.websqldatabase=function(){return!!e.openDatabase},g.indexedDB=function(){return!!D("indexedDB",e)},g.hashchange=function(){return T("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},g.history=function(){return!!e.history&&!!history.pushState},g.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},g.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},g.rgba=function(){return k("background-color:rgba(150,255,150,.5)"),O(a.backgroundColor,"rgba")},g.hsla=function(){return k("background-color:hsla(120,40%,100%,.5)"),O(a.backgroundColor,"rgba")||O(a.backgroundColor,"hsla")},g.multiplebgs=function(){return k("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(a.background)},g.backgroundsize=function(){return D("backgroundSize")},g.borderimage=function(){return D("borderImage")},g.borderradius=function(){return D("borderRadius")},g.boxshadow=function(){return D("boxShadow")},g.textshadow=function(){return t.createElement("div").style.textShadow===""},g.opacity=function(){return L("opacity:.55"),/^0.55$/.test(a.opacity)},g.cssanimations=function(){return D("animationName")},g.csscolumns=function(){return D("columnCount")},g.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return k((e+"-webkit- ".split(" ").join(t+e)+h.join(n+e)).slice(0,-e.length)),O(a.backgroundImage,"gradient")},g.cssreflections=function(){return D("boxReflect")},g.csstransforms=function(){return!!D("transform")},g.csstransforms3d=function(){var e=!!D("perspective");return e&&"webkitPerspective"in s.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3}),e},g.csstransitions=function(){return D("transition")},g.fontface=function(){var e;return x('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0}),e},g.generatedcontent=function(){var e;return x(["#",o,"{font:0/0 a}#",o,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},g.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},g.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n},g.localstorage=function(){try{return localStorage.setItem(o,o),localStorage.removeItem(o),!0}catch(e){return!1}},g.sessionstorage=function(){try{return sessionStorage.setItem(o,o),sessionStorage.removeItem(o),!0}catch(e){return!1}},g.webworkers=function(){return!!e.Worker},g.applicationcache=function(){return!!e.applicationCache},g.svg=function(){return!!t.createElementNS&&!!t.createElementNS(m.svg,"svg").createSVGRect},g.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==m.svg},g.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(c.call(t.createElementNS(m.svg,"animate")))},g.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(c.call(t.createElementNS(m.svg,"clipPath")))};for(var H in g)C(g,H)&&(S=H.toLowerCase(),i[S]=g[H](),w.push((i[S]?"":"no-")+S));return i.input||P(),i.addTest=function(e,t){if(typeof e=="object")for(var r in e)C(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(s.className+=" "+(t?"":"no-")+e),i[e]=t}return i},k(""),u=f=null,i._version=r,i._prefixes=h,i._domPrefixes=v,i._cssomPrefixes=d,i.hasEvent=T,i.testProp=function(e){return M([e])},i.testAllProps=D,i.testStyles=x,i.prefixed=function(e,t,n){return t?D(e,t,n):D(e,"pfx")},i}(this,this.document),function(){function e(e){return document.getElementsByTagName(e)}function t(t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,(e("head")[0]||e("body")[0]).appendChild(n)}setTimeout(function(){var n="https:"==document.location.protocol?"https://ssl":"http://www";window._gaq=[["_setAccount","UA-35573678-1"],["_trackPageview"]],t(n+".google-analytics.com/ga.js")},0),setTimeout(function(){if(!document.getElementById("disqus_thread"))return;window.disqus_shortname="ixti",t("http://"+disqus_shortname+".disqus.com/embed.js")},0)}();