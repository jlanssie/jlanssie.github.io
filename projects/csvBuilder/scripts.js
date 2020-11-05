var content = "";
var data = "";
var showName = "Epoch";
var premiereDate = new Date();
var date = new Date();
var dateYYYYmmDD = "";
var task = "";
var currentParentTask = "";
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

function getPremiereDate(){
	var premiereDateString = document.getElementById("premiereDate").value;

	premiereDate = new Date(premiereDateString);
}

function addTasks(){
	addTask("Test 1 - Tix sale", 10, "premiere", jeremy, "Newsletters");
	addSubTask("Subtask 1", 10, "premiere", jeremy);
	addTask("Test 2 - MMM Online article", 5, "premiere", jasper, "MMM Online");
};

function addTask(taskName, daysbefore, referencedate, assignee, section) {
	handleDate(daysbefore, referencedate);

	task = taskTemplate;
	task = task.replace("[TASKNAME]", taskName).replace("[SECTION]", section).replace("[ASSIGNEE]", assignee).replace("[DUE-DATE]", dateYYYYmmDD);
	content += task;

	currentParentTask = taskName;
};

function addSubTask(subTaskName, daysbefore, referencedate, assignee) {
	handleDate(daysbefore, referencedate);

	subTask = subTaskTemplate;
	subTask = subTask.replace("[SUBTASKNAME]", subTaskName).replace("[ASSIGNEE]", assignee).replace("[DUE-DATE]", dateYYYYmmDD).replace("[TASKNAME]", currentParentTask);
	content += subTask;
}

function handleDate(daysbefore, referencedate) {
	date = new Date(premiereDate.getTime());

	//TODO - complete switch and handle other reference dates in html
	switch(referencedate) {
		case "PGO":
			date.setDate(premiereDate.getDate() - daysbefore);
			break;
		case "PGP":
			date.setDate(premiereDate.getDate() - daysbefore);
			break;
		default:
			date.setDate(premiereDate.getDate() - daysbefore);
		}

	console.log("---- Date: " + date);

	var month = String(date.getUTCMonth() + 1).padStart(2, '0'); //months from 1-12
	var day = String(date.getUTCDate()).padStart(2, '0');
	var year = date.getUTCFullYear();

	dateYYYYmmDD = year + "-" + month + "-" + day;
}


function buildContent(){
	content = calSetup;
	task = "";

	getShowName();

	getPremiereDate();

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

	document.getElementById("premiereDate").value = year + "-" + month + "-" + day;
}