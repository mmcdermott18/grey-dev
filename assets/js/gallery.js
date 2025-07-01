$(document).ready(function() {
    // run function on initial page load
    gallery();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function gallery () {
  function getImages(location)
  {
      var result;
      $.ajax(
      {
          type: 'GET',
          async: false,
          url:  'images.txt',
          success: function(images) {
              result = images;
          },
          fail: function() {
              result = null;
          }
      });
      return result;
  }

  var images = getImages("images.txt").split('\n');

  function getCaptions(location)
  {
      var result;
      $.ajax(
      {
          type: 'GET',
          async: false,
          url:  'captions.txt',
          success: function(captions) {
              result = captions;
          },
          fail: function() {
              result = null;
          }
      });
      return result;
  }

  var captions = getCaptions("captions.txt").split('\n');
  var counter = 0;
  var end = images.length - 1;
  for (var i = 0; i < images.length; i++) {
    var slideID = "#slide-" + i;
    $('#home').prepend("<div class='gallery' id='slide-" + (i) + "'></div>" )
    $('#dots').append("<div class='dot'></div>");
    $(slideID).css('background-image', 'url(assets/images/gallery/' + images[i]);
  }
  $('.caption').text(captions[0]);
  $('.dot:nth-child(' + (counter + 1) + ')').addClass('currentImage');
  $('.gallery').click(function(){
    var imgOld = "#slide-" + counter;
    var imgNew = "#slide-" + (counter + 1);
    $('.caption').text(captions[(counter + 1)]);
    $('.dot:nth-child(' + (counter + 1) + ')').removeClass('currentImage');
    $('.dot:nth-child(' + (counter + 2) + ')').addClass('currentImage');
    $(imgOld).fadeOut(500);
    $(imgNew).fadeIn(500);
    counter++;
    if (counter > end) {
      counter = 0;
      var imgOld = "#slide-" + counter;
      var imgNew = "#slide-" + (counter + 1);
      $(imgOld).fadeIn(500);
      $('.caption').text(captions[(counter)]);
      $('.dot:nth-child(' + (end + 1) + ')').removeClass('currentImage');
      $('.dot:nth-child(' + (counter + 1) + ')').addClass('currentImage');
    }
  })
}