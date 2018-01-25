$(document).ready(function() {

	$.preloadImages = function() {
		for (var i = 0; i < arguments.length; i++) {
			$('<img />').attr('src', arguments[i]);
		}
	}

	$.preloadImages('img/Race.gif');

	$('.startButton').click(function() {
		$('.tapPrompt').hide();
		$(this).css('display', 'none');
		$('.race').attr('src', 'img/Race.gif')
		setTimeout(function() {
			parent.closeIframe();
		}, 10000);
	});
});
