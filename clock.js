function startClock() {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	
	var suffix = hour < 12 ? " AM" : " PM";
	var modhour = hour % 12;
	var adjhour = modhour == 0 ? modhour + 12 : modhour;
	
	var spacedm = minute < 10 ? '0' + minute : minute;
	
	document.getElementById('liveClock').innerHTML = adjhour + '<span>:</span>' + spacedm + suffix;
	// : inside span to select it in the css to make it blink
	var reWrite = setTimeout(startClock, 1000);
}

startClock();