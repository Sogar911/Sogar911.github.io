// Включение тени
var select1 = document.getElementsByClassName ("scr2-select1")[0];
select1.addEventListener("click", function(e) {        
    e.stopPropagation();
    select1.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";              
});  

var select11 = document.getElementsByClassName ("scr4-select1")[0];  
select11.addEventListener("click", function(e) {
    e.stopPropagation();
    select11.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";              
});   

var select2 = document.getElementsByClassName ("scr2-select")[0];
select2.addEventListener("click", function(e) {
    e.stopPropagation();
    select2.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";              
});        
        
var select22 = document.getElementsByClassName ("scr2-select")[1];
select22.addEventListener("click", function(e) {
    e.stopPropagation();
    select22.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";              
});

// Отключение тени
var around = document.getElementsByClassName ("screen-around")[0];       
around.addEventListener("click", function() {               
    select1.style.boxShadow = "none"; 
    select11.style.boxShadow = "none"; 
    select2.style.boxShadow = "none"; 
    select22.style.boxShadow = "none";              
});


       