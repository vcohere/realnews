$(document).ready(function() {
	$('#menu').portamento({
		gap: 0
	});
	$('#menu li').click(function() {
		var select = $(this).html();

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$('.article').show();
		$('.article').each(function() {
			if ($(this).find('.tag').html().toLowerCase() != select && select != 'tout')
				$(this).hide();
		});

		return false;
	})
});