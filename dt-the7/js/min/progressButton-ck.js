!function(t){"use strict";function e(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);return t}function s(t,s){this.button=t,this.options=e({},this.options),e(this.options,s),this._init()}Modernizr.addTest("csstransformspreserve3d",function(){var e=Modernizr.prefixed("transformStyle"),s="preserve-3d",n;return e?(e=e.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),Modernizr.testStyles("#modernizr{"+e+":"+s+";}",function(s,i){n=t.getComputedStyle?getComputedStyle(s,null).getPropertyValue(e):""}),n===s):!1});var n={transitions:Modernizr.csstransitions,transforms3d:Modernizr.csstransforms3d&&Modernizr.csstransformspreserve3d},i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},r=i[Modernizr.prefixed("transition")];s.prototype.options={statusTime:1500},s.prototype._init=function(){this._validate(),this._create(),this._initEvents()},s.prototype._validate=function(){null===this.button.getAttribute("data-style")&&this.button.setAttribute("data-style","fill"),null===this.button.getAttribute("data-vertical")&&null===this.button.getAttribute("data-horizontal")&&this.button.setAttribute("data-horizontal",""),n.transforms3d||null===this.button.getAttribute("data-perspective")||(this.button.removeAttribute("data-perspective"),this.button.setAttribute("data-style","fill"),this.button.removeAttribute("data-vertical"),this.button.setAttribute("data-horizontal",""))},s.prototype._create=function(){var t=document.createElement("span");t.className="content",t.innerHTML=this.button.innerHTML;var e=document.createElement("span");e.className="progress";var s=document.createElement("span");if(s.className="progress-inner",e.appendChild(s),this.button.innerHTML="",null!==this.button.getAttribute("data-perspective")){var n=document.createElement("span");n.className="progress-wrap",n.appendChild(t),n.appendChild(e),this.button.appendChild(n)}else this.button.appendChild(t),this.button.appendChild(e);this.progress=s,null!==this.button.getAttribute("data-horizontal")?this.progressProp="width":null!==this.button.getAttribute("data-vertical")&&(this.progressProp="height"),this._enable()},s.prototype._setProgress=function(t){this.progress.style[this.progressProp]=100*t+"%"},s.prototype._initEvents=function(){var t=this;this.button.addEventListener("click",function(){t.button.setAttribute("disabled",""),classie.remove(t.progress,"notransition"),classie.add(this,"state-loading"),setTimeout(function(){if("function"==typeof t.options.callback)t.options.callback(t);else{t._setProgress(1);var e=function(s){n.transitions&&s.propertyName!==t.progressProp||(this.removeEventListener(r,e),t._stop())};n.transitions?t.progress.addEventListener(r,e):e.call()}},"fill"===t.button.getAttribute("data-style")||"top-line"===t.button.getAttribute("data-style")||"lateral-lines"===t.button.getAttribute("data-style")?0:200)})},s.prototype._stop=function(t){var e=this;setTimeout(function(){e.progress.style.opacity=0;var s=function(t){n.transitions&&"opacity"!==t.propertyName||(this.removeEventListener(r,s),classie.add(e.progress,"notransition"),e.progress.style[e.progressProp]="0%",e.progress.style.opacity=1)};if(n.transitions?e.progress.addEventListener(r,s):s.call(),"number"==typeof t){var i=t>=0?"state-success":"state-error";classie.add(e.button,i),setTimeout(function(){classie.remove(e.button,i),e._enable()},e.options.statusTime)}else e._enable();classie.remove(e.button,"state-loading")},100)},s.prototype._enable=function(){this.button.removeAttribute("disabled")},t.ProgressButton=s}(window);