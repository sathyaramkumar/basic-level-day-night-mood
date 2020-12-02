
function nightMood() {
    var x = document.getElementById('nightMood');
    var y = document.getElementById('bottonOn');

    if (x.style.backgroundColor === "white" || x.style.color === "back") {
        x.style.backgroundColor = "black";
        x.style.color = "white";
        y.innerHTML = "Night mood";
        y.style.backgroundColor = "white";
        y.style.color = "black";
    } else {
        x.style.backgroundColor = "white";
        x.style.color = "black"
        y.innerHTML = "Day mood";
        y.style.backgroundColor = "black";
        y.style.color = "white";
    }
}

