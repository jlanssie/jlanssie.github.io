/* Navbar toggle on mobile devices */

function menuCollapse() {
    var x = document.getElementById("navbar");
    if (x.className === "notClicked") {
        x.className = "clicked";
    } else {
        x.className = "notClicked";
    }
};

/* Copyright notice automatically updated to the current year */

$(document).ready(function () {
        var a = (new Date().getFullYear()>2010) ? new Date().getFullYear() : "2010"
        $("div.copyright").html("&copy; "+ a + " Jeremy Lanssiers");
});

/* Change title tracks */

//List of quotes
var track1Quotes = ["gaga","red-hot","wacky","rabid","keen"];
var track2Quotes = ["web geek","editor-in-dictator","homo journalisticus","wannabe paperback writer","designer"];
var track3Quotes = ["with fruity","with cool","with hip","with fresh","with askew"];
var track4Quotes = ["ideas","opinions","theories","views","suspicions"];

//Counter for loop
var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;

//Call the changeText() function every XXXX miliseconds.
setInterval(changeTrack1, 5000);

//Function to change div to a quote and change counter.
function changeTrack1(){
    document.getElementById("track1").innerHTML=(track1Quotes[m1]);
    if(m1 == 4)
        m1 = 0;
    else
        m1++;
}

setInterval(changeTrack2, 2500);

function changeTrack2(){
    document.getElementById("track2").innerHTML=(track2Quotes[m2]);
    if(m2 == 4)
        m2 = 0;
    else
        m2++;
}

setInterval(changeTrack3, 6000);

function changeTrack3(){
    document.getElementById("track3").innerHTML=(track3Quotes[m3]);
    if(m3 == 4)
        m3 = 0;
    else
        m3++;
}

setInterval(changeTrack4, 4000);

function changeTrack4(){
    document.getElementById("track4").innerHTML=(track4Quotes[m4]);
    if(m4 == 4)
        m4 = 0;
    else
        m4++;
}

