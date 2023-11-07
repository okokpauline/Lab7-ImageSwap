"use strict";

const fadeOutImageCallback = (link) => {
	// TODO
	// change text caption
	// change attribute for the src
	// jquery fadeOut and jquery fadein

	console.log('link in fadeOutImageCallback', link);
	console.log('link.title in fadeOutImageCallback', link.title);
	console.log('link.src in fadeOutImageCallback', link.children[0].src);
	const caption = $("#caption");
	caption.text(link.title);
	caption.fadeIn(1000);
	
	const image = $("#image");
	image.src = link.children[0].src
	image.fadeIn(1000);
};

const handleImageSwap = evt => {
	const link = evt.currentTarget;
	console.log('link in handleImageSwap', link);
	// TODO: handle image swap
	$("#caption").fadeOut(1000);
	$("#image").fadeOut(1000, () => fadeOutImageCallback(link)) //callback function to swap the image
};

$(document).ready( () => {
	
	// TODO: use jQuery to preload the images
	// Hint: User #image_list a and use object Image for image caching
	
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });
		

	// TODO: use jQuery click event like document.addEventListener("DOMContentLoaded", () => {}
	$("#image_list a").click(handleImageSwap);

	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready