                // Слайдер
var sliderStreak , left; 
var true1 , true2 , true3 , true4 , true5 , true6;
var false1 , false2 , false3 , false4 , false5 , false6;
left = 0;


function sli() {       
    sliderStreak = document.getElementById("slider-streak"); 
    true1 = document.getElementById("true1"); 
    true2 = document.getElementById("true2");
    true3 = document.getElementById("true3");
    true4 = document.getElementById("true4");
    true5 = document.getElementById("true5");
    true6 = document.getElementById("true6");
    false1 = document.getElementById("false1");
    false2 = document.getElementById("false2");
    false3 = document.getElementById("false3");
    false4 = document.getElementById("false4");
    false5 = document.getElementById("false5");
    false6 = document.getElementById("false6");

    left = left - 1920     
    if (left < -9600) {   
        left = 0     
        true1.style.display = "inline-block";
        false1.style.display = "none";          
        true6.style.display = "none";
        false6.style.display = "inline-block";        
    }            
    sliderStreak.style.left = left + "px";   

    if (left == -1920) {
        true1.style.display = "none";
        false1.style.display = "inline-block";
        true2.style.display = "inline-block";
        false2.style.display = "none";
    }

    if (left == -3840) {        
        true2.style.display = "none";
        false2.style.display = "inline-block";
        true3.style.display = "inline-block";
        false3.style.display = "none";
    }

    if (left == -5760) {        
        true3.style.display = "none";
        false3.style.display = "inline-block";
        true4.style.display = "inline-block";
        false4.style.display = "none";
    }

    if (left == -7680) {        
        true4.style.display = "none";
        false4.style.display = "inline-block";
        true5.style.display = "inline-block";
        false5.style.display = "none";
    }

    if (left == -9600) {        
        true5.style.display = "none";
        false5.style.display = "inline-block";
        true6.style.display = "inline-block";
        false6.style.display = "none";
    }
}



function sli2() {       
    sliderStreak = document.getElementById("slider-streak");   
    true1 = document.getElementById("true1"); 
    true2 = document.getElementById("true2");
    true3 = document.getElementById("true3");
    true4 = document.getElementById("true4");
    true5 = document.getElementById("true5");
    true6 = document.getElementById("true6");
    false1 = document.getElementById("false1");
    false2 = document.getElementById("false2");
    false3 = document.getElementById("false3");
    false4 = document.getElementById("false4");
    false5 = document.getElementById("false5");
    false6 = document.getElementById("false6");

    left = left + 1920
    if (left > 0) {   
        left = -9600   
        true1.style.display = "none";
        false1.style.display = "inline-block";
        true6.style.display = "inline-block";
        false6.style.display = "none"; 
    }      
    sliderStreak.style.left = left + "px";    

    if (left == 0) {
        true2.style.display = "none";
        false2.style.display = "inline-block";
        true1.style.display = "inline-block";
        false1.style.display = "none";
    }

    if (left == -1920) {        
        true3.style.display = "none";
        false3.style.display = "inline-block";
        true2.style.display = "inline-block";
        false2.style.display = "none";
    }

    if (left == -3840) {        
        true4.style.display = "none";
        false4.style.display = "inline-block";
        true3.style.display = "inline-block";
        false3.style.display = "none";
    }

    if (left == -5760) {        
        true5.style.display = "none";
        false5.style.display = "inline-block";
        true4.style.display = "inline-block";
        false4.style.display = "none";
    }

    if (left == -7680) {        
        true6.style.display = "none";
        false6.style.display = "inline-block";
        true5.style.display = "inline-block";
        false5.style.display = "none";
    } 
     
}

                // Видео
var video;
var butt;

window.onload = function() {
    video = document.getElementById("video");
    butt = document.getElementById("butt");
}

function PlayAi() {
    if(video.paused) {
        video.play();
        butt.style.display = "none";
        video.style.cursor = "pointer";
        video.style.display = "block";

    }    
}

function PauseAi() {
    if (video.paused) {}
    else {
        video.pause();
        butt.style.display = "block";
        video.style.cursor = "auto";
        video.style.display = "none";
    }
}

        // Седьмой экран. Фото часть

var St7PhotoBlok1, St7PhotoBlok2, St7PhotoBlok3;    
var St7NumberBlokTop1, St7NumberBlokBott1;
var St7NumberBlokTop2, St7NumberBlokBott2;
var St7NumberBlokTop3, St7NumberBlokBott3;



var i;
i = 0;



    function St7Photo1() {    
        i = 1
        St7PhotoBlok1 = document.getElementById("st7-photo-blok1");
        St7PhotoBlok2 = document.getElementById("st7-photo-blok2");
        St7PhotoBlok3 = document.getElementById("st7-photo-blok3");
        St7PhotoBlok1.style.background = "#362f2d";
        St7PhotoBlok2.style.background = "#ffffff";
        St7PhotoBlok3.style.background = "#ffffff";            
        

        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];    
        St7NumberBlokTop1.style.background = "#c7b299";        
        St7NumberBlokBott1.style.background = "#a48d72";                
        St7NumberBlokTop2.style.background = "#363636";        
        St7NumberBlokBott2.style.background = "#252525";
        St7NumberBlokTop3.style.background = "#363636";       
        St7NumberBlokBott3.style.background = "#252525";     
        
    }     

    function St7Photo2() {    
        i = 2
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok2.style.background = "#362f2d";
        St7PhotoBlok1.style.background = "#ffffff";
        St7PhotoBlok3.style.background = "#ffffff";
        
        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop2.style.background = "#c7b299";
        St7NumberBlokBott2.style.background = "#a48d72";
        St7NumberBlokTop1.style.background = "#363636";
        St7NumberBlokBott1.style.background = "#252525";
        St7NumberBlokTop3.style.background = "#363636";
        St7NumberBlokBott3.style.background = "#252525";
        
        
    }  

    function St7Photo3() {   
        i = 3
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok3.style.background = "#362f2d";
        St7PhotoBlok2.style.background = "#ffffff";
        St7PhotoBlok1.style.background = "#ffffff";        

        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop3.style.background = "#c7b299";
        St7NumberBlokBott3.style.background = "#a48d72";
        St7NumberBlokTop2.style.background = "#363636";
        St7NumberBlokBott2.style.background = "#252525";
        St7NumberBlokTop1.style.background = "#363636";
        St7NumberBlokBott1.style.background = "#252525";    
    }  

 

    
