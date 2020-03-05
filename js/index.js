//Animations
let transitionTime = 1000;
$('.ourservices .card:last-child').addClass('card-flipped');
setTimeout(function() {
	jQuery('.ourservices .card:nth-child(2)').addClass('card-flipped');
	setTimeout(function() {
		jQuery('.ourservices .card:first-child').addClass('card-flipped');
	}, transitionTime);
}, transitionTime);