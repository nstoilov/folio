var operation = "";
var firstValue = "0";
var secondValue = "";
var screenValue = "";
var statement = "";

function press(x){	
	if ((firstValue.charAt(0)) === "0" && (firstValue.charAt(1) !== ".") && (x !== ".")) {
		firstValue = firstValue.slice(0,-1);
	};
	firstValue += x;
	$("#screen").text(firstValue);	
}

function operator(x){
	secondValue = firstValue;
	$("#screen").text(firstValue);
	operation = x;	
	statement += secondValue + operation;
	
	console.log(statement);
	firstValue = "";

}

function equals () {
	
		statement = statement + firstValue;
		$("#screen").text(eval(statement));	
	console.log(statement);
	firstValue = "0";
	statement = "";
}

function percent () {
	statement = secondValue + operation + "((" + firstValue + "*" + secondValue + ") / 100" + ")";
	$("#screen").text(eval(statement));	
	firstValue = "0";
	statement = "";
}

function calculate() {
	
	$("#one").click(function(){
		press(1);	
	});

	$("#two").click(function(){
		press(2);
	});

	$("#three").click(function(){
		press(3);
	});

	$("#four").click(function(){
		press(4);
	});

	$("#five").click(function(){
		press(5);
	});

	$("#six").click(function(){
		press(6);
	});

	$("#seven").click(function(){
		press(7);
	});

	$("#eight").click(function(){
		press(8);
	});

	$("#nine").click(function(){
		press(9);
	});

	$("#zero").click(function(){
		if ((firstValue.charAt(0) !== "0") || (firstValue.charAt(1) === ".")){
			press(0);
		};		
	});

	$("#point").click(function(){
		if (firstValue.indexOf(".") == -1){
			press(".");
		};
		
	});


	$("#ac").click(function(){		
		firstValue = "0";
		statement = "";
		$("#screen").text(firstValue);	
	});

	$("#ce").click(function(){		
		firstValue = firstValue.slice(0,-1);
		if (!firstValue) {
			firstValue = "0";
		}
		$("#screen").text(firstValue);	
	});

	$("#percent").click(function(){
		percent();
	});

	$("#divide").click(function(){	
		operator("/");	
	});

	$("#x").click(function(){
		operator("*");	
	});

	$("#minus").click(function(){	
		operator("-");	
	});

	$("#plus").click(function(){	
		operator("+");	
	});

	$("#equals").click(function(){	
		equals();
	});

	
}

$(document).ready(function(){
	calculate();
})

