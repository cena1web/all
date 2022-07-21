// News Ticker plugin ~ URL: http://jonmifsud.com/open-source/jquery/jquery-webticker
(function(e){function n(e,t){var s=e.data("settings");if(typeof t==="undefined")t=false;if(t){i(e)}var o=r(e);e.animate(o.css,o.time,"linear",function(){e.css(s.direction,"0");n(e,true)})}function r(e){var t=e.data("settings");var n=e.children().first();var r=Math.abs(-e.css(t.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var t=e.data("settings");var i=r*1e3/t.speed;var s={};s[t.direction]=e.css(t.direction).replace("px","").replace("auto","0")-r;return{css:s,time:i}}function i(e){var t=e.data("settings");e.css("transition-duration","0s").css(t.direction,"0");var n=e.children().first();if(n.hasClass("webticker-init"))n.remove();else e.children().last().after(n)}function s(e,t){if(typeof t==="undefined")t=false;if(t){i(e)}var n=r(e);var s=n.time/1e3;s+="s";e.css(n.css).css("transition-duration",s)}function o(t,n,r){var i;e.get(t,function(t){var s=e(t);s.find("item").each(function(){var t=e(this),n={title:t.find("title").text(),link:t.find("link").text()};listItem="<li><a href='"+n.link+"'>"+n.title+"</a></li>";i+=listItem});r.webTicker("update",i,n)})}function u(t){var n=t.data("settings");t.width("auto");var r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});if(r<t.parent().width()||t.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get());while(r-itemWidth<t.parent().width()||t.children().length==1){var i=t.children().clone();t.append(i);r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get())}}else{var s=t.parent().width()-r;s+=t.find("li:first").width();var o=t.find("li:first").height();t.append('<li class="ticker-spacer" style="width:'+s+"px;height:"+o+'px;"></li>')}}if(n.startEmpty){var o=t.find("li:first").height();t.prepend('<li class="webticker-init" style="width:'+t.parent().width()+"px;height:"+o+'px;"></li>')}r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});t.width(r+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=t.width()){t.width(t.width()+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var t=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]=="")return true;while(t.length)if(t.pop()+"Transition"in e)return true;return false}();var a={init:function(r){r=jQuery.extend({speed:50,direction:"right",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},r);return this.each(function(){jQuery(this).data("settings",r);var i=jQuery(this);i.addClass("newsticker");var a=i.wrap("<div class='mask'></div>");a.after("<span class='tickeroverlay-right'>&nbsp;</span><span class='tickeroverlay-left'>&nbsp;</span>");var f=i.parent().wrap("<div class='tickercontainer'></div>");u(i);if(r.rssurl){o(r.rssurl,r.type,i);if(r.rssfrequency>0){window.setInterval(function(){o(r.rssurl,r.type,i)},r.rssfrequency*1e3*60)}}if(t){i.css("transition-duration","0s").css(r.direction,"0");s(i,false);i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(!i.is(t.target)){return false}s(e(this),true)})}else{n(e(this))}if(r.hoverpause){i.hover(function(){if(t){var n=e(this).css(r.direction);e(this).css("transition-duration","0s").css(r.direction,n)}else jQuery(this).stop()},function(){if(jQuery(this).data("settings").moving){if(t){s(e(this),false)}else{n(i)}}})}})},stop:function(){var n=e(this).data("settings");if(n.moving){n.moving=false;return this.each(function(){if(t){var r=e(this).css(n.direction);e(this).css("transition-duration","0s").css(n.direction,r)}else e(this).stop()})}},cont:function(){var r=e(this).data("settings");if(!r.moving){r.moving=true;return this.each(function(){if(t){s(e(this),false)}else{n(e(this))}})}},update:function(t,n,r,i){n=n||"reset";if(typeof r==="undefined")r=true;if(typeof i==="undefined")i=false;if(typeof t==="string"){t=e(t)}var s=e(this);s.webTicker("stop");var o=e(this).data("settings");if(n=="reset"){s.html(t);s.css(o.direction,"0");u(s)}else if(n=="swap"){s.children("li").addClass("old");for(var a=0;a<t.length;a++){id=e(t[a]).data("update");match=s.find('[data-update="'+id+'"]');if(match.length<1){if(r){if(s.find(".ticker-spacer:first-child").length==0&&s.find(".ticker-spacer").length>0){s.children("li.ticker-spacer").before(t[a])}else{s.append(t[a])}}}else s.find('[data-update="'+id+'"]').replaceWith(t[a]);}s.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(i)s.children("li").remove(".old");stripWidth=0;s.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});s.width(stripWidth+200)}s.webTicker("cont")}};e.fn.webTicker=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.webTicker")}}})(jQuery);

