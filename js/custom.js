(function ($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function (event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 90
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function () {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $('.logo').attr('src', 'img/logo-branco.png')
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $('.logo').attr('src', 'img/logo.png')
    }

  });

  $.ajaxSetup({
    cache: true
  });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
    FB.init({
      appId: 'teste',
      version: 'v2.10' // or v2.1, v2.2, v2.3, ...
    });
    FB.api(
      '/MASSASUPERFORTE/posts?fields=id,message,full_picture,source',
      'GET', {
        access_token: '127372897987875|3G72HfVj8QoyQrwUd-fGM9u0SAQ'
      },
      function (response) {
        var aux = 1;
        var count = 0;
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i]['message'] != undefined) {
            if (count == 10)
              break;
            $('.pages-not' + aux).append("<div class='row not'>  <div class='_3x-2 text-center'> <img class='noticias-img' src=' " + response.data[i]['full_picture'] + "'/> \
                    <div class='noticia-msg' align='justify'> " + hashTag(response.data[i]['message']) + "</div>");
            if (aux == 1)
              aux = 2;
            else
              aux = 1;
            count ++;
          }
        }

        function hashTag(text) {
          var flag = true;
          var split = text.split(" ");
          var newText = "";
          for (var i = 0; i < split.length; i++) {
            var newSplit = split[i].split("\n");
            for (var j = 0; j < newSplit.length; j++) {
              var index = newSplit[j].indexOf("#");
              if (index >= 0) {
                newText += newSplit[j].substring(0, index);
                if (!flag)
                  newText += "<br>";
                newText += "<a class='hashTag' href='https://twitter.com/hashtag/" + newSplit[j].substring(index + 1, newSplit[j].length) + "?src=hash' target='_blank'>";
                newText += newSplit[j].substring(index, newSplit[j].length);
                newText += "</a><br>";
                flag = true;
              } else if (newSplit[j] != "") {
                newText += newSplit[j] + " ";
                flag = false;
              }
            }
          }

          return newText;
        }

        //$('#loader').remove();
        //$('.background-loader').remove();
        //$('html').css('overflow-y', 'auto');
        /*
        $('#loader').remove();
        $('.pages-noticias').css('display', 'flex');
        $('.not-mobile').css('min-height', '100px');
        */
      }
    );
  });

})(jQuery);