'use strict;'

function toggle(id) {
	let element = document.getElementById(id);
	let attrib = element.style.display;
	attrib = (attrib == "none") ? "block" : "none";
	console.log("Toggled!");
}

function init() {
	let checkbox = document.getElementById("return");
	checkbox.addEventListener("change", toggle("hidden"));
	console.log("Initiated!");
}

window.addEventListener("DOMContentLoaded", init);
console.log("Hi!");