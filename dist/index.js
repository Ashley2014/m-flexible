!function(win,match){var tid,doc=win.document,docEl=doc.documentElement,metaEl=doc.querySelector('meta[name="viewport"]'),content=doc.querySelector('meta[name="flexible"]'),dpr=0,wrap=0,flexible=match.flexible||(match.flexible={}),$dom=document.createElement("div");$dom.style="font-size:16px;",document.body.appendChild($dom);match=parseInt(window.getComputedStyle($dom,null).getPropertyValue("font-size"));document.body.removeChild($dom);var isIPhone,devicePixelRatio,scaleFactor=16/match;function refreshRem(){var rem=docEl.getBoundingClientRect().width;540<rem/dpr&&(rem=540*dpr);rem/=10;docEl.style.fontSize=rem*scaleFactor+"px",flexible.rem=win.rem=rem}metaEl?(console.warn("将根据已有的meta标签来设置缩放比例"),(match=metaEl.getAttribute("content").match(/initial\-scale=([\d\.]+)/))&&(wrap=parseFloat(match[1]),dpr=parseInt(1/wrap))):!content||(content=content.getAttribute("content"))&&(isIPhone=content.match(/initial\-dpr=([\d\.]+)/),devicePixelRatio=content.match(/maximum\-dpr=([\d\.]+)/),isIPhone&&(dpr=parseFloat(isIPhone[1]),wrap=parseFloat((1/dpr).toFixed(2))),devicePixelRatio&&(dpr=parseFloat(devicePixelRatio[1]),wrap=parseFloat((1/dpr).toFixed(2)))),dpr||wrap||(win.navigator.appVersion.match(/android/gi),isIPhone=win.navigator.appVersion.match(/iphone/gi),devicePixelRatio=win.devicePixelRatio,wrap=1/(dpr=isIPhone?3<=devicePixelRatio&&(!dpr||3<=dpr)?3:2<=devicePixelRatio&&(!dpr||2<=dpr)?2:1:1)),docEl.setAttribute("data-dpr",dpr),metaEl||((metaEl=doc.createElement("meta")).setAttribute("name","viewport"),metaEl.setAttribute("content","initial-scale="+wrap+", maximum-scale="+wrap+", minimum-scale="+wrap+", user-scalable=no"),docEl.firstElementChild?docEl.firstElementChild.appendChild(metaEl):((wrap=doc.createElement("div")).appendChild(metaEl),doc.write(wrap.innerHTML))),win.addEventListener("resize",function(){clearTimeout(tid),tid=setTimeout(refreshRem,300)},!1),win.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(tid),tid=setTimeout(refreshRem,300))},!1),"complete"===doc.readyState?doc.body.style.fontSize=12*dpr+"px":doc.addEventListener("DOMContentLoaded",function(e){doc.body.style.fontSize=12*dpr+"px"},!1),refreshRem(),flexible.dpr=win.dpr=dpr,flexible.refreshRem=refreshRem,flexible.rem2px=function(d){var val=parseFloat(d)*this.rem;return"string"==typeof d&&d.match(/rem$/)&&(val+="px"),val},flexible.px2rem=function(d){var val=parseFloat(d)/this.rem;return"string"==typeof d&&d.match(/px$/)&&(val+="rem"),val}}(window,window.lib||(window.lib={}));