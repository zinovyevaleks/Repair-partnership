$(document).ready(function () {

  // Карусели


  // $('.slider-2').slick({
  //   dots: true,
  //   infinite: true,
  //   centerMode: true,
   
  //   slidesToShow: 5,
  //   variableWidth: true
  // });

  $('.results-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.examples-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoHeight:true,
  autoWidth:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
  

  // маска телефона

  $(".phone-mask").mask("+7 (999) 999-99-99");

  //E-mail Ajax Send
  $("#form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


});