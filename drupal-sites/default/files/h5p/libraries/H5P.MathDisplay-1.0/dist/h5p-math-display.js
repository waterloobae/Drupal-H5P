(()=>{var t={453:()=>{MathJax={options:{enableMenu:!1,ignoreHtmlClass:"ckeditor",processHtmlClass:"tex2jax_process",renderActions:{enrich:{"[+]":[function(t){t.enrich(!0)},function(t,e){t.enrich(e,!0)}]}},menuOptions:{settings:{collapsible:!1,inTabOrder:!0,explorer:!1}}},loader:{load:["a11y/semantic-enrich"]},tex:{packages:{"[+]":["fix-unicode"]}},startup:{pageReady:()=>MathJax.startup.defaultPageReady().then((()=>{try{H5P.instances[0].trigger("resize")}catch(t){}})),ready(){const{CHTMLFontData:t}=MathJax._.output.chtml.FontData,e=t.prototype.addFontURLs,{Configuration:a}=MathJax._.input.tex.Configuration,{MapHandler:n}=MathJax._.input.tex.MapHandler,r=MathJax._.input.tex.NodeUtil.default,{getRange:s}=MathJax._.core.MmlTree.OperatorDictionary;t.prototype.addFontURLs=(t,a,n)=>{n=(n=n.split("output"))[0]+"fonts";for(const e of Object.keys(a)){const r={...a[e]};r.src=r.src.replace(/%%URL%%/,n),t[e]=r}!1!==n&&e.call(this,t,a,n)},a.create("fix-unicode",{fallback:{character:function(t,e){let a=t.stack.env.font?{mathvariant:t.stack.env.font}:{};const o=n.getMap("remap").lookup(e),i=s(e),c=i?.[3]||"mo";let d=t.create("token",c,a,o?o.char:e);i?.[4]&&d.attributes.set("mathvariant",i[4]),"mo"===c&&(r.setProperty(d,"fixStretchy",!0),t.configuration.addNode("fixStretchy",d)),t.Push(d)}}}),MathJax.startup.defaultReady(),MathJax.startup.document.inputJax[0].preFilters.add((({math:t})=>{t.math="\\displaylines{"+t.math+"}"}))}}}},637:()=>{H5P.MathDisplay=function(){"use strict";function t(){var t=this;this.isReady=!1,this.mathjax=void 0,this.observer=void 0,this.updating=null,this.mathHasBeenAdded=!1,H5P.EventDispatcher.call(t),H5P.jQuery(document).ready((function(){t.settings=H5P.getLibraryConfig("H5P.MathDisplay"),t.settings.observers&&0!==t.settings.observers.length||(t.settings=t.extend({observers:[{name:"mutationObserver",params:{cooldown:500}},{name:"domChangedListener"}]},t.settings)),void 0!==t.settings.parent&&console.error("Beep bop! This was disabled since no one knew what it was actually used for @ H5P.MathDisplay"),t.container=t.settings.container||document.getElementsByClassName("h5p-container")[0]||document,function(e){e&&e.config&&(MathJax=t.extend(MathJax,e.config));var a=document.createElement("script");a.type="text/javascript",a.src=H5P.getLibraryPath("H5P.MathDisplay-1.0")+"/dist/mathjax.js",a.async=!0,a.onload=function(){t.mathjax=MathJax,t.settings.observers.forEach((function(e){switch(e.name){case"mutationObserver":t.startMutationObserver(e.params);break;case"domChangedListener":t.startDOMChangedListener(e.params);break;case"interval":t.startIntervalUpdater(e.params)}})),t.isReady=!0},document.body.appendChild(a)}(t.settings.renderer&&t.settings.renderer.mathjax?t.settings.renderer.mathjax:null),t.update()}))}t.prototype=Object.create(H5P.EventDispatcher.prototype),t.prototype.constructor=t,t.prototype.startDOMChangedListener=function(){var t=this;return H5P.externalDispatcher.on("domChanged",(function(e){t.update()})),!0},t.prototype.startIntervalUpdater=function(t){var e=this;return!(!t||!t.time)&&(function t(a){setTimeout((function(){e.update(),t(a)}),a)}(t.time),!0)},t.prototype.startMutationObserver=function(t){var a=this;return!!this.container&&(this.mutationCoolingPeriod=t.cooldown,this.observer=new MutationObserver((function(t){e(t)&&(a.mathHasBeenAdded=!0),t.filter((function(t){return t.target.textContent.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)})).forEach((function(){a.update()}))})),this.observer.observe(this.container,{childList:!0,subtree:!0}),!0)},t.prototype.update=function(){const t=this;let e=Promise.resolve();if(!this.isReady)return;const n=function(){return e=e.then((()=>{t.mathjax.typesetClear(),t.mathjax.typesetPromise().then((()=>{t.mathHasBeenAdded&&(t.mathHasBeenAdded=!1,a())}))})).catch((t=>console.log("Typeset failed: "+t.message))),e};this.observer?this.updating?this.missedUpdates=!0:(n(),this.updating=setTimeout((function(){t.updating=null,t.missedUpdates&&(t.missedUpdates=!1,n())}),this.mutationCoolingPeriod)):n()},t.prototype.extend=function(){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])arguments[t].hasOwnProperty(e)&&("object"==typeof arguments[0][e]&&"object"==typeof arguments[t][e]?this.extend(arguments[0][e],arguments[t][e]):arguments[0][e]=arguments[t][e]);return arguments[0]};const e=function(t){for(let e=0;e<t.length;e++)for(let a=0;a<t[e].addedNodes.length;a++){const n=t[e].addedNodes[a];if(n instanceof HTMLElement&&(n.classList.contains("MathJax")||n.classList.contains("MathJax_Display")))return!0}return!1},a=function(){try{H5P.instances[0].trigger("resize")}catch(t){}};return t}(),new H5P.MathDisplay}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a(453),H5P=H5P||{},H5P.MathDisplay=a(637).default})();