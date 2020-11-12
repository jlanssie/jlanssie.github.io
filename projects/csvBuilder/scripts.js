var content = "";
var data = "";
var showName = "Epoch";
var rehDate = new Date();
var pgpDate = new Date();
var pgoDate = new Date();
var genDate = new Date();
var premiereDate = new Date();
var derniereDate = new Date();
var tixSaleDate = new Date();
var marketingDate = new Date();
var date = new Date();
var parentDate = new Date();
var dateYYYYmmDD = "";
var task = "";
var currentParentTask = "";
var currentParentDate = "";
var subTask = "";

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

function getDates(){
	rehDate = new Date(document.getElementById("rehDate").value);
	pgpDate = new Date(document.getElementById("pgpDate").value);
	pgoDate = new Date(document.getElementById("pgoDate").value);
	genDate = new Date(document.getElementById("genDate").value);
	premiereDate = new Date(document.getElementById("premiereDate").value);
	derniereDate = new Date(document.getElementById("derniereDate").value);

	tixSaleDate = new Date();
	marketingDate = new Date();
	tixSaleDate.setDate(premiereDate.getDate() - 56);
	marketingDate.setDate(genDate.getDate() - 7);
}

function addTasks(){

	//Newsletters

	addTask("Tix sale (Prior)", 7, "tix sale", jeremy, "Newsletters");
	addSubTask("Draft NL", 7, jasper);
	addSubTask("Validation NL", 6, pieterb);
	addSubTask("Draft FR", 5, thomas);
	addSubTask("Validation FR", 4, nina);
	addSubTask("Layout test", 3, jeremy);
	addSubTask("Final check", 2, jeremy);

	addTask("Tix sale", 0, "tix sale", jeremy, "Newsletters");
	addSubTask("Draft NL", 7, jasper);
	addSubTask("Validation NL", 6, pieterb);
	addSubTask("Draft FR", 5, thomas);
	addSubTask("Validation FR", 4, nina);
	addSubTask("Layout test", 3, jeremy);
	addSubTask("Final check", 2, jeremy);

	addTask("Peter's vision", 7, "premiere", jeremy, "Newsletters");
	addSubTask("Draft NL", 7, jasper);
	addSubTask("Validation NL", 6, pieterb);
	addSubTask("Draft FR", 5, thomas);
	addSubTask("Validation FR", 4, nina);
	addSubTask("Layout test", 3, jeremy);
	addSubTask("Final check", 2, jeremy);

	addTask("Press reviews", -3, "premiere", jeremy, "Newsletters");
	addSubTask("Draft NL", -2, jasper);
	addSubTask("Validation NL", -2, pieterb);
	addSubTask("Draft FR", 1, thomas);
	addSubTask("Validation FR", 1, nina);
	addSubTask("Layout test", 0, jeremy);
	addSubTask("Final check", 0, jeremy);

	//Radio

	addTask("Radio ad", 0, "gen", laura, "Radio");
	addSubTask("Music", 70, none);
	addSubTask("Draft NL", 63, jasper);
	addSubTask("Validation NL", 62, pieterb);
	addSubTask("Draft FR", 61, thomas);
	addSubTask("Validation FR", 60, nina);
	addSubTask("Final check", 59, laura);
	addSubTask("Send to RTBF", 56, laura);
	addSubTask("Send to VRT", 21, laura);

	//TV

	addTask("TV ad", 0, "gen", laura, "TV");
	addSubTask("Draft NL", 63, jasper);
	addSubTask("Validation NL", 62, pieterb);
	addSubTask("Draft FR", 61, thomas);
	addSubTask("Validation FR", 60, nina);
	addSubTask("Draft edit", 59, laura);
	addSubTask("Voice recording", 59, laura);
	addSubTask("Final edit", 59, laura);
	addSubTask("Send to RTBF", 56, laura);
	addSubTask("Send to VRT", 21, laura);

	//Print

	addTask("Print ad", 0, "marketing", laura, "Print");
	addSubTask("Ad space reservation", 31, laura);
	addSubTask("Draft image", 27, pierre);
	addSubTask("Draft NL", 27, jasper);
	addSubTask("Validation NL", 25, pieterb);
	addSubTask("Draft FR", 24, thomas);
	addSubTask("Validation FR", 23, nina);
	addSubTask("Final image", 20, pierre);
	addSubTask("Final check", 15, pieterb);

	//Public space

	addTask("JC Decaux ad", 0, "marketing", laura, "Public space");
	addSubTask("Ad space reservation", 84, laura);
	addSubTask("Draft image", 80, pierre);
	addSubTask("Draft NL", 75, jasper);
	addSubTask("Validation NL", 74, pieterb);
	addSubTask("Draft FR", 73, thomas);
	addSubTask("Validation FR", 72, nina);
	addSubTask("Final image", 71, pierre);
	addSubTask("Final check", 70, laura);
	addSubTask("Send to JC Decaux", 21, laura);

	addTask("Artepub Range Cyclo ad", 0, "marketing", laura, "Public space");
	addSubTask("Ad space reservation", 84, laura);
	addSubTask("Draft image", 80, pierre);
	addSubTask("Draft NL", 75, jasper);
	addSubTask("Validation NL", 74, pieterb);
	addSubTask("Draft FR", 73, thomas);
	addSubTask("Validation FR", 72, nina);
	addSubTask("Final image", 71, pierre);
	addSubTask("Final check", 70, laura);
	addSubTask("Cancel deadline", 35, laura);
	addSubTask("Send to Artepub", 15, laura);

	addTask("Artepub Topflag", 0, "marketing", laura, "Public space");
	addSubTask("Ad space reservation", 105, laura);
	addSubTask("Draft image", 100, pierre);
	addSubTask("Draft NL", 95, jasper);
	addSubTask("Validation NL", 94, pieterb);
	addSubTask("Draft FR", 93, thomas);
	addSubTask("Validation FR", 92, nina);
	addSubTask("Final image", 91, pierre);
	addSubTask("Final check", 90, laura);
	addSubTask("Cancel deadline", 42, laura);
	addSubTask("Send to Artepub", 15, laura);

	addTask("Flyer", 30, "marketing", laura, "Public space");
	addSubTask("Draft image", 20, pierre);
	addSubTask("Draft NL", 19, jasper);
	addSubTask("Validation NL", 18, pieterb);
	addSubTask("Draft FR", 17, thomas);
	addSubTask("Validation FR", 16, nina);
	addSubTask("Final image", 15, pierre);
	addSubTask("Send to printer", 14, pierre);

	addTask("FOH pannels", 21, "premiere", laura, "Public space");
	addSubTask("Draft image", 20, pierre);
	addSubTask("Draft NL", 19, jasper);
	addSubTask("Validation NL", 18, pieterb);
	addSubTask("Draft FR", 17, thomas);
	addSubTask("Validation FR", 16, nina);
	addSubTask("Final image", 15, pierre);
	addSubTask("Final check", 8, laura);
	addSubTask("Send to printer", 5, laura);
	addSubTask("Send to Service Batiments", 0, laura);

	addTask("FOH screens", 21, "premiere", laura, "Public space");
	addSubTask("Draft image", 20, pierre);
	addSubTask("Draft NL", 19, jasper);
	addSubTask("Validation NL", 18, pieterb);
	addSubTask("Draft FR", 17, thomas);
	addSubTask("Validation FR", 16, nina);
	addSubTask("Final image", 15, pierre);
	addSubTask("Final check", 3, laura);
	addSubTask("Upload", 0, laura);

	//Social content

	addTask("Select target audience", 21, "premiere", pieterc, "Online content");
	addSubTask("Start budget", 21, pieterc);
	addSubTask("Increase budget", 7, pieterc);

	addTask("Create FB event", 62, "premiere", pieterc, "Online content");

	addTask("Update social headers", 21, "premiere", pieterc, "Online content");


	//Online content

	addTask("Rehearsal photos", -1, "rehearsals", pieterc, "Online content");
	addSubTask("Contact production planner", 7, pieterc);
	addSubTask("Contact photographer", 7, pieterc);
	addSubTask("Photo session", 0, pieterc);
	addSubTask("Peter'selection", -1, pieterc);

	addTask("Production photos", -1, "pgp", pieterc, "Online content");
	addSubTask("Contact production planner", 7, pieterc);
	addSubTask("Contact photographer", 7, pieterc);
	addSubTask("Photo session", 0, pieterc);
	addSubTask("Peter'selection", -1, pieterc);

	addTask("Teaser", 0, "tix sale", pieterc, "Online content");
	addSubTask("Concept", 21, pieterc);
	addSubTask("Editing", 14, pieterc);
	addSubTask("First draft", 7, pieterc);
	addSubTask("Final draft", 1, pieterc);

	addTask("Trailer", -2, "premiere", pieterc, "Online content");
	addSubTask("Contact production planner", 7, pieterc);
	addSubTask("Contact videographer", 7, pieterc);
	addSubTask("Filming session", 0, pieterc);
	addSubTask("Peter'selection", -1, pieterc);

	addTask("Behind the scenes-video", 0, "premiere", pieterc, "Online content");
	addSubTask("Contact production planner", 7, pieterc);
	addSubTask("Contact videographer", 7, pieterc);
	addSubTask("Interview preparation", 7, pieterb);
	addSubTask("Filming session", 5, pieterc);
	addSubTask("Subtitles", 3, jasper);
	addSubTask("Check OT", 3, pieterc);
	addSubTask("Timecodes", 2, jasper);
	addSubTask("Place OT and ediiting", 1, pieterc);

	addTask("Interview-video", 0, "premiere", pieterc, "Online content");
	addSubTask("Contact production planner", 7, pieterc);
	addSubTask("Contact videographer", 7, pieterc);
	addSubTask("Interview preparation", 7, pieterb);
	addSubTask("Filming session", 5, pieterc);
	addSubTask("Subtitles", 3, jasper);
	addSubTask("Check OT", 3, pieterc);
	addSubTask("Timecodes", 2, jasper);
	addSubTask("Place OT and ediiting", 1, pieterc);

	addTask("Podcast 'Behind the Aria'", 7, "premiere", pieterb, "Online content");
	addSubTask("Contact production planner", 7, pieterb);
	addSubTask("Contact videographer", 7, pieterb);
	addSubTask("Recording session - Aria", 0, pieterb);
	addSubTask("Interviews", -1, pieterb);
	addSubTask("Copy NL", -1, jasper);
	addSubTask("Copy FR", -1, thomas);
	addSubTask("Recording session NL - Copy", -1, jasper);
	addSubTask("Recording session FR - Copy", -1, thomas);
	addSubTask("First draft NL", -1, pieterb);
	addSubTask("First draft FR", -1, pieterb);
	addSubTask("Final check", -1, pieterb);

	addTask("MMM Online article", 14, "premiere", jeremy, "Online content");
	addSubTask("Draft NL", 7, jasper);
	addSubTask("Validation NL", 6, pieterb);
	addSubTask("Draft FR", 5, thomas);
	addSubTask("Validation FR", 4, nina);
	addSubTask("Layout test", 3, jeremy);
	addSubTask("Final check", 2, jeremy);

	//Press

	addTask("Press release", 21, "premiere", pieterb, "Press");
	addSubTask("Draft NL", 34, jasper);
	addSubTask("Validation NL", 33, pieterb);
	addSubTask("Draft FR", 32, thomas);
	addSubTask("Validation FR", 31, nina);
	addSubTask("Validation press", 24, jeremy);

	addTask("National interview", 21, "premiere", pieterb, "Press");

	addTask("International intervew", 17, "premiere", pieterb, "Press");

	addTask("Audio", -1, "gen", pieterb, "Press");

};

