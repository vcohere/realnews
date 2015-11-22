$(document).ready(function() {
	$('.fa-bars').click(function() {
		if ($('#panel').hasClass('active')) {
			$('#content').animate({left: '0px'});
			$('#panel').animate({left: '-220px'}).removeClass('active');
		}
		else {
			$('#content').animate({left: '220px'});
			$('#panel').animate({left: '0px'}).addClass('active');
		}
	});

	$('#panel h2').click(function() {
		$(this).toggleClass('active');
	});
});