function Blet1() {
    i++
    if(i == 1){      
        St7PhotoBlok1 = document.getElementById("st7-photo-blok1");
        St7PhotoBlok2 = document.getElementById("st7-photo-blok2");
        St7PhotoBlok3 = document.getElementById("st7-photo-blok3");
        St7PhotoBlok1.style.background = "#362f2d";
        St7PhotoBlok2.style.background = "#ffffff";
        St7PhotoBlok3.style.background = "#ffffff";           

        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];    
        St7NumberBlokTop1.style.background = "#c7b299";        
        St7NumberBlokBott1.style.background = "#a48d72";                
        St7NumberBlokTop2.style.background = "#363636";        
        St7NumberBlokBott2.style.background = "#252525";
        St7NumberBlokTop3.style.background = "#363636";       
        St7NumberBlokBott3.style.background = "#252525";  
    }

    if(i == 2){     
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok2.style.background = "#362f2d";
        St7PhotoBlok1.style.background = "#ffffff";
        St7PhotoBlok3.style.background = "#ffffff";
        
        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop2.style.background = "#c7b299";
        St7NumberBlokBott2.style.background = "#a48d72";
        St7NumberBlokTop1.style.background = "#363636";
        St7NumberBlokBott1.style.background = "#252525";
        St7NumberBlokTop3.style.background = "#363636";
        St7NumberBlokBott3.style.background = "#252525";   

    }   
    
    if(i == 3){   
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok3.style.background = "#362f2d";
        St7PhotoBlok2.style.background = "#ffffff";
        St7PhotoBlok1.style.background = "#ffffff";        

        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop3.style.background = "#c7b299";
        St7NumberBlokBott3.style.background = "#a48d72";
        St7NumberBlokTop2.style.background = "#363636";
        St7NumberBlokBott2.style.background = "#252525";
        St7NumberBlokTop1.style.background = "#363636";
        St7NumberBlokBott1.style.background = "#252525";                    
    }        

    if (i > 3) {
        i = 3
    }

    
}


function Blet2() {      

    if(i == 2){     
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok1.style.background = "#362f2d";
        St7PhotoBlok2.style.background = "#ffffff";
        St7PhotoBlok3.style.background = "#ffffff";
        
        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop1.style.background = "#c7b299";
        St7NumberBlokBott1.style.background = "#a48d72";
        St7NumberBlokTop2.style.background = "#363636";
        St7NumberBlokBott2.style.background = "#252525";
        St7NumberBlokTop3.style.background = "#363636";
        St7NumberBlokBott3.style.background = "#252525";   
    }   
    
    if(i == 3){   
        St7PhotoBlok1 = document.getElementsByClassName("st7-photo-blok")[0];
        St7PhotoBlok2 = document.getElementsByClassName("st7-photo-blok")[1];
        St7PhotoBlok3 = document.getElementsByClassName("st7-photo-blok")[2];
        St7PhotoBlok2.style.background = "#362f2d";
        St7PhotoBlok3.style.background = "#ffffff";
        St7PhotoBlok1.style.background = "#ffffff";        

        St7NumberBlokTop1 = document.getElementsByClassName("st7-number-blok-top")[0];
        St7NumberBlokBott1 = document.getElementsByClassName("st7-number-blok-bott")[0];
        St7NumberBlokTop2 = document.getElementsByClassName("st7-number-blok-top")[1];
        St7NumberBlokBott2 = document.getElementsByClassName("st7-number-blok-bott")[1];
        St7NumberBlokTop3 = document.getElementsByClassName("st7-number-blok-top")[2];
        St7NumberBlokBott3 = document.getElementsByClassName("st7-number-blok-bott")[2];
        St7NumberBlokTop2.style.background = "#c7b299";
        St7NumberBlokBott2.style.background = "#a48d72";
        St7NumberBlokTop3.style.background = "#363636";
        St7NumberBlokBott3.style.background = "#252525";
        St7NumberBlokTop1.style.background = "#363636";
        St7NumberBlokBott1.style.background = "#252525";    
    }        

    if (i < 2) {
        i = 2
    }

    i--
}

// Рид моур у фото.