function addTask(taskName, daysbefore, referencedate, assignee, section) {
	handleDate(daysbefore, referencedate);

	currentParentTask = showName + " - " + taskName;
	currentReferenceDate = referencedate;

	task = taskTemplate;
	task = task.replace("[TASKNAME]", currentParentTask).replace("[SECTION]", section).replace("[ASSIGNEE]", assignee).replace("[DUE-DATE]", dateYYYYmmDD);
	content += task;
};

function addSubTask(subTaskName, daysbefore, assignee) {
	handleDate(daysbefore, "parentDate");

	subTask = subTaskTemplate;
	subTask = subTask.replace("[SUBTASKNAME]", subTaskName).replace("[ASSIGNEE]", assignee).replace("[DUE-DATE]", dateYYYYmmDD).replace("[TASKNAME]", currentParentTask);
	content += subTask;
}

function handleDate(daysbefore, referencedate) {
	date = new Date(premiereDate.getTime());

	//TODO - complete switch and handle other reference dates in html
	switch(referencedate) {
		case "rehearsals":
			date.setDate(rehDate.getDate() - daysbefore);
			break;
		case "pgp":
			date.setDate(pgpDate.getDate() - daysbefore);
			break;
		case "pgo":
			date.setDate(pgoDate.getDate() - daysbefore);
			break;
		case "gen":
			date.setDate(genDate.getDate() - daysbefore);
			break;
		case "premiere":
			date.setDate(premiereDate.getDate() - daysbefore);
			break;
		case "derniere":
			date.setDate(derniereDate.getDate() - daysbefore);
			break;
		case "tix sale":
			date.setDate(tixSaleDate.getDate() - daysbefore);
			break;
		case "marketing":
			date.setDate(marketingDate.getDate() - daysbefore);
			break;
		case "parentDate":
			date.setDate(parentDate.getDate() - daysbefore);
			break;
		default:
			date.setDate(premiereDate.getDate() - daysbefore);
		}

	console.log("---- Date: " + date);

	if ((referencedate.localeCompare("parentDate")) == false) {
		parentDate = new Date(date.getTime());
	}

	var month = String(date.getUTCMonth() + 1).padStart(2, '0'); //months from 1-12
	var day = String(date.getUTCDate()).padStart(2, '0');
	var year = date.getUTCFullYear();

	dateYYYYmmDD = year + "-" + month + "-" + day;
}


function buildContent() {
	content = calSetup;
	task = "";

	getShowName();

	getDates();

	addTasks();
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
	var fileName = showName + ".csv";
	createFile(fileName, content);
}

window.onload = function() {
	var today = new Date();

	var month = String(today.getUTCMonth() + 1).padStart(2, '0'); //months from 1-12
	var day = String(today.getUTCDate()).padStart(2, '0');
	var year = today.getUTCFullYear();

	var todayString = year + "-" + month + "-" + day;
	document.getElementById("rehDate").value = todayString;
	document.getElementById("pgpDate").value = todayString;
	document.getElementById("pgoDate").value = todayString;
	document.getElementById("genDate").value = todayString;
	document.getElementById("premiereDate").value = todayString;
	document.getElementById("derniereDate").value = todayString;
}