
(function(n,t,i){var r=function(t){var i={Version:9,ServerUrl:t+"//api.webfont.com/webfont/fastjsPost",MD5UrlTemplate:t+"//vip-youzikuwebfont.oss-cn-beijing.aliyuncs.com/selectors/webUrl/",CdnMD5UrlTemplate:t+"//cdn.repository.webfont.com/selectors/webUrl/",OSSBlackListUrlTemplate:t+"//youziku.oss-cn-beijing.aliyuncs.com/userAuth/",Protocol:t,HttpMethod:{GET:"GET",POST:"POST"}},u={internalGlobalSettings:{fontfaceStyle:[]},drawed:!1,promises:[],localArray:[],remoteArray:[],applyFontfaceArray:[],fontfaceArray:[],isSync:!1,url:"",md5jsURl:"",preContents:[],adminContents:[],init:function(){var f=$youziku.UrlModule.getUrl(!1),t,r;if($youziku.UrlModule.loadSync){t=encodeURI(decodeURI($youziku.UrlModule.getSubmitUrl(f)));this.url=t;var u=$youziku.Md5Module.encrypt(t),e=i.CdnMD5UrlTemplate+u+".js",o=i.MD5UrlTemplate+u+".js";this.requestAndRunMd5js(e);this.md5jsURl=o}r=this;n.addEventListener?n.addEventListener("load",function(){r.checkLoad()}):n.attachEvent("onload",function(){r.checkLoad()})},submitToServer:function(){var i=0,n=[],u,f,e,c,l,o,t,s,a,h,r;for(t in this.localArray)(u=this.preContents[this.localArray[t].selector],u==undefined&&(u=""),f=this.adminContents[this.localArray[t].selector],f==undefined&&(f=""),e=$youziku.TextModule.getText(this.localArray[t].selector,u+f),c=$youziku.Md5Module.encrypt(e),e!=="")&&(undefined==this.remoteArray[t]||c!==this.remoteArray[t].contentMd5||this.localArray[t].accessKey!==this.remoteArray[t].accessKey)&&(n.push({k:"s"+i,v:this.localArray[t].selector}),n.push({k:"k"+i,v:this.localArray[t].accessKey}),n.push({k:"a"+i,v:!0}),u!==""?(l=$youziku.TextModule.getText(this.localArray[t].selector,f),n.push({k:"m"+i,v:$youziku.Md5Module.encrypt(l)}),n.push({k:"t"+i,v:l})):(n.push({k:"m"+i,v:c}),n.push({k:"t"+i,v:e})),i++);o=[];for(t in this.remoteArray)t!==""&&undefined===this.localArray[t]&&(n.push({k:"s"+i,v:this.remoteArray[t].selector}),n.push({k:"k"+i,v:$youziku.TextModule.trim(this.remoteArray[t].accessKey)}),n.push({k:"a"+i,v:!1}),n.push({k:"m"+i,v:""}),n.push({k:"t"+i,v:""}),i++,o.push(t));for(s=0;s<o.length;s++)delete this.remoteArray[o[s]];if(i>0){for(n.push({k:"num",v:i}),a=this.url?this.url:$youziku.UrlModule.getPageUrl(),n.push({k:"url",v:a}),h="",r=0;r<n.length;r++)h+=r>=n.length-1?n[r].k+"="+encodeURIComponent($youziku.TextModule.trim(n[r].v)):n[r].k+"="+encodeURIComponent($youziku.TextModule.trim(n[r].v))+"&";location.hostname!==""&&location.hostname!=="localhost"&&location.hostname!=="127.0.0.1"?this.validateOSS(h):this.makeWebFont(h)}},checkLoad:function(){this.isSync?this.syncMode():this.asyncMode()},asyncMode:function(){if(!(this.promises.length<=0)){var n=this;Promise.all(n.promises).then(function(t){t.length===n.promises.length&&(n.isSync||(n.isSync=!0,n.syncMode()))},function(n){console.error("$youziku:"+n)})}},syncMode:function(){this.drawed||(this.drawed=!0,this.submitToServer())},makeWebFont:function(n){var t=this;$youziku.HttpModule.request(i.HttpMethod.POST,i.ServerUrl,!0,n,function(n){var i=JSON.parse(n);t.showMsg(i)},function(){})},validateOSS:function(n){var r=(new $youziku.PunycodeModule).toASCII(location.hostname),u=i.OSSBlackListUrlTemplate+$youziku.Md5Module.encrypt(r)+".backlist.json?rom="+Math.random(),t=this,f=function(n,t){navigator.userAgent.indexOf("Firefox")>=0&&n.setHours(n.getHours()+8);var i=new Date(t);return(navigator.userAgent.indexOf("Firefox")>=0&&i.setHours(i.getHours()+8),n.getTime()>i.getTime())?!0:!1};$youziku.HttpModule.request(i.HttpMethod.GET,u,!0,null,function(i){var r=JSON.parse(i),u=r.Expires.toString(),s=f(new Date,u),e=location.hostname,o;r.Host&&(e=r.Host);s?t.makeWebFont(n):(o={Code:403,Result:"warn",Value:"'"+e+"'璇锋眰杩囦簬棰戠箒锛佸凡琚郴缁熸嫤鎴�,鍦ㄤ竴娈垫椂闂村唴灏嗘棤娉曞鐞嗚椤甸潰鐨勮姹傦紝棰勮"+u+"瑙ｉ櫎鎷︽埅锛佹嫤鎴師鍥狅細"+r.Reason},t.showMsg(o))},function(){t.makeWebFont(n)})},showMsg:function(n){console.log("%c鏈夊瓧搴揂pi鐢熸垚鏈嶅姟鍣ㄥ搷搴�:","color:#35bc73;font-size:23px;");var i=n.Result,t="green";i==="warn"||i==="null"?t="#FF7F24":i==="error"&&(t="red");console.log("\t%c code:"+n.Code," font-size:16px;color:"+t);console.log("\t%c errMsg:"+n.Value," font-size:16px;color:"+t);this.requestAndRunMd5js(this.md5jsURl+"?refreshToken="+Math.random())},requestAndRunMd5js:function(n){var t;$youziku.HttpModule.request(i.HttpMethod.GET,n,!1,null,function(n){t=n},function(){t="$youziku.verify('', '','');"});try{window.execScript(t)}catch(r){window.eval(t)}},writeContent:function(n,t){this.preContents[n]=t},appendContent:function(n,t){this.adminContents[n]=t},applyNewFontface:function(){var o,l,a,s,d,v,r,y,c,w,t,u,it,i,f,b,e,n,k;if(this.fontfaceArray)for(o=0;o<this.fontfaceArray.length;o++){l=this.fontfaceArray[o];a="";for(s in this.internalGlobalSettings.fontfaceStyle)this.internalGlobalSettings.fontfaceStyle.hasOwnProperty(s)&&(d=this.internalGlobalSettings.fontfaceStyle[s],a+=s+":"+d+";"),$youziku.FontfaceModule.remove(l),v=l.replace("}",a+"}"),$youziku.FontfaceModule.remove(v),$youziku.FontfaceModule.add(v)}if(r=this.applyFontfaceArray,r)for(y in r)if(r.hasOwnProperty(y)){var h=r[y],rt=h.Tag,g=h.Fontfamily,nt=h.YzkSysFontfamily,tt=h.ApplyFontface,p=this.localArray[rt];if(!p)continue;if(c="",!p.fontFamily)continue;if(w=$youziku.TextModule.trim(p.fontFamily.replace(/'/g," ").replace(/"/g," ")),$youziku.TextModule.trim(g)===w)continue;if(t=w.split(","),t.length<=1)continue;for(u=0;u<t.length;u++)it=t[u],$youziku.TextModule.trim(it)===g&&(t[u]=nt);for(i=0;i<t.length;i++)c+=i===t.length-1?t[i]:t[i]+",";if(c==="")continue;if(f=c.split(","),f.length<=1)continue;for(b="",e=0;e<f.length;e++)n=f[e],n=$youziku.TextModule.trim(n),b+=e===f.length-1?n.indexOf("'")!==-1&&n.lastIndexOf("'")!==-1||n.indexOf('"')!==-1&&n.lastIndexOf('"')!==-1?n:"'"+n+"'":n.indexOf("'")!==-1&&n.lastIndexOf("'")!==-1||n.indexOf('"')!==-1&&n.lastIndexOf('"')!==-1?n+",":"'"+n+"',";$youziku.FontfaceModule.remove(tt);k=tt.replace($youziku.TextModule.trim("'"+nt+"'"),b);$youziku.FontfaceModule.remove(k);$youziku.FontfaceModule.add(k)}}};return new r.prototype.ApiModule(i,u)},u;r.fn=r.prototype={ApiModule:function(n,t){var i=this,r={CommonHandler:function(n){this.applyFontByTag=function(t,r,u,f){var e=t.replace(/(^\s*)|(\s*$)/g,"");n.localArray[e]={selector:e,accessKey:i.TextModule.trim(r),fontFamily:u,a:f||!1}}}};this.run=function(){t.init()};this.loadScope=function(n,t,i,r){return this.load(n,t,i,r)};this.load=function(n,i,u,f){var e=new r.CommonHandler(t);return e.applyFontByTag(n,i,u,f),{mobile:function(t,i){var r=$youziku.EnvironmentModule.isMobile();r&&e.applyFontByTag(n,t,i)}}};this.attach=function(n){var i=new Promise(n);return t.promises.push(i),i};this.submit=function(i,r){var f,e,u;f=r?i+"_"+r:i;e=this.UrlModule.getUrl(!0);u=encodeURI(decodeURI(this.UrlModule.getSubmitUrl(e+"_"+f)));t.url=u;var o=this.Md5Module.encrypt(u),s=n.CdnMD5UrlTemplate+o+".js",h=n.MD5UrlTemplate+o+".js";t.requestAndRunMd5js(s);t.md5jsURl=h;t.submitToServer()};this.ajaxfont=function(){t.isSync||(t.isSync=!0,t.syncMode())};this.verify=function(n,i,r){t.remoteArray[n]={selector:n,contentMd5:i,accessKey:r}};this.draw=function(n){t.isSync=n==null?!0:!1;t.applyNewFontface()};this.css=function(n){t.fontfaceArray.push(n);this.FontfaceModule.remove(n);this.FontfaceModule.add(n)};this.applyFontface=function(n,i,r,u){t.applyFontfaceArray[u]={Tag:u,Fontfamily:r,ApplyFontface:n,YzkSysFontfamily:i};this.FontfaceModule.remove(n);this.FontfaceModule.add(n);t.applyNewFontface()};this.writeContent=function(n,i){t.writeContent(n,i)};this.appendContent=function(n,i){t.appendContent(n,i)};this.globalSetting={fontfaceStyle:{add:function(n,i){t.internalGlobalSettings.fontfaceStyle[n]=i}}}},Md5Module:{encrypt:function(n){var s=0,e=8,o=function(n,t,i,r,u,e){return f(h(f(f(t,n),f(r,e)),u),i)},t=function(n,t,i,r,u,f,e){return o(t&i|~t&r,n,t,u,f,e)},i=function(n,t,i,r,u,f,e){return o(t&r|i&~r,n,t,u,f,e)},r=function(n,t,i,r,u,f,e){return o(t^i^r,n,t,u,f,e)},u=function(n,t,i,r,u,f,e){return o(i^(t|~r),n,t,u,f,e)},h=function(n,t){return n<<t|n>>>32-t},f=function(n,t){var i=(n&65535)+(t&65535),r=(n>>16)+(t>>16)+(i>>16);return r<<16|i&65535},c=function(n){for(var i=Array(),r=(1<<e)-1,t=0;t<n.length*e;t+=e)i[t>>5]|=(n.charCodeAt(t/e)&r)<<t%32;return i},l=function(n){for(var i=s?"0123456789ABCDEF":"0123456789abcdef",r="",t=0;t<n.length*4;t++)r+=i.charAt(n[t>>2]>>t%4*8+4&15)+i.charAt(n[t>>2]>>t%4*8&15);return r},a=function(n,e){var l;n[e>>5]|=128<<e%32;n[(e+64>>>9<<4)+14]=e;var o=1732584193,s=-271733879,h=-1732584194,c=271733878;for(l=0;l<n.length;l+=16){var a=o,v=s,y=h,p=c;o=t(o,s,h,c,n[l+0],7,-680876936);c=t(c,o,s,h,n[l+1],12,-389564586);h=t(h,c,o,s,n[l+2],17,606105819);s=t(s,h,c,o,n[l+3],22,-1044525330);o=t(o,s,h,c,n[l+4],7,-176418897);c=t(c,o,s,h,n[l+5],12,1200080426);h=t(h,c,o,s,n[l+6],17,-1473231341);s=t(s,h,c,o,n[l+7],22,-45705983);o=t(o,s,h,c,n[l+8],7,1770035416);c=t(c,o,s,h,n[l+9],12,-1958414417);h=t(h,c,o,s,n[l+10],17,-42063);s=t(s,h,c,o,n[l+11],22,-1990404162);o=t(o,s,h,c,n[l+12],7,1804603682);c=t(c,o,s,h,n[l+13],12,-40341101);h=t(h,c,o,s,n[l+14],17,-1502002290);s=t(s,h,c,o,n[l+15],22,1236535329);o=i(o,s,h,c,n[l+1],5,-165796510);c=i(c,o,s,h,n[l+6],9,-1069501632);h=i(h,c,o,s,n[l+11],14,643717713);s=i(s,h,c,o,n[l+0],20,-373897302);o=i(o,s,h,c,n[l+5],5,-701558691);c=i(c,o,s,h,n[l+10],9,38016083);h=i(h,c,o,s,n[l+15],14,-660478335);s=i(s,h,c,o,n[l+4],20,-405537848);o=i(o,s,h,c,n[l+9],5,568446438);c=i(c,o,s,h,n[l+14],9,-1019803690);h=i(h,c,o,s,n[l+3],14,-187363961);s=i(s,h,c,o,n[l+8],20,1163531501);o=i(o,s,h,c,n[l+13],5,-1444681467);c=i(c,o,s,h,n[l+2],9,-51403784);h=i(h,c,o,s,n[l+7],14,1735328473);s=i(s,h,c,o,n[l+12],20,-1926607734);o=r(o,s,h,c,n[l+5],4,-378558);c=r(c,o,s,h,n[l+8],11,-2022574463);h=r(h,c,o,s,n[l+11],16,1839030562);s=r(s,h,c,o,n[l+14],23,-35309556);o=r(o,s,h,c,n[l+1],4,-1530992060);c=r(c,o,s,h,n[l+4],11,1272893353);h=r(h,c,o,s,n[l+7],16,-155497632);s=r(s,h,c,o,n[l+10],23,-1094730640);o=r(o,s,h,c,n[l+13],4,681279174);c=r(c,o,s,h,n[l+0],11,-358537222);h=r(h,c,o,s,n[l+3],16,-722521979);s=r(s,h,c,o,n[l+6],23,76029189);o=r(o,s,h,c,n[l+9],4,-640364487);c=r(c,o,s,h,n[l+12],11,-421815835);h=r(h,c,o,s,n[l+15],16,530742520);s=r(s,h,c,o,n[l+2],23,-995338651);o=u(o,s,h,c,n[l+0],6,-198630844);c=u(c,o,s,h,n[l+7],10,1126891415);h=u(h,c,o,s,n[l+14],15,-1416354905);s=u(s,h,c,o,n[l+5],21,-57434055);o=u(o,s,h,c,n[l+12],6,1700485571);c=u(c,o,s,h,n[l+3],10,-1894986606);h=u(h,c,o,s,n[l+10],15,-1051523);s=u(s,h,c,o,n[l+1],21,-2054922799);o=u(o,s,h,c,n[l+8],6,1873313359);c=u(c,o,s,h,n[l+15],10,-30611744);h=u(h,c,o,s,n[l+6],15,-1560198380);s=u(s,h,c,o,n[l+13],21,1309151649);o=u(o,s,h,c,n[l+4],6,-145523070);c=u(c,o,s,h,n[l+11],10,-1120210379);h=u(h,c,o,s,n[l+2],15,718787259);s=u(s,h,c,o,n[l+9],21,-343485551);o=f(o,a);s=f(s,v);h=f(h,y);c=f(c,p)}return Array(o,s,h,c)};return l(a(c(n),n.length*e))}},UrlModule:{loadSync:!0,getPageUrl:function(){var t=(new $youziku.PunycodeModule).toASCII(location.hostname),n;return n=location.port.toString()===""?"":":"+location.port,location.protocol+"//"+t+n+location.pathname+location.search+location.hash},getUrl:function(n){var s=function(n,t,i){var h=n.split("?")[1],r,o,f;if(h==null||h=="")return n.split("?")[0];var u=h.split("&"),e="",c=h;for(r=0;r<u.length;r++)for(o=0;o<t.length;o++)if(u[r].split("=")[0].toLowerCase()==t[o])if(i)u[r].split("=")[1].indexOf("%3F")==-1?e=e+u[r]+"&":(f=u[r].split("=")[1],f=f.replace(/%3A/g,":").replace(/%2F/g,"/").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&"),f=s(f,t,i),f=f.replace(/:/g,"%3A").replace(/\//g,"%2F").replace(/\?/g,"%3F").replace(/=/g,"%3D").replace(/&/g,"%26"),e=e+t[o]+"="+f+"&");else{var l=new RegExp(u[r]+"&","gi"),a=new RegExp("&"+u[r],"gi"),v=new RegExp(u[r],"gi");c=c.replace(l,"").replace(a,"").replace(v,"")}return i?e==""?n.split("?")[0]:n.split("?")[0]+"?"+e.substr(0,e.length-1):c==""?n.split("?")[0]:n.split("?")[0]+"?"+c},r=$youziku.UrlModule.getPageUrl(),i=r.toLowerCase(),u,h,o,f,e,a;if(i.indexOf("openid=")!==-1||i.indexOf("&token=")!==-1||i.indexOf("?token=")!==-1||i.indexOf("&openid=")!==-1||i.indexOf("?accesstoken=")!==-1||i.indexOf("&accesstoken=")!==-1||i.indexOf("?callback=")!==-1||i.indexOf("&callback=")!==-1||i.indexOf("?refresh_token=")!==-1||i.indexOf("&refresh_token=")!==-1||i.indexOf("?access_token=")!==-1||i.indexOf("&access_token=")!==-1)return s(r,"openid,token,accesstoken,callback,access_token,refresh_token".split(","),!1);if(n)for(h=t.scripts,o=0;o<h.length;o++){var v=h[o],c=v.src,l=c.split("/"),y=l[l.length-1];if(y.indexOf("youziku")!==-1){u=c;break}}else u=t.scripts[t.scripts.length-1].src;return(u.indexOf("#async")!==-1&&(this.loadSync=!1),u.indexOf("?")===-1)?r:(f=u.split("?")[1].split("&")[0].split("|"),e=f[0].split("=")[1],e==null||e==="noparam"||e==="")?r.split("?")[0]:(a=f[0].split("=")[0]==="param",f[0]=e,s(r,f,a))},getSubmitUrl:function(n){return $youziku.EnvironmentModule.isMobile()?n+"#youziku-mobile=true":n}},HttpModule:{request:function(n,t,i,r,u,f){var o=function(){var t,n;if(window.ActiveXObject)for(t=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"],n=0;n<t.length;n++)try{return new ActiveXObject(t[n])}catch(i){}else try{return new XMLHttpRequest}catch(r){}},e=o();try{e.open(n,t,i);(n==="POST"||n==="post")&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");e.onreadystatechange=function(){e.readyState===4&&(e.status===200||e.status===304?u(e.responseText):e.status===404&&f())};e.send(r)}catch(s){}}},TextModule:{trim:function(n){return n.toString().replace(/(^\s*)|(\s*$)/g,"")},removeDuplicate2:function(n){return n.replace(/(.)(?=.*\1)/g,"")},getText:function(n,t){for(var i=t,u={},u=document.querySelectorAll(n),r=0;r<u.length;r++)i+=u[r].innerHTML.replace(/[\r\n]/g,"").replace(/<!--.*?-->/g,"").replace(/<script.*?>.*?<\/script>/ig,"").replace(/<select.*?>.*?<\/select>/ig,"").replace(/<\/?[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"").replace(/&nbsp;/g,"").replace(/&quot;/g,'"').replace(/&/g,"").replace(/\s/g,"").replace("<","<=");return i=this.replaceEmoji(i),new RegExp("[A-Za-z]").test(i)&&(i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"+i),new RegExp("[0-9]").test(i)&&(i="0123456789"+i),i=this.removeDuplicate2(i),i.split("").sort(function(n,t){return n.charCodeAt(0)-t.charCodeAt(0)}).join("")},replaceEmoji:function(n){return n.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\\A9|\\AE]\u3030|\\uA9|\\uAE|\u3030/ig,"")}},FontfaceModule:{remove:function(n){var f=t.getElementsByTagName("head")[0],r,i,u;try{for(r=t.getElementsByTagName("style"),i=0;i<r.length;i++)u=r[i],$youziku.TextModule.trim(u.innerHTML)===$youziku.TextModule.trim(n)&&f.removeChild(u)}catch(e){}},add:function(n){var r=t.getElementsByTagName("head")[0],i=t.createElement("style");i.setAttribute("type","text/css");r.appendChild(i);i.styleSheet?i.styleSheet.cssText=n:t.getBoxObjectFor?i.innerHTML=n:i.appendChild(t.createTextNode(n))}},PunycodeModule:function(){function n(){function i(n){throw RangeError(g[n]);}function l(n,t){for(var i=n.length,r=[];i--;)r[i]=t(n[i]);return r}function a(n,t){var i=n.split("@"),r="",u,f;return i.length>1&&(r=i[0]+"@",n=i[1]),n=n.replace(d,"."),u=n.split("."),f=l(u,t).join("."),r+f}function nt(n){for(var r=[],i=0,f=n.length,t,u;i<f;)t=n.charCodeAt(i++),t>=55296&&t<=56319&&i<f?(u=n.charCodeAt(i++),(u&64512)==56320?r.push(((t&1023)<<10)+(u&1023)+65536):(r.push(t),i--)):r.push(t);return r}function tt(n){return l(n,function(n){var t="";return n>65535&&(n-=65536,t+=f(n>>>10&1023|55296),n=56320|n&1023),t+f(n)}).join("")}function it(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:n}function v(n,t){return n+22+75*(n<26)-((t!=0)<<5)}function y(i,r,f){var e=0;for(i=f?t(i/w):i>>1,i+=t(i/r);i>o*u>>1;e+=n)i=t(i/o);return t(e+(o+1)*i/(i+p))}function rt(f){var k=[],et=f.length,a,o=0,nt=h,d=s,l,v,g,rt,p,w,b,ut,ft;for(l=f.lastIndexOf(c),l<0&&(l=0),v=0;v<l;++v)f.charCodeAt(v)>=128&&i("not-basic"),k.push(f.charCodeAt(v));for(g=l>0?l+1:0;g<et;){for(rt=o,p=1,w=n;;w+=n){if(g>=et&&i("invalid-input"),b=it(f.charCodeAt(g++)),(b>=n||b>t((r-o)/p))&&i("overflow"),o+=b*p,ut=w<=d?e:w>=d+u?u:w-d,b<ut)break;ft=n-ut;p>t(r/ft)&&i("overflow");p*=ft}a=k.length+1;d=y(o-rt,a,rt==0);t(o/a)>r-nt&&i("overflow");nt+=t(o/a);o%=a;k.splice(o++,0,nt)}return tt(k)}function ut(o){var p,w,d,et,g,l,b,tt,it,rt,a,k=[],ut,ft,ot,st;for(o=nt(o),ut=o.length,p=h,w=0,g=s,l=0;l<ut;++l)a=o[l],a<128&&k.push(f(a));for(d=et=k.length,et&&k.push(c);d<ut;){for(b=r,l=0;l<ut;++l)a=o[l],a>=p&&a<b&&(b=a);for(ft=d+1,b-p>t((r-w)/ft)&&i("overflow"),w+=(b-p)*ft,p=b,l=0;l<ut;++l)if(a=o[l],a<p&&++w>r&&i("overflow"),a==p){for(tt=w,it=n;;it+=n){if(rt=it<=g?e:it>=g+u?u:it-g,tt<rt)break;st=tt-rt;ot=n-rt;k.push(f(v(rt+st%ot,0)));tt=t(st/ot)}k.push(f(v(tt,0)));g=y(w,ft,d==et);w=0;++d}++w;++p}return k.join("")}var r=2147483647,n=36,e=1,u=26,p=38,w=700,s=72,h=128,c="-",b=/^xn--/,k=/[^\x20-\x7E]/,d=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},o=n-e,t=Math.floor,f=String.fromCharCode;this.toUnicode=function(n){return a(n,function(n){return b.test(n)?rt(n.slice(4).toLowerCase()):n})};this.toASCII=function(n){return a(n,function(n){return k.test(n)?"xn--"+ut(n):n})}}this.toASCII=function(t){var i=new n;return i.toASCII(t)};this.toUnicode=function(t){var i=new n;return i.toUnicode(t)}},EnvironmentModule:{isMobile:function(){return/(iPhone|iPad|iPod|iOS|Android)/i.test(i.userAgent)}}};r.prototype.ApiModule.prototype=r.fn;u="https:"===document.location.protocol?"https:":"http:";n.$youziku=r(u);n.$webfont=n.$youziku;n.$youziku.run()})(window,document,navigator);