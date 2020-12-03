function onClick() {
    var hamburger = document.getElementById('navbarNav');
    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
    }
    else {
        hamburger.style.display = "block";
    }
}



function nightMood() {
    var x = document.getElementById('nightMood');
    var y = document.getElementById('bottonOn');

    if (x.style.backgroundColor === "black" || x.style.color === "white") {

        x.style.backgroundColor = "white";
        x.style.color = "black";

        y.innerHTML = "Day mood";
        y.style.backgroundColor = "black";
        y.style.color = "white";

    } else {
        x.style.backgroundColor = "black";
        x.style.color = "white";

        y.innerHTML = "Night mood";
        y.style.backgroundColor = "white";
        y.style.color = "black";
    }
}


