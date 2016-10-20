                                                                                                                   
                              
   
  
                                                     
                 
	                                                                                                                  
	      
	  
	  
	                
		
	 
	 
	                                                  
	                          
	           
	     
	      
	           
	
	
	 
	 
	
	 
	
	
	
	
	
	
	
	
	
     

       

	
	

	    
		// jQuery SWFObject v1.1.1
(function(f,h,i){function k(a,c){var b=(a[0]||0)-(c[0]||0);return b>0||!b&&a.length>0&&k(a.slice(1),c.slice(1))}function l(a){if(typeof a!=g)return a;var c=[],b="";for(var d in a){b=typeof a[d]==g?l(a[d]):[d,m?encodeURI(a[d]):a[d]].join("=");c.push(b)}return c.join("&")}function n(a){var c=[];for(var b in a)a[b]&&c.push([b,'="',a[b],'"'].join(""));return c.join(" ")}function o(a){var c=[];for(var b in a)c.push(['<param name="',b,'" value="',l(a[b]),'" />'].join(""));return c.join("")}var g="object",m=true;try{var j=i.description||function(){return(new i("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}()}catch(p){j="Unavailable"}var e=j.match(/\d+/g)||[0];f[h]={available:e[0]>0,activeX:i&&!i.name,version:{original:j,array:e,string:e.join("."),major:parseInt(e[0],10)||0,minor:parseInt(e[1],10)||0,release:parseInt(e[2],10)||0},hasVersion:function(a){a=/string|number/.test(typeof a)?a.toString().split("."):/object/.test(typeof a)?[a.major,a.minor]:a||[0,0];return k(e,a)},encodeParams:true,expressInstall:"expressInstall.swf",expressInstallIsActive:false,create:function(a){if(!a.swf||this.expressInstallIsActive||!this.available&&!a.hasVersionFail)return false;if(!this.hasVersion(a.hasVersion||1)){this.expressInstallIsActive=true;if(typeof a.hasVersionFail=="function")if(!a.hasVersionFail.apply(a))return false;a={swf:a.expressInstall||this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:a.swf,type:"application/x-shockwave-flash",id:a.id||"flash_"+Math.floor(Math.random()*999999999),width:a.width||320,height:a.height||180,style:a.style||""};m=typeof a.useEncode!=="undefined"?a.useEncode:this.encodeParams;a.movie=a.swf;a.wmode=a.wmode||"opaque";delete a.fallback;delete a.hasVersion;delete a.hasVersionFail;delete a.height;delete a.id;delete a.swf;delete a.useEncode;delete a.width;var c=document.createElement("div");c.innerHTML=["<object ",n(attrs),">",o(a),"</object>"].join("");return c.firstChild}};f.fn[h]=function(a){var c=this.find(g).andSelf().filter(g);/string|object/.test(typeof a)&&this.each(function(){var b=f(this),d;a=typeof a==g?a:{swf:a};a.fallback=this;if(d=f[h].create(a)){b.children().remove();b.html(d)}});typeof a=="function"&&c.each(function(){var b=this;b.jsInteractionTimeoutMs=b.jsInteractionTimeoutMs||0;if(b.jsInteractionTimeoutMs<660)b.clientWidth||b.clientHeight?a.call(b):setTimeout(function(){f(b)[h](a)},b.jsInteractionTimeoutMs+66)});return c}})(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);
    	var Animator=function(){var d,c,i=!0,b=prevIndex=queueIndex=zIndex=-1,g=1,k=2,f=[],l=function(a){a=a.seq+"-"+a.metaData;WebTracking.sendTrackingRequest(a,{linkTrackVars:"eVar31",linkTrackEvents:"None",eVar31:a},!1)},m=function(a){a=a.seq+"-"+a.metaData;WebTracking.sendTrackingRequest(a,{linkTrackVars:"eVar32",linkTrackEvents:"None",eVar32:a},!1)};return{handleAnimation:function(a){if(d)queueIndex=a;else{d=!0;if("undefined"==typeof a)c?(a=Math.floor(Math.random()*f.length),a=b==a?0<b?b-1:b+1:a):a=
b==f.length-1?0:b+1;else if(this.stopAuto(),b==a){d=!1;return}prevIndex=b;b=a;k=g;g=1==g?2:1;$("#sld-ctrl-"+prevIndex).removeClass("sld-ctrl-on");$("#sld-ctrl-"+b).addClass("sld-ctrl-on");$("#sld-data-"+k).unbind().hide().empty();var e=f[b];$("div.slide-area").unbind().remove();if(e.type){var a=$("#sld-data-"+g).unbind().removeClass().addClass("slide-content slide-pos-"+$.trim(e.contentPosition)),j=$.trim(e.type);"TXT"==j?(a.html(e.textContent),e.clickUrl&&(a.addClass("hp-cursor").click(function(){window.location.href=
e.clickUrl;l(e)}),a=$("<div></div>").addClass("slide-area hp-cursor"),a.prependTo("#slide-data"),a.click(function(){window.location.href=e.clickUrl;m(e)}))):"IMG"==j?(j=$("<img />").prop("src",htz.commConfig.protocol+"//"+e.imageUrl),j.appendTo(a),e.clickUrl&&(j.addClass("hp-cursor").click(function(){window.location.href=e.clickUrl;l(e)}),a=$("<div></div>").addClass("slide-area hp-cursor"),a.prependTo("#slide-data"),a.click(function(){window.location.href=e.clickUrl;m(e)}))):"VDO"==j&&($("<div></div>").prop("id",
"hytPlayerCont").appendTo(a),VideoPlayer.handleVideo(e.videoUrl))}$("#sld-data-"+g).fadeIn(700);zIndex--;a=Utils.isHexColorCode(f[b].bgFallBackColor)?f[b].bgFallBackColor:"#EDEDED";$("#hp-bg-color").css({"background-color":a,"z-index":zIndex});$("#hp-bg-cont"+k).fadeOut(1200,function(){d=!1;1>=f.length||(i?window.setTimeout("Animator.handleSlideRoll()",7E3):queueIndex!=b&&-1<queueIndex&&(Animator.handleAnimation(queueIndex),queueIndex=-1))});$("#hp-bg-color").fadeIn(700);if(f[b].bgImage){var a=$("#siteBgImg"+
prevIndex),h=a.eq(0);0<a.length&&h?(h.unbind(),h.prop("id","siteBgImg"+b)):(h=$("<img />").prop("id","siteBgImg"+b).hide(),h.appendTo($("#res-home-page-container")));h.bind("load readystatechange",function(a){if(this.complete||"complete"==this.readyState&&"readystatechange"==a.type)h.remove(),zIndex--,$("#hp-bg-cont"+g).css("z-index",zIndex),$("#hp-bg-img"+g).prop("src",htz.commConfig.protocol+"//"+f[b].bgImage),$("#hp-bg-color").stop().css("z-index",zIndex-1).fadeOut(700),$("#hp-bg-cont"+g).fadeIn(1200)});
h.prop("src",htz.commConfig.protocol+"//"+f[b].bgImage)}ImagePreLoader.initiatePreLoad(b)}},handleSlideRoll:function(){i&&this.handleAnimation()},stopAuto:function(){i=!1},init:function(){d=!0;$("section.res-form").bind("click mouseover",function(){Animator.stopAuto();$("section.res-form").unbind()});"undefined"!=typeof htz.homepage.slideInfos.slides&&(f=htz.homepage.slideInfos.slides);"undefined"!=typeof htz.homepage.slideInfos.isRandom&&(c=htz.homepage.slideInfos.isRandom);1>=f.length&&(i=c=!1);
if(!(1>=f.length)){for(var a="",b=0;b<f.length;b++)0<b&&(a+="&nbsp&nbsp"),a+="<span class='sld-ctrl-off' id='sld-ctrl-"+b+"' onclick='Animator.handleAnimation("+b+");'>"+htz.homepage.slideCtrlLbl[b+""]+"</span>";$("#sld-ctrl-cont").html(a)}a=$('<div class="hp-bg-wrapper" id="hp-bg-cont1"><div class="hp-bg-div"><img class="hp-bg-img" id="hp-bg-img1" /></div></div>');a.prependTo("#res-itinerary-page-container");a=$('<div class="hp-bg-wrapper" id="hp-bg-cont2"><div class="hp-bg-div"><img class="hp-bg-img" id="hp-bg-img2" /></div></div>');
a.prependTo("#res-itinerary-page-container");a=$('<div id="hp-bg-color"></div>');a.prependTo("#res-home-page-container");a=$("<div></div>").addClass("hp-removed").prop("id","sld-data-1");a.prependTo("#slide-data");a=$("<div></div>").addClass("hp-removed").prop("id","sld-data-2");a.prependTo("#slide-data");ImagePreLoader.init(f);d=!1;this.handleAnimation()}}}(),VideoPlayer=function(){var d=htz.commConfig.protocol+"//www.youtube.com/v/",c=isVerified=!1;$.flash.expressInstall=htz.config.rootContext+
"/assets/js/libs/expressInstall.swf";return{handleVideo:function(d){isVerified?c||VideoPlayer.embedVideo(d):$("<img/>").prop("src",htz.commConfig.protocol+"//www.youtube.com/favicon.ico?"+(new Date).getTime()).bind("error",function(){c=isVerified=!0}).bind("load",function(){0<$(this).prop("height")?(isVerified=!0,VideoPlayer.embedVideo(d)):c=isVerified=!0})},embedVideo:function(c){c=d+c+(0<=c.indexOf("?")?"&":"?")+"enablejsapi=1&playerapiid=hytPlayer&showinfo=0&fs=0&rel=0";$("#hytPlayerCont").flash({swf:c,
width:356,height:205,play:!1,allowFullScreen:!1,allowscriptaccess:"always",wmode:"transparent",hasVersion:8,hasVersionFail:function(){return!0}})}}}(),ImagePreLoader=function(){var d=loaded=timeout=null,c=0,i=function(){for(var b=c+1;b<d.length;b++)if(null==loaded[b+""])return b;if(0<c)for(b=c-1;0<b;b--)if(null==loaded[b+""])return b;return-1};return{init:function(b){d=b;loaded=[]},initiatePreLoad:function(b){null!=d&&1<d.length&&(loaded[b+""]="Y",c=b,null!=timeout&&window.clearTimeout(timeout),b=
i(),0<=b&&(timeout=window.setTimeout("ImagePreLoader.loadImage("+b+")",4E3)))},loadImage:function(b){var c=$("<img />").prop("id","siteBgImgStore"+b).hide();c.appendTo($("#res-home-page-container"));c.bind("load readystatechange",function(d){if($(this).prop("complete")||"complete"==$(this).prop("readyState")&&"readystatechange"==d.type)loaded[b+""]="Y",c.remove()});c.prop("src",htz.commConfig.protocol+"//"+d[b].bgImage)}}}();        
	             
	      
	      

	
	
	                                                                
	                                                        
	                                                        
	                 
	  
	
	
	                  
	
	      
	     
	
	
	
    
	
	
	
    
	

	
	
	   


/* EOF */