// news-ticker-related2.js
var _0xa772=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x64\x61\x74\x61\x2D\x6E\x6F","\x61\x74\x74\x72","\x73\x70\x61\x6E","\x66\x69\x6E\x64","","\x64\x61\x74\x61\x2D\x6C\x61\x62\x65\x6C","\x64\x61\x74\x61\x2D\x74\x79\x70\x65","\x72\x65\x63\x65\x6E\x74","\x6D\x61\x74\x63\x68","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x64\x65\x66\x61\x75\x6C\x74\x3F\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74\x26\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x67\x65\x74","\x6A\x73\x6F\x6E\x70","\x3C\x75\x6C\x3E","\x6C\x65\x6E\x67\x74\x68","\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x6C\x69\x6E\x6B","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x72\x65\x6C","\x68\x72\x65\x66","\x24\x74","\x74\x69\x74\x6C\x65","\x74\x65\x72\x6D","\x63\x61\x74\x65\x67\x6F\x72\x79","\x63\x6F\x6E\x74\x65\x6E\x74","\x68\x74\x6D\x6C","\x3C\x64\x69\x76\x3E","\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x69\x6E\x64\x65\x78\x4F\x66","\x2F\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x2F\x6D\x71\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x72\x65\x70\x6C\x61\x63\x65","\x75\x72\x6C","\x6D\x65\x64\x69\x61\x24\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x3C\x69\x6D\x67","\x73\x37\x32\x2D\x63","\x73\x31\x36\x30\x30","\x73\x72\x63","\x69\x6D\x67\x3A\x66\x69\x72\x73\x74","\x3C\x6C\x69\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6B\x2D\x74\x68\x75\x6D\x62\x22\x3E\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6B\x2D\x69\x6D\x67\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22\x74\x6B\x69\x6D\x67\x22\x20\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x75\x72\x6C\x28","\x29\x20\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74\x20\x63\x65\x6E\x74\x65\x72\x20\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x73\x69\x7A\x65\x3A\x20\x63\x6F\x76\x65\x72\x22\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x79\x69\x6D\x67\x2D\x6C\x61\x79\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x2F\x73\x65\x61\x72\x63\x68\x2F\x6C\x61\x62\x65\x6C\x2F","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x73\x74\x2D\x74\x61\x67\x20\x69\x63\x6F\x6E\x20","\x22\x3E","\x3C\x2F\x61\x3E\x3C\x68\x33\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x79\x61\x72\x64\x2D\x74\x69\x74\x6C\x65\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x2F\x68\x33\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E","\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x77\x72\x61\x70\x49\x6E\x6E\x65\x72","\x68\x32","\x70\x72\x65\x76","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x66\x69\x72\x65\x22\x3E\x3C\x2F\x69\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x77\x65\x62\x54\x69\x63\x6B\x65\x72","\x75\x6C","\x65\x61\x63\x68","\x2E\x74\x69\x63\x6B\x65\x72\x20\x2E\x77\x69\x64\x67\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x61\x6A\x61\x78","\x6C\x61\x62\x65\x6C","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x64\x65\x66\x61\x75\x6C\x74\x2F\x2D\x2F","\x3F\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74\x26\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x2E\x74\x69\x63\x6B\x65\x72\x20\x2E\x48\x54\x4D\x4C\x20\x2E\x77\x69\x64\x67\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74"];_0xa772[0];var _0x26b0=[_0xa772[1],_0xa772[2],_0xa772[3],_0xa772[4],_0xa772[5],_0xa772[6],_0xa772[7],_0xa772[8],_0xa772[9],_0xa772[10],_0xa772[11],_0xa772[12],_0xa772[13],_0xa772[14],_0xa772[15],_0xa772[16],_0xa772[17],_0xa772[18],_0xa772[19],_0xa772[20],_0xa772[21],_0xa772[22],_0xa772[23],_0xa772[24],_0xa772[25],_0xa772[26],_0xa772[27],_0xa772[28],_0xa772[29],_0xa772[30],_0xa772[31],_0xa772[32],_0xa772[33],_0xa772[34],_0xa772[35],_0xa772[36],_0xa772[37],_0xa772[38],_0xa772[39],_0xa772[40],_0xa772[41],_0xa772[42],_0xa772[43],_0xa772[44],_0xa772[45],_0xa772[46],_0xa772[47],_0xa772[48],_0xa772[49],_0xa772[50],_0xa772[51],_0xa772[52],_0xa772[53],_0xa772[54],_0xa772[55],_0xa772[56],_0xa772[57],_0xa772[58],_0xa772[59],_0xa772[60],_0xa772[61],_0xa772[62]];var _0xb9cb=[_0x26b0[0],_0x26b0[1],_0x26b0[2],_0x26b0[3],_0x26b0[4],_0x26b0[5],_0x26b0[6],_0x26b0[7],_0x26b0[8],_0x26b0[9],_0x26b0[10],_0x26b0[11],_0x26b0[12],_0x26b0[13],_0x26b0[14],_0x26b0[15],_0x26b0[16],_0x26b0[17],_0x26b0[18],_0x26b0[19],_0x26b0[20],_0x26b0[21],_0x26b0[22],_0x26b0[23],_0x26b0[24],_0x26b0[25],_0x26b0[26],_0x26b0[27],_0x26b0[28],_0x26b0[29],_0x26b0[30],_0x26b0[31],_0x26b0[32],_0x26b0[33],_0x26b0[34],_0x26b0[35],_0x26b0[36],_0x26b0[37],_0x26b0[38],_0x26b0[39],_0x26b0[40],_0x26b0[41],_0x26b0[42],_0x26b0[43],_0x26b0[44],_0x26b0[45],_0x26b0[46],_0x26b0[47],_0x26b0[48],_0x26b0[49],_0x26b0[50],_0x26b0[51],_0x26b0[52],_0x26b0[53],_0x26b0[54],_0x26b0[55],_0x26b0[56],_0x26b0[57],_0x26b0[58],_0x26b0[59],_0x26b0[60],_0x26b0[61]];var _0xd6ef=[_0xb9cb[0],_0xb9cb[1],_0xb9cb[2],_0xb9cb[3],_0xb9cb[4],_0xb9cb[5],_0xb9cb[6],_0xb9cb[7],_0xb9cb[8],_0xb9cb[9],_0xb9cb[10],_0xb9cb[11],_0xb9cb[12],_0xb9cb[13],_0xb9cb[14],_0xb9cb[15],_0xb9cb[16],_0xb9cb[17],_0xb9cb[18],_0xb9cb[19],_0xb9cb[20],_0xb9cb[21],_0xb9cb[22],_0xb9cb[23],_0xb9cb[24],_0xb9cb[25],_0xb9cb[26],_0xb9cb[27],_0xb9cb[28],_0xb9cb[29],_0xb9cb[30],_0xb9cb[31],_0xb9cb[32],_0xb9cb[33],_0xb9cb[34],_0xb9cb[35],_0xb9cb[36],_0xb9cb[37],_0xb9cb[38],_0xb9cb[39],_0xb9cb[40],_0xb9cb[41],_0xb9cb[42],_0xb9cb[43],_0xb9cb[44],_0xb9cb[45],_0xb9cb[46],_0xb9cb[47],_0xb9cb[48],_0xb9cb[49],_0xb9cb[50],_0xb9cb[51],_0xb9cb[52],_0xb9cb[53],_0xb9cb[54],_0xb9cb[55],_0xb9cb[56],_0xb9cb[57],_0xb9cb[58],_0xb9cb[59],_0xb9cb[60],_0xb9cb[61]];$(_0xd6ef[61])[_0xd6ef[55]](function(){var _0x81e4x4=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[0])|| _0xd6ef[4];var _0x81e4x5=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[5])|| _0xd6ef[4];var _0x81e4x6=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[6])|| _0xd6ef[4];if(_0x81e4x6!= void(0)&& _0x81e4x6[_0xd6ef[8]](_0xd6ef[7])){$[_0xd6ef[57]]({url:_0xd6ef[9]+ _0x81e4x4,type:_0xd6ef[10],dataType:_0xd6ef[11],success:function _0x81e4x7(_0x81e4x8){var _0x81e4x9=_0xd6ef[4];var _0x81e4xa=_0xd6ef[12];var _0x81e4xb=0;for(;_0x81e4xb< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0xd6ef[13]];_0x81e4xb++){var _0x81e4xc=0;for(;_0x81e4xc< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0xd6ef[13]];_0x81e4xc++){if(_0xd6ef[17]== _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[18]]){_0x81e4x9= _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[19]];break}};var _0x81e4xd=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[21]][_0xd6ef[20]];var _0x81e4xe=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[23]][0][_0xd6ef[22]];var _0x81e4xf=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[24]][_0xd6ef[20]];var _0x81e4x10=$(_0xd6ef[26])[_0xd6ef[25]](_0x81e4xf);if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[27])){var _0x81e4x11=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[33]][_0xd6ef[32]][_0xd6ef[31]](_0xd6ef[29],_0xd6ef[30]);var _0x81e4x12=_0x81e4x11}else {if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[34])){var _0x81e4x13=_0x81e4x10[_0xd6ef[3]](_0xd6ef[38])[_0xd6ef[1]](_0xd6ef[37])[_0xd6ef[31]](_0xd6ef[35],_0xd6ef[36]);_0x81e4x12= _0x81e4x13}else {_0x81e4x12= no_image}};_0x81e4xa= _0x81e4xa+ (_0xd6ef[39]+ _0x81e4x9+ _0xd6ef[40]+ _0x81e4x12+ _0xd6ef[41]+ _0x81e4xe+ _0xd6ef[42]+ _0x81e4xe+ _0xd6ef[43]+ _0x81e4xe+ _0xd6ef[44]+ _0x81e4x9+ _0xd6ef[43]+ _0x81e4xd+ _0xd6ef[45])};_0x81e4xa= _0x81e4xa+ _0xd6ef[46];$(_0xd6ef[56])[_0xd6ef[55]](function(){$(this)[_0xd6ef[25]](_0x81e4xa);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[48]](_0xd6ef[47]);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[52]](_0xd6ef[51]);$(this)[_0xd6ef[3]](_0xd6ef[54])[_0xd6ef[53]]()})}})}else {if(_0x81e4x6!= void(0)&& _0x81e4x6[_0xd6ef[8]](_0xd6ef[58])){$[_0xd6ef[57]]({url:_0xd6ef[59]+ _0x81e4x5+ _0xd6ef[60]+ _0x81e4x4,type:_0xd6ef[10],dataType:_0xd6ef[11],success:function _0x81e4x7(_0x81e4x8){var _0x81e4x9=_0xd6ef[4];var _0x81e4xa=_0xd6ef[12];var _0x81e4xb=0;for(;_0x81e4xb< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0xd6ef[13]];_0x81e4xb++){var _0x81e4xc=0;for(;_0x81e4xc< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0xd6ef[13]];_0x81e4xc++){if(_0xd6ef[17]== _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[18]]){_0x81e4x9= _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[19]];break}};var _0x81e4xd=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[21]][_0xd6ef[20]];var _0x81e4xe=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[23]][0][_0xd6ef[22]];var _0x81e4xf=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[24]][_0xd6ef[20]];var _0x81e4x10=$(_0xd6ef[26])[_0xd6ef[25]](_0x81e4xf);if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[27])){var _0x81e4x11=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[33]][_0xd6ef[32]][_0xd6ef[31]](_0xd6ef[29],_0xd6ef[30]);var _0x81e4x12=_0x81e4x11}else {if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[34])){var _0x81e4x13=_0x81e4x10[_0xd6ef[3]](_0xd6ef[38])[_0xd6ef[1]](_0xd6ef[37])[_0xd6ef[31]](_0xd6ef[35],_0xd6ef[36]);_0x81e4x12= _0x81e4x13}else {_0x81e4x12= no_image}};_0x81e4xa= _0x81e4xa+ (_0xd6ef[39]+ _0x81e4x9+ _0xd6ef[40]+ _0x81e4x12+ _0xd6ef[41]+ _0x81e4xe+ _0xd6ef[42]+ _0x81e4xe+ _0xd6ef[43]+ _0x81e4xe+ _0xd6ef[44]+ _0x81e4x9+ _0xd6ef[43]+ _0x81e4xd+ _0xd6ef[45])};_0x81e4xa= _0x81e4xa+ _0xd6ef[46];$(_0xd6ef[61])[_0xd6ef[55]](function(){$(this)[_0xd6ef[25]](_0x81e4xa);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[48]](_0xd6ef[47]);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[52]](_0xd6ef[51]);$(this)[_0xd6ef[3]](_0xd6ef[54])[_0xd6ef[53]]()})}})}}})

