$(document).ready(function () {

  // Карусели

  $('.slider-1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true
  });
  $('.slider-2').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 5,
    variableWidth: true
  });

  // маска телефона

  $(".phone-mask").mask("+7-___-__-__");

  	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});