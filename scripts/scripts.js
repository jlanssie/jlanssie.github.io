function menuCollapse() {
    var x = document.getElementById("navbar");
    if (x.className === "notClicked") {
        x.className = "clicked";
    } else {
        x.className = "notClicked";
    }
}

