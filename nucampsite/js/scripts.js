// Controls the single Play Pause Btn

$(function () {
  $('.carousel').carousel({ interval: 2000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('i').hasClass('fa-pause')) {
      $('.carousel').carousel('pause');
      $('#carouselButton').children('i').removeClass('fa-pause');
      $('#carouselButton').children('i').addClass('fa-play');
    } else {
      $('.carousel').carousel('cycle');
      $('#carouselButton').children('i').removeClass('fa-play');
      $('#carouselButton').children('i').addClass('fa-pause');
    }
  });
});


//  Activates the tooltips
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// Controls the play and pause buttons

//   $(function () {
//     $('.carousel').carousel({ interval: 2000 });
//     $('#carouselPause').click(function () {
//       $('.carousel').carousel('pause');
//     });
//     $('#carouselPlay').click(function () {
//       $('.carousel').carousel('cycle');
//     });
//   });