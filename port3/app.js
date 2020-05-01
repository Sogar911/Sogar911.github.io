var video
var button
var img
video = document.getElementsByClassName("video")[0];
button = document.getElementsByClassName("button")[0]; 
img = document.getElementsByClassName("imgVideo")[0]; 


function play() {
    if (video.paused) {
        video.play();
        button.style.display = "none";       
        img.style.display = "none"; 
        video.style.display = "inline";
    }
}

// Пятый экран
var BlockBott0
var BlockBott1
var BlockBott2
var BlockBott3
BlockBott0 = document.getElementsByClassName("scr5-block-botton")[0];
BlockBott1 = document.getElementsByClassName("scr5-block-botton")[1];
BlockBott2 = document.getElementsByClassName("scr5-block-botton")[2];
BlockBott3 = document.getElementsByClassName("scr5-block-botton")[3];

function blockbotton0() {
    BlockBott0.style.display = "block";
    BlockBott1.style.display = "none"; 
    BlockBott2.style.display = "none"; 
    BlockBott3.style.display = "none";     
}

function blockbotton1() {
    BlockBott1.style.display = "block";
    BlockBott0.style.display = "none"; 
    BlockBott2.style.display = "none"; 
    BlockBott3.style.display = "none";     
}

function blockbotton2() {
    BlockBott2.style.display = "block";
    BlockBott1.style.display = "none"; 
    BlockBott0.style.display = "none"; 
    BlockBott3.style.display = "none";     
}

function blockbotton3() {
    BlockBott3.style.display = "block";
    BlockBott1.style.display = "none"; 
    BlockBott2.style.display = "none"; 
    BlockBott0.style.display = "none";     
}

// Пятый экран

var scr5Block1 = document.getElementsByClassName("scr5-block")[0];
var scr5Text1 = document.getElementsByClassName("scr5-block-text")[0];
var scr5Botton1 = document.getElementsByClassName("scr5-block-botton")[0];

var scr5Block2 = document.getElementsByClassName("scr5-block")[1];
var scr5Text2 = document.getElementsByClassName("scr5-block-text")[1];
var scr5Botton2 = document.getElementsByClassName("scr5-block-botton")[1];

var scr5Block3 = document.getElementsByClassName("scr5-block")[2];
var scr5Text3 = document.getElementsByClassName("scr5-block-text")[2];
var scr5Botton3 = document.getElementsByClassName("scr5-block-botton")[2];

var scr5Block4 = document.getElementsByClassName("scr5-block")[3];
var scr5Text4 = document.getElementsByClassName("scr5-block-text")[3];
var scr5Botton4 = document.getElementsByClassName("scr5-block-botton")[3];

function brand1(e) {
    scr5Block1.style.backgroundImage = "url(sity1.jpg)";
    scr5Text1.style.display = "none";
    scr5Botton1.style.top = "250px";    
    e.stopPropagation();   
}

function brand2(e) {
    scr5Block2.style.backgroundImage = "url(sity2.jpg)";
    scr5Text2.style.display = "none";
    scr5Botton2.style.top = "250px";    
    e.stopPropagation();   
}

function brand3(e) {
    scr5Block3.style.backgroundImage = "url(sity3.jpg)";
    scr5Text3.style.display = "none";
    scr5Botton3.style.top = "250px";    
    e.stopPropagation();   
}

function brand4(e) {
    scr5Block4.style.backgroundImage = "url(sity4.jpg)";
    scr5Text4.style.display = "none";
    scr5Botton4.style.top = "250px";    
    e.stopPropagation();   
}


















// Седьмой экран
var scr7Img1N0
var scr7Img1N1
var scr7Img1N2
var scr7Img1N3

var scr7Img2N0
var scr7Img2N1
var scr7Img2N2
var scr7Img2N3

scr7Img1N0 = document.getElementsByClassName("scr7-img1")[0];
scr7Img1N1 = document.getElementsByClassName("scr7-img1")[1];
scr7Img1N2 = document.getElementsByClassName("scr7-img1")[2];
scr7Img1N3 = document.getElementsByClassName("scr7-img1")[3];

scr7Img2N0 = document.getElementsByClassName("scr7-img2")[0];
scr7Img2N1 = document.getElementsByClassName("scr7-img2")[1];
scr7Img2N2 = document.getElementsByClassName("scr7-img2")[2];
scr7Img2N3 = document.getElementsByClassName("scr7-img2")[3];

function scr7Img1() {
    scr7Img2N0.style.display = "block";
    scr7Img2N1.style.display = "none";
    scr7Img2N2.style.display = "none";
    scr7Img2N3.style.display = "none";

    scr7Img1N0.style.display = "none";    
    scr7Img1N1.style.display = "block";
    scr7Img1N2.style.display = "block";
    scr7Img1N3.style.display = "block";    
}

function scr7Img2() {
    scr7Img2N1.style.display = "block";
    scr7Img2N0.style.display = "none";
    scr7Img2N2.style.display = "none";
    scr7Img2N3.style.display = "none";

    scr7Img1N1.style.display = "none";    
    scr7Img1N0.style.display = "block";
    scr7Img1N2.style.display = "block";
    scr7Img1N3.style.display = "block";    
}

function scr7Img3() {
    scr7Img2N2.style.display = "block";
    scr7Img2N0.style.display = "none";
    scr7Img2N1.style.display = "none";
    scr7Img2N3.style.display = "none";

    scr7Img1N2.style.display = "none";    
    scr7Img1N0.style.display = "block";
    scr7Img1N1.style.display = "block";
    scr7Img1N3.style.display = "block";    
}

function scr7Img4() {
    scr7Img2N3.style.display = "block";
    scr7Img2N0.style.display = "none";
    scr7Img2N1.style.display = "none";
    scr7Img2N2.style.display = "none";

    scr7Img1N3.style.display = "none";    
    scr7Img1N0.style.display = "block";
    scr7Img1N1.style.display = "block";
    scr7Img1N2.style.display = "block";    
}

function scr7Img11() {
    scr7Img2N0.style.display = "none";
    scr7Img2N1.style.display = "none";
    scr7Img2N2.style.display = "none";
    scr7Img2N3.style.display = "none";

    scr7Img1N0.style.display = "block";
    scr7Img1N1.style.display = "block";
    scr7Img1N2.style.display = "block";
    scr7Img1N3.style.display = "block";
}