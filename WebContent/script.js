'use strict;'

function toggle(id) {
	let element = document.getElementById(id);
	if (element.style.display == "none") {
		element.style.display = "block";
	} else {
		element.style.display = "none";
	} 
}

function init() {
	let checkbox = document.getElementById("return");
	checkbox.addEventListener("click", toggle("hidden"));
}

window.addEventListener("DOMContentLoaded", init);