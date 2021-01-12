module.exports=function(r){var n={};function e(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return r[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var a in r)e.d(t,a,function(n){return r[n]}.bind(null,a));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=7)}([function(r,n){r.exports=flarum.core.compat.app},function(r,n){r.exports=flarum.core.compat.extend},function(r,n){r.exports=flarum.core.compat["components/Select"]},function(r,n){r.exports=flarum.core.compat["tags/components/EditTagModal"]},function(r,n){r.exports=flarum.core.compat["components/Button"]},function(r,n,e){(function(r){var e;e=function(){var r=null,n={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var e=[],t=function(u){if(void 0!==(u=u||{}).seed&&null!==u.seed&&u.seed===parseInt(u.seed,10))r=u.seed;else if("string"==typeof u.seed)r=function(r){for(var n=0,e=0;e!==r.length&&!(n>=Number.MAX_SAFE_INTEGER);e++)n+=r.charCodeAt(e);return n}(u.seed);else{if(void 0!==u.seed&&null!==u.seed)throw new TypeError("The seed value must be an integer or string");r=null}var c,f;if(null!==u.count&&void 0!==u.count){for(var g=u.count,d=[],h=0;h<u.count;h++)e.push(!1);for(u.count=null;g>d.length;){var m=t(u);null!==r&&(u.seed=r),d.push(m)}return u.count=g,d}return function(r,n){switch(n.format){case"hsvArray":return r;case"hslArray":return s(r);case"hsl":var e=s(r);return"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)";case"hsla":var t=s(r),a=n.alpha||Math.random();return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+a+")";case"rgbArray":return i(r);case"rgb":return"rgb("+i(r).join(", ")+")";case"rgba":var o=i(r);return a=n.alpha||Math.random(),"rgba("+o.join(", ")+", "+a+")";default:return function(r){var n=i(r);function e(r){var n=r.toString(16);return 1==n.length?"0"+n:n}return"#"+e(n[0])+e(n[1])+e(n[2])}(r)}}([c=function(r){if(e.length>0){var t=o(f=function(r){if(isNaN(r)){if("string"==typeof r)if(n[r]){var e=n[r];if(e.hueRange)return e.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return a(l(r)[0]).hueRange}else{var t=parseInt(r);if(t<360&&t>0)return a(r).hueRange}return[0,360]}(r.hue)),u=(f[1]-f[0])/e.length,i=parseInt((t-f[0])/u);!0===e[i]?i=(i+2)%e.length:e[i]=!0;var s=(f[0]+i*u)%359,c=(f[0]+(i+1)*u)%359;return(t=o(f=[s,c]))<0&&(t=360+t),t}var f=function(r){if("number"==typeof parseInt(r)){var e=parseInt(r);if(e<360&&e>0)return[e,e]}if("string"==typeof r)if(n[r]){var t=n[r];if(t.hueRange)return t.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=l(r)[0];return[a,a]}return[0,360]}(r.hue);return(t=o(f))<0&&(t=360+t),t}(u),f=function(r,n){if("monochrome"===n.hue)return 0;if("random"===n.luminosity)return o([0,100]);var e=function(r){return a(r).saturationRange}(r),t=e[0],u=e[1];switch(n.luminosity){case"bright":t=55;break;case"dark":t=u-10;break;case"light":u=55}return o([t,u])}(c,u),function(r,n,e){var t=function(r,n){for(var e=a(r).lowerBounds,t=0;t<e.length-1;t++){var o=e[t][0],u=e[t][1],i=e[t+1][0],l=e[t+1][1];if(n>=o&&n<=i){var s=(l-u)/(i-o);return s*n+(u-s*o)}}return 0}(r,n),u=100;switch(e.luminosity){case"dark":u=t+20;break;case"light":t=(u+t)/2;break;case"random":t=0,u=100}return o([t,u])}(c,f,u)],u)};function a(r){for(var e in r>=334&&r<=360&&(r-=360),n){var t=n[e];if(t.hueRange&&r>=t.hueRange[0]&&r<=t.hueRange[1])return n[e]}return"Color not found"}function o(n){if(null===r){var e=Math.random();return e+=.618033988749895,e%=1,Math.floor(n[0]+e*(n[1]+1-n[0]))}var t=n[1]||1,a=n[0]||0,o=(r=(9301*r+49297)%233280)/233280;return Math.floor(a+o*(t-a))}function u(r,e,t){var a=t[0][0],o=t[t.length-1][0],u=t[t.length-1][1],i=t[0][1];n[r]={hueRange:e,lowerBounds:t,saturationRange:[a,o],brightnessRange:[u,i]}}function i(r){var n=r[0];0===n&&(n=1),360===n&&(n=359),n/=360;var e=r[1]/100,t=r[2]/100,a=Math.floor(6*n),o=6*n-a,u=t*(1-e),i=t*(1-o*e),l=t*(1-(1-o)*e),s=256,c=256,f=256;switch(a){case 0:s=t,c=l,f=u;break;case 1:s=i,c=t,f=u;break;case 2:s=u,c=t,f=l;break;case 3:s=u,c=i,f=t;break;case 4:s=l,c=u,f=t;break;case 5:s=t,c=u,f=i}return[Math.floor(255*s),Math.floor(255*c),Math.floor(255*f)]}function l(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var n=parseInt(r.substr(0,2),16)/255,e=parseInt(r.substr(2,2),16)/255,t=parseInt(r.substr(4,2),16)/255,a=Math.max(n,e,t),o=a-Math.min(n,e,t),u=a?o/a:0;switch(a){case n:return[(e-t)/o%6*60||0,u,a];case e:return[60*((t-n)/o+2)||0,u,a];case t:return[60*((n-e)/o+4)||0,u,a]}}function s(r){var n=r[0],e=r[1]/100,t=r[2]/100,a=(2-e)*t;return[n,Math.round(e*t/(a<1?a:2-a)*1e4)/100,a/2*100]}return t}(),r&&r.exports&&(n=r.exports=e),n.randomColor=e}).call(this,e(6)(r))},function(r,n){r.exports=function(r){return r.webpackPolyfill||(r.deprecate=function(){},r.paths=[],r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),r.webpackPolyfill=1),r}},function(r,n,e){"use strict";e.r(n);var t=e(0),a=e.n(t),o=e(1),u=e(4),i=e.n(u),l=e(2),s=e.n(l),c=e(3),f=e.n(c),g=e(5),d=e.n(g);a.a.initializers.add("nearata/flarum-ext-tags-color-generator",(function(){Object(o.extend)(f.a.prototype,"oninit",(function(){this.luminosity="random",this.hue="random"})),Object(o.extend)(f.a.prototype,"fields",(function(r){var n=this;r.add("colorLuminosity",m(".Form-group",[m("label",a.a.translator.trans("nearata-tags-color-generator.admin.color_luminosity_label")),m(s.a,{options:{random:a.a.translator.trans("nearata-tags-color-generator.admin.color_luminosity_options.random"),light:a.a.translator.trans("nearata-tags-color-generator.admin.color_luminosity_options.light"),bright:a.a.translator.trans("nearata-tags-color-generator.admin.color_luminosity_options.bright"),dark:a.a.translator.trans("nearata-tags-color-generator.admin.color_luminosity_options.dark")},value:this.luminosity,onchange:function(r){return n.luminosity=r}})]),20),r.add("colorHue",m(".Form-group",[m("label",a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_label")),m(s.a,{options:{random:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.random"),red:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.red"),orange:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.orange"),yellow:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.yellow"),green:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.green"),blue:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.blue"),purple:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.purple"),pink:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.pink"),monochrome:a.a.translator.trans("nearata-tags-color-generator.admin.color_hue_options.monochrome")},value:this.hue,onchange:function(r){return n.hue=r}})]),20),r.add("generateRandomColor",m(".Form-group",[m(i.a,{class:"Button Button--primary Button--block",onclick:function(){return n.color(d()({luminosity:n.luminosity,hue:n.hue}))}},a.a.translator.trans("nearata-tags-color-generator.admin.generate_color_button"))]),20)}))}))}]);
//# sourceMappingURL=admin.js.map