var content = calSetup;
var data = "";
var showName = "Epoch";
var premiereDate = new Date();
var date = new Date();
var dateYYYYmmDD = "";
var event = "";

/*
const url = "./data.json";
var length = 0;

fetch(url)
.then(response => response.text())
.then(contents => getData(contents))
.catch(() => console.log("Cannot access " + url + " response. Blocked by browser?"))

function getData(item){
	data = JSON.parse(item);
	length = content.data.length;
}

*/

function getShowName(){
	try {
		var value = document.getElementById("showName").value;
		if ((value == null) || (value == "")) {

		} else {
			showName = document.getElementById("showName").value;
		}
	} catch (e) {

	}

	content = content.replace("[CALNAME]", showName).replace("[NAME]", showName);
}

function getPremiereDate(){
	var premiereDateString = document.getElementById("premiereDate").value;

	premiereDate = new Date(premiereDateString);
}

function getEvents(){
	getEvent(10, "Test 1");
	getEvent(5, "Test 2");
};

function getEvent(days, name) {
	date = new Date(premiereDate.getTime());;
	date.setDate(premiereDate.getDate() - days);
	getYYYYmmDD();
	var eventName = showName + " " + name;
	event = eventTemplate;
	event = event.replace("[STARTDATE]", dateYYYYmmDD).replace("[ENDDATE]", dateYYYYmmDD).replace("[EVENTNAME]", eventName);
	event = event.replace(/-/g, "");
	content += event;
};

function getYYYYmmDD() {
	console.log("---- Date: " + date);

	var month = date.getUTCMonth() + 1; //months from 1-12
	var day = date.getUTCDate();
	var year = date.getUTCFullYear();

	dateYYYYmmDD = year + "" + month + "" + day;
}


function buildContent(){
	content = calSetup;
	event = "";

	getShowName();

	getPremiereDate();

	getEvents();

	content += calClosing;
}


function createFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function download() {
	buildContent();

	console.log(content);

	// Start file download.
	var fileName = showName + ".ics";
	//createFile(fileName, content);
}

window.onload = function() {
	var today = new Date();

	var month = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
	var day = String(today.getUTCDate()).padStart(2, '0');
	var year = today.getUTCFullYear();

	document.getElementById("premiereDate").value = year + "-" + month + "-" + day;
}