var hofa1 = document.getElementsByClassName("st7-photo-link-blok")[0];
var hofa2 = document.getElementsByClassName("st7-photo-link-blok")[1];
var hofa3 = document.getElementsByClassName("st7-photo-link-blok")[2];
var BlokText1 = document.getElementsByClassName("st7-blok-photo-text")[0];
var LinkReadMore1 = document.getElementsByClassName("st7-photo-link-blok")[0];
var BlokText2 = document.getElementsByClassName("st7-blok-photo-text")[1];
var LinkReadMore2 = document.getElementsByClassName("st7-photo-link-blok")[1];
var BlokText3 = document.getElementsByClassName("st7-blok-photo-text")[2];
var LinkReadMore3 = document.getElementsByClassName("st7-photo-link-blok")[2];

var span1 = document.createElement("span");    
var text1 = document.createTextNode("Est etiam claritas processus dynamicus. Sequitur mutationem qui consuetudium sequitur.");
span1.className = "st7-photo-text-hidden";

var span2 = document.createElement("span");    
var text2 = document.createTextNode("Est etiam claritas processus dynamicus. Sequitur mutationem qui consuetudium sequitur.");
span2.className = "st7-photo-text-hidden";

var span3 = document.createElement("span");    
var text3 = document.createTextNode("Est etiam claritas processus dynamicus. Sequitur mutationem qui consuetudium sequitur.");
span3.className = "st7-photo-text-hidden";



hofa1.onclick = function ReadMore1(e) {    
    e.stopPropagation();        
    span1.appendChild(text1);
    BlokText1.appendChild(span1);    
    LinkReadMore1.style.display = "none";      

    span1.style.display = "block";
    span2.style.display = "none";  
    span3.style.display = "none";  
    LinkReadMore2.style.display = "block"; 
    LinkReadMore3.style.display = "block";  
}


hofa2.onclick = function ReadMore2(e) {
    e.stopPropagation();        
    span2.appendChild(text2);
    BlokText2.appendChild(span2);    
    LinkReadMore2.style.display = "none";      
    
    span1.style.display = "none";  
    span3.style.display = "none";  
    span2.style.display = "block";
    LinkReadMore1.style.display = "block"; 
    LinkReadMore3.style.display = "block";

}

hofa3.onclick = function ReadMore3(e) {
    e.stopPropagation();       
    span3.appendChild(text3);
    BlokText3.appendChild(span3);    
    LinkReadMore3.style.display = "none";      
      
    span3.style.display = "block";
    span2.style.display = "none";  
    span1.style.display = "none";  
    LinkReadMore2.style.display = "block"; 
    LinkReadMore1.style.display = "block";
}


// Второй экран. Блок иконок.
var St2Icon1 = document.getElementsByClassName("st2-icon1")[0];
var St2Text1 = document.getElementsByClassName("st2-text-big")[0];
var St2Border1 = document.getElementsByClassName("border")[0]; 

var St2Icon2 = document.getElementsByClassName("st2-icon2")[0];
var St2Text2 = document.getElementsByClassName("st2-text-big")[1];
var St2Border2 = document.getElementsByClassName("border")[1]; 

var St2Icon3 = document.getElementsByClassName("st2-icon3")[0];
var St2Text3 = document.getElementsByClassName("st2-text-big")[2];
var St2Border3 = document.getElementsByClassName("border")[2]; 

var St2Icon4 = document.getElementsByClassName("st2-icon4")[0];
var St2Text4 = document.getElementsByClassName("st2-text-big")[3];
var St2Border4 = document.getElementsByClassName("border")[3]; 

function Icon1() {
    St2Icon1.style.background = "url(icon11.png)";
    St2Text1.style.color = "#c7b299";
    St2Border1.style.borderBottom = "3px solid #c7b299"

    St2Icon2.style.background = "url(icon2.png)";
    St2Text2.style.color = "#555555";
    St2Border2.style.borderBottom = "3px solid #f1eee9"

    St2Icon3.style.background = "url(icon3.png)";
    St2Text3.style.color = "#555555";
    St2Border3.style.borderBottom = "3px solid #f1eee9"

    St2Icon4.style.background = "url(icon4.png)";
    St2Text4.style.color = "#555555";
    St2Border4.style.borderBottom = "3px solid #f1eee9"
}

function Icon2() {
    St2Icon2.style.background = "url(icon12.png)";
    St2Text2.style.color = "#c7b299";
    St2Border2.style.borderBottom = "3px solid #c7b299"

    St2Icon1.style.background = "url(icon1.png)";
    St2Text1.style.color = "#555555";
    St2Border1.style.borderBottom = "3px solid #f1eee9"

    St2Icon3.style.background = "url(icon3.png)";
    St2Text3.style.color = "#555555";
    St2Border3.style.borderBottom = "3px solid #f1eee9"

    St2Icon4.style.background = "url(icon4.png)";
    St2Text4.style.color = "#555555";
    St2Border4.style.borderBottom = "3px solid #f1eee9"
}

function Icon3() {
    St2Icon3.style.background = "url(icon13.png)";
    St2Text3.style.color = "#c7b299";
    St2Border3.style.borderBottom = "3px solid #c7b299"

    St2Icon2.style.background = "url(icon2.png)";
    St2Text2.style.color = "#555555";
    St2Border2.style.borderBottom = "3px solid #f1eee9"

    St2Icon1.style.background = "url(icon1.png)";
    St2Text1.style.color = "#555555";
    St2Border1.style.borderBottom = "3px solid #f1eee9"

    St2Icon4.style.background = "url(icon4.png)";
    St2Text4.style.color = "#555555";
    St2Border4.style.borderBottom = "3px solid #f1eee9"
}

