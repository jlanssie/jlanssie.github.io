var leasePriceString = prompt("Input lease price per month"); 
var ecoScoreString = prompt("Input eco score");
var catalogValueString = prompt("Input catalog value");
var c02String = prompt("Input C02");  
var myBrutoSalaryString = prompt("Input bruto salary");    
var RSZString = prompt("Input sociale zekerheidsbijdrage");
var companyRSZString = prompt("Input bedrijfsvoorheffing");

var leasePrice = parseInt(leasePriceString); 
var ecoScore = parseInt(ecoScoreString);
var catalogValue = parseInt(catalogValueString);
var c02 = parseInt(c02String);    
var myBrutoSalary = parseInt(myBrutoSalaryString); 
var RSZ = parseInt(RSZString);
var companyRSZ = parseInt(companyRSZString);

var brutoMonth = true;
var VAA = true;  
var newNetto = true;

function calculator(){
	function brutoMonthCalc(){
		if (ecoScore >= 74){
			brutoMonth = ((leasePrice*12)/13.92)-75;
			console.log(brutoMonth);
		} else {
			brutoMonth = ((leasePrice*12)/13.92)-150;
			console.log(brutoMonth);
		}
	}
	function VAACalc(){
		VAA =  6/7*catalogValue*(0.055+((c02-105)*0.001));
		console.log(VAA);
	}
	function newNettoCalc(){
		newNetto = myBrutoSalary - brutoMonth - RSZ + VAA - companyRSZ
	}

	brutoMonthCalc();
	VAACalc();
	newNettocalc();

	document.write("Lease Price : " + leasePrice);
	document.write("Eco Score : " + ecoScore);
	document.write("Catalog value : " + catalogValue);
	document.write("C02 : " + c02);
	document.write("Current Bruto : " + myBrutoSalary);
	document.write("Sociale zekerheidsbijdrage : " + RSZ);
	document.write("Bedrijfsvoorheffing : " + companyRSZ);
	document.write("VAA : " + VAA);
	document.write("New Netto" + newNetto);
};    

calculator();