// navi-menu-fixed.js
$(function(){

var navigasi = $(".navi-menu-wrap").offset().top;
    var sticky = function(){
var srolltop = $(window).scrollTop();

if(srolltop > navigasi)
{
$(".navi-menu-wrap").addClass("fixed");
}else
{
$(".navi-menu-wrap").removeClass("fixed");
}

 };

sticky();
    $(window).scroll(function(){
sticky();
    });
  });

// change-web-color.js
$('.color-box').click(function() {
  var idColor = $(this).css("background-color");
  var iddColor = $(this).css("color");
  var idddColor = $(this).css("border-color");
  var iddddColor = $(this).css("fill");
  var ibColor = $(this).hover("color");

  $(".top-bar-social #social a, .ticker .title, .ticker .post-tag, .lowerbar h2, .cloud-label-widget-content .label-count,.item .post-footer .share-box .post-labels .label-title,.comments .comments-content .icon.blog-author, .FollowByEmail .follow-by-email-inner .follow-by-email-submit, .contact-close, .contact-form-button-submit, #scroll, .pagenav .current, headbanger").css("background-color", idColor);
  $(".menu-tab li.active a, .switchom, .post-author, #fa-fa-calendar-o, #fa-fa-heart-o,.ticker .title .fa,.contsho h3 span,.index .post-labels a, .archive .post-labels a,.jugas_footer_copyright a,#fa-fa-comment, .entry-content a, .post-title, .b-color").css("color", iddColor)
$( ".menu-tab li a" ).click(function() {
  $( ".menu-tab li a" ).css("color", iddColor);
  $( ".menu-tab li.active a" ).css("color", "#48494d");});
$( "#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, .popup-link, .bottom-bar-social #social a.facebook, .bottom-bar-social #social a.twitter, .bottom-bar-social #social a.youtube, .bottom-bar-social #social a.instagram, .bottom-bar-social #social a.linkedin, .bottom-bar-social #social a.telegram, .bottom-bar-social #social a.pinterest,#post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count" ).mouseover(function() {
  $( "#menu ul > li > a:hover, #navo-main a:hover, .ticker .tyard-title a:hover, .PopularPosts ul li a:hover, .popup-link:hover, .bottom-bar-social ul#social a:hover,#post-pager .blog-pager-older-link:hover, #post-pager .blog-pager-newer-link:hover, .comments .comments-content .user a:hover, .BlogArchive #ArchiveList ul li a:hover, .post-count:hover" ).css("color", iddColor);});
$("#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, #post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link").mouseout(function(){
  $("#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, #post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link").css("color", "#48494d");});;
$(".popup-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count").mouseout(function(){
  $(".popup-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count").css("color", "#000");});;
$(".bottom-bar-social #social a.facebook").mouseout(function(){
  $(".bottom-bar-social #social a.facebook").css("color", "#3b5998");});;
$(".bottom-bar-social #social a.twitter").mouseout(function(){
  $(".bottom-bar-social #social a.twitter").css("color", "#00aced");});;
$(".bottom-bar-social #social a.youtube").mouseout(function(){
  $(".bottom-bar-social #social a.youtube").css("color", "#cd201f");});;
$(".bottom-bar-social #social a.instagram").mouseout(function(){
  $(".bottom-bar-social #social a.instagram").css("color", "#c13584");});;
$(".bottom-bar-social #social a.linkedin").mouseout(function(){
  $(".bottom-bar-social #social a.linkedin").css("color", "#0077b5");});;
$(".bottom-bar-social #social a.telegram").mouseout(function(){
  $(".bottom-bar-social #social a.telegram").css("color", "#0088cc");});;
$(".bottom-bar-social #social a.pinterest").mouseout(function(){
  $(".bottom-bar-social #social a.pinterest").css("color", "#bd081c");});;
 
$( ".cloud-label-widget-content .label-size, #scroll, .pagenav a" ).mouseover(function() {
  $( ".cloud-label-widget-content .label-size:hover, .pagenav a:hover" ).css("background-color", idColor);
  $( ".cloud-label-widget-content .label-size:hover span, #scroll:hover" ).css("background-color", "#48494d");});
$(".cloud-label-widget-content .label-size, #scroll, .pagenav a").mouseout(function(){
  $(".cloud-label-widget-content .label-size").css("background-color", "#f5f5f5");
  $(".pagenav a").css("background-color", "#48494d");
  $(".cloud-label-widget-content .label-size span, #scroll").css("background-color", idColor);});;

$( ".entry-content a" ).mouseover(function() { $( ".entry-content a:hover" ).css("color", "#dd2f2f");});
$(".entry-content a").mouseout(function(){ $(".entry-content a").css("color", idColor);});;

$( ".status-msg-wrap a" ).mouseover(function() { $( ".status-msg-wrap a:hover" ).css("color", idColor);});
$(".status-msg-wrap a").mouseout(function(){ $(".status-msg-wrap a").css("color", "#000");});;

$( ".top-bar-social #social a" ).mouseover(function() {
  $( ".top-bar-social #social a.facebook:hover" ).css("background-color", "#3b5998");
  $( ".top-bar-social #social a.twitter:hover" ).css("background-color", "#00aced");
  $( ".top-bar-social #social a.youtube:hover" ).css("background-color", "#cd201f");
  $( ".top-bar-social #social a.instagram:hover" ).css("background-color", "#c13584");
  $( ".top-bar-social #social a.linkedin:hover" ).css("background-color", "#0077b5");
  $( ".top-bar-social #social a.telegram:hover" ).css("background-color", "#0088cc");
  $( ".top-bar-social #social a.pinterest:hover" ).css("background-color", "#bd081c");});
$(".top-bar-social #social a").mouseout(function(){ $(".top-bar-social #social a").css("background-color", idColor);});;

 $(".top-bar,.comments .comments-content .inline-thread .comment-block, .gg, #privcy").css("border-color", idddColor);  
  $(".g, .small").css("fill", iddddColor); });

