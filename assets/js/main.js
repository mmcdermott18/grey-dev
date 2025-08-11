// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  setTimeout(function () {
    document.body.style.visibility = 'visible';
  }, 100);
});

$(document).ready(function() {
    // run function on initial page load
    // nav();
    setTimeout(() => {
      sliderWidths();
    }, "1000");
    preload();
    // sliderWidths();
    // run function on resize of the window
    $(window).resize(function() {
      sliderWidths();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
}); 

function preload () {
  const cat = sessionStorage.getItem("visited");
  if (cat == "yes") {
    $('#preloader').css('display', 'none');
  } else {
    setTimeout(function() {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0'; // Or use a fade-out effect
        preloader.style.transition = 'opacity 2s ease';
        setTimeout(function() {
          preloader.style.display = 'none'; // Or use a fade-out effect
          sessionStorage.setItem("visited", "yes");
          console.log(cat);
        }, 2000);
      }
    }, 2000);
  }
}
function sliderWidths () {
  var articles = $('article').length;
  for(i = 0; i < articles; i++) {
    var articleNum = i + 1;
    var $imageContainer = $('#project-' + articleNum); 

    // Select all img elements within the container
    var $images = $imageContainer.find('img');

    var imageWidths = [];
    Draggable.create("#project-" + articleNum, {
      type: "x",
      bounds: "#slider-" + articleNum
    });

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

