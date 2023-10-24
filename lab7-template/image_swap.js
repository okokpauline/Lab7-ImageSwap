"use strict";

const fadeOutImageCallback = () => {
	// TODO
};

const handleImageSwap = evt => {
	const link = evt.currentTarget;
	
	// TODO: handle image swap
	$("#caption").fadeOut(1000);
    $("#image").fadeOut(1000, fadeOutImageCallback //callback function to swap the image);
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