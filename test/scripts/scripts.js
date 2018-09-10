var leasePriceString = prompt("Input lease price per month"); 
var ecoScoreString = prompt("Input eco score");
var catalogValueString = prompt("Input catalog value");
var c02String = prompt("Input C02");

var leasePrice = parseInt(leasePriceString); 
var ecoScore = parseInt(ecoScoreString);
var catalogValue = parseInt(catalogValueString);
var c02 = parseInt(c02String);

var brutoMonth = true;
var VAA = true;

function calculator(){
	function brutoMonthCalc(){
		if (ecoScore >= 74){
			var brutoMonth = ((leasePrice*12)/13.92)-75;
			console.log(brutoMonth);
		} else {
			var brutoMonth = ((leaseprice*12)/13.92)-150;
			console.log(brutoMonth);
		}
	}
	function VAACalc(){
		var VAA =  6/7*catalogValue*(0.055+((c02-105)*0.001));
		console.log(VAA);
	}
};

calculator();
console.log("price per month is =" + brutoMonth + VAA);