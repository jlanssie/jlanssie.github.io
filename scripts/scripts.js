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