let sideNav = document.querySelector('.sidenav');
let menuBtn = document.querySelector('.menu-btn');
let banner = document.querySelector('#banner');

const gallery = document.querySelector(".img-gallery");
const images = document.querySelectorAll(".gallery img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
let count = 1;

menuBtn.onclick = () =>{

    if(sideNav.style.width == '250px')
        {
            sideNav.style.width = '0px';
            menuBtn.src = 'imgs/menu.png';

        }
    else{
            sideNav.style.width = '250px';
            menuBtn.src = 'imgs/close.png';
        }
    
}

if(sideNav.style.width == '250px')
    {
        banner.addEventListener('click' , () =>{
            sideNav.style.width = '0px';
            menuBtn.src = 'imgs/menu.png';
        })
    }

const size = images[2].clientWidth;
console.log(size);

gallery.style.transform = 'translateX(' + ((-size)*counter) + 'px)' ;

nextBtn.addEventListener('click' , () =>{

    if(counter >= images.length -1) return ;
    
    gallery.style.transition = 'transform 0.4s ease-in-out' ;
    counter ++;
    gallery.style.transform = 'translateX(' + (-size * counter) + 'px)' ;   
    
})

prevBtn.addEventListener('click' , () =>{

    if(counter <= 0) return ;
    
    gallery.style.transition = 'transform 0.4s ease-in-out' ;
    counter --;
    gallery.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
    
})

gallery.addEventListener('transitionend' , () =>{
    if(images[counter].id === 'lastClone')
    {
        gallery.style.transition = 'none';
        counter = images.length - 2 ;
        gallery.style.transform = 'translateX(' + (-size * counter) + 'px)' ;

    }
    if(images[counter].id === 'firstClone')
    {
        gallery.style.transition = 'none';
        counter = images.length - counter ;
        gallery.style.transform = 'translateX(' + (-size * counter) + 'px)' ;

    }
    
})


// document.querySelector('#banner').style.backgroundImage = " linear-gradient(  rgba(0,0,0,0) ,rgba(119 ,219 ,219 , 0.5)  ) ,linear-gradient(rgba(255, 20, 147 ,0.5) ,  rgba(0,0,0,0)) , url('imgs/slider"+ 1 +".jpeg')";

// while (count != 5)
// {

// setTimeout( () =>{
    
    
//     document.querySelector('#banner').style.backgroundImage = " linear-gradient(  rgba(0,0,0,0) ,rgba(119 ,219 ,219 , 0.5)  ) ,linear-gradient(rgba(255, 20, 147 ,0.5) ,  rgba(0,0,0,0)) , url('imgs/slider"+ count +".jpeg')";
//   count++ ;
//   if(count==4)
//   {
//      count = 1
//   }
// } , 1000)

// }

