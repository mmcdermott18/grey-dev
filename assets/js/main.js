$(document).ready(function() {
    // run function on initial page load
    // nav();
    randomList();
    gallery();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function gallery () {
  var images = [
      "grey-001.jpg",
      "grey-002.jpg",
      "grey-003.jpg"
    ];
  var captions = [
    "caretakers quarters",
    "edge house",
    "living small exhibition"
  ]
  var counter = 1;
  var end = images.length - 1;
  for (var i = 0; i < images.length; i++) {
    $('#dots').append("<div class='dot'></div>");
  }
  $('#gallery').css('background-image', 'url(assets/images/gallery/' + images[0]);
  $('.caption').text(captions[0]);
  $('.dot:nth-child(' + counter + ')').addClass('currentImage');
  $('#gallery').click(function(){
    $('.dot:nth-child(' + (end + 1) + ')').removeClass('currentImage');
    $('#gallery').css('background-image', 'url(assets/images/gallery/' + images[counter]);
    $('.caption').text(captions[counter]);
    $('.dot:nth-child(' + (counter) + ')').removeClass('currentImage');
    $('.dot:nth-child(' + (counter + 1) + ')').addClass('currentImage');
    counter++;
    if (counter > end) {
      counter = 0;
    }
  })
}

// function nav() {
//   $('.mobile-nav').click(function(){
//     $('#menu').removeClass('mobile-hide');
//     $('body').addClass('scroll-lock');
//     $('#menu').click(function(){
//       $('#menu').addClass('mobile-hide');
//       $('body').removeClass('scroll-lock');
//     });
//   });
// }

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomList(){
  var students = ["Aileen", "Alex", "Bridget", "Dawson", "Giselle", "Izaac", "Jacob", "Jennifer", "Jessica", "Joy", "Meghan", "Nancy", "Raquel", "Reva", "Sal", "Sopheak", "Sung-Ho", "Thia", "Yaz"];
  var y;
  $('#generate').click( function(){
    $('ol').empty()
    shuffle(students);
    for (y = 0; y < students.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + students[y] + '</li>';
      $('#list').append(html);
    };
  });
}