$(".switchom").on("click", function(){
$(".switcher").toggleClass("open");
});

// back2top.js
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $("#scroll").fadeIn(); 
        } else { 
            $("#scroll").fadeOut(); 
        } 
    }); 
    $("#scroll").click(function(){ 
        $('html, body').animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// next-prev-post.js
var no_image = "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
var month_format = [, "كانون2", "شباط", "آذار", "نيسان", "آيار", "حزيران", "تموز", "آب", "أيلول", "تشرين1", "تشرين2", "كانون1"];
var more_text = "View More";
var comments_text = "<span>Post </span>Comment";
var POSTPAGER_OLDER = "السابق <i class='fa fa-hand-o-left'></i>"; // post nav text "previous post"
var POSTPAGER_NEWER = "<i class='fa fa-hand-o-right'></i> التالي"; // post nav text "next post"

// prevent-pic-from-copy.js
function nocontext(e) {
        var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG") {
            return false;
        }
    }
    var alertMsg = "يمنع منعا باتا نسخ الصور";
    document.oncontextmenu = nocontext;

// contact-us1.js
$(".contact-button a").click(function() {
        var e = $(".contact-sec");
        if (e.is(":hidden")) {
            e.fadeIn(300);
            e.addClass("contact-show");
            $("#outer-wrapper").addClass("pop_contact ")
        }
        return false
    });
    $(document).bind("click", function(e) {
        if ($(e.target).parents(".contact-sec").length === 0) {
            $(".contact-sec").fadeOut(300);
            $("#outer-wrapper").removeClass("pop_contact ");
            $(".contact-sec").removeClass("contact-show")
        }
    });
    $(".contact-close").click(function() {
        $(".contact-sec").fadeOut(300);
        $("#outer-wrapper").removeClass("pop_contact ");
        $(".contact-sec").removeClass("contact-show");
        return false
    });

// somes-java.js
/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});


// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"القائمة",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();

// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// youtube-box.js
$(".link-lightbox").on("click", function() {
    if (window.innerHeight > 540) var a = (window.innerHeight - 540) / 2;
    var b = '<iframe src="" width="640" height="480" id="video-embed" style="border:0;"></iframe>',
        c = '<div id="close-icon"></div>',
        d = '<div class="lightbox" style="margin-top:' + a + 'px">',
        e = '<div id="back-lightbox">',
        f = '<div id="background-close"></div>',
        g = '<div id="window">',
        h = '<div id="ref"><a href="//www.arabes1.com/2018/03/jquery-on-click-pop-up-light-box-video.html" rel="nofollow" target="_blank">مطورة بواسطة: سينا ويب</a>',
        i = "</div></div></div></div>";
    if ($("body").append(g + f + e + d + c + b + h+i), $("#window").hide(), "youtube" == $(this).data("videosite")) var i = "https://www.youtube.com/embed/" + $(this).data("videoid") + "?autoplay=1";
    else if ("vimeo" == $(this).data("videosite")) var i = "https://player.vimeo.com/video/" + $(this).data("videoid") + "?autoplay=1";
    $("#window").fadeIn(), $("#video-embed").attr("src", i), $("#close-icon").on("click", function() {
        $("#window").fadeOut(1e3, function() {
            $(this).remove()
        })
    }), $("#background-close").on("click", function() {
        $("#window").fadeOut(1e3, function() {
            $(this).remove()
        })
    })
}), $(document).on("keyup", function(a) {
    27 == a.keyCode && $("#window").fadeOut(1e3, function() {
        $(this).remove()
    })
}), $(document).on("mouseover", function() {
    var a = (window.innerHeight - 540) / 2;
    $(".lightbox").attr("style", "margin-top:" + a + "px")
});
