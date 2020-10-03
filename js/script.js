// смуга навігації
const navigation = document.querySelector('#navigation');
const a = document.querySelectorAll('#levus-menu.desktop ul a');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
        navigation.classList.add('header-small');
        a.forEach(item => item.classList.add('link-small'));
    } else {
        navigation.removeAttribute('class');
        a.forEach(item => item.removeAttribute('class'));
    }
});

// levus-onslide
"use strict";function _instanceof(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function _classCallCheck(t,e){if(!_instanceof(t,e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}var LevusOnslide=function(){function t(e){_classCallCheck(this,t),this.slider=document.querySelector(e),this.slides=this.slider.querySelectorAll("article"),this.left=this.slider.querySelector("#levus-left"),this.right=this.slider.querySelector("#levus-right"),this.length=this.slides.length-1,this.first=this.slides[0],this.cnt=0}return _createClass(t,[{key:"click",value:function(){var t=this;this.left.addEventListener("click",function(){setTimeout(function(){t.slides.forEach(function(t){return t.removeAttribute("class")}),t.cnt<t.length?t.cnt++:t.cnt=0,t.slides[t.cnt].classList.add("show")},500)}),this.right.addEventListener("click",function(){setTimeout(function(){t.slides.forEach(function(t){return t.removeAttribute("class")}),0===t.cnt?t.cnt=t.length:t.cnt--,t.slides[t.cnt].classList.add("show")},500)})}},{key:"arrow",value:function(){var t=this;this.left.classList.add("hide"),this.right.classList.add("hide"),this.slider.addEventListener("mouseover",function(){t.left.removeAttribute("class"),t.right.removeAttribute("class")}),this.slider.addEventListener("mouseout",function(){t.left.classList.add("hide"),t.right.classList.add("hide")})}},{key:"autoScroll",value:function(){var t=this;setInterval(function(){t.slides.forEach(function(t){return t.removeAttribute("class")}),t.cnt<t.length?t.cnt++:t.cnt=0,t.slides[t.cnt].classList.add("show")},8e3)}},{key:"init",value:function(){this.click(),this.first.classList.add("show"),this.arrow(),this.autoScroll()}}]),t}();

// init slider
document.querySelector("#levus-slider") && new LevusOnslide("#levus-slider").init();

// levus-animate
{
    const height = document.documentElement.clientHeight; 
    const elements = document.querySelectorAll(".levus-animate");
    elements.forEach(e => e.parentElement.classList.add("hidden")), window.addEventListener("scroll", () => elements.forEach(e => e.getBoundingClientRect().top < height && e.classList.add("show")));
}

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",s="".concat(i,"styles"),r="".concat(i,"cursor-grabbing"),c="".concat(i,"full-dimension"),a="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),p="".concat(i,"slide-btn"),f="".concat(p,"-container"),h="".concat(i,"fade-in"),m="".concat(i,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(i,"opacity-"),x="".concat(b,"1"),y="".concat(i,"source");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"object"===("undefined"==typeof document?"undefined":S(document))&&((o=document.createElement("style")).className=s,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;margin:auto;opacity:0;z-index:2;backface-visibility:hidden;transform:translateZ(0);transition:opacity .3s}")),document.head.appendChild(o));function w(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:s(e)},this.handleReceivedSourceTypeForUrl=function(e,n){void 0!==i[n]&&(o--,i[n]=e,0===o&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,i),localStorage.setItem("fslightbox-types",JSON.stringify(t))))};var s=function(e){o++,i[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=s)}function L(e,t,n,o){var i=e.data,s=e.elements.sources,r=n/o,c=0;this.styleSize=function(){if((c=i.maxSourceWidth/r)<i.maxSourceHeight)return n<i.maxSourceWidth&&(c=o),a();c=o>i.maxSourceHeight?i.maxSourceHeight:o,a()};var a=function(){s[t].style.width=c*r+"px",s[t].style.height=c+"px"}}function C(e,t,n,o){var i=this,s=e.collections.sourcesStylers,r=e.elements,c=r.sources,a=r.sourcesInners,l=r.sourcesOuters,u=e.resolve;this.runNormalLoadActions=function(){c[t].classList.add(x),a[t].classList.add(g),l[t].removeChild(l[t].firstChild)},this.runInitialLoadActions=function(){i.runNormalLoadActions();var e=u(L,[t,n,o]);e.styleSize(),s[t]=e}}function F(e,t){var n,o=this,i=e.elements.sources,s=e.props,r=e.resolve;this.handleImageLoad=function(e){var t=e.target,n=t.width,i=t.height;o.handleImageLoad=c(n,i)},this.handleVideoLoad=function(e){var t=e.target,i=t.videoWidth,s=t.videoHeight;n=!0,o.handleVideoLoad=c(i,s)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;s.maxYoutubeDimensions&&(e=s.maxYoutubeDimensions.width,t=s.maxYoutubeDimensions.height),o.handleYoutubeLoad=c(e,t)},this.handleCustomLoad=function(){setTimeout((function(){o.handleCustomLoad=c(i[t].offsetWidth,i[t].offsetHeight)}))};var c=function(e,n){var o=r(C,[t,e,n]);return o.runInitialLoadActions(),o.runNormalLoadActions}}function I(e,t,n){var o=e.elements.sources,i=e.props.customClasses,s=i[t]?i[t]:"";o[t].className=n+" "+s}function E(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function T(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,i=o.sources,s=o.sourcesInners,r=e.props.sources;i[t]=document.createElement("img"),I(e,t,y),i[t].src=r[t],i[t].onload=n[t].handleImageLoad,E(e,t),s[t].appendChild(i[t])}function A(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,i=o.sources,s=o.sourcesInners,r=e.props,c=r.sources,a=r.videosPosters;i[t]=document.createElement("video"),I(e,t,y),i[t].src=c[t],i[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},i[t].controls=!0,E(e,t),a[t]&&(i[t].poster=a[t]);var l=document.createElement("source");l.src=c[t],i[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),s[t].appendChild(i[t])}function O(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,s=o.sources,r=o.sourcesInners,c=e.props.sources;s[t]=document.createElement("iframe"),I(e,t,"".concat(y," ").concat(i,"youtube-iframe")),s[t].src="https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]),s[t].allowFullscreen=!0,E(e,t),r[t].appendChild(s[t]),n[t].handleYoutubeLoad()}function N(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,i=o.sources,s=o.sourcesInners,r=e.props.sources;i[t]=r[t],I(e,t,"".concat(i[t].className," ").concat(y)),s[t].appendChild(i[t]),n[t].handleCustomLoad()}function z(e,t){var n=e.elements,o=n.sources,s=n.sourcesInners,r=n.sourcesOuters;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(a),o[t].innerHTML="Invalid source",s[t].classList.add(g),s[t].appendChild(o[t]),r[t].removeChild(r[t].firstChild)}function k(e){var t=e.collections,n=t.sourcesLoadsHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,s=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,r){var c;switch("invalid"!==t&&(n[r]=s(F,[r])),t){case"image":c=T;break;case"video":c=A;break;case"youtube":c=O;break;case"custom":c=N;break;default:c=z}o[r]=function(){return c(e,r)},i.displaySourcesWhichShouldBeDisplayed()}}function H(){var e,t,n,o,i,s={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};this.setUrlToCheck=function(t){e=t},this.getSourceType=function(t){if(s.isUrlYoutubeOne(e))return t("youtube");n=t,(o=new XMLHttpRequest).open("GET",e,!0),o.onreadystatechange=r,o.send()};var r=function(){if(4===o.readyState&&0===o.status&&!i)return c();if(2===o.readyState){if(200!==o.status&&206!==o.status)return i=!0,c();i=!0,l(s.getTypeFromResponseContentType(o.getResponseHeader("content-type"))),a()}},c=function(){t="invalid",a()},a=function(){o.abort(),n(t)},l=function(e){switch(e){case"image":t="image";break;case"video":t="video";break;default:t="invalid"}}}function R(e,t,n){var o=e.props,i=o.types,s=o.type,r=o.sources,c=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:s&&(t=s),t},this.retrieveTypeWithXhrForIndex=function(e){var o=c(H);o.setUrlToCheck(r[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,r[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.elements,o=n.sourcesOutersWrapper,i=n.sourcesOuters;i[t]=document.createElement("div"),i[t].className="".concat(d," ").concat(c," ").concat(a),i[t].innerHTML='<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>',o.appendChild(i[t]),function(e,t){var n=e.elements,o=n.sourcesOuters,i=n.sourcesInners;i[t]=document.createElement("div"),o[t].appendChild(i[t])}(e,t)}function W(e,t,n,o){var s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"width",t),s.setAttributeNS(null,"height",t),s.setAttributeNS(null,"viewBox",n);var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttributeNS(null,"class","".concat(i,"svg-path")),r.setAttributeNS(null,"d",o),s.appendChild(r),e.appendChild(s),s}function M(e,t){var n=document.createElement("div");return n.className="".concat(i,"toolbar-button ").concat(a),n.title=t,e.appendChild(n),n}function P(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.core.fullscreenToggler,i=e.data,s="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",r=M(t);r.title="Enter fullscreen";var c=W(r,"20px","0 0 18 18",s);n.enterFullscreen=function(){i.isFullscreenOpen=!0,r.title="Exit fullscreen",c.setAttributeNS(null,"width","24px"),c.setAttributeNS(null,"height","24px"),c.setAttributeNS(null,"viewBox","0 0 950 1024"),c.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.exitFullscreen=function(){i.isFullscreenOpen=!1,r.title="Enter fullscreen",c.setAttributeNS(null,"width","20px"),c.setAttributeNS(null,"height","20px"),c.setAttributeNS(null,"viewBox","0 0 18 18"),c.firstChild.setAttributeNS(null,"d",s)},r.onclick=function(){i.isFullscreenOpen?o.exitFullscreen():o.enterFullscreen()}}(e,n),function(e,t){var n=M(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,W(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function j(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),P(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,s=(e.stageIndexes,document.createElement("div"));s.className="".concat(i,"slide-number-container");var r=document.createElement("div");r.className=a;var c=document.createElement("span");n.setSlideNumber=function(e){return c.innerHTML=e};var l=document.createElement("span");l.className="".concat(i,"slash");var u=document.createElement("div");u.innerHTML=o.length,s.appendChild(r),r.appendChild(c),r.appendChild(l),r.appendChild(u),t.appendChild(s),setTimeout((function(){r.offsetWidth>55&&(s.style.justifyContent="flex-start")}))}(e,o)}function X(e,t){var n=this,o=e.elements.sourcesOuters,i=e.props,s=0;this.byValue=function(e){return s=e,n},this.negative=function(){r(-c())},this.zero=function(){r(0)},this.positive=function(){r(c())};var r=function(e){o[t].style.transform="translateX(".concat(e+s,"px)"),s=0},c=function(){return(1+i.slideDistance)*innerWidth}}function B(e,t,n,o){var i=e.elements.container,s=n.charAt(0).toUpperCase()+n.slice(1),r=document.createElement("div");r.className="".concat(f," ").concat(f,"-").concat(n),r.title="".concat(s," slide"),r.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(p," ").concat(a),W(n,"20px","0 0 20 20",t),e.appendChild(n)}(r,o),i.appendChild(r)}function U(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function V(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.fullscreenToggler,s=n.globalEventsController,r=n.scrollbarRecompensor,c=e.data,a=e.elements,u=e.props,d=e.slideSwipingProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),s.removeListeners(),u.exitFullscreenOnClose&&c.isFullscreenOpen&&i.exitFullscreen(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isSwiping=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),r.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),220)}}function q(e){var t,n,o,i=e.collections.sourcesOutersTransformers,s=e.componentsServices,r=e.core,c=r.classFacade,a=r.slideIndexChanger,l=r.sourceDisplayFacade,d=r.stageManager,p=e.elements.sourcesInners,f=e.stageIndexes,v=(t=function(){c.removeFromEachElementClassIfContains("sourcesInners",m)},n=250,o=[],function(){o.push(!0),setTimeout((function(){o.pop(),o.length||t()}),n)});a.changeTo=function(e){f.current=e,d.updateStageIndexes(),s.setSlideNumber(e+1),l.displaySourcesWhichShouldBeDisplayed()},a.jumpTo=function(e){var t=f.current;a.changeTo(e),c.removeFromEachElementClassIfContains("sourcesOuters",u),U(p[t],g),U(p[t],h),p[t].classList.add(m),U(p[e],g),U(p[e],m),p[e].classList.add(h),v(),i[e].zero(),setTimeout((function(){t!==f.current&&i[t].negative()}),220)}}function Y(e){return e.touches?e.touches[0].clientX:e.clientX}function _(e){var t=e.core,n=t.lightboxCloser,o=t.fullscreenToggler,i=t.slideChangeFacade;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":i.changeToPrevious();break;case"ArrowRight":i.changeToNext();break;case"F11":e.preventDefault(),o.enterFullscreen()}}}function J(e){var t=e.collections.sourcesOutersTransformers,n=e.elements,o=e.slideSwipingProps,i=e.stageIndexes;this.runActionsForEvent=function(e){var t,c,a;n.container.contains(n.slideSwipingHoverer)||n.container.appendChild(n.slideSwipingHoverer),t=n.container,c=r,(a=t.classList).contains(c)||a.add(c),o.swipedX=Y(e)-o.downClientX,s(i.current,"zero"),void 0!==i.previous&&o.swipedX>0?s(i.previous,"negative"):void 0!==i.next&&o.swipedX<0&&s(i.next,"positive")};var s=function(e,n){t[e].byValue(o.swipedX)[n]()}}function G(e){var t,n=e.props.sources,o=e.resolve,i=e.slideSwipingProps,s=o(J),r=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){i.swipedX=1}:this.listener=function(e){i.isSwiping&&r()&&s.runActionsForEvent(e)}}function Z(e){var t=e.collections.sourcesOutersTransformers,n=e.core.slideIndexChanger,o=e.elements.sourcesOuters,i=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===i.previous||(s("positive"),n.changeTo(i.previous)),s("zero")},this.runNegativeSwipedXActions=function(){void 0===i.next||(s("negative"),n.changeTo(i.next)),s("zero")};var s=function(e){o[i.current].classList.add(u),t[i.current][e]()}}function $(e,t){e.contains(t)&&e.removeChild(t)}function K(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,i=e.slideSwipingProps,s=o(Z);this.runNoSwipeActions=function(){$(n.container,n.slideSwipingHoverer),i.isSourceDownEventTarget||t.closeLightbox(),i.isSwiping=!1},this.runActions=function(){i.swipedX>0?s.runPositiveSwipedXActions():s.runNegativeSwipedXActions(),$(n.container,n.slideSwipingHoverer),n.container.classList.remove(r),i.isSwiping=!1}}function Q(e){var t=e.resolve,n=e.slideSwipingProps,o=t(K);this.listener=function(){n.isSwiping&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function ee(e){var t,n,o;n=(t=e).core.classFacade,o=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<o[e].length;n++)U(o[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices,n=e.core.fullscreenToggler;n.enterFullscreen=function(){t.enterFullscreen();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.exitFullscreen(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.resolve,s=i(_),r=i(G),c=i(Q);n.attachListeners=function(){document.addEventListener("mousemove",r.listener),document.addEventListener("touchmove",r.listener,{passive:!0}),document.addEventListener("mouseup",c.listener),document.addEventListener("touchend",c.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener)},n.removeListeners=function(){document.removeEventListener("mousemove",r.listener),document.removeEventListener("touchmove",r.listener),document.removeEventListener("mouseup",c.listener),document.removeEventListener("touchend",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener)}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(V);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),ne(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))};var o=function(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),q(e),function(e){var t=e.core,n=t.classFacade,o=t.slideSwipingDown,i=e.elements.sources,s=e.slideSwipingProps,r=e.stageIndexes;o.listener=function(e){s.isSwiping=!0,s.downClientX=Y(e),s.swipedX=0,"VIDEO"===e.target.tagName||e.touches||e.preventDefault();var t=i[r.current];t&&t.contains(e.target)?s.isSourceDownEventTarget=!0:s.isSourceDownEventTarget=!1,n.removeFromEachElementClassIfContains("sourcesOuters",u)}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props.loadOnlyCurrentSource,i=e.stageIndexes;function s(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o)s(i.current);else for(var e in i)s(i[e])}}(e),function(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.isSourceInStage=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}(e),function(e){var t=e.collections,n=t.sourcesOutersTransformers,o=t.sourcesStylers,i=e.core.windowResizeActioner,s=e.data,r=e.elements.sourcesOuters,c=e.props,a=e.stageIndexes;i.runActions=function(){innerWidth<992?s.maxSourceWidth=innerWidth:s.maxSourceWidth=.9*innerWidth,s.maxSourceHeight=.9*innerHeight;for(var e=0;e<c.sources.length;e++)U(r[e],u),e!==a.current&&n[e].negative(),o[e]&&o[e].styleSize()}}(e)}function te(e){var t=e.core.eventsDispatcher,n=e.data,o=e.elements,s=e.props.sources;n.isInitialized=!0,function(e){for(var t=e.collections.sourcesOutersTransformers,n=e.props.sources,o=e.resolve,i=0;i<n.length;i++)t[i]=o(X,[i])}(e),ee(e),o.container=document.createElement("div"),o.container.className="".concat(i,"container ").concat(c," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(c," ").concat(d)}(e),j(e),function(e){var t=e.core.slideSwipingDown,n=e.elements,o=e.props.sources;n.sourcesOutersWrapper=document.createElement("div"),n.sourcesOutersWrapper.className="".concat(d," ").concat(c),n.container.appendChild(n.sourcesOutersWrapper),n.sourcesOutersWrapper.addEventListener("mousedown",t.listener),n.sourcesOutersWrapper.addEventListener("touchstart",t.listener,{passive:!0});for(var i=0;i<o.length;i++)D(e,i)}(e),s.length>1&&function(e){var t=e.core.slideChangeFacade;B(e,t.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(e,t.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")}(e),function(e){for(var t=e.props.sources,n=e.resolve,o=n(w),i=n(k),s=n(R,[o,i]),r=0;r<t.length;r++)if("string"==typeof t[r]){var c=s.getTypeSetByClientForIndex(r);if(c)i.runActionsForSourceTypeAndIndex(c,r);else{var a=o.getSourceTypeFromLocalStorageByUrl(t[r]);a?i.runActionsForSourceTypeAndIndex(a,r):s.retrieveTypeWithXhrForIndex(r)}}else i.runActionsForSourceTypeAndIndex("custom",r)}(e),t.dispatch("onInit")}function ne(e){var t=e.collections.sourcesOutersTransformers,n=e.componentsServices,o=e.core,i=o.eventsDispatcher,s=o.lightboxOpener,r=o.globalEventsController,c=o.scrollbarRecompensor,a=o.sourceDisplayFacade,u=o.stageManager,d=o.windowResizeActioner,p=e.data,f=e.elements,h=e.stageIndexes;s.open=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;h.current=o,p.isInitialized?i.dispatch("onShow"):te(e),u.updateStageIndexes(),a.displaySourcesWhichShouldBeDisplayed(),n.setSlideNumber(o+1),document.body.appendChild(f.container),document.documentElement.classList.add(l),c.addRecompense(),r.attachListeners(),d.runActions(),t[h.current].zero(),i.dispatch("onOpen")}}function oe(){var e=localStorage.getItem("fslightbox-scrollbar-width");if(e)return e;var t=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),n=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(t);var o=t.offsetWidth;t.appendChild(n);var i=n.offsetWidth;document.body.removeChild(t);var s=o-i;return localStorage.setItem("fslightbox-scrollbar-width",s.toString()),s}function ie(e,t,n){return(ie=se()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&re(i,n.prototype),i}).apply(null,arguments)}function se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function le(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].getAttribute("data-fslightbox"),o=e[t].getAttribute("href");fsLightboxInstances[n]||(fsLightboxInstances[n]=new FsLightbox);var i=null;i="#"===o.charAt(0)?document.getElementById(o.substring(1)):o,fsLightboxInstances[n].props.sources.push(i),fsLightboxInstances[n].elements.a.push(e[t]);var s=fsLightboxInstances[n].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[n].open(s)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var r=["href","data-fslightbox","data-type","data-video-poster","data-class","data-custom-class"],c=e[t].attributes,a=fsLightboxInstances[n].props.customAttributes,l=0;l<c.length;l++)if(-1===r.indexOf(c[l].name)){a[s]||(a[s]={});var u=c[l].name.substr(5);a[s][u]=c[l].value}function d(o,i){e[t].hasAttribute(i)&&(fsLightboxInstances[n].props[o][s]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isInitialized:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:oe(),isFullscreenOpen:!1},this.slideSwipingProps={isSwiping:!1,downClientX:null,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,sourcesOutersWrapper:null,sources:[],sourcesOuters:[],sourcesInners:[]},this.componentsServices={enterFullscreen:null,exitFullscreen:null,setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),ie(t,ce(n))},this.collections={sourcesOutersTransformers:[],sourcesLoadsHandlers:[],sourcesRenderFunctions:[],sourcesStylers:[]},this.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxOpener:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},ne(this),this.open=function(t){return e.core.lightboxOpener.open(t)},this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},le(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}le()}}])}));