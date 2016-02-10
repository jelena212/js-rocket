var timer = null;
var countdownNumber = 10;
var changeState = function(state){
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber  = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	if (state == 2) {
		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber > 3 && countdownNumber <6) {
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}
			if (countdownNumber > 0 && countdownNumber <3) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}
			if (countdownNumber <=0) {
				changeState(3);
			}
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function () {
			 var randomNumeber = Math.round(Math.random()*10);
			 console.log('random number: '+ randomNumeber);
			 if (randomNumeber > 3) {
			 	changeState(4);
			 } else {
			 	changeState(5);
			 }
		}, 2000);
	}
}