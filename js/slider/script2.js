$(document).ready(function($) {

	$("#slidera2").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	$(window).load(function(){
		$('#slidera2 img').liCover({
			parent: $("#slidera2"),
			position:'absolute',
			veticalAlign:'middle',
			align:'center'
		})
	})
});