function Icon4() {
    St2Icon4.style.background = "url(icon14.png)";
    St2Text4.style.color = "#c7b299";
    St2Border4.style.borderBottom = "3px solid #c7b299"

    St2Icon2.style.background = "url(icon2.png)";
    St2Text2.style.color = "#555555";
    St2Border2.style.borderBottom = "3px solid #f1eee9"

    St2Icon3.style.background = "url(icon3.png)";
    St2Text3.style.color = "#555555";
    St2Border3.style.borderBottom = "3px solid #f1eee9"

    St2Icon1.style.background = "url(icon1.png)";
    St2Text1.style.color = "#555555";
    St2Border1.style.borderBottom = "3px solid #f1eee9"
}


// Девятый экран. Рид моур

var St9ReadMour;

function St9Link() {
    St9ReadMour = document.getElementsByClassName("st9-link-arrow-blok")[0];    

    var span = document.getElementsByClassName("st9-bl1-text-little")[0];   
    var text = document.createTextNode("Est etiam claritas processus dynamicus. Sequitur mutationem qui consuetudium sequitur.");
    span.appendChild(text);
    St9ReadMour.style.display = "none";    

}

// Третий экран. Лупа у фото.
var navigation1 = document.getElementsByClassName("st3-navigation-blok")[0];
var navigation2 = document.getElementsByClassName("st3-navigation-blok")[1];
var navigation3 = document.getElementsByClassName("st3-navigation-blok")[2];
var navigation4 = document.getElementsByClassName("st3-navigation-blok")[3];
var navigation5 = document.getElementsByClassName("st3-navigation-blok")[4];
var navigation6 = document.getElementsByClassName("st3-navigation-blok")[5];

var PhotoTextBlok1 = document.getElementsByClassName("st3-photo-text-blok-blok")[0];
var PhotoTextBlok2 = document.getElementsByClassName("st3-photo-text-blok-blok")[1];
var PhotoTextBlok3 = document.getElementsByClassName("st3-photo-text-blok-blok")[2];
var PhotoTextBlok4 = document.getElementsByClassName("st3-photo-text-blok-blok")[3];
var PhotoTextBlok5 = document.getElementsByClassName("st3-photo-text-blok-blok")[4];
var PhotoTextBlok6 = document.getElementsByClassName("st3-photo-text-blok-blok")[5];

var St3Photo1 = document.getElementsByClassName("st3-photo1")[0];
var St3Photo2 = document.getElementsByClassName("st3-photo2")[0];
var St3Photo3 = document.getElementsByClassName("st3-photo3")[0];
var St3Photo4 = document.getElementsByClassName("st3-photo4")[0];
var St3Photo5 = document.getElementsByClassName("st3-photo5")[0];
var St3Photo6 = document.getElementsByClassName("st3-photo6")[0];



function Lupa1() {
    navigation1.style.display = "block";
    PhotoTextBlok1.style.backgroundImage = "url(bott14.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"

    St3Photo1.style.cursor = "auto";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";
}

function Lupa2() {
    navigation2.style.display = "block";
    PhotoTextBlok2.style.backgroundImage = "url(bott14.png)"
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"

    St3Photo2.style.cursor = "auto";
    St3Photo1.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";
}

function Lupa3() {
    navigation3.style.display = "block";
    PhotoTextBlok3.style.backgroundImage = "url(bott14.png)"
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"

    St3Photo3.style.cursor = "auto";
    St3Photo2.style.cursor = "pointer";
    St3Photo1.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";
}

function Lupa4() {
    navigation4.style.display = "block";
    PhotoTextBlok4.style.backgroundImage = "url(bott14.png)"
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"

    St3Photo4.style.cursor = "auto";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo1.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";
}

function Lupa5() {
    navigation5.style.display = "block";
    PhotoTextBlok5.style.backgroundImage = "url(bott14.png)"
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"

    St3Photo5.style.cursor = "auto";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo1.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";
}

function Lupa6() {
    navigation6.style.display = "block";
    PhotoTextBlok6.style.backgroundImage = "url(bott14.png)"
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"

    St3Photo6.style.cursor = "auto";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo1.style.cursor = "pointer";
}


// Лупа для второго блока.
var navigation7 = document.getElementsByClassName("st3-navigation-blok")[6];
var navigation8 = document.getElementsByClassName("st3-navigation-blok")[7];
var navigation9 = document.getElementsByClassName("st3-navigation-blok")[8];
var navigation10 = document.getElementsByClassName("st3-navigation-blok")[9];
var navigation11 = document.getElementsByClassName("st3-navigation-blok")[10];
var navigation12 = document.getElementsByClassName("st3-navigation-blok")[11];

var PhotoTextBlok7 = document.getElementsByClassName("st3-photo-text-blok-blok")[6];
var PhotoTextBlok8 = document.getElementsByClassName("st3-photo-text-blok-blok")[7];
var PhotoTextBlok9 = document.getElementsByClassName("st3-photo-text-blok-blok")[8];
var PhotoTextBlok10 = document.getElementsByClassName("st3-photo-text-blok-blok")[9];
var PhotoTextBlok11 = document.getElementsByClassName("st3-photo-text-blok-blok")[10];
var PhotoTextBlok12 = document.getElementsByClassName("st3-photo-text-blok-blok")[11];

