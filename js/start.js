$(document).ready(function(){
  /*JS -------------------------------------------------------------------------------------------*/
  /*block_annonce-js*/
  $('.block_annonce .close').click(function(){
    $('.block_annonce').slideToggle();
    return false;
	});
  /*end block_annonce-js*/

  /*Запись на прием*/
  $('#block_orderclick .title').click(function(){
    $('#orderclick .blockslides').slideToggle();
    return false;
	});

  $('#block_orderclick input.btn').click(function(){
    $('#block_orderclick .blockslides').hide();
    $('#block_orderclick .txt.send').show();
    $('#block_orderclick .txt.default').hide();
    $('#block_orderclick .txt.nodefault').show();
    $('#block_orderclick .txt.send').delay(1200).fadeOut();
    $('#block_orderclick .txt.nodefault').delay(1200).fadeOut();
    $('#block_orderclick .txt.default').delay(1600).fadeIn(100);
    return false;
	});
  /*end Запись на прием*/

  /*Задать вопрос врачу*/
  $('#faq .quest.openform a').click(function(){
    $('#faq .blockform').slideToggle();
    //setTimeout(function(){$('.quest.openform').addClass('visible', 0);}, 500);
    //setTimeout(function(){$('.quest.openform.visible').removeClass('visible', 0);}, 0);
    //setTimeout(function(){$('.quest.openform.visible').toggleClass('hidden', 'visible', 1000);}, 1000);
  });

  $('#faq input.btn').click(function(){
    $('#faq .blockform').hide();
    $('#faq .txt.send').show();
    $('#faq .txt.send').delay(1200).fadeOut();
	});
  /*end Задать вопрос врачу*/

  /*test.html-js*/
  $('.ifuser').click(function(){
    $('form.order.inside').addClass('activeuser');
    $('.closed, .form_enter').fadeOut(200);
	});
  /*end test.html-js*/

  /*profile.html-js*/
  $('.pass_replace').click(function(){
    $('.passrow').hide();
    $('.passrow.show').fadeIn(200);
	});
  /*end profile.html-js*/

  /*comments.html-js*/
  $('a.toggler').click(function(){
    this.clicked = !this.clicked;
	  $(this).parent().next().slideToggle();
	  this.innerHTML = ['Ответить', 'Отменить'][+this.clicked];
	});
  /*end comments.html-js*/

  /*contacts.html-js*/
  $('.block_animefeedback form.order.feedback input.btn').click(function(){
    $('form.order.feedback').animate({left:'9999px'}, 1800);
		$('.mailsend').fadeIn(800);
    //$('.block_animefeedback').stop().animate({height:'170px'}, 300); /*Плавное изменение высоты*/
    $('.block_animefeedback').stop().animate({height:'420px'}, 300); /*Плавное изменение высоты*/
	});

  $('.block_animefeedback .cameback_form').click(function(){
		$('.mailsend').fadeOut();
    $('.block_animefeedback').stop().animate({height:'420px'}, 300); /*Плавное изменение высоты*/
    $('form.order.feedback').animate({left:'0px'}, 300);
	});
  /*end contacts.html-js*/

  /*video.html-js*/
  /*$('#video.video .ifr').click(function(){
    $('.ifr').toggleClass('active');

    if($('.ifr').hasClass('active')){
      $('.playbtn').css('display', 'none');
        }else{
      $('.playbtn').css('display', 'block').addClass('active');
    }

    if($('.ifr').hasClass('active')){
      $('.playbtn').hover(function(){
        $(this).hide();
      });
        }else{
      $('.playbtn').css('display', 'block');
    }
  });*/

  $('#video.video .playbtn').hover(function(){
    $(this).delay(2000).fadeOut();
  });
  /*end video.html-js*/
  /*end JS ---------------------------------------------------------------------------------------*/

  /*Form Styler-slimScrollBar --------------------------------------------------------------------*/
  $(function(){
  	$('.box select').styler();

  	$('.box .jq-selectbox .dropdown ul').slimscroll({
  		alwaysVisible: true,
  		opacity: 1,
  		railVisible: true,
  		railOpacity: 1
  	});
  })
  /*end Form Styler-slimScrollBar ----------------------------------------------------------------*/

  /*ScrollTop ------------------------------------------------------------------------------------*/
	$("#scroll_top").hide();
  $('#scroll_top_annonce').hide();

	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 285){
				$('#scroll_top').fadeIn(800);
			}else {
				$('#scroll_top').fadeOut();
			}
		});

    $('.block_annonce .close').click(function(){
  		$('#scroll_top').hide();
  		$('#scroll_top_annonce').show();

  		$(window).scroll(function(){
  			if ($(this).scrollTop() > 215){
  		    $('#scroll_top_annonce').css('top', '16px');
  				$('#scroll_top_annonce').fadeIn(800);
  			}else {
  				$('#scroll_top_annonce').fadeOut();
  			}
  		});
    });

    if($('.block_annonce').hasClass('dnone')){
      $(window).scroll(function(){
  			if ($(this).scrollTop() > 215){
  		    $('#scroll_top_annonce').css('top', '16px');
  				$('#scroll_top_annonce').fadeIn(800);
  			}else {
  				$('#scroll_top_annonce').fadeOut();
  			}
  		});
    }else{
  		$('#scroll_top_annonce').fadeOut();
      $('#scroll_top').hide();
    }

		//Scroll body to 0px onClick
		$('#scroll_top a').click(function(){
			$('body, html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$('#scroll_top_annonce a').click(function(){
			$('body, html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
  /*end ScrollTop --------------------------------------------------------------------------------*/

  /*Popups ---------------------------------------------------------------------------------------*/
  /*#poplogin*/
  $('.pop_login').click(function(){
    $('#poplogin .popup').show();
    $('#poplogin .popup').animate({top:'0px'}, 0);
    $('#poplogin .popup').animate({top:'25%'}, 200);
    $('#poplogin .popup').animate({top:'15%'}, 150);
    $('#poplogin .popup').animate({top:'20%'}, 200);
    //$('#poplogin').stop(true,true).animate({top:'20%'}, 200);
    $('#poplogin .bg0').fadeIn();
		return false;
  });

  $('#poplogin .pop_forget').click(function(){
    $('#poplogin .textdef, #poplogin .fogdef, #poplogin .inpdef').hide();
    $('#poplogin .textact, #poplogin .fogact').show();
		return false;
	});

  $('#poplogin .pop_forget_back').click(function(){
    $('#poplogin .textdef, #poplogin .fogdef, #poplogin .inpdef').show();
    $('#poplogin .textact, #poplogin .fogact').hide();
		return false;
	});

	$('#poplogin .close, #poplogin .bg0').click(function(){
    $('#poplogin .popup').animate({top:'25%'}, 150);
    $('#poplogin .popup').animate({top:'-999px'}, 600);
		$('#poplogin .bg0:visible').delay(800).fadeOut();
    $('#poptest .test, #poptest .title, #poptest .date, #poptest ol.listing').delay(800).fadeIn(0);
    $('#poplogin .textdef, #poplogin .fogdef, #poplogin .inpdef').delay(800).fadeIn(0);
    $('#poplogin .textact, #poplogin .fogact').delay(800).fadeOut(0);
		return false;
	});

  /*Аналогично для формы комментариев с авторизацией*/
  $('#comms .pop_forget').click(function(){
    $('#comms .textdef, #comms .fogdef, #comms .inpdef').hide();
    $('#comms .textact, #comms .fogact').show();
		return false;
	});

  $('#comms .pop_forget_back').click(function(){
    $('#comms .textdef, #comms .fogdef, #comms .inpdef').show();
    $('#comms .textact, #comms .fogact').hide();
		return false;
	});
  /*end Аналогично для формы комментариев с авторизацией*/
  /*end #poplogin*/

  /*#popfeedback*/
  $('.pop_feedback').click(function(){
    $('#popfeedback .popup').show();
    $('#popfeedback .popup').animate({top:'0px'}, 0);
    $('#popfeedback .popup').animate({top:'25%'}, 200);
    $('#popfeedback .popup').animate({top:'15%'}, 150);
    $('#popfeedback .popup').animate({top:'20%'}, 200);
    $('#popfeedback .bg0').fadeIn();
		return false;
  });

	$('#popfeedback .close, #popfeedback .bg0').click(function(){
    $('#popfeedback .popup').animate({top:'25%'}, 150);
    $('#popfeedback .popup').animate({top:'-999px'}, 600);
		$('#popfeedback .bg0:visible').delay(800).fadeOut();
		return false;
	});

  /*Форма обратной связи (вывод сообщения)*/
  $('#popfeedback input.btn').click(function(){
    $('#popfeedback .title').hide();
    $('#popfeedbackclick').hide();
    $('#popfeedback .title.send').fadeIn();
    $('#popfeedback .txt.send').fadeIn();
		return false;
	});

	$('#popfeedback .close, #popfeedback .bg0').click(function(){
    $('#popfeedback').animate({top:'25%'}, 150);
    $('#popfeedback').animate({top:'-999px'}, 600);
		$('#popfeedback .bg0:visible').delay(800).fadeOut();
    $('#popfeedback .title').delay(800).fadeIn(0);
    $('#popfeedback .title.send').delay(800).fadeOut(0);
    $('#popfeedback .txt.send').delay(800).fadeOut(0);
    $('#popfeedbackclick').delay(800).fadeIn(0);
		return false;
	});
  /*end Форма обратной связи (вывод сообщения)*/
  /*end #popfeedback*/

  /*poptest*/
  $('.pop_test').click(function(){
    $('#poptest .popup').show();
    $('#poptest .popup').animate({top:'0px'}, 0);
    $('#poptest .popup').animate({top:'25%'}, 200);
    $('#poptest .popup').animate({top:'15%'}, 150);
    $('#poptest .popup').animate({top:'20%'}, 200);
    $('#poptest .bg0').fadeIn();
		return false;
  });

  $('#poptest ol.listing li a').click(function(){
    $('#poptest .test, #poptest .title, #poptest .date, #poptest ol.listing').hide();
    $('#poptest .test.active, #poptest .title.active').show();
	});

	$('#poptest .close, #poptest .bg0').click(function(){
    $('#poptest .popup').animate({top:'25%'}, 150);
    $('#poptest .popup').animate({top:'-999px'}, 600);
		$('#poptest .bg0:visible').delay(800).fadeOut();
    $('#poptest .test, #poptest .title, #poptest .date, #poptest ol.listing').delay(800).fadeIn(0);
    $('#poptest .test.active, #poptest .title.active').delay(800).fadeOut(0);
		return false;
	});
  /*end poptest*/
  /*end Popups -----------------------------------------------------------------------------------*/

  /*nth-js ---------------------------------------------------------------------------------------*/
  $('ul.directions li:nth-child(4n+4)').css('margin-right', '0px');
  $('ul.directions.quests li:nth-child(5n+5), ul.directions_else li:nth-child(5n+5)').css('margin-right', '0px');
  /*end nth-js -----------------------------------------------------------------------------------*/
});