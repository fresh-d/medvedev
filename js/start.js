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
    $('#poplogin').show();
    $('#poplogin').animate({top:'0px'}, 0);
    $('#poplogin').animate({top:'25%'}, 200);
    $('#poplogin').animate({top:'15%'}, 150);
    $('#poplogin').animate({top:'20%'}, 200);
    //$('#poplogin').stop(true,true).animate({top:'20%'}, 200);
  $('.bg0').fadeIn();
		return false;
  });

	$('#poplogin .close, .bg0').click(function(){
    $('#poplogin').animate({top:'25%'}, 150);
    $('#poplogin').animate({top:'-999px'}, 600);
		$('.bg0:visible').delay(800).fadeOut();
		return false;
	});
  /*end #poplogin*/

  /*poptest*/
  $('.pop_test').click(function(){
    $('#poptest').show();
    $('#poptest').animate({top:'0px'}, 0);
    $('#poptest').animate({top:'25%'}, 200);
    $('#poptest').animate({top:'15%'}, 150);
    $('#poptest').animate({top:'20%'}, 200);
  $('.bg0').fadeIn();
		return false;
  });

	$('#poptest .close, .bg0').click(function(){
    $('#poptest').animate({top:'25%'}, 150);
    $('#poptest').animate({top:'-999px'}, 600);
		$('.bg0:visible').delay(800).fadeOut();
		return false;
	});

  $('#poptest ol.listing li a').click(function(){
    $('#poptest .test, #poptest .title, #poptest .date, #poptest ol.listing').hide();
    $('#poptest .test.active, #poptest .title.active').show();
	});
  /*end poptest*/

  /*#popfeedback*/
  $('.pop_feedback').click(function(){
    $('#popfeedback').show();
    $('#popfeedback').animate({top:'0px'}, 0);
    $('#popfeedback').animate({top:'25%'}, 200);
    $('#popfeedback').animate({top:'15%'}, 150);
    $('#popfeedback').animate({top:'20%'}, 200);
  $('.bg1').fadeIn();
		return false;
  });

  /*Форма обратной связи*/
  $('#popfeedback.popup input.btn').click(function(){
    $('#popfeedback.popup .title').hide();
    $('#popfeedbackclick').hide();
    $('#popfeedback.popup .title.send').fadeIn();
    $('#popfeedback.popup .txt.send').fadeIn();
	});

	$('#popfeedback .close, .bg1').click(function(){
    $('#popfeedback').animate({top:'25%'}, 150);
    $('#popfeedback').animate({top:'-999px'}, 600);
		$('.bg1:visible').delay(800).fadeOut();
    $('#popfeedback.popup .title').delay(800).fadeIn(0);
    $('#popfeedback.popup .title.send').delay(800).fadeOut(0);
    $('#popfeedback.popup .txt.send').delay(800).fadeOut(0);
    $('#popfeedbackclick').delay(800).fadeIn(0);
		return false;
	});
  /*end Форма обратной связи*/
  /*end #popfeedback*/
  /*end Popups -----------------------------------------------------------------------------------*/

  /*nth-js ---------------------------------------------------------------------------------------*/
  $('ul.directions li:nth-child(4n+4)').css('margin-right', '0px');
  $('ul.directions.quests li:nth-child(5n+5), ul.directions_else li:nth-child(5n+5)').css('margin-right', '0px');
  /*end nth-js -----------------------------------------------------------------------------------*/
});