var St3Photo7 = document.getElementsByClassName("st3-photo")[6];
var St3Photo8 = document.getElementsByClassName("st3-photo")[7];
var St3Photo9 = document.getElementsByClassName("st3-photo")[8];
var St3Photo10 = document.getElementsByClassName("st3-photo")[9];
var St3Photo11 = document.getElementsByClassName("st3-photo")[10];
var St3Photo12 = document.getElementsByClassName("st3-photo")[11];



function Lupa7() {
    navigation7.style.display = "block";
    PhotoTextBlok7.style.backgroundImage = "url(bott14.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"

    St3Photo7.style.cursor = "auto";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
}

function Lupa8() {
    navigation8.style.display = "block";
    PhotoTextBlok8.style.backgroundImage = "url(bott14.png)"
    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"

    St3Photo8.style.cursor = "auto";
    St3Photo7.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
}

function Lupa9() {
    navigation9.style.display = "block";
    PhotoTextBlok9.style.backgroundImage = "url(bott14.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"

    
    St3Photo9.style.cursor = "auto";
    St3Photo8.style.cursor = "pointer";
    St3Photo7.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
}

function Lupa10() {
    navigation10.style.display = "block";
    PhotoTextBlok10.style.backgroundImage = "url(bott14.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"

    St3Photo10.style.cursor = "auto";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo7.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
}

function Lupa11() {
    navigation11.style.display = "block";
    PhotoTextBlok11.style.backgroundImage = "url(bott14.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"

    St3Photo11.style.cursor = "auto";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo7.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
}

function Lupa12() {
    navigation12.style.display = "block";
    PhotoTextBlok12.style.backgroundImage = "url(bott14.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"

    St3Photo12.style.cursor = "auto";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo7.style.cursor = "pointer";
}


// Лупа для третьего блока.
var navigation13 = document.getElementsByClassName("st3-navigation-blok")[12];
var navigation14 = document.getElementsByClassName("st3-navigation-blok")[13];
var navigation15 = document.getElementsByClassName("st3-navigation-blok")[14];
var navigation16 = document.getElementsByClassName("st3-navigation-blok")[15];
var navigation17 = document.getElementsByClassName("st3-navigation-blok")[16];
var navigation18 = document.getElementsByClassName("st3-navigation-blok")[17];

var PhotoTextBlok13 = document.getElementsByClassName("st3-photo-text-blok-blok")[12];
var PhotoTextBlok14 = document.getElementsByClassName("st3-photo-text-blok-blok")[13];
var PhotoTextBlok15 = document.getElementsByClassName("st3-photo-text-blok-blok")[14];
var PhotoTextBlok16 = document.getElementsByClassName("st3-photo-text-blok-blok")[15];
var PhotoTextBlok17 = document.getElementsByClassName("st3-photo-text-blok-blok")[16];
var PhotoTextBlok18 = document.getElementsByClassName("st3-photo-text-blok-blok")[17];

var St3Photo13 = document.getElementsByClassName("st3-photo")[12];
var St3Photo14 = document.getElementsByClassName("st3-photo")[13];
var St3Photo15 = document.getElementsByClassName("st3-photo")[14];
var St3Photo16 = document.getElementsByClassName("st3-photo")[15];
var St3Photo17 = document.getElementsByClassName("st3-photo")[16];
var St3Photo18 = document.getElementsByClassName("st3-photo")[17];



function Lupa13() {
    navigation13.style.display = "block";
    PhotoTextBlok13.style.backgroundImage = "url(bott14.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"

    St3Photo13.style.cursor = "auto";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";
}

function Lupa14() {
    navigation14.style.display = "block";
    PhotoTextBlok14.style.backgroundImage = "url(bott14.png)"
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"

    St3Photo14.style.cursor = "auto";
    St3Photo13.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";
}

function Lupa15() {
    navigation15.style.display = "block";
    PhotoTextBlok15.style.backgroundImage = "url(bott14.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"

    St3Photo15.style.cursor = "auto";
    St3Photo14.style.cursor = "pointer";
    St3Photo13.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";
}

function Lupa16() {
    navigation16.style.display = "block";
    PhotoTextBlok16.style.backgroundImage = "url(bott14.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"

    St3Photo16.style.cursor = "auto";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo13.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";
}

function Lupa17() {
    navigation17.style.display = "block";
    PhotoTextBlok17.style.backgroundImage = "url(bott14.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"

    St3Photo17.style.cursor = "auto";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo13.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";
}

function Lupa18() {
    navigation18.style.display = "block";
    PhotoTextBlok18.style.backgroundImage = "url(bott14.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"

    St3Photo18.style.cursor = "auto";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo13.style.cursor = "pointer";
}



// Лупа для четвёртого блока.
var navigation19 = document.getElementsByClassName("st3-navigation-blok")[18];
var navigation20 = document.getElementsByClassName("st3-navigation-blok")[19];
var navigation21 = document.getElementsByClassName("st3-navigation-blok")[20];
var navigation22 = document.getElementsByClassName("st3-navigation-blok")[21];
var navigation23 = document.getElementsByClassName("st3-navigation-blok")[22];
var navigation24 = document.getElementsByClassName("st3-navigation-blok")[23];

var PhotoTextBlok19 = document.getElementsByClassName("st3-photo-text-blok-blok")[18];
var PhotoTextBlok20 = document.getElementsByClassName("st3-photo-text-blok-blok")[19];
var PhotoTextBlok21 = document.getElementsByClassName("st3-photo-text-blok-blok")[20];
var PhotoTextBlok22 = document.getElementsByClassName("st3-photo-text-blok-blok")[21];
var PhotoTextBlok23 = document.getElementsByClassName("st3-photo-text-blok-blok")[22];
var PhotoTextBlok24 = document.getElementsByClassName("st3-photo-text-blok-blok")[23];

