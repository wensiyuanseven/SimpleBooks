	$(function() {
		$('img.img_1').zoomify(); // Default settings
	$('img.img_2').zoomify({ duration: 500 }); // 1s duration	
				$(window).scroll(function() {
					if($(window).scrollTop() >= 100) {
						$('.actGotop').fadeIn(300);
					} else {
						$('.actGotop').fadeOut(300);
					}
				});
				$('.actGotop').click(function() {
					$('html,body').animate({
						scrollTop: '0px'
					}, 800);
				});
			});