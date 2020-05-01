    // Прокрутка шапки
var head = document.getElementsByTagName('header')[0];
var none0 = document.getElementsByClassName('scroll-none')[1]
var none1 = document.getElementsByClassName('scroll-none')[2]
var cont = document.getElementsByClassName('contacts')[0];

var dropN1 = document.getElementsByClassName('drop-nav')[0];
var dropN2 = document.getElementsByClassName('drop-nav')[1];

var phonBtn = document.getElementsByClassName('phon-btn')[0];


var logo1 = document.getElementsByClassName('scroll-none')[0];
var logo2 = document.getElementsByClassName('scroll-block')[0];

var container1 = document.getElementsByClassName('container1')[0];

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll>1) {
        head.style.height = "70px";
        head.style.background = "#010101";

        head.style.paddingTop = '10px';
        container1.style.height= '40px';
        head.style.height= '50px';

        phonBtn.style.marginTop = "2px"



        none0.style.display = 'none'
        none1.style.display = 'none'

        cont.style.alignContent= 'center';

        logo1.style.display = 'none';
        logo2.style.display = 'inline-block';
    }
    if(scroll<1) {
        head.style.height = "150px";
        head.style.background = "url(img/header.png)";

        head.style.paddingTop = '35px';
        container1.style.height= '80px';
        head.style.height= '120px';

        phonBtn.style.marginTop = "10px"


        none0.style.display = 'flex'
        none1.style.display = 'block'
        cont.style.alignContent= 'space-between';
        logo2.style.display = 'none';
        logo1.style.display = 'inline-block';
    }    
});




// Всплывающее меню
var nav1 = document.getElementsByClassName('drop-menu')[0];
var nav2 = document.getElementsByClassName('drop-menu')[1];

var navDrop1 = document.getElementsByClassName('drop-nav')[0];
var navDrop2 = document.getElementsByClassName('drop-nav')[1];

var dropP1 = document.getElementsByClassName('drop-p')[0];
var dropP2 = document.getElementsByClassName('drop-p')[1];


navDrop2.onmouseover = function(){
    nav2.style.display = 'block';
    dropP2.style.color = '#ecc878';
}
navDrop2.onmouseout = function(){
    nav2.style.display = 'none';
    dropP2.style.color = '#fffcfc';
}

navDrop1.onmouseover = function(){
    nav1.style.display = 'block';
    dropP1.style.color = '#ecc878';
}
navDrop1.onmouseout = function(){
    nav1.style.display = 'none';
    dropP1.style.color = '#fffcfc';
}

// Всплыв. меню в моб.
var nav2Btn = document.getElementsByClassName('phon-btn')[0];
var nav2Window = document.getElementsByClassName('nav2')[0];

var count = 1;

nav2Btn.onclick = function(){   
    count++ 
    if(count % 2 == 0){
        nav2Window.style.display = "flex";
    } else{
        nav2Window.style.display = "none";
    }       
}

// Всплыв меню в меню
var drop2Nav1= document.getElementsByClassName('drop-nav2')[0];
var drop2Nav2= document.getElementsByClassName('drop-nav2')[1];

var drop2menu3= document.getElementsByClassName('drop-menu3')[0];
var drop2menu4= document.getElementsByClassName('drop-menu4')[0];


drop2Nav1.onclick = function(){
    drop2menu3.style.display = "flex";
    drop2menu4.style.display = "none";
}

drop2Nav2.onclick = function(){
    drop2menu4.style.display = "flex";
    drop2menu3.style.display = "none";
}




var handleMatchMedia = function (mediaQuery) {
    if (mediaQuery.matches) {
    } else {
       
        drop2menu3.style.display = "none";
        drop2menu4.style.display = "none";
        nav2Window.style.display = "none";

    }
},
mql = window.matchMedia('all and (max-width: 1200px)');

handleMatchMedia(mql);
mql.addListener(handleMatchMedia); 









// Слайдер
var but1 = document.getElementsByClassName('but')[0];
var but2 = document.getElementsByClassName('but')[1];
var but3 = document.getElementsByClassName('but')[2];

var viImg1 = document.getElementsByClassName('wi-img')[0];
var viImg2 = document.getElementsByClassName('wi-img')[1];
var viImg3 = document.getElementsByClassName('wi-img')[2];






var contt = 1;
for(var i = 0; i < 3; i++){
    var wind = document.getElementsByClassName('wi-img')[i];   
wind.onclick = function(){
    if (contt == 1) {
        but2.classList.add('on');
        but2.classList.remove('off');
        but1.classList.add('off');
        but1.classList.remove('on');
        but3.classList.add('off');
        but3.classList.remove('on');

        viImg2.classList.add('img-on');
        viImg2.classList.remove('img-off');

        viImg1.classList.add('img-off');
        viImg1.classList.remove('img-on');

        viImg3.classList.add('img-off');
        viImg3.classList.remove('img-on');
        contt++
    }
    else{
        if(contt == 2){
            but3.classList.add('on');
            but3.classList.remove('off');   
            
            but2.classList.add('off');
            but2.classList.remove('on');

            but1.classList.add('off');
            but1.classList.remove('on');    

            viImg3.classList.add('img-on');
            viImg3.classList.remove('img-off');

            viImg2.classList.add('img-off');
            viImg2.classList.remove('img-on');

            viImg1.classList.add('img-off');
            viImg1.classList.remove('img-on');
            contt++
        }
        else{
            if(contt > 2){
                but1.classList.add('on');
                but1.classList.remove('off');
                but2.classList.add('off');
                but2.classList.remove('on');
                but3.classList.add('off');
                but3.classList.remove('on');

                viImg1.classList.add('img-on');
                viImg1.classList.remove('img-off');

                viImg2.classList.add('img-off');
                viImg2.classList.remove('img-on');

                viImg3.classList.add('img-off');
                viImg3.classList.remove('img-on');
                contt = 1

            }
        }
    }

}
console.log(contt)


}






but1.onclick = function(){
    but1.classList.add('on');
    but1.classList.remove('off');
    but2.classList.add('off');
    but2.classList.remove('on');
    but3.classList.add('off');
    but3.classList.remove('on');

    viImg1.classList.add('img-on');
    viImg1.classList.remove('img-off');

    viImg2.classList.add('img-off');
    viImg2.classList.remove('img-on');

    viImg3.classList.add('img-off');
    viImg3.classList.remove('img-on');
    contt = 1;
}


but2.onclick = function(){
    but2.classList.add('on');
    but2.classList.remove('off');
    but1.classList.add('off');
    but1.classList.remove('on');
    but3.classList.add('off');
    but3.classList.remove('on');

    viImg2.classList.add('img-on');
    viImg2.classList.remove('img-off');

    viImg1.classList.add('img-off');
    viImg1.classList.remove('img-on');

    viImg3.classList.add('img-off');
    viImg3.classList.remove('img-on');
    contt = 2
    
}
but3.onclick = function(){
    but3.classList.add('on');
    but3.classList.remove('off');   
    
    but2.classList.add('off');
    but2.classList.remove('on');

    but1.classList.add('off');
    but1.classList.remove('on');    

    viImg3.classList.add('img-on');
    viImg3.classList.remove('img-off');

    viImg2.classList.add('img-off');
    viImg2.classList.remove('img-on');

    viImg1.classList.add('img-off');
    viImg1.classList.remove('img-on');
    contt = 3
}