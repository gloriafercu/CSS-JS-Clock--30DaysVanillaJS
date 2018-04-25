'use strict';

var secondHand = document.querySelector('.seconds');
var minHand = document.querySelector('.mins');
var hourHand = document.querySelector('.hours');

function setDate() {
	var now = new Date();
	var seconds = now.getSeconds();
	var secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

	var mins = now.getMinutes();
	var minsDegrees = ((mins / 60) * 360) + 90;
	minHand.style.transform = 'rotate(' + minsDegrees + 'deg)';

	var hours = now.getMinutes();
	var hoursDegrees = ((mins / 12) * 360) + 90;
	hourHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
}
setInterval(setDate, 1000);
