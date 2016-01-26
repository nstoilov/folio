var operation = "";
var firstValue = "";
var secondValue = "";
var screenValue = "";

function assignButtons() {
	
	$("#one").click(function(){
		console.log("1 was clicked");
		firstValue += "1";
	});

	$("#two").click(function(){
		console.log("2 was clicked");
		firstValue += "2";
		console.log(firstValue);
	});

	$("#three").click(function(){
		console.log("3 was clicked");
		firstValue += "3";
	});

	$("#four").click(function(){
		console.log("4 was clicked");
		firstValue += "4";
	});

	$("#five").click(function(){
		console.log("5 was clicked");
		firstValue += "5";
	});

	$("#six").click(function(){
		console.log("6 was clicked");
		firstValue += "6";
	});

	$("#seven").click(function(){
		console.log("7 was clicked");
		firstValue += "7";
	});

	$("#eight").click(function(){
		console.log("8 was clicked");
		firstValue += "8";
	});

	$("#nine").click( function(){
		console.log("9 was clicked");
		firstValue += "9";
	});

	$("#zero").click(function(){
		console.log("0 was clicked");
		firstValue += "0";
	});

	$("#ac").click(function(){
		console.log("AC was clicked");
		firstValue = "";
	});

	$("#ce").click(function(){
		console.log("CE was clicked");
		firstValue = "";
	});

	$("#percent").click(function(){
		console.log("% was clicked");
	});

	$("#divide").click(function(){
		console.log("/ was clicked");
	});

	$("#x").click(function(){
		console.log("x was clicked");
	});

	$("#minus").click(function(){
		console.log("- was clicked");
	});

	$("#plus").click(function(){
		console.log("+ was clicked");
	});

	$("#equals").click(function(){
		console.log("= was clicked");
	});


	$("#point").click(function(){
		console.log(". was clicked");
	});
}



$(document).ready(function(){
	assignButtons();

})


