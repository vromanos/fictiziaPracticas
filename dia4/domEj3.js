var imagesArray = Array.prototype.slice.call(document.querySelectorAll("img"));
imagesArray.forEach(img => {
	img.src = "http://placekitten.com/g/250/250";
});