/*--------------------Bootstrap Dropdown Submenu--------------------*/
(function($){
	"use strict";
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);
/*--------------------Bootstrap Dropdown Submenu--------------------*/


/*-------------------------------------------------------------------*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89150711-1', 'auto');
  ga('send', 'pageview');

/*-------------------------------------------------------------------*/

$(document).ready(function(){

	"use strict";

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});

	$('.navbar-header').on('click', 'button', function(){
		$('body').toggleClass('body-collapsed body-uncollapsed');
	});


	$('.collapse-button i').on('click', function(){
		$(this).toggleClass('fa-plus-square-o fa-minus-square-o');
		});
	
 	function mobileMenu() {
		var viewportWidth = $(window).width();
		if (viewportWidth < 768) {
				$("nav.navbar div.collapse").removeClass("in");
				$("nav button").removeClass("hidden");
			} else if (viewportWidth >= 768) {
				$("nav.navbar div.collapse").addClass("in");
				$("nav button").addClass("hidden");
				}
	}

	function boxEdits() {
		var viewportWidth = $(window).width();
		if (viewportWidth < 768) {
				$("#text2, #img3, #text5, #img6").removeClass("pull-right");
			} else if (viewportWidth >= 768) {
				$("#text2, #img3").addClass("pull-right");
				}
		if (viewportWidth < 992 && viewportWidth >=768 ) {
				$("#img2 div.info-image, #img5 div.info-image").removeClass("desc-bottom").addClass("desc-right");
			} else if (viewportWidth >= 992) {
				$("#img2 div.info-image, #img5 div.info-image").removeClass("desc-right").addClass("desc-bottom");
				} else if (viewportWidth < 768) {
					$("div.info-image").removeClass("desc-right").addClass("desc-bottom");
				}
	}
	
	function konseptBoxes() {
	  var viewportWidth = $(window).width();
	  if(viewportWidth <= 767) {
		$("#konseptBoxes div.eq-height>div.info-image>div.image>img").each(function() {
		  $(this).attr("src", $(this).attr("src").replace("img/img-holder/", "img/img-holder/767/"));
		});
	  }
	}	

	$(window).on('load', function(){
		$(".preloder").fadeOut("fast"); //PRELODER
		//retinajs(); 					//RETINA.JS
		konseptBoxes();					//konsept resimlerin değişmesi
		mobileMenu();					//mobil menüde hamburger iconu
		boxEdits();						//konsept metinlerin kırmızı üçgenlerinin yön değişikliği
		
	});
	
	//$(window).resizeDimension('width', function () {
	    //window.location.reload();					//reload firefox'da çalışmıyordiğer browserlarda çalışıyor	
		//window.location.href = window.location.href;// firefox dahil tüm browserlarda çalışıyor(!)
	//});

	$('#grafik>div.row>div.col-xs-3').on('click', function(){
		$(this).toggleClass('col-xs-3 col-xs-12');
	});
	
});