var St3Photo19 = document.getElementsByClassName("st3-photo")[18];
var St3Photo20 = document.getElementsByClassName("st3-photo")[19];
var St3Photo21 = document.getElementsByClassName("st3-photo")[20];
var St3Photo22 = document.getElementsByClassName("st3-photo")[21];
var St3Photo23 = document.getElementsByClassName("st3-photo")[22];
var St3Photo24 = document.getElementsByClassName("st3-photo")[23];



function Lupa19() {
    navigation19.style.display = "block";
    PhotoTextBlok19.style.backgroundImage = "url(bott14.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"

    St3Photo19.style.cursor = "auto";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";
}

function Lupa20() {
    navigation20.style.display = "block";
    PhotoTextBlok20.style.backgroundImage = "url(bott14.png)"
    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"

    St3Photo20.style.cursor = "auto";
    St3Photo19.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";
}

function Lupa21() {
    navigation21.style.display = "block";
    PhotoTextBlok21.style.backgroundImage = "url(bott14.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"

    St3Photo21.style.cursor = "auto";
    St3Photo20.style.cursor = "pointer";
    St3Photo19.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";
}

function Lupa22() {
    navigation22.style.display = "block";
    PhotoTextBlok22.style.backgroundImage = "url(bott14.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"

    St3Photo22.style.cursor = "auto";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo19.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";
}

function Lupa23() {
    navigation23.style.display = "block";
    PhotoTextBlok23.style.backgroundImage = "url(bott14.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"

    St3Photo23.style.cursor = "auto";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo19.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";
}

function Lupa24() {
    navigation24.style.display = "block";
    PhotoTextBlok24.style.backgroundImage = "url(bott14.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"

    St3Photo24.style.cursor = "auto";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo19.style.cursor = "pointer";
}

// Лупа для пятого блока.
var navigation25 = document.getElementsByClassName("st3-navigation-blok")[24];
var navigation26 = document.getElementsByClassName("st3-navigation-blok")[25];
var navigation27 = document.getElementsByClassName("st3-navigation-blok")[26];
var navigation28 = document.getElementsByClassName("st3-navigation-blok")[27];
var navigation29 = document.getElementsByClassName("st3-navigation-blok")[28];
var navigation30 = document.getElementsByClassName("st3-navigation-blok")[29];

var PhotoTextBlok25 = document.getElementsByClassName("st3-photo-text-blok-blok")[24];
var PhotoTextBlok26 = document.getElementsByClassName("st3-photo-text-blok-blok")[25];
var PhotoTextBlok27 = document.getElementsByClassName("st3-photo-text-blok-blok")[26];
var PhotoTextBlok28 = document.getElementsByClassName("st3-photo-text-blok-blok")[27];
var PhotoTextBlok29 = document.getElementsByClassName("st3-photo-text-blok-blok")[28];
var PhotoTextBlok30 = document.getElementsByClassName("st3-photo-text-blok-blok")[29];

var St3Photo25 = document.getElementsByClassName("st3-photo")[24];
var St3Photo26 = document.getElementsByClassName("st3-photo")[25];
var St3Photo27 = document.getElementsByClassName("st3-photo")[26];
var St3Photo28 = document.getElementsByClassName("st3-photo")[27];
var St3Photo29 = document.getElementsByClassName("st3-photo")[28];
var St3Photo30 = document.getElementsByClassName("st3-photo")[29];



