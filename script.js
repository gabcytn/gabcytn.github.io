$(document).click(function(event){
  if(event.target.classList.contains('fa-bars')){
    $('#my-nav').css({'right' : '0', 'opacity': '1'});
    $('body').css({'height': '100dvh', 'overflow': 'hidden'});
    $('.video').css({'background': 'rgba(255,255,255, 0.25)'});
    $('.navbar-brand a').css({'pointer-events': 'none'});
    $('#sign-in-btn').removeClass('btn');
    $('#sign-in-btn').removeClass('btn-primary');
    $('#sign-in-btn').addClass('nav-link');
   

  } else if(event.target.classList.contains('video')){
    $('#my-nav').css({'right' : '-75%'});
    $('body').css({'height': 'auto', 'overflow': 'visible'});
    $('.video').css({'background': 'none'});
    $('.navbar-brand a').css({'pointer-events': 'auto'});
    $('#sign-in-btn').addClass('btn');
    $('#sign-in-btn').addClass('btn-primary');
    $('#sign-in-btn').removeClass('nav-link');
    
  }
});

$(window).resize(function(){
  if (window.innerWidth > 550) {
    $('#my-nav').css({'right' : '-75%'});
    $('body').css({'height': 'auto', 'overflow': 'auto'});
    $('.video').css({'background': 'none'});
    $('.navbar-brand a').css({'pointer-events': 'auto'});
    $('#sign-in-btn').addClass('btn');
    $('#sign-in-btn').addClass('btn-primary');
    $('#sign-in-btn').removeClass('nav-link');
  }
});

window.addEventListener('scroll', () => {
  let container = document.querySelectorAll('.fade-in');

  for (let i of container){
      let wHeight = window.innerHeight;
      let revealTop = i.getBoundingClientRect().top;
      let revealPoint = 100;

      if (revealTop < wHeight - revealPoint){
          i.classList.add('reveals')
      }
  }
})

let slides = document.querySelectorAll('.news-img');
let currentIndex = 0;
let intervalID = null;

const copy1 = document.querySelector('.slide-one .img-slides').cloneNode(true);
document.querySelector('.slide-one').appendChild(copy1);
const copy2 = document.querySelector('.slide-two .img-slides').cloneNode(true);
document.querySelector('.slide-two').appendChild(copy2);
const copy3 = document.querySelector('.slide-three .img-slides').cloneNode(true);
document.querySelector('.slide-three').appendChild(copy3);
const copy4 = document.querySelector('.slide-four .img-slides').cloneNode(true);
document.querySelector('.slide-four').appendChild(copy4);
