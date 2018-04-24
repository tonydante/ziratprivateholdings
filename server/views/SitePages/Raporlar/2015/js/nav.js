var page = window.location.pathname.split("/").pop();

$('#anaMenu').append("" +
"<div class='container'>" +
	"<div class='navbar-header'>" +
		"<div class='col-lg-2 col-md-2 col-sm-3'>" +
			"<button type='button' class='navbar-toggle collapsed hidden' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>" +
				"<span class='sr-only'>Toggle navigation</span> " +
				"<span class='icon-bar'></span> " +
				"<span class='icon-bar'></span> " +
				"<span class='icon-bar'></span> " +
			"</button>" +
			"<a class='navbar-brand' href='index.html'><img src='img/logo.png' data-rjs='img/logo@2x.png' alt='Ziraat Bankası'></a>" +
		"</div>" +

		"<div class='col-sm-5'>" +
			"<div class='navbar-title' style='font-size:14px;'><span class='hidden-xs right-padding-15'>|</span> <span style='white-space:nowrap;'>SÜRDÜRÜLEBİLİRLİK RAPORU</span> <strong>2015</strong></div>" +
		"</div>" +

		"<div class='col-sm-4 col-md-offset-1'>" +
			"<p class='social'>" +
				"<a id='fb' href='http://www.facebook.com/ziraatbankasi' title='facebook' target='_blank'><i class='fa fa-2x fa-facebook-official' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='tw' href='http://twitter.com/ziraatbankasi' title='twitter' target='_blank'><i class='fa fa-2x fa-twitter-square' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='ins' href='https://instagram.com/ziraatbankasi/' title='instagram' target='_blank'><i class='fa fa-2x fa-instagram' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='yt' href='http://www.youtube.com/ziraatbankasi' title='youtube' target='_blank'><i class='fa fa-2x fa-youtube-play' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='gp' href='https://plus.google.com/116185007959220232643/posts' title='Google' target='_blank'><i class='fa fa-2x fa-google-plus-square' aria-hidden='true'></i></a>" +
			"</p>" +
		"</div>" +
	"</div>" +

	"<div class='collapse in navbar-collapse' id='navbar'>" +
		"<ul class='nav navbar-nav'>" +
			"<li><a class='right-padding-0' href='index.html'><i class='fa fa-home' aria-hidden='true'></i></a></li>" +
			"<li class='dropdown'>" +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Güçlü Kökler Üzerinde <br class='hidden-lg hidden-xs'>Bugün ve Yarınımız <span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='ykbm.html'>Yönetim Kurulu Başkanı'nın Mesajı</a></li>" +
					"<li><a href='gmm.html'>Genel Müdür'ün Mesajı </a></li>" +
					"<li><a href='surdurulebilirlik-performansimiz.html'>Sürdürülebilirlik Performansımız</a></li>" +
					"<li><a href='kisaca.html'>Kısaca Ziraat Bankası</a></li><li><a href='kuresel-hizmetagi.html'>Küresel Hizmet Ağımız</a></li>" +
					"<li><a href='turkiye-hizmetagi.html'>Türkiye Çapına Yayılan Hizmet Ağımız</a></li>" +
					"<li><a href='surdurulebilirlik-politikamiz.html'>Sürdürülebilirlik Politikamız</a></li>" +
					"<li class='dropdown dropdown-submenu'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>Güçlü Köklerimiz, Sağlam Ortaklık Yapımız</a>" +
						"<ul class='dropdown-menu'>" +
							"<li><a href='misyonvizyon.html'>Misyonumuz, Vizyonumuz ve Ortaklık Yapısı</a></li>" +
							"<!--li><a href='misyonvizyon.html#ortaklikyapisi'>Ziraat Bankası Ortaklık Yapısı</a></li-->" +
							"<li><a href='basariseruveni.html'>152 Yıllık Bir Başarı Serüveni </a></li>" +
							"<li><a href='odullerimiz.html'>Ödüllerimiz</a></li>" +
						"</ul>" +
					"</li>" +
				"</ul>" +
			"</li>" +
			"<li class='dropdown'>" +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Sürdürülebilirlik <br class='hidden-lg hidden-xs'>Yaklaşımımız <span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='gelecege-bakis.html'>Geleceğe Bakış</a></li>" +
					"<li><a href='onceliklerimiz.html'>Önceliklerimiz</a></li>" +
					"<li><a href='kurumsal-yonetim.html'>Kurumsal Yönetim</a></li>" +
				"</ul>" +
			"</li>" +
			"<li class='dropdown'>" +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Daha İyi Bir Gelecek için <br class='hidden-lg hidden-xs'>Değer Zincirini Büyütmek <span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='daha-guclu.html'>Daha Güçlü Bir Türkiye Ekonomisi </a></li>" +
					"<li><a href='daha-mutlu.html'>Daha Mutlu Müşteriler</a></li>" +
					"<li><a href='daha-yetkin.html'>Daha Yetkin Çalışanlar</a></li>" +
					"<li><a href='daha-yasa.html'>Daha Yaşanılabilir Bir Çevre</a></li>" +
					"<li><a href='daha-surdur.html'>Daha Sürdürülebilir ve Kaliteli Tedarik</a></li>" +
					"<li><a href='daha-yuksek.html'>Daha Yüksek Yaşam Kalitesi olan Toplum</a></li>" +
					"<li><a href='gri.html'>GRI İçerik Endeksi</a></li>" +
					"<li><a href='cocuklara-ozel.html'>Çocuklara Özel Sürdürülebilir Bir Proje</a></li>" +
					"<li><a href='iletisim.html'>İletişim</a></li>" +
					"<li><a href='ZRTSRDT2015.pdf' target='_blank'>Ziraat Bankası 2015 Sürdürülebilirlik Raporu <i class='fa fa-file-pdf-o' aria-hidden='true'></i></a></li>" +
				"</ul>" +
			"</li>" +
			"<div class='dil'><li class='tr'><a class='bold' href='index.html'>TR</a></li>" +
			"<li class='en'><a href='en/" + page + "'>EN</a></li></div>" +
		"</ul>" +
	"</div>" +
"</div>");

