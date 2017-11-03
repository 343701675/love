var KISSY=function(e){var t=this,n,r=0,i="";function o(e){var t={};for(var r in a){(function(t,r){t[r]=function(t){return n.log(t,r,e)}})(t,r)}return t}var a={debug:10,info:20,warn:30,error:40};n={__BUILD_TIME:"20141210150549",Env:{host:t},Config:{debug:"",fns:{}},version:"1.4.16",config:function(t,r){var i,o,a=this,s,u=n.Config,l=u.fns;if(n.isObject(t)){n.each(t,function(e,t){s=l[t];if(s){s.call(a,e)}else{u[t]=e}})}else{i=l[t];if(r===e){if(i){o=i.call(a)}else{o=u[t]}}else{if(i){o=i.call(a,r)}else{u[t]=r}}}return o},log:function(t,r,i){if(""){var o=1;if(i){var s=n.Config.logger||{},u,l,c,f,d,p,h;r=r||"debug";f=a[r]||a.debug;if(u=s.includes){o=0;for(l=0;l<u.length;l++){c=u[l];h=c.logger;p=a[c.maxLevel]||a.error;d=a[c.minLevel]||a.debug;if(d<=f&&p>=f&&i.match(h)){o=1;break}}}else if(u=s.excludes){o=1;for(l=0;l<u.length;l++){c=u[l];h=c.logger;p=a[c.maxLevel]||a.error;d=a[c.minLevel]||a.debug;if(d<=f&&p>=f&&i.match(h)){o=0;break}}}if(o){t=i+": "+t}}if(typeof console!=="undefined"&&console.log&&o){console[r&&console[r]?r:"log"](t);return t}}return e},getLogger:function(e){return o(e)},error:function(e){if(""){throw e instanceof Error?e:new Error(e)}},guid:function(e){return(e||i)+r++}};if(""){n.Config.logger={excludes:[{logger:/^s\/.*/,maxLevel:"info",minLevel:"debug"}]}}n.Logger={};n.Logger.Level={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};return n}();(function(e,t){var n=e.getLogger("s/lang");var r="__MIX_CIRCULAR",i="__~ks_stamped",o=this,a=true,s="",u=Object,l=u.create,c=!{toString:1}.propertyIsEnumerable("toString"),f=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"];h(e,{stamp:function(n,r,o){o=o||i;var a=n[o];if(a){return a}else if(!r){try{a=n[o]=e.guid(o)}catch(s){a=t}}return a},keys:u.keys||function(e){var t=[],n,r;for(n in e){if(e.hasOwnProperty(n)){t.push(n)}}if(c){for(r=f.length-1;r>=0;r--){n=f[r];if(e.hasOwnProperty(n)){t.push(n)}}}return t},mix:function(n,i,o,s,u){if(typeof o==="object"){s=o.whitelist;u=o.deep;o=o.overwrite}if(s&&typeof s!=="function"){var l=s;s=function(n,r){return e.inArray(n,l)?r:t}}if(o===t){o=a}var c=[],f,d=0;m(n,i,o,s,u,c);while(f=c[d++]){delete f[r]}return n},merge:function(t){t=e.makeArray(arguments);var n={},r,i=t.length;for(r=0;r<i;r++){e.mix(n,t[r])}return n},augment:function(n,r){var i=e.makeArray(arguments),o=i.length-2,a=1,s,u,l=i[o],c=i[o+1];i[1]=r;if(!e.isArray(c)){l=c;c=t;o++}if(typeof l!=="boolean"){l=t;o++}for(;a<o;a++){u=i[a];if(s=u.prototype){u=e.mix({},s,true,g)}e.mix(n.prototype,u,l,c)}return n},extend:function(t,r,i,o){if(""){if(!t){n.error("extend r is null")}if(!r){n.error("extend s is null")}if(!r||!t){return t}}var a=r.prototype,s;a.constructor=r;s=p(a,t);t.prototype=e.mix(s,t.prototype);t.superclass=a;if(i){e.mix(s,i)}if(o){e.mix(t,o)}return t},namespace:function(){var t=e.makeArray(arguments),n=t.length,r=null,i,u,l,c=t[n-1]===a&&n--;for(i=0;i<n;i++){l=(s+t[i]).split(".");r=c?o:this;for(u=o[l[0]]===r?1:0;u<l.length;++u){r=r[l[u]]=r[l[u]]||{}}}return r}});function d(){}function p(e,t){var n;if(l){n=l(e)}else{d.prototype=e;n=new d}n.constructor=t;return n}function h(e,t){for(var n in t){e[n]=t[n]}}function m(t,n,i,o,a,s){if(!n||!t){return t}var u,l,c,f;n[r]=t;s.push(n);c=e.keys(n);f=c.length;for(u=0;u<f;u++){l=c[u];if(l!==r){v(l,t,n,i,o,a,s)}}return t}function g(e,n){return e==="constructor"?t:n}function v(n,i,o,s,u,l,c){if(s||!(n in i)||l){var f=i[n],d=o[n];if(f===d){if(f===t){i[n]=f}return}if(u){d=u.call(o,n,d)}if(l&&d&&(e.isArray(d)||e.isPlainObject(d))){if(d[r]){i[n]=d[r]}else{var p=f&&(e.isArray(f)||e.isPlainObject(f))?f:e.isArray(d)?[]:{};i[n]=p;m(p,d,s,u,a,c)}}else if(d!==t&&(s||!(n in i))){i[n]=d}}}})(KISSY);(function(e,t){var n=true,r=Array.prototype,i=r.indexOf,o=r.lastIndexOf,a=r.filter,s=r.every,u=r.some,l=r.map,c=false;e.mix(e,{each:function(n,r,i){if(n){var o,a,s,u=0,l=n&&n.length,f=l===t||e.type(n)==="function";i=i||null;if(f){s=e.keys(n);for(;u<s.length;u++){o=s[u];if(r.call(i,n[o],o,n)===c){break}}}else{for(a=n[0];u<l;a=n[++u]){if(r.call(i,a,u,n)===c){break}}}}return n},indexOf:i?function(e,t){return i.call(t,e)}:function(e,t){for(var n=0,r=t.length;n<r;++n){if(t[n]===e){return n}}return-1},lastIndexOf:o?function(e,t){return o.call(t,e)}:function(e,t){for(var n=t.length-1;n>=0;n--){if(t[n]===e){break}}return n},unique:function(t,n){var r=t.slice();if(n){r.reverse()}var i=0,o,a;while(i<r.length){a=r[i];while((o=e.lastIndexOf(a,r))!==i){r.splice(o,1)}i+=1}if(n){r.reverse()}return r},inArray:function(t,n){return e.indexOf(t,n)>-1},filter:a?function(e,t,n){return a.call(e,t,n||this)}:function(t,n,r){var i=[];e.each(t,function(e,t,o){if(n.call(r||this,e,t,o)){i.push(e)}});return i},map:l?function(e,t,n){return l.call(e,t,n||this)}:function(e,t,n){var r=e.length,i=new Array(r);for(var o=0;o<r;o++){var a=typeof e==="string"?e.charAt(o):e[o];if(a||o in e){i[o]=t.call(n||this,a,o,e)}}return i},reduce:function(e,r,i){var o=e.length;if(typeof r!=="function"){throw new TypeError("callback is not function!")}if(o===0&&arguments.length===2){throw new TypeError("arguments invalid")}var a=0;var s;if(arguments.length>=3){s=i}else{do{if(a in e){s=e[a++];break}a+=1;if(a>=o){throw new TypeError}}while(n)}while(a<o){if(a in e){s=r.call(t,s,e[a],a,e)}a++}return s},every:s?function(e,t,n){return s.call(e,t,n||this)}:function(e,t,r){var i=e&&e.length||0;for(var o=0;o<i;o++){if(o in e&&!t.call(r,e[o],o,e)){return c}}return n},some:u?function(e,t,n){return u.call(e,t,n||this)}:function(e,t,r){var i=e&&e.length||0;for(var o=0;o<i;o++){if(o in e&&t.call(r,e[o],o,e)){return n}}return c},makeArray:function(t){if(t==null){return[]}if(e.isArray(t)){return t}var n=typeof t.length,r=typeof t;if(n!=="number"||t.alert||r==="string"||r==="function"&&!("item"in t&&n==="number")){return[t]}var i=[];for(var o=0,a=t.length;o<a;o++){i[o]=t[o]}return i}})})(KISSY);(function(e,t){var n=e.getLogger("s/lang");var r="&",i="",o="=",a=true,s=16,u={"&amp;":"&","&gt;":">","&lt;":"<","&#x60;":"`","&#x2F;":"/","&quot;":'"',"&#x27;":"'"},l={},c,f,d=/[\-#$\^*()+\[\]{}|\\,.?\s]/g;(function(){for(var e in u){l[u[e]]=e}})();function p(e){var t=typeof e;return e==null||t!=="object"&&t!=="function"}function h(){if(c){return c}var t=i;e.each(u,function(e){t+=e+"|"});t=t.slice(0,-1);c=new RegExp(t,"g");return c}function m(){if(f){return f}var t=i;e.each(l,function(e){t+=e+"|"});t+="&#(\\d{1,5});";f=new RegExp(t,"g");return f}e.mix(e,{urlEncode:function(e){return encodeURIComponent(String(e))},urlDecode:function(e){return decodeURIComponent(e.replace(/\+/g," "))},fromUnicode:function(e){return e.replace(/\\u([a-f\d]{4})/gi,function(e,t){return String.fromCharCode(parseInt(t,s))})},escapeHtml:function(e){return(e+"").replace(h(),function(e){return l[e]})},escapeRegExp:function(e){return e.replace(d,"\\$&")},unEscapeHtml:function(e){return e.replace(m(),function(e,t){return u[e]||String.fromCharCode(+t)})},param:function(n,s,u,l){s=s||r;u=u||o;if(l===t){l=a}var c=[],f,d,h,m,g,v=e.urlEncode;for(f in n){g=n[f];f=v(f);if(p(g)){c.push(f);if(g!==t){c.push(u,v(g+i))}c.push(s)}else if(e.isArray(g)&&g.length){for(d=0,m=g.length;d<m;++d){h=g[d];if(p(h)){c.push(f,l?v("[]"):i);if(h!==t){c.push(u,v(h+i))}c.push(s)}}}}c.pop();return c.join(i)},unparam:function(i,a,s){if(typeof i!=="string"||!(i=e.trim(i))){return{}}a=a||r;s=s||o;var u={},l,c=e.urlDecode,f=i.split(a),d,p,h=0,m=f.length;for(;h<m;++h){l=f[h].indexOf(s);if(l===-1){d=c(f[h]);p=t}else{d=c(f[h].substring(0,l));p=f[h].substring(l+1);try{p=c(p)}catch(g){n.error("decodeURIComponent error : "+p);n.error(g)}if(e.endsWith(d,"[]")){d=d.substring(0,d.length-2)}}if(d in u){if(e.isArray(u[d])){u[d].push(p)}else{u[d]=[u[d],p]}}else{u[d]=p}}return u}});e.escapeHTML=e.escapeHtml;e.unEscapeHTML=e.unEscapeHtml})(KISSY);(function(e,t){function n(e,t,n){function r(){}var i=[].slice,o=i.call(arguments,3),a=function(){var a=i.call(arguments);return t.apply(this instanceof r?this:n||this,e?a.concat(o):o.concat(a))};r.prototype=t.prototype;a.prototype=new r;return a}e.mix(e,{noop:function(){},bind:n(0,n,null,0),rbind:n(0,n,null,1),later:function(t,n,r,i,o){n=n||0;var a=t,s=e.makeArray(o),u,l;if(typeof t==="string"){a=i[t]}if(!a){e.error("method undefined")}u=function(){a.apply(i,s)};l=r?setInterval(u,n):setTimeout(u,n);return{id:l,interval:r,cancel:function(){if(this.interval){clearInterval(l)}else{clearTimeout(l)}}}},throttle:function(t,n,r){n=n||150;if(n===-1){return function(){t.apply(r||this,arguments)}}var i=e.now();return function(){var o=e.now();if(o-i>n){i=o;t.apply(r||this,arguments)}}},buffer:function(t,n,r){n=n||150;if(n===-1){return function(){t.apply(r||this,arguments)}}var i=null;function o(){o.stop();i=e.later(t,n,0,r||this,arguments)}o.stop=function(){if(i){i.cancel();i=0}};return o}})})(KISSY);(function(e,t){var n=true,r=false,i="__~ks_cloned",o="__~ks_compared";e.mix(e,{equals:function(e,r,i,o){i=i||[];o=o||[];if(e===r){return n}if(e===t||e===null||r===t||r===null){return e==null&&r==null}if(e instanceof Date&&r instanceof Date){return e.getTime()===r.getTime()}if(typeof e==="string"&&typeof r==="string"){return e===r}if(typeof e==="number"&&typeof r==="number"){return e===r}if(typeof e==="object"&&typeof r==="object"){return s(e,r,i,o)}return e===r},clone:function(n,r){var o={},s=a(n,r,o);e.each(o,function(e){e=e.input;if(e[i]){try{delete e[i]}catch(n){e[i]=t}}});o=null;return s},now:Date.now||function(){return+new Date}});function a(t,n,o){var s=t,u,l,c,f;if(!t){return s}if(t[i]){return o[t[i]].destination}else if(typeof t==="object"){var d=t.constructor;if(e.inArray(d,[Boolean,String,Number,Date,RegExp])){s=new d(t.valueOf())}else if(u=e.isArray(t)){s=n?e.filter(t,n):t.concat()}else if(l=e.isPlainObject(t)){s={}}t[i]=f=e.guid("c");o[f]={destination:s,input:t}}if(u){for(var p=0;p<s.length;p++){s[p]=a(s[p],n,o)}}else if(l){for(c in t){if(c!==i&&(!n||n.call(t,t[c],c,t)!==r)){s[c]=a(t[c],n,o)}}}return s}function s(r,i,a,s){if(r[o]===i&&i[o]===r){return n}r[o]=i;i[o]=r;var u=function(e,n){return e!==null&&e!==t&&e[n]!==t};for(var l in i){if(!u(r,l)&&u(i,l)){a.push("expected has key "+l+'", but missing from actual.')}}for(l in r){if(!u(i,l)&&u(r,l)){a.push('expected missing key "'+l+'", but present in actual.')}}for(l in i){if(l===o){continue}if(!e.equals(r[l],i[l],a,s)){s.push('"'+l+'" was "'+(i[l]?i[l].toString():i[l])+'" in expected, but was "'+(r[l]?r[l].toString():r[l])+'" in actual.')}}if(e.isArray(r)&&e.isArray(i)&&r.length!==i.length){s.push("arrays were not the same length")}delete r[o];delete i[o];return a.length===0&&s.length===0}})(KISSY);(function(e,t){var n=/^[\s\xa0]+|[\s\xa0]+$/g,r=String.prototype.trim,i=/\\?\{([^{}]+)\}/g,o="";e.mix(e,{trim:r?function(e){return e==null?o:r.call(e)}:function(e){return e==null?o:(e+"").replace(n,o)},substitute:function(e,n,r){if(typeof e!=="string"||!n){return e}return e.replace(r||i,function(e,r){if(e.charAt(0)==="\\"){return e.slice(1)}return n[r]===t?o:n[r]})},ucfirst:function(e){e+="";return e.charAt(0).toUpperCase()+e.substring(1)},startsWith:function(e,t){return e.lastIndexOf(t,0)===0},endsWith:function(e,t){var n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}})})(KISSY);(function(e,t){var n={},r=false,i=e.noop,o=Object.prototype,a=o.toString;function s(e,t){return o.hasOwnProperty.call(e,t)}e.mix(e,{type:function(e){return e==null?String(e):n[a.call(e)]||"object"},isNull:function(e){return e===null},isUndefined:function(e){return e===t},isEmptyObject:function(e){for(var n in e){if(n!==t){return r}}return true},isPlainObject:function(n){if(!n||e.type(n)!=="object"||n.nodeType||n.window==n){return r}var i,o;try{if((o=n.constructor)&&!s(n,"constructor")&&!s(o.prototype,"isPrototypeOf")){return r}}catch(a){return r}for(i in n){}return i===t||s(n,i)}});if(""){e.mix(e,{isBoolean:i,isNumber:i,isString:i,isFunction:i,isArray:i,isDate:i,isRegExp:i,isObject:i})}e.each("Boolean Number String Function Date RegExp Object Array".split(" "),function(t,r){n["[object "+t+"]"]=r=t.toLowerCase();e["is"+t]=function(t){return e.type(t)===r}});e.isArray=Array.isArray||e.isArray})(KISSY);(function(e){var t=[];var n=0;function r(){var r=0,i;while(i=t[r++]){if(""){i()}else{try{i()}catch(o){e.log(o.stack||o,"error");setTimeout(function(){throw o},0)}}}if(r>1){t=[]}n=0}e.setImmediate=function(e){t.push(e);if(!n){n=1;i()}};var i;if(typeof setImmediate==="function"){i=function(){setImmediate(r)}}else if(typeof process!=="undefined"&&typeof process.nextTick==="function"){i=function(){process.nextTick(r)}}else if(typeof MessageChannel!=="undefined"){var o=new MessageChannel;o.port1.onmessage=function(){i=a;o.port1.onmessage=r;r()};var a=function(){o.port2.postMessage(0)};i=function(){setTimeout(r,0);a()}}else{i=function(){setTimeout(r,0)}}})(KISSY);(function(e){var t=/^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;function n(e,t){var n=0,r=e.length-1,i=[],o;for(;r>=0;r--){o=e[r];if(o!=="."){if(o===".."){n++}else if(n){n--}else{i[i.length]=o}}}if(t){for(;n--;n){i[i.length]=".."}}i=i.reverse();return i}var r=e.Path={resolve:function(){var t="",r,i,o=arguments,a,s=0;for(i=o.length-1;i>=0&&!s;i--){a=o[i];if(typeof a!=="string"||!a){continue}t=a+"/"+t;s=a.charAt(0)==="/"}r=n(e.filter(t.split("/"),function(e){return!!e}),!s).join("/");return(s?"/":"")+r||"."},normalize:function(t){var r=t.charAt(0)==="/",i=t.slice(-1)==="/";t=n(e.filter(t.split("/"),function(e){return!!e}),!r).join("/");if(!t&&!r){t="."}if(t&&i){t+="/"}return(r?"/":"")+t},join:function(){var t=e.makeArray(arguments);return r.normalize(e.filter(t,function(e){return e&&typeof e==="string"}).join("/"))},relative:function(t,n){t=r.normalize(t);n=r.normalize(n);var i=e.filter(t.split("/"),function(e){return!!e}),o=[],a,s,u=e.filter(n.split("/"),function(e){return!!e}),l=Math.min(i.length,u.length);for(a=0;a<l;a++){if(i[a]!==u[a]){break}}s=a;while(a<i.length){o.push("..");a++}o=o.concat(u.slice(s));o=o.join("/");return o},basename:function(e,n){var r=e.match(t)||[],i;i=r[3]||"";if(n&&i&&i.slice(-1*n.length)===n){i=i.slice(0,-1*n.length)}return i},dirname:function(e){var n=e.match(t)||[],r=n[1]||"",i=n[2]||"";if(!r&&!i){return"."}if(i){i=i.substring(0,i.length-1)}return r+i},extname:function(e){return(e.match(t)||[])[4]||""}}})(KISSY);(function(e,t){var n=e.getLogger("s/uri");var r=/[#\/\?@]/g,i=/[#\?]/g,o=/[#@]/g,a=/#/g,s=new RegExp("^"+"(?:([\\w\\d+.-]+):)?"+"(?://"+"(?:([^/?#@]*)@)?"+"("+"[\\w\\d\\-\\u0100-\\uffff.+%]*"+"|"+"\\[[^\\]]+\\]"+")"+"(?::([0-9]+))?"+")?"+"([^?#]+)?"+"(?:\\?([^#]*))?"+"(?:#(.*))?"+"$"),u=e.Path,l={scheme:1,userInfo:2,hostname:3,port:4,path:5,query:6,fragment:7};function c(t){if(!t._queryMap){t._queryMap=e.unparam(t._query)}}function f(e){this._query=e||""}f.prototype={constructor:f,clone:function(){return new f(this.toString())},reset:function(e){var t=this;t._query=e||"";t._queryMap=null;return t},count:function(){var t=this,n=0,r,i;c(t);r=t._queryMap;for(i in r){if(e.isArray(r[i])){n+=r[i].length}else{n++}}return n},has:function(t){var n=this,r;c(n);r=n._queryMap;if(t){return t in r}else{return!e.isEmptyObject(r)}},get:function(e){var t=this,n;c(t);n=t._queryMap;if(e){return n[e]}else{return n}},keys:function(){var t=this;c(t);return e.keys(t._queryMap)},set:function(t,n){var r=this,i;c(r);i=r._queryMap;if(typeof t==="string"){r._queryMap[t]=n}else{if(t instanceof f){t=t.get()}e.each(t,function(e,t){i[t]=e})}return r},remove:function(e){var t=this;c(t);if(e){delete t._queryMap[e]}else{t._queryMap={}}return t},add:function(e,n){var r=this,i,o;if(typeof e==="string"){c(r);i=r._queryMap;o=i[e];if(o===t){o=n}else{o=[].concat(o).concat(n)}i[e]=o}else{if(e instanceof f){e=e.get()}for(var a in e){r.add(a,e[a])}}return r},toString:function(n){var r=this;c(r);return e.param(r._queryMap,t,t,n)}};function d(e){return e.length===1?"0"+e:e}function p(e,t){return e.toLowerCase()===t.toLowerCase()}function h(e,t){return encodeURI(e).replace(t,function(e){return"%"+d(e.charCodeAt(0).toString(16))})}function m(t){if(t instanceof m){return t.clone()}var r,i=this;e.mix(i,{scheme:"",userInfo:"",hostname:"",port:"",path:"",query:"",fragment:""});r=m.getComponents(t);e.each(r,function(t,r){t=t||"";if(r==="query"){i.query=new f(t)}else{try{t=e.urlDecode(t)}catch(o){n.error(o+"urlDecode error : "+t)}i[r]=t}});return i}m.prototype={constructor:m,clone:function(){var t=new m,n=this;e.each(l,function(e,r){t[r]=n[r]});t.query=t.query.clone();return t},resolve:function(t){if(typeof t==="string"){t=new m(t)}var n=this,r=0,i,o=["scheme","userInfo","hostname","port","path","query","fragment"],a=n.clone();e.each(o,function(n){if(n==="path"){if(r){a[n]=t[n]}else{var o=t.path;if(o){r=1;if(!e.startsWith(o,"/")){if(a.hostname&&!a.path){o="/"+o}else if(a.path){i=a.path.lastIndexOf("/");if(i!==-1){o=a.path.slice(0,i+1)+o}}}a.path=u.normalize(o)}}}else if(n==="query"){if(r||t.query.toString()){a.query=t.query.clone();r=1}}else if(r||t[n]){a[n]=t[n];r=1}});return a},getScheme:function(){return this.scheme},setScheme:function(e){this.scheme=e;return this},getHostname:function(){return this.hostname},setHostname:function(e){this.hostname=e;return this},setUserInfo:function(e){this.userInfo=e;return this},getUserInfo:function(){return this.userInfo},setPort:function(e){this.port=e;return this},getPort:function(){return this.port},setPath:function(e){this.path=e;return this},getPath:function(){return this.path},setQuery:function(t){if(typeof t==="string"){if(e.startsWith(t,"?")){t=t.slice(1)}t=new f(h(t,o))}this.query=t;return this},getQuery:function(){return this.query},getFragment:function(){return this.fragment},setFragment:function(t){var n=this;if(e.startsWith(t,"#")){t=t.slice(1)}n.fragment=t;return n},isSameOriginAs:function(e){var t=this;return p(t.hostname,e.hostname)&&p(t.scheme,e.scheme)&&p(t.port,e.port)},toString:function(t){var n=[],o=this,s,l,c,f,d,p,m;if(s=o.scheme){n.push(h(s,r));n.push(":")}if(l=o.hostname){n.push("//");if(m=o.userInfo){n.push(h(m,r));n.push("@")}n.push(encodeURIComponent(l));if(f=o.port){n.push(":");n.push(f)}}if(c=o.path){if(l&&!e.startsWith(c,"/")){c="/"+c}c=u.normalize(c);n.push(h(c,i))}if(p=o.query.toString.call(o.query,t)){n.push("?");n.push(p)}if(d=o.fragment){n.push("#");n.push(h(d,a))}return n.join("")}};m.Query=f;m.getComponents=function(t){t=t||"";var n=t.match(s)||[],r={};e.each(l,function(e,t){r[t]=n[e]});return r};e.Uri=m})(KISSY);(function(e,t){var n=e.Env.host,r=n.document,i=n.navigator,o=i&&i.userAgent||"";function a(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===0?".":""}))}function s(e,t){var n,r;t[n="trident"]=.1;if((r=e.match(/Trident\/([\d.]*)/))&&r[1]){t[n]=a(r[1])}t.core=n}function u(e){var t,n;if((t=e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(n=t[1]||t[2])){return a(n)}return 0}function l(e){var n="",i,o=n,l=n,c,f=[6,9],d,p,h,m="{{version}}",g="<!--[if IE "+m+"]><"+"s></s><![endif]-->",v=r&&r.createElement("div"),b=[];var y={webkit:t,trident:t,gecko:t,presto:t,chrome:t,safari:t,firefox:t,ie:t,ieMode:t,opera:t,mobile:t,core:t,shell:t,phantomjs:t,os:t,ipad:t,iphone:t,ipod:t,ios:t,android:t,nodejs:t};if(v&&v.getElementsByTagName){v.innerHTML=g.replace(m,"");b=v.getElementsByTagName("s")}if(b.length>0){s(e,y);for(p=f[0],h=f[1];p<=h;p++){v.innerHTML=g.replace(m,p);if(b.length>0){y[l="ie"]=p;break}}if(!y.ie&&(d=u(e))){y[l="ie"]=d}}else{if((c=e.match(/AppleWebKit\/*\s*([\d.]*)/))&&c[1]){y[o="webkit"]=a(c[1]);if((c=e.match(/OPR\/(\d+\.\d+)/))&&c[1]){y[l="opera"]=a(c[1])}else if((c=e.match(/Chrome\/([\d.]*)/))&&c[1]){y[l="chrome"]=a(c[1])}else if((c=e.match(/\/([\d.]*) Safari/))&&c[1]){y[l="safari"]=a(c[1])}if(/ Mobile\//.test(e)&&e.match(/iPad|iPod|iPhone/)){y.mobile="apple";c=e.match(/OS ([^\s]*)/);if(c&&c[1]){y.ios=a(c[1].replace("_","."))}i="ios";c=e.match(/iPad|iPod|iPhone/);if(c&&c[0]){y[c[0].toLowerCase()]=y.ios}}else if(/ Android/i.test(e)){if(/Mobile/.test(e)){i=y.mobile="android"}c=e.match(/Android ([^\s]*);/);if(c&&c[1]){y.android=a(c[1])}}else if(c=e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)){y.mobile=c[0].toLowerCase()}if((c=e.match(/PhantomJS\/([^\s]*)/))&&c[1]){y.phantomjs=a(c[1])}}else{if((c=e.match(/Presto\/([\d.]*)/))&&c[1]){y[o="presto"]=a(c[1]);if((c=e.match(/Opera\/([\d.]*)/))&&c[1]){y[l="opera"]=a(c[1]);if((c=e.match(/Opera\/.* Version\/([\d.]*)/))&&c[1]){y[l]=a(c[1])}if((c=e.match(/Opera Mini[^;]*/))&&c){y.mobile=c[0].toLowerCase()}else if((c=e.match(/Opera Mobi[^;]*/))&&c){y.mobile=c[0]}}}else{if(d=u(e)){y[l="ie"]=d;s(e,y)}else{if(c=e.match(/Gecko/)){y[o="gecko"]=.1;if((c=e.match(/rv:([\d.]*)/))&&c[1]){y[o]=a(c[1]);if(/Mobile|Tablet/.test(e)){y.mobile="firefox"}}if((c=e.match(/Firefox\/([\d.]*)/))&&c[1]){y[l="firefox"]=a(c[1])}}}}}}if(!i){if(/windows|win32/i.test(e)){i="windows"}else if(/macintosh|mac_powerpc/i.test(e)){i="macintosh"}else if(/linux/i.test(e)){i="linux"}else if(/rhino/i.test(e)){i="rhino"}}y.os=i;y.core=y.core||o;y.shell=l;y.ieMode=y.ie&&r.documentMode||y.ie;return y}var c=KISSY.UA=l(o);if(typeof process==="object"){var f,d;if((f=process.versions)&&(d=f.node)){c.os=process.platform;c.nodejs=a(d)}}c.getDescriptorFromUserAgent=l;var p=["webkit","trident","gecko","presto","chrome","safari","firefox","ie","opera"],h=r&&r.documentElement,m="";if(h){e.each(p,function(e){var t=c[e];if(t){m+=" ks-"+e+(parseInt(t)+"");m+=" ks-"+e}});if(e.trim(m)){h.className=e.trim(h.className+m)}}})(KISSY);(function(e,t){var n=e.Env,r=n.host,i=e.UA,o=["","Webkit","Moz","O","ms"],a=r.document||{},s,u,l,c,f,d,p,h=a.documentElement,m,g=true,v=false,b="ontouchstart"in a&&!i.phantomjs,y=i.ieMode;if(h){if(h.querySelector&&y!==8){v=true}m=h.style;e.each(o,function(e){var n=e?e+"Transition":"transition",r=e?e+"Transform":"transform";if(f===t&&n in m){f=e;l=n}if(d===t&&r in m){d=e;c=r}});g="classList"in h;var T=r.navigator||{};s="msPointerEnabled"in T;u="pointerEnabled"in T;if(c){try{var S=a.createElement("p");h.insertBefore(S,h.firstChild);S.style[c]="translate3d(1px,1px,1px)";var _=r.getComputedStyle(S);var E=_.getPropertyValue(c)||_[c];h.removeChild(S);p=E!==t&&E.length>0&&E!=="none"}catch(x){p=true}}}var N={};function C(e){if(N[e]){return N[e]}if(!m||e in m){N[e]={name:e,prefix:""}}else{var t=e.charAt(0).toUpperCase()+e.slice(1),n,r=o.length;while(r--){n=o[r]+t;if(n in m){N[e]={name:n,prefix:o[r]}}}N[e]=N[e]||{name:e,prefix:false}}return N[e]}e.Features={isMsPointerSupported:function(){return s},isPointerSupported:function(){return u},isTouchEventSupported:function(){return b},isTouchGestureSupported:function(){return b||u||s},isDeviceMotionSupported:function(){return!!r.DeviceMotionEvent},isHashChangeSupported:function(){return"onhashchange"in r&&(!y||y>7)},isTransitionSupported:function(){return f!==t},isTransformSupported:function(){return d!==t},isTransform3dSupported:function(){return p},isClassListSupported:function(){return g},isQuerySelectorSupported:function(){return!e.config("dom/selector")&&v},isIELessThan:function(e){return!!(y&&y<e)},getTransitionPrefix:function(){return f},getTransformPrefix:function(){return d},getTransitionProperty:function(){return l},getTransformProperty:function(){return c},getVendorCssPropPrefix:function(e){return C(e).prefix},getVendorCssPropName:function(e){return C(e).name}}})(KISSY);(function(e,t){function n(t){if(t){return function(){var n=[].slice.call(arguments);n.unshift(e);return t.apply(e,n)}}}e.mix(e,t);e.config=function(e,n){t.config(e,n)};e.use=function(r,i,o){if(typeof i==="object"){o=i.error;i=i.success}t.use(r,n(i),n(o));return e};e.require=function(e,n){if(e){var r=t.getModule(e);return r?r.exports:{}}};wrapStringFactory=function(t){if(e.isString(t)){return function(){return t}}else{return t}};e.add=function(r,i,o){var a=arguments.length;if(a===3&&e.isArray(i)){t.add(r,i,n(wrapStringFactory(o)))}else if(e.isFunction(i)){t.add(r,n(wrapStringFactory(i)),o)}else if(a===1){t.add(n(r))}return e};t.config({debug:false,base:"//g.alicdn.com/mui/kissy/4.0.10/"});t.config({packages:{core:{filter:"min"}}});window.S=e})(KISSY,feloader);(function(e,t){var n=e.getLogger("s/web");var r=e.Env.host,i=e.UA,o=r.document,a=o&&o.documentElement,s=r.location,u="",l=0,c=[],f=500,d=40,p=/^#?([\w-]+)$/,h=/\S/,m=!!(o&&o.addEventListener),g="DOMContentLoaded",v="readystatechange",b="load",y="complete",T=m?function(e,t,n){e.addEventListener(t,n,false)}:function(e,t,n){e.attachEvent("on"+t,n)},S=m?function(e,t,n){e.removeEventListener(t,n,false)}:function(e,t,n){e.detachEvent("on"+t,n)};e.mix(e,{isWindow:function(e){return e!=null&&e==e.window},parseXML:function(i){if(i.documentElement){return i}var o;try{if(r.DOMParser){o=(new DOMParser).parseFromString(i,"text/xml")}else{o=new ActiveXObject("Microsoft.XMLDOM");o.async=false;o.loadXML(i)}}catch(a){n.error("parseXML error :");n.error(a);o=t}if(!o||!o.documentElement||o.getElementsByTagName("parsererror").length){e.error("Invalid XML: "+i)}return o},globalEval:function(e){if(e&&h.test(e)){if(r.execScript){r.execScript(e)}else{(function(e){r.eval.call(r,e)})(e)}}},ready:function(t){if(l){try{t(e)}catch(n){e.log(n.stack||n,"error");setTimeout(function(){throw n},0)}}else{c.push(t)}return this},available:function(t,n){t=(t+u).match(p)[1];var r=1;var i=e.later(function(){if(++r>f){i.cancel();return}var e=o.getElementById(t);if(e){n(e);i.cancel()}},d,true)}});function _(){if(l){return}if(o&&!i.nodejs){S(r,b,_)}l=1;for(var t=0;t<c.length;t++){try{c[t](e)}catch(n){e.log(n.stack||n,"error");setTimeout(function(){throw n},0)}}}function E(){if(!o||o.readyState===y){_();return}T(r,b,_);if(m){var e=function(){S(o,g,e);_()};T(o,g,e)}else{var t=function(){if(o.readyState===y){S(o,v,t);_()}};T(o,v,t);var n,i=a&&a.doScroll;try{n=r.frameElement===null}catch(s){n=false}if(i&&n){var u=function(){try{i("left");_()}catch(e){setTimeout(u,d)}};u()}}}if(s&&(s.search||u).indexOf("ks-debug")!==-1){e.Config.debug=true}E();if(i.ie){try{o.execCommand("BackgroundImageCache",false,true)}catch(x){}}})(KISSY,undefined);(function(e){e.config({modules:{core:{alias:["dom","event","io","anim","base","node","json","ua","cookie"]},ajax:{alias:"io"},"rich-base":{alias:"base"}}});if(typeof location!=="undefined"){var t=e.startsWith(location.href,"https");var n=t?"https://s.tbcdn.cn/s/kissy/":"http://a.tbcdn.cn/s/kissy/";e.config({packages:{gallery:{base:n},kg:{base:"//g.alicdn.com/"},mobile:{base:n}}})}})(KISSY);(function(e,t,n){e({"anim/transition?":{alias:KISSY.Features.isTransitionSupported()?"anim/transition":""}});e({anim:{requires:["anim/base","anim/timer","anim/transition?"]}});e({"anim/base":{requires:["dom","promise"]}});e({"anim/timer":{requires:["dom","anim/base"]}});e({"anim/transition":{requires:["dom","anim/base"]}});e({attribute:{requires:["event/custom"]}});e({base:{requires:["attribute"]}});e({button:{requires:["node","component/control"]}});e({color:{requires:["attribute"]}});e({combobox:{requires:["node","component/control","menu","attribute","io"]}});e({"component/container":{requires:["component/control","component/manager"]}});e({"component/control":{requires:["node","base","promise","component/manager","xtemplate/runtime"]}});e({"component/extension/align":{requires:["node"]}});e({"component/extension/content-render":{requires:["component/extension/content-xtpl"]}});e({"component/extension/delegate-children":{requires:["node","component/manager"]}});e({"component/plugin/drag":{requires:["dd"]}});e({"component/plugin/resize":{requires:["resizable"]}});e({"date/format":{requires:["date/gregorian","i18n!date"]}});e({"date/gregorian":{requires:["i18n!date"]}});e({"date/picker":{requires:["node","date/gregorian","i18n!date/picker","component/control","date/format","date/picker-xtpl"]}});e({"date/popup-picker":{requires:["date/picker-xtpl","date/picker","component/extension/shim","component/extension/align"]}});e({dd:{requires:["node","base"]}});e({"dd/plugin/constrain":{requires:["node","base"]}});e({"dd/plugin/proxy":{requires:["node","dd","base"]}});e({"dd/plugin/scroll":{requires:["node","dd","base"]}});e({"dom/basic":{alias:["dom/base",t.isIELessThan(9)?"dom/ie":"",t.isClassListSupported()?"":"dom/class-list"]},dom:{alias:["dom/basic",!t.isQuerySelectorSupported()?"dom/selector":""]}});e({"dom/base":{requires:["ua"]}});e({"dom/class-list":{requires:["dom/base"]}});e({"dom/ie":{requires:["dom/base"]}});e({"dom/selector":{requires:["dom/basic"]}});e({editor:{requires:["node","html-parser","component/control","ua"]}});e({event:{requires:["event/dom","event/custom"]}});e({"event/custom":{requires:["event/base"]}});e({"event/dom":{alias:["event/dom/base",t.isTouchGestureSupported()?"event/dom/touch":"",t.isDeviceMotionSupported()?"event/dom/shake":"",t.isHashChangeSupported()?"":"event/dom/hashchange",t.isIELessThan(9)?"event/dom/ie":"",n.ie?"":"event/dom/focusin"]}});e({"event/dom/base":{requires:["event/base","dom"]}});e({"event/dom/focusin":{requires:["event/dom/base"]}});e({"event/dom/hashchange":{requires:["event/dom/base","dom"]}});e({"event/dom/ie":{requires:["event/dom/base","dom"]}});e({"event/dom/shake":{requires:["event/dom/base"]}});e({"event/dom/touch":{requires:["event/dom/base","dom"]}});e({"filter-menu":{requires:["menu","component/extension/content-xtpl","component/extension/content-render"]}});e({io:{requires:["dom","event/custom","promise","event/dom"]}});e({kison:{requires:["base"]}});e({menu:{requires:["node","component/container","component/extension/delegate-children","component/control","component/extension/content-render","component/extension/content-xtpl","component/extension/align","component/extension/shim"]}});e({menubutton:{requires:["node","button","component/extension/content-xtpl","component/extension/content-render","menu"]}});e({mvc:{requires:["io","json","attribute","node"]}});e({node:{requires:["dom","event/dom","anim"]}});e({overlay:{requires:["component/container","component/extension/shim","component/extension/align","node","component/extension/content-xtpl","component/extension/content-render"]}});e({resizable:{requires:["node","base","dd"]}});e({"resizable/plugin/proxy":{requires:["node","base"]}});e({"scroll-view":{alias:t.isTouchGestureSupported()?"scroll-view/drag":"scroll-view/base"}});e({"scroll-view/base":{requires:["node","anim","component/container","component/extension/content-render"]}});e({"scroll-view/drag":{requires:["scroll-view/base","node","anim"]}});e({"scroll-view/plugin/pull-to-refresh":{requires:["base"]}});e({"scroll-view/plugin/scrollbar":{requires:["base","node","component/control"]}});e({separator:{requires:["component/control"]}});e({"split-button":{requires:["component/container","button","menubutton"]}});e({stylesheet:{requires:["dom"]}});e({swf:{requires:["dom","json","attribute"]}});e({tabs:{requires:["component/container","toolbar","button"]}});e({toolbar:{requires:["component/container","component/extension/delegate-children","node"]}});e({tree:{requires:["node","component/container","component/extension/content-xtpl","component/extension/content-render","component/extension/delegate-children"]}});e({xtemplate:{requires:["xtemplate/runtime","xtemplate/compiler"]}});e({"xtemplate/compiler":{requires:["xtemplate/runtime"]}});e({"xtemplate/runtime":{requires:["path"]}})})(function(e){KISSY.config("modules",e)},KISSY.Features,KISSY.UA);(function(e){e.add("ua",function(){return e.UA});e.add("uri",function(){return e.Uri});e.add("path",function(){return e.Path});var t=e.UA,n=e.Env,r=n.host,i=(t.nodejs&&typeof global==="object"?global:r).JSON;if(t.ieMode<9){i=null}if(i){e.add("json",function(){e.JSON=i;return i});e.parseJson=function(e){return i.parse(e)}}else{var o=/^[\],:{}\s]*$/,a=/(?:^|:|,)(?:\s*\[)+/g,s=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,u=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;e.parseJson=function(t){if(t===null){return t}if(typeof t==="string"){t=e.trim(t);if(t){if(o.test(t.replace(s,"@").replace(u,"]").replace(a,""))){return new Function("return "+t)()}}}return e.error("Invalid Json: "+t)}}if(e.UA.nodejs){e.KISSY=e;module.exports=e}})(KISSY);if(typeof define==="function"&&define.amd){
define("mui/kissy/seed-min",[],function(){return KISSY})}