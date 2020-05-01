var textBig = document.getElementsByClassName("text-big4")[0];
var textLittle = document.getElementsByClassName("scr1-block")[0];
var background = document.getElementsByClassName("background")[0];


function text(e) {
    e.stopPropagation();
    textBig.style.display = "none";
    textLittle.style.display = "block";
}

function textNone() {
    textBig.style.display = "block";
    textLittle.style.display = "none";
}