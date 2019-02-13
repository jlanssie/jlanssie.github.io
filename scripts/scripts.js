/*Copyright notice automatically updated to the current year */

$(document).ready(function () {
        var a = (new Date().getFullYear()>2010) ? new Date().getFullYear() : "2010"
        $("div.copyright").html("&copy; "+ a + " Jeremy Lanssiers");
});

/*Change tracks*/

//Track content
var track1Quotes = ["gaga","red-hot","wacky","rabid","keen"];
var track2Quotes = ["wannabe paperback writer","homo journalisticus","pencil-handler","tinker","walking philosopher","fox on the run"];
var track3Quotes = ["with fruity","with cool","with hip","with fresh","with askew", "with wild"];
var track4Quotes = ["ideas","opinions","theories","views","suspicions"];

//Loop counter
var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;

//Call the changeText() function every XXXX miliseconds.
setInterval(changeTrack1, 5500);

//Change track content
function changeTrack1(){
    document.getElementById("1").innerHTML=(track1Quotes[m1]);
    if(m1 == 4)
        m1 = 0;
    else
        m1++;
}

setInterval(changeTrack2, 2000);

function changeTrack2(){
    document.getElementById("2").innerHTML=(track2Quotes[m2]);
    if(m2 == 4)
        m2 = 0;
    else
        m2++;
}

setInterval(changeTrack3, 6500);

function changeTrack3(){
    document.getElementById("3").innerHTML=(track3Quotes[m3]);
    if(m3 == 4)
        m3 = 0;
    else
        m3++;
}

setInterval(changeTrack4, 4500);

function changeTrack4(){
    document.getElementById("4").innerHTML=(track4Quotes[m4]);
    if(m4 == 4)
        m4 = 0;
    else
        m4++;
}

/*Randomize case*/

function randomizeCase(){
  var randomCaseTxt1 = document.getElementById('randomCaseTxt1');
  var randomCaseTxt2 = document.getElementById('randomCaseTxt2');
  var randomCaseTxt3 = document.getElementById('randomCaseTxt3');
  var randomCaseTxt4 = document.getElementById('randomCaseTxt4');

  randomCaseTxt1.textContent = randomCaseTxt1.textContent.split('').map(function(v) {
    var chance = Math.round(Math.random());
    return v = chance ? v.toUpperCase() : v.toLowerCase();
  }).join('');
  randomCaseTxt2.textContent = randomCaseTxt2.textContent.split('').map(function(v) {
    var chance = Math.round(Math.random());
    return v = chance ? v.toUpperCase() : v.toLowerCase();
  }).join('');
  randomCaseTxt3.textContent = randomCaseTxt3.textContent.split('').map(function(v) {
    var chance = Math.round(Math.random());
    return v = chance ? v.toUpperCase() : v.toLowerCase();
  }).join('');
  randomCaseTxt4.textContent = randomCaseTxt4.textContent.split('').map(function(v) {
    var chance = Math.round(Math.random());
    return v = chance ? v.toUpperCase() : v.toLowerCase();
  }).join('');
};

setInterval(randomizeCase, 1000);

/*Move the great annoyer*/

function annoyMe(){
  var annoyer = document.getElementById('grrrrr');

  if (annoyer.className === "topLeft") {
        annoyer.className = "topRight";
        return 
    }
  if (annoyer.className === "topRight") {
        annoyer.className = "bottomRight";
        return
    }
  if (annoyer.className === "bottomRight") {
        annoyer.className = "bottomLeft";
        return
    }
  if (annoyer.className === "bottomLeft") {
        annoyer.className = "topLeft";
    } else {
        annoyer.className = "topRight";
        return
    }
};