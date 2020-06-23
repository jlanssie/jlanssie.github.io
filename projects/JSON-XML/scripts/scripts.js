//----- 1. OUTPUT FROM JS -----//

//Set content
var content1 = [
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
];

//Define content handling
function printFromJS(item) {
  document.getElementById("JSoutput").innerHTML += item.firstName + " " + item.lastName + "<br>";
}

//Loop over content
content1.forEach(printFromJS);



//----- 2. OUTPUT FROM JSON -----//

//Set proxy URL (only if crossdomain that does not send Cross-Origin Resource Sharing (CORS) headers)
const proxyurl = "https://cors-anywhere.herokuapp.com/";

//Set data URL
const url = "../data/test.json"; //URL that does not send Access-Control-*

//Fetch response and contents, then call function that handles content
fetch(proxyurl + url)
.then(response => response.text())
.then(contents => handleJSON(contents))
.catch(() => console.log("Cannot access " + url + " response. Blocked by browser?"))

//Define content handling
function handleJSON(item){
	var content2 = JSON.parse(item);
	var length = content2.people.length;

	for (i = 0; i < length; i++) {
		document.getElementById("JSONoutput").innerHTML += content2.people[i].firstName + " " + content2.people[i].lastName + "<br>";
	}
}



//----- 3. OUTPUT FROM LOCAL XML -----//

//Set content
var text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

//Init a parser, then parse content to XML
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text,"text/xml");

//Handle content
document.getElementById("XMLLocaloutput").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;



//----- 4. OUTPUT FROM EXTERNAL XML -----//

//Set proxy URL (only if crossdomain that does not send Cross-Origin Resource Sharing (CORS) headers)
const proxyurl2 = "https://cors-anywhere.herokuapp.com/";

//Set data URL
const url2 = "../data/test.xml"; //URL that does not send Access-Control-*

//Fetch response and contents, then call function that handles content
fetch(proxyurl2 + url2)
.then(response => response.text())
.then(contents => handleXML(contents))
.catch(() => console.log("Cannot access " + url + " response. Blocked by browser?"))

//Define content handling
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