$(function() {
	checkDownLink()
	//jQuery(window).bind("focus", function(event){$('#popmenus').hide();});
	jQuery(window).bind("resize", function(event){ checkDownLink(); });
	jQuery(window).bind("scroll", function(event){ checkDownLink(); });
	//$('#wrapper1').css('left', $('#m1').position().left );
	if ( $(window).width()<1200 ) {$('#footerfullwidth').css('width',1200);}
	//$('#footer1').css('width', ($(window).width()-980)/2-20);
	//$("#m0").mouseover(function(){$('#popupmenu').hide();});
	//$("#popupmenu").mouseleave(function(){$('#popupmenu').hide();});
});

function verticalScrollPresent(){
	return (document.documentElement.scrollHeight !== document.documentElement.clientHeight);
}

function checkDownLink(){
	$('#downlink').css('left', ($(window).width()-950)/2);
	if (verticalScrollPresent()) {$('#downlink').show();} else {$('#downlink').hide();}
	if ( $('#footer').visible(true) ) $('#downlink').hide();
	if ($(window).scrollTop() > 300) {$('#homelink').show();} else {$('#homelink').hide();}
}

function scrolldown(){
	var height = $(window).height();
    var width = $(window).width();
	var sctop = $(window).scrollTop()
	var scrollamount = height + sctop - 50
	$('html, body').animate(
		{scrollTop: scrollamount},
		800,
		function(){ checkDownLink(); }
	);
}

function popac(what){
	pp=$('#wrapper'+what)
	mp=$('#m'+what)
	$('#popupmenu').show();
	$('.menuwrapper').hide();
	pp.show();
}

function slideCustom(){
	fadeinduration=2000;
	$('#p'+siradaki).fadeOut(1000);
	$('#s'+siradaki).fadeOut(1000);
	//$('#p'+siradaki).animate({opacity:0},{duration:fadeinduration,easing:'linear',queue:false});
	//$('#s'+siradaki).animate({opacity:0},{duration:fadeinduration,easing:'linear',queue:false});
	siradaki=siradaki+1; if (siradaki==13) siradaki=1;
	//$('#p'+siradaki).show().animate({opacity:1},{duration:fadeinduration,easing:'linear',queue:false});
	//$('#s'+siradaki).show().animate({opacity:1},{duration:fadeinduration,easing:'linear',queue:false});
	$('#p'+siradaki).fadeIn(1000);
	$('#s'+siradaki).fadeIn(1500);
	timer2=setTimeout( "slideCustom()", 4000 );
}

function slideBaslat(neyi, aralik){
	what='#'+neyi
	if ( $(what).attr("sira")==undefined ){$(what).attr("sira",1);}
	sira=parseInt($(what).attr("sira"))
	sonraki=sira+1
	//alert($(what).children().length)
	if (sonraki>$(what).children().length) {sonraki=1;}
	$(what).attr("sira",sonraki)
	fadeinduration=aralik*0.8
	if (fadeinduration>3000) fadeinduration=3000
	$(what+' img').animate({opacity:0},{duration:fadeinduration,easing:'linear',queue:false});
	$(what+' img:nth-child('+sira+')').show().animate({opacity:1},{duration:fadeinduration,easing:'linear',queue:false});
	//$(what+' div:nth-child('+sira+')').show().animate({opacity:1.0}, 500, function() {$(this).css('filter','');} );
	timer1=setTimeout( "slideBaslat('"+neyi+"',"+aralik+")", aralik );
}

function cv(what){
	$('.cvtext').hide()
	$('#cv'+what).show()
}
function cv2(what){
	$('.cvtext2').hide()
	$('#cv'+what).show()
}