function Lupa25() {
    navigation25.style.display = "block";
    PhotoTextBlok25.style.backgroundImage = "url(bott14.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"

    St3Photo25.style.cursor = "auto";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Lupa26() {
    navigation26.style.display = "block";
    PhotoTextBlok26.style.backgroundImage = "url(bott14.png)"
    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"

    St3Photo26.style.cursor = "auto";
    St3Photo25.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Lupa27() {
    navigation27.style.display = "block";
    PhotoTextBlok27.style.backgroundImage = "url(bott14.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"

    St3Photo27.style.cursor = "auto";
    St3Photo26.style.cursor = "pointer";
    St3Photo25.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Lupa28() {
    navigation28.style.display = "block";
    PhotoTextBlok28.style.backgroundImage = "url(bott14.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"

    St3Photo28.style.cursor = "auto";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo25.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Lupa29() {
    navigation29.style.display = "block";
    PhotoTextBlok29.style.backgroundImage = "url(bott14.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"

    St3Photo29.style.cursor = "auto";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo25.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Lupa30() {
    navigation30.style.display = "block";
    PhotoTextBlok30.style.backgroundImage = "url(bott14.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"

    St3Photo30.style.cursor = "auto";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo25.style.cursor = "pointer";
}







// Третий экран. Перемешивание фото.

var St3PhotoBlok1 = document.getElementsByClassName("st3-photo-blok-blok1")[0];
var St3PhotoBlok2 = document.getElementsByClassName("st3-photo-blok-blok2")[0];
var St3PhotoBlok3 = document.getElementsByClassName("st3-photo-blok-blok3")[0];
var St3PhotoBlok4 = document.getElementsByClassName("st3-photo-blok-blok4")[0];
var St3PhotoBlok5 = document.getElementsByClassName("st3-photo-blok-blok5")[0];

var St3butt1 = document.getElementsByClassName("st3butt")[0];
var St3butt2 = document.getElementsByClassName("st3butt")[1];
var St3butt3 = document.getElementsByClassName("st3butt")[2];
var St3butt4 = document.getElementsByClassName("st3butt")[3];
var St3butt5 = document.getElementsByClassName("st3butt")[4];

var St3buttText1 = document.getElementsByClassName("st3-button-text")[0];
var St3buttText2 = document.getElementsByClassName("st3-button-text")[1];
var St3buttText3 = document.getElementsByClassName("st3-button-text")[2];
var St3buttText4 = document.getElementsByClassName("st3-button-text")[3];
var St3buttText5 = document.getElementsByClassName("st3-button-text")[4];





function Shot1() {    
    St3PhotoBlok1.style.display = "block";
    St3PhotoBlok2.style.display = "none";
    St3PhotoBlok3.style.display = "none";
    St3PhotoBlok4.style.display = "none";
    St3PhotoBlok5.style.display = "none";

    St3butt1.style.background = "#998675";
    St3buttText1.style.color = "#ffffff";

    St3butt2.style.background = "#ffffff";
    St3buttText2.style.color = "#8c8c8c";

    St3butt3.style.background = "#ffffff";
    St3buttText3.style.color = "#8c8c8c";

    St3butt4.style.background = "#ffffff";
    St3buttText4.style.color = "#8c8c8c";

    St3butt5.style.background = "#ffffff";
    St3buttText5.style.color = "#8c8c8c"; 
    
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"
    St3Photo1.style.cursor = "pointer";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";

    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"
    St3Photo7.style.cursor = "pointer";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
    
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"
    St3Photo13.style.cursor = "pointer";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";

    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"
    St3Photo19.style.cursor = "pointer";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";

    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"
    St3Photo25.style.cursor = "pointer";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Shot2() {
    St3PhotoBlok2.style.display = "block";
    St3PhotoBlok1.style.display = "none";
    St3PhotoBlok3.style.display = "none";
    St3PhotoBlok4.style.display = "none";
    St3PhotoBlok5.style.display = "none";

    St3butt2.style.background = "#998675";
    St3buttText2.style.color = "#ffffff";

    St3butt1.style.background = "#ffffff";
    St3buttText1.style.color = "#8c8c8c";

    St3butt3.style.background = "#ffffff";
    St3buttText3.style.color = "#8c8c8c";

    St3butt4.style.background = "#ffffff";
    St3buttText4.style.color = "#8c8c8c";

    St3butt5.style.background = "#ffffff";
    St3buttText5.style.color = "#8c8c8c";  
    
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"
    St3Photo1.style.cursor = "pointer";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";

    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"
    St3Photo7.style.cursor = "pointer";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
    
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"
    St3Photo13.style.cursor = "pointer";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";

    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"
    St3Photo19.style.cursor = "pointer";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";

    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"
    St3Photo25.style.cursor = "pointer";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Shot3() {
    St3PhotoBlok3.style.display = "block";
    St3PhotoBlok1.style.display = "none";
    St3PhotoBlok2.style.display = "none";
    St3PhotoBlok4.style.display = "none";
    St3PhotoBlok5.style.display = "none";

    St3butt3.style.background = "#998675";
    St3buttText3.style.color = "#ffffff";

    St3butt2.style.background = "#ffffff";
    St3buttText2.style.color = "#8c8c8c";

    St3butt1.style.background = "#ffffff";
    St3buttText1.style.color = "#8c8c8c";

    St3butt4.style.background = "#ffffff";
    St3buttText4.style.color = "#8c8c8c";

    St3butt5.style.background = "#ffffff";
    St3buttText5.style.color = "#8c8c8c";   

    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"
    St3Photo1.style.cursor = "pointer";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";

    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"
    St3Photo7.style.cursor = "pointer";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
    
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"
    St3Photo13.style.cursor = "pointer";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";

    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"
    St3Photo19.style.cursor = "pointer";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";

    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"
    St3Photo25.style.cursor = "pointer";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Shot4() {
    St3PhotoBlok4.style.display = "block";
    St3PhotoBlok1.style.display = "none";
    St3PhotoBlok3.style.display = "none";
    St3PhotoBlok2.style.display = "none";
    St3PhotoBlok5.style.display = "none";

    St3butt4.style.background = "#998675";
    St3buttText4.style.color = "#ffffff";

    St3butt2.style.background = "#ffffff";
    St3buttText2.style.color = "#8c8c8c";

    St3butt3.style.background = "#ffffff";
    St3buttText3.style.color = "#8c8c8c";

    St3butt1.style.background = "#ffffff";
    St3buttText1.style.color = "#8c8c8c";

    St3butt5.style.background = "#ffffff";
    St3buttText5.style.color = "#8c8c8c"; 
    
    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"
    St3Photo1.style.cursor = "pointer";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";

    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"
    St3Photo7.style.cursor = "pointer";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
    
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"
    St3Photo13.style.cursor = "pointer";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";

    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"
    St3Photo19.style.cursor = "pointer";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";

    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"
    St3Photo25.style.cursor = "pointer";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}

function Shot5() {
    St3PhotoBlok5.style.display = "block";
    St3PhotoBlok1.style.display = "none";
    St3PhotoBlok3.style.display = "none";
    St3PhotoBlok4.style.display = "none";
    St3PhotoBlok2.style.display = "none";

    St3butt5.style.background = "#998675";
    St3buttText5.style.color = "#ffffff";

    St3butt2.style.background = "#ffffff";
    St3buttText2.style.color = "#8c8c8c";

    St3butt3.style.background = "#ffffff";
    St3buttText3.style.color = "#8c8c8c";

    St3butt4.style.background = "#ffffff";
    St3buttText4.style.color = "#8c8c8c";

    St3butt1.style.background = "#ffffff";
    St3buttText1.style.color = "#8c8c8c";   

    navigation1.style.display = "none";
    PhotoTextBlok1.style.backgroundImage = "url(bott4.png)"
    navigation2.style.display = "none";
    PhotoTextBlok2.style.backgroundImage = "url(bott4.png)"
    navigation3.style.display = "none";
    PhotoTextBlok3.style.backgroundImage = "url(bott4.png)"
    navigation4.style.display = "none";
    PhotoTextBlok4.style.backgroundImage = "url(bott4.png)"
    navigation5.style.display = "none";
    PhotoTextBlok5.style.backgroundImage = "url(bott4.png)"
    navigation6.style.display = "none";
    PhotoTextBlok6.style.backgroundImage = "url(bott4.png)"
    St3Photo1.style.cursor = "pointer";
    St3Photo2.style.cursor = "pointer";
    St3Photo3.style.cursor = "pointer";
    St3Photo4.style.cursor = "pointer";
    St3Photo5.style.cursor = "pointer";
    St3Photo6.style.cursor = "pointer";

    navigation7.style.display = "none";
    PhotoTextBlok7.style.backgroundImage = "url(bott4.png)"
    navigation8.style.display = "none";
    PhotoTextBlok8.style.backgroundImage = "url(bott4.png)"
    navigation9.style.display = "none";
    PhotoTextBlok9.style.backgroundImage = "url(bott4.png)"
    navigation10.style.display = "none";
    PhotoTextBlok10.style.backgroundImage = "url(bott4.png)"
    navigation11.style.display = "none";
    PhotoTextBlok11.style.backgroundImage = "url(bott4.png)"
    navigation12.style.display = "none";
    PhotoTextBlok12.style.backgroundImage = "url(bott4.png)"
    St3Photo7.style.cursor = "pointer";
    St3Photo8.style.cursor = "pointer";
    St3Photo9.style.cursor = "pointer";
    St3Photo10.style.cursor = "pointer";
    St3Photo11.style.cursor = "pointer";
    St3Photo12.style.cursor = "pointer";
    
    navigation13.style.display = "none";
    PhotoTextBlok13.style.backgroundImage = "url(bott4.png)"
    navigation14.style.display = "none";
    PhotoTextBlok14.style.backgroundImage = "url(bott4.png)"
    navigation15.style.display = "none";
    PhotoTextBlok15.style.backgroundImage = "url(bott4.png)"
    navigation16.style.display = "none";
    PhotoTextBlok16.style.backgroundImage = "url(bott4.png)"
    navigation17.style.display = "none";
    PhotoTextBlok17.style.backgroundImage = "url(bott4.png)"
    navigation18.style.display = "none";
    PhotoTextBlok18.style.backgroundImage = "url(bott4.png)"
    St3Photo13.style.cursor = "pointer";
    St3Photo14.style.cursor = "pointer";
    St3Photo15.style.cursor = "pointer";
    St3Photo16.style.cursor = "pointer";
    St3Photo17.style.cursor = "pointer";
    St3Photo18.style.cursor = "pointer";

    navigation19.style.display = "none";
    PhotoTextBlok19.style.backgroundImage = "url(bott4.png)"
    navigation20.style.display = "none";
    PhotoTextBlok20.style.backgroundImage = "url(bott4.png)"
    navigation21.style.display = "none";
    PhotoTextBlok21.style.backgroundImage = "url(bott4.png)"
    navigation22.style.display = "none";
    PhotoTextBlok22.style.backgroundImage = "url(bott4.png)"
    navigation23.style.display = "none";
    PhotoTextBlok23.style.backgroundImage = "url(bott4.png)"
    navigation24.style.display = "none";
    PhotoTextBlok24.style.backgroundImage = "url(bott4.png)"
    St3Photo19.style.cursor = "pointer";
    St3Photo20.style.cursor = "pointer";
    St3Photo21.style.cursor = "pointer";
    St3Photo22.style.cursor = "pointer";
    St3Photo23.style.cursor = "pointer";
    St3Photo24.style.cursor = "pointer";

    navigation25.style.display = "none";
    PhotoTextBlok25.style.backgroundImage = "url(bott4.png)"
    navigation26.style.display = "none";
    PhotoTextBlok26.style.backgroundImage = "url(bott4.png)"
    navigation27.style.display = "none";
    PhotoTextBlok27.style.backgroundImage = "url(bott4.png)"
    navigation28.style.display = "none";
    PhotoTextBlok28.style.backgroundImage = "url(bott4.png)"
    navigation29.style.display = "none";
    PhotoTextBlok29.style.backgroundImage = "url(bott4.png)"
    navigation30.style.display = "none";
    PhotoTextBlok30.style.backgroundImage = "url(bott4.png)"
    St3Photo25.style.cursor = "pointer";
    St3Photo26.style.cursor = "pointer";
    St3Photo27.style.cursor = "pointer";
    St3Photo28.style.cursor = "pointer";
    St3Photo29.style.cursor = "pointer";
    St3Photo30.style.cursor = "pointer";
}