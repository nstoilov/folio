

var time;
var seconds = 60;
var minutes;
var counter;
var breakSession;

var inputSessionMinutes = 25;
var inputBreakMinutes = 5;

function resetCounter(){	
	clearInterval(counter);
		nullHTML();
		seconds = 60;
		if (!breakSession) {
			time = inputSessionMinutes * 60;		
			minutes = inputSessionMinutes - 1;		
			breakSession = 1;	
			document.getElementById("status").innerHTML = "<br>Session";
		} else {
			time = inputBreakMinutes * 60;
			minutes = inputBreakMinutes - 1;
			breakSession = 0;
			document.getElementById("status").innerHTML = "<br>Break";
			}
		counter = setInterval(timer, 1000);
}

function start () {
	breakSession = 0;
	resetCounter();
}

function logTime(){
	console.log("minutes:", minutes);
	console.log("seconds: ", seconds);
	console.log("seconds total: ", time);
}

function updateHTML(){
	
	if (seconds < 10) {
		document.getElementById("seconds").innerHTML =  "0" + seconds;
	} else {
		document.getElementById("seconds").innerHTML = seconds;
	}

	if (minutes < 10) {
		document.getElementById("minutes").innerHTML = "0" + minutes;
	} else {
		document.getElementById("minutes").innerHTML = minutes;
	}
}

function nullHTML(){
	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
}

function timer() {	

	if (time <= 1) {
		resetCounter();
	} else {
		time = time - 1;
		seconds -= 1;	
			
		if (seconds == 0) {
			minutes -= 1;
			seconds = 60;
			}

		updateHTML();
		//logTime();
		}
}
	
function breakMinus(){
	if (inputBreakMinutes > 1) {
	inputBreakMinutes -= 1;
	document.getElementById("break").innerHTML =  inputBreakMinutes;
	}
}
	
function breakPlus(){
	if (inputBreakMinutes < 25) {
	inputBreakMinutes += 1;
	document.getElementById("break").innerHTML =  inputBreakMinutes;
	}
}
	
function sessionMinus(){
	if (inputSessionMinutes > 1) {
	inputSessionMinutes -= 1;
	document.getElementById("session").innerHTML =  inputSessionMinutes;
	}
}
	
function sessionPlus(){
	if (inputSessionMinutes < 61) {
	inputSessionMinutes += 1;
	document.getElementById("session").innerHTML =  inputSessionMinutes;
	}
}