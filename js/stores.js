let imageGallery = $('.stores-gallery-images div');
let dataAttr = 1;
let dataAttrMax = imageGallery.length;

//Create a virtual gallery of images with all the needed information so that the JavaScript code doesn't have to inspect the DOM everytime a related event is triggred
let virtualImageGallery = [dataAttrMax];
let i = 0;
imageGallery.each(function() {
	virtualImageGallery[i++] = $(this).css('background-image');
});
//Opens the popup
imageGallery.click(function() {
	dataAttr = $(this).attr('data-attr');
	$('.stores-popup').css('display', 'flex');
	updateImage();
});
//Closes the popup
$('.stores-popup').click(function() {
	$(this).fadeOut();
	$('.stores-popup-img').fadeOut();
});
//Changes the image to the next/previous  in the gallery
$('.stores-popup-prev').click(function(e) {
	if (--dataAttr < 0) dataAttr = dataAttrMax - 1;
	updateImage();
	e.stopPropagation();

});
$('.stores-popup-next').click(function(e) {
	if (++dataAttr == dataAttrMax) dataAttr = 0;
	updateImage();
	e.stopPropagation();
});
//Updates the image
function updateImage() {
	console.log(dataAttr);
	$('.stores-popup-img').fadeOut(function() { 
		$(this).css('background-image', virtualImageGallery[dataAttr]).fadeIn()
	});
}