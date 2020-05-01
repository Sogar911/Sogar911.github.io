var NavBlock0;
var NavText0;
var NavImg0

var NavBlock1;
var NavText1;
var NavImg1;

var NavBlock2;
var NavText2;
var NavImg2;

var NavBlock3;
var NavText3;
var NavImg3;

var scr2Slider;

NavBlock0 = document.getElementsByClassName("nav-block")[0];
NavText0 = document.getElementsByClassName("nav-block-text-big")[0];
NavImg0 = document.getElementsByClassName("nav-img")[0];

NavBlock1 = document.getElementsByClassName("nav-block")[1];
NavText1 = document.getElementsByClassName("nav-block-text-big")[1];
NavImg1 = document.getElementsByClassName("nav-img")[1];

NavBlock2 = document.getElementsByClassName("nav-block")[2];
NavText2 = document.getElementsByClassName("nav-block-text-big")[2];
NavImg2 = document.getElementsByClassName("nav-img")[2];

NavBlock3 = document.getElementsByClassName("nav-block")[3];
NavText3 = document.getElementsByClassName("nav-block-text-big")[3];
NavImg3 = document.getElementsByClassName("nav-img")[3];

scr2Slider = document.getElementsByClassName("slider-streak")[0];

function Nav1() {
    NavBlock0.style.background = "#12a3d6";
    NavText0.style.color = "#c5f4ff";
    NavImg0.style.display = "block";   
    
    NavBlock1.style.background = "none";
    NavText1.style.color = "#515862";
    NavImg1.style.display = "none";    
    
    NavBlock2.style.background = "none";
    NavText2.style.color = "#515862";
    NavImg2.style.display = "none";  

    NavBlock3.style.background = "none";
    NavText3.style.color = "#515862";
    NavImg3.style.display = "none";  

    scr2Slider.style.left = "0px"
}

function Nav2() {
    NavBlock1.style.background = "#12a3d6";
    NavText1.style.color = "#c5f4ff";
    NavImg1.style.display = "block";    
    
    NavBlock0.style.background = "none";
    NavText0.style.color = "#515862";
    NavImg0.style.display = "none";    
    
    NavBlock2.style.background = "none";
    NavText2.style.color = "#515862";
    NavImg2.style.display = "none";  

    NavBlock3.style.background = "none";
    NavText3.style.color = "#515862";
    NavImg3.style.display = "none";  

    scr2Slider.style.left = "-1280px"
}

function Nav3() {
    NavBlock2.style.background = "#12a3d6";
    NavText2.style.color = "#c5f4ff";
    NavImg2.style.display = "block";  
    
    NavBlock1.style.background = "none";
    NavText1.style.color = "#515862";
    NavImg1.style.display = "none";    
    
    NavBlock0.style.background = "none";
    NavText0.style.color = "#515862";
    NavImg0.style.display = "none";  

    NavBlock3.style.background = "none";
    NavText3.style.color = "#515862";
    NavImg3.style.display = "none";  

    scr2Slider.style.left = "-2560px"
}

function Nav4() {
    NavBlock3.style.background = "#12a3d6";
    NavText3.style.color = "#c5f4ff";
    NavImg3.style.display = "block";    
    
    NavBlock1.style.background = "none";
    NavText1.style.color = "#515862";
    NavImg1.style.display = "none";    
    
    NavBlock2.style.background = "none";
    NavText2.style.color = "#515862";
    NavImg2.style.display = "none";  

    NavBlock0.style.background = "none";
    NavText0.style.color = "#515862";
    NavImg0.style.display = "none";  

    scr2Slider.style.left = "-3840px"
}

// Блог
var blogg
var blo

blogg = document.getElementsByClassName('blog')[0];
blo = document.getElementsByClassName('screen1')[0];

var x = 0

function blog() {
    if (x % 2 == 0) {    
        blogg.style.display = 'block';
        x++
    }
    else {
        blogg.style.display = 'none';
        x++
    }    
}