$('#homeNav').append("" +
"<div class='container'>" +

	"<div class='navbar-header'>" +
		"<div class='col-lg-2 col-md-2 col-sm-3'>" +
			"<button type='button' class='navbar-toggle collapsed hidden' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>" +
				"<span class='sr-only'>Toggle navigation</span> " +
				"<span class='icon-bar'></span> " +
				"<span class='icon-bar'></span> " +
				"<span class='icon-bar'></span> " +
			"</button>" +
			"<a class='navbar-brand' href='index.html'><img src='../img/logo.png' data-rjs='../img/logo@2x.png' alt='Ziraat Bank'></a>" +
		"</div>" +

		"<div class='col-sm-5'>" +
			"<div class='navbar-title' style='font-size:14px;'><span class='hidden-xs right-padding-15'>|</span> <strong>2015</strong> <span style='white-space:nowrap;'>SUSTAINABILITY REPORT</span></div>" +
		"</div>" +

		"<div class='col-sm-4 col-md-offset-1'>" +
			"<p class='social'>" +
				"<a id='fb' href='http://www.facebook.com/ziraatbankasi' title='facebook' target='_blank'><i class='fa fa-2x fa-facebook-official' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='tw' href='http://twitter.com/ziraatbankasi' title='twitter' target='_blank'><i class='fa fa-2x fa-twitter-square' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='ins' href='https://instagram.com/ziraatbankasi/' title='instagram' target='_blank'><i class='fa fa-2x fa-instagram' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='yt' href='http://www.youtube.com/ziraatbankasi' title='youtube' target='_blank'><i class='fa fa-2x fa-youtube-play' aria-hidden='true'></i></a> \xa0\xa0\xa0\xa0\xa0" +
				"<a id='gp' href='https://plus.google.com/116185007959220232643/posts' title='Google' target='_blank'><i class='fa fa-2x fa-google-plus-square' aria-hidden='true'></i></a>" +
			"</p>" +
		"</div>" +
	"</div>" +

	"<div class='collapse in navbar-collapse' id='navbar'>" +
		"<ul class='nav navbar-nav'>" +
			"<li><a class='right-padding-0' href='index.html'><i class='fa fa-home' aria-hidden='true'></i></a></li>" +
			"<li class='dropdown'>" +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>OUR PRESENT AND FUTURE: <br class='hidden-lg hidden-xs'>BUILT ON A STRONG FOUNDATION<span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='ykbm.html'>Message from the Chairman </a></li>" +
					"<li><a href='gmm.html'>Message from the CEO  </a></li>" +
					"<li><a href='surdurulebilirlik-performansimiz.html'>Our Sustainability Performance</a></li>" +
					"<li><a href='kisaca.html'>Ziraat Bank in Brief	</a></li>" +
					"<li><a href='kuresel-hizmetagi.html'>Our Global Service Network</a></li>" +
					"<li><a href='turkiye-hizmetagi.html'>Our Service Network Across Turkey</a></li>" +
					"<li><a href='surdurulebilirlik-politikamiz.html'>Our Sustainability Policy</a></li>" +
					"<li class='dropdown dropdown-submenu'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>Our Strong Foundation, Robust Shareholding Structure</a>" +
						"<ul class='dropdown-menu'>" +
							"<li><a href='misyonvizyon.html'>Our Mission, Our Vision and Ziraat Bank Shareholding Structure</a></li>" +
							"<!--li><a href='misyonvizyon.html#ortaklikyapisi'>Ziraat Bankası Ortaklık Yapısı</a></li-->" +
							"<li><a href='basariseruveni.html'>A 152-Year Success Story </a></li>" +
							"<li><a href='odullerimiz.html'>Awards</a></li>" +
						"</ul>" +
					"</li>" +
				"</ul>" +
			"</li>" +
			"<li class='dropdown'> " +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>OUR APPROACH <br class='hidden-lg hidden-xs'>TO SUSTAINABILITY <span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='gelecege-bakis.html'>Future Outlook</a></li>" +
					"<li><a href='onceliklerimiz.html'>Our Priorities</a></li>" +
					"<li><a href='kurumsal-yonetim.html'>Corporate Governance</a></li>" +
				"</ul>" +
			"</li>" +
			"<li class='dropdown'> " +
				"<a href='#' class='dropdown-toggle text-uppercase' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>EXPANDING THE VALUE CHAIN <br class='hidden-lg hidden-xs'>FOR A BRIGHTER FUTURE <span class='caret'></span></a>" +
				"<ul class='dropdown-menu'>" +
					"<li><a href='daha-guclu.html'>A Stronger Turkish Economy</a></li>" +
					"<li><a href='daha-mutlu.html'>More Satisfied Customers</a></li>" +
					"<li><a href='daha-yetkin.html'>More Highly Competent Employees</a></li>" +
					"<li><a href='daha-yasa.html'>A More Livable Environment</a></li>" +
					"<li><a href='daha-surdur.html'>More Sustainable and Higher Quality Procurement</a></li>" +
					"<li><a href='daha-yuksek.html'>A Society with Higher Living Standards</a></li>" +
					"<li><a href='gri.html'>Index of GRI Indicators </a></li>" +
					"<li><a href='cocuklara-ozel.html'>A Special Sustainability Project For Children </a></li>" +
					"<li><a href='iletisim.html'>Contacts</a></li>" +
					"<li><a href='ZRT_SRDE_2015.pdf' target='_blank'>Ziraat Bank 2015 Sustainability Report <i class='fa fa-file-pdf-o' aria-hidden='true'></i></a></li>" +
				"</ul>" +
			"</li>" +
			"<div class='dil'><li class='tr'><a href='../" + page + "'>TR</a></li>" +
			"<li class='en'><a class='bold' href='index.html'>EN</a></li></div>" +
		"</ul>" +
	"</div>" +

"</div>");


$('footer.footer.tr').append("<div class='container'><div class='row'>" + 
"<div class='col-sm-6'>" +
	"<p class='footer-title'>© ZİRAAT BANKASI 2015 \xa0\xa0\xa0\xa0\xa0</p>" +
"</div>" +
"<div class='col-sm-6'><p class='small finar'>FİNAR tarafından üretilmiştir.\xa0\xa0\xa0<a data-toggle='tooltip' data-placement='top' data-original-title='Bu site tüm mobil / tablet / masaüstü çözünürlüklerine göre  tasarlanmıştır (responsive design).'><img src='img/responsive.png' style='vertical-align:baseline;' alt='responsive design' /></a></p></div></div></div>");

$('footer.footer.en').append("<div class='container'><div class='row'>" + 
"<div class='col-sm-6'>" +
	"<p class='footer-title'>© ZİRAAT BANK 2015 \xa0\xa0\xa0\xa0\xa0</p>" +
"</div>" +
"<div class='col-sm-6'><p class='small finar'>Produced by FİNAR.\xa0\xa0\xa0<a data-toggle='tooltip' data-placement='top' data-original-title='This site has responsive design'><img src='../img/responsive.png' style='vertical-align:baseline;' alt='responsive design' /></a></p></div></div></div>");