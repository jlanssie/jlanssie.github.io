//----- OUTPUT FROM JS -----//

//Set content
var content1 = [
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
];

//Define content treatment
function printFromJS(item) {
  document.getElementById("JSoutput").innerHTML += item.firstName + " " + item.lastName + "<br>";
}

//Loop over content
content1.forEach(printFromJS);



//----- OUTPUT FROM JSON -----//

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.lamonnaie.be/files/test/test.json"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url)
.then(response => response.text())
.then(contents => handleJSON(contents))
.catch(() => console.log("Cannot access " + url + " response. Blocked by browser?"))

function handleJSON(item){
	var content2 = JSON.parse(item);
	var length = content2.people.length;

	for (i = 0; i < length; i++) {
		document.getElementById("JSONoutput").innerHTML += content2.people[i].firstName + " " + content2.people[i].lastName + "<br>";
	}
}



//----- OUTPUT FROM LOCAL XML -----//

var text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("XMLLocaloutput").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;



//-----OUTPUT FROM EXTERNAL XML -----//

const proxyurl2 = "https://cors-anywhere.herokuapp.com/";
const url2 = "https://www.lamonnaie.be/files/test/test.xml"; // site that doesn’t send Access-Control-*
fetch(proxyurl2 + url2)
.then(response => response.text())
.then(contents => handleXML(contents))
.catch(() => console.log("Cannot access " + url + " response. Blocked by browser?"))

function handleXML(item) {
  var parser2 = new DOMParser();
  var xmlDoc = parser2.parseFromString(item,"text/xml");
  var txt = "";
  var x = xmlDoc.getElementsByTagName("ARTIST");

  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }

  document.getElementById("XMLExternaloutput").innerHTML = txt;

}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("ARTIST");
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("XMLExternaloutput").innerHTML = txt;
}
