// JQUERY NEWS TICKER by Rhodimus http://github.com/rhodimus/jQuery-News-Ticker modified by MKRdezign
(function(b){b.fn.ticker=function(k){var c=b.extend({},b.fn.ticker.defaults,k);if(0==b(this).length)return window.console&&window.console.log?window.console.log("Element does not exist in DOM!"):alert("Element does not exist in DOM!"),!1;var l=b(this);return this.each(function(){function f(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}function k(a){c.debugMode&&(window.console&&window.console.log?window.console.log(a):alert(a))}function r(){if(0==a.contentLoaded)if(0<l.find(".items").length)l.find(".items").each(function(h){a.newsArr["item-"+
h]={type:c.titleText,content:b(this).html()}});else return k("Couldn't find HTML any content for the ticker to use!"),!1}function m(){a.contentLoaded=!0;b(a.dom.titleElem).html(a.newsArr["item-"+a.position].type);b(a.dom.contentID).html(a.newsArr["item-"+a.position].content);a.position==f(a.newsArr)-1?a.position=0:a.position++;distance=b(a.dom.contentID).width();time=distance/c.speed;t();p()}function t(){b(a.dom.contentID).css("opacity","1");if(a.play){var h=b(a.dom.titleID).width()+20;b(a.dom.revealID).css(c.direction,
h+"px");"fade"==c.displayType?b(a.dom.revealID).hide(0,function(){b(a.dom.contentID).css(c.direction,h+"px").fadeIn(c.fadeInSpeed,g)}):"scroll"!=c.displayType&&b(a.dom.revealElem).show(0,function(){b(a.dom.contentID).css(c.direction,h+"px").show();animationAction="right"==c.direction?{marginRight:distance+"px"}:{marginLeft:distance+"px"};b(a.dom.revealID).css("margin-"+c.direction,"0px").delay(20).animate(animationAction,time,"linear",g)})}else return!1}function g(){a.play?(b(a.dom.contentID).delay(c.pauseOnItems).fadeOut(c.fadeOutSpeed),
"fade"==c.displayType?b(a.dom.contentID).fadeOut(c.fadeOutSpeed,function(){b(a.dom.wrapperID).find(a.dom.revealElem+","+a.dom.contentID).hide().end().find(a.dom.tickerID+","+a.dom.revealID).show().end().find(a.dom.tickerID+","+a.dom.revealID).removeAttr("style");m()}):b(a.dom.revealID).hide(0,function(){b(a.dom.contentID).fadeOut(c.fadeOutSpeed,function(){b(a.dom.wrapperID).find(a.dom.revealElem+","+a.dom.contentID).hide().end().find(a.dom.tickerID+","+a.dom.revealID).show().end().find(a.dom.tickerID+
","+a.dom.revealID).removeAttr("style");m()})})):b(a.dom.revealElem).hide()}function n(){a.play=!1;b(a.dom.tickerID+","+a.dom.revealID+","+a.dom.titleID+","+a.dom.titleElem+","+a.dom.revealElem+","+a.dom.contentID).stop(!0,!0);b(a.dom.revealID+","+a.dom.revealElem).hide();b(a.dom.wrapperID).find(a.dom.titleID+","+a.dom.titleElem).show().end().find(a.dom.contentID).show()}function q(c){n();switch(c){case "prev":a.position=0==a.position?f(a.newsArr)-2:1==a.position?f(a.newsArr)-1:a.position-2;b(a.dom.titleElem).html(a.newsArr["item-"+
a.position].type);b(a.dom.contentID).html(a.newsArr["item-"+a.position].content);break;case "next":b(a.dom.titleElem).html(a.newsArr["item-"+a.position].type),b(a.dom.contentID).html(a.newsArr["item-"+a.position].content)}a.position==f(a.newsArr)-1?a.position=0:a.position++;p()}function p(){b(a.dom.wrapperID).find(".hoveffect").hover(function(){var a=b(this),c=a.parents(".items").html(),d=a.height(),f=a.offset(),e,g=b(document.body).width();e=f.left;ts_isRTL()&&(e=e+a.width()-320);e+320>g?e=g-330:
10>e&&(e=10);b(".newsmoreinfo").css({top:f.top+d,left:e}).addClass("active").html(c)},function(){b(".newsmoreinfo").removeClass("active").html("")})}var d=(new Date).getTime(),a={position:0,time:0,distance:0,newsArr:{},play:!0,paused:!1,contentLoaded:!1,dom:{contentID:"#ticker-content-"+d,titleID:"#ticker-title-"+d,titleElem:"#ticker-title-"+d+" SPAN",tickerID:"#ticker-"+d,wrapperID:"#ticker-wrapper-"+d,revealID:"#ticker-swipe-"+d,revealElem:"#ticker-swipe-"+d+" SPAN",controlsID:"#ticker-controls-"+
d,prevID:"#prev-"+d,nextID:"#next-"+d,playPauseID:"#play-pause-"+d}};"rtl"==c.direction?c.direction="right":c.direction="left";(function(){r();l.wrap('<div id="'+a.dom.wrapperID.replace("#","")+'"></div>');b(a.dom.wrapperID).children().remove();b(a.dom.wrapperID).append('<div id="'+a.dom.tickerID.replace("#","")+'" class="ticker"><div id="'+a.dom.titleID.replace("#","")+'" class="ticker-title"><span>\x3c!-- --\x3e</span></div><p id="'+a.dom.contentID.replace("#","")+'" class="ticker-content items"></p><div id="'+
a.dom.revealID.replace("#","")+'" class="ticker-swipe"><span>\x3c!-- --\x3e</span></div></div>');b(a.dom.wrapperID).removeClass("no-js").addClass("ticker-wrapper has-js "+c.direction);b(a.dom.tickerElem+","+a.dom.contentID).hide();c.controls&&(b(document).on("click mouseover mousedown mouseout mouseup",a.dom.controlsID,function(c){var d=c.target.id;if("click"==c.type)switch(d){case a.dom.prevID.replace("#",""):a.paused=!0;b(a.dom.playPauseID).addClass("paused");q("prev");break;case a.dom.nextID.replace("#",
""):a.paused=!0;b(a.dom.playPauseID).addClass("paused");q("next");break;case a.dom.playPauseID.replace("#",""):1==a.play?(a.paused=!0,b(a.dom.playPauseID).addClass("paused"),n()):(a.paused=!1,b(a.dom.playPauseID).removeClass("paused"),a.play=!0,a.paused=!1,g())}else"mouseover"==c.type&&b("#"+d).hasClass("controls")?b("#"+d).addClass("over"):"mousedown"==c.type&&b("#"+d).hasClass("controls")?b("#"+d).addClass("down"):"mouseup"==c.type&&b("#"+d).hasClass("controls")?b("#"+d).removeClass("down"):"mouseout"==
c.type&&b("#"+d).hasClass("controls")&&b("#"+d).removeClass("over")}),b(a.dom.wrapperID).append('<ul id="'+a.dom.controlsID.replace("#","")+'" class="ticker-controls"><li id="'+a.dom.playPauseID.replace("#","")+'" class="jnt-play-pause controls"></li><li id="'+a.dom.prevID.replace("#","")+'" class="jnt-prev controls"></li><li id="'+a.dom.nextID.replace("#","")+'" class="jnt-next controls"></li></ul>'));"fade"!=c.displayType&&b(a.dom.contentID).mouseover(function(){0==a.paused&&n()}).mouseout(function(){0==
a.paused&&(a.play=!0,a.paused=!1,g())});m()})()})};b.fn.ticker.defaults={speed:.1,displayType:"reveal",htmlFeed:!0,debugMode:!0,controls:!0,titleText:"Latest",direction:"ltr",pauseOnItems:3E3,fadeInSpeed:600,fadeOutSpeed:300}})(jQuery);