$(document).ready( () => {

  // variables and function for parallax line scrolling
  let lineOnePos = 20,
    lineTwoPos = 20;

  let currPos, newPos;

  let transformLine = (lineOne, lineTwo) => {
    lineOne.css({'bottom': lineOnePos + '%'});
    lineTwo.css({'top': lineTwoPos + '%'});
  }

  let parallaxLines = (lOne, lTwo, botWin, topEl) => {
    if(!currPos) { currPos = botWin; newPos = botWin; }
    newPos = botWin;
    if(newPos > currPos && lineOnePos < 45) {
      lineOnePos += 0.1; lineTwoPos += 0.1;
      transformLine(lOne, lTwo);
      currPos = newPos;
      newPos = botWin;
    } else if(newPos < currPos && lineOnePos > 15) {
      lineOnePos -= 0.1; lineTwoPos -= 0.1;
      transformLine(lOne, lTwo);
      currPos = newPos;
      newPos = botWin;
    }
  }

  // scroll navbar to top of page on arrow click
  $('.scrollDown').click( () => {
    $('html, body').animate({
      scrollTop: $(".homeNav").offset().top
    }, 500);
    if($(window).scrollTop() >= $('.homeNav').offset().top) {
      $('.navbar').addClass('homeNavTop');
      $('.navbar').removeClass('homeNav');
    }
  });

  /*
    fade in second image once scrolled into view
    fixes navbar to top of page
  */
  $(window).scroll( () => {
    let bottomImage =  $('.second-image').offset().top + $('.second-image').outerHeight() / 10;
    let bottomWindow = $(window).scrollTop() + $(window).height();
    if(bottomWindow > bottomImage) {
      $('.second-image').animate({'opacity': '1'}, 600);
    }
    if($('.navbar').hasClass('homeNav')) {
      if($(window).scrollTop() >= $('.homeNav').offset().top) {
        $('.navbar').addClass('homeNavTop');
        $('.navbar').removeClass('homeNav');
        $('.scrollDown').hide();
      }
    }

    // changes navbar box-shadow depending on scroll position
    if($('.navbar').hasClass('homeNavTop')) {
      let imageBottom = $('.backgroundImage').offset().top + $('.backgroundImage').outerHeight(true);
      let navBottom = $('.navbar').offset().top + $('.navbar').outerHeight(true);
      if(navBottom < imageBottom) {
        $('.navbar').css('box-shadow', '0 4px 5px black');
      } else {
        $('.navbar').css('box-shadow', '0 5px 5px rgba(182, 182, 182, 0.75)')
      }
    }

    // line over image parallax
    let topImage = $('.second-image').offset().top;
    let imageTwoBottom = $('.second-image').offset().top + $('.second-image').outerHeight(true);
    let lineOne = $('.image-line1');
    let lineTwo = $('.image-line2');
    if(bottomWindow > topImage && bottomWindow - 100 < imageTwoBottom) {
      parallaxLines(lineOne, lineTwo, bottomWindow, topImage);
    } else if($(window).scrollTop() + 4 < 8) {
      transformLine(lineOne, lineTwo);
    }
  });
});
