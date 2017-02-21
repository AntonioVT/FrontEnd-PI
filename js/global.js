(function($) {
	$(document)
		.on('show.bs.modal', '.modal', function() {
			$("body").css({"overflow":"scroll"});
			$("body").css({"overflow-x":"hidden"});
		});

})(window.jQuery);

$(document).ready(function() {
	$('.fadeView').css('display', 'none');
	$('.fadeView').fadeIn(325);
	$('.link').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('.fadeView').fadeOut(325, newpage);
	});

	function newpage() {
		window.location = newLocation;
	}
});