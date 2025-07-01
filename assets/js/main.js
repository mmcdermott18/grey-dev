$(document).ready(function() {
    // run function on initial page load
    // nav();
    setTimeout(() => {
      sliderWidths();
    }, "1000");
    // sliderWidths();
    // run function on resize of the window
    $(window).resize(function() {
      sliderWidths();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function sliderWidths () {
  var articles = $('article').length;
  for(i = 0; i < articles; i++) {
    var articleNum = i + 1;
    var $imageContainer = $('#project-' + articleNum); 

    // Select all img elements within the container
    var $images = $imageContainer.find('img');

    var imageWidths = [];

    // Loop through the first 5 images (or all if less than 5)
    $images.each(function(index) {
      var imageWidth = $(this).width() + 20;
      // You can also store the widths in an array if needed:
      imageWidths.push(imageWidth);
    });

    let divWidth = 0;
    for (let i = 0; i < imageWidths.length; i++) {
      divWidth += imageWidths[i];
    }
    var mainF = $('main').outerWidth(true) - $('main').outerWidth();
    var mainH = mainF / 2;
    $imageContainer.css('width', (divWidth + mainH - 6) + 'px');
  } 
}

