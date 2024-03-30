$(document).click(function(event){
    let target = event.target;
    if(target.classList.contains('fa-bars')){
        $('#my-nav').css({'opacity': '1', 'pointer-events': 'auto'});
        $('body').css({'height': '100dvh', 'overflow-y': 'hidden'});
        $('.main-contents').css({'filter': 'blur(5px)'});
        $('#logo-link').css({'filter': 'blur(5px)', 'pointer-events': 'none'});
        $('.main-contents > *').css({'pointer-events': 'none'});
        $('#sign-in-btn').removeClass('btn');
        $('#sign-in-btn').removeClass('btn-primary');
        $('#sign-in-btn').addClass('nav-link');

    } else if(!target.classList.contains('fa-bars') ){
        $('#my-nav').css({'opacity': '0', 'pointer-events': 'none'});
        $('body').css({'height': 'auto', 'overflow-y': 'visible'});
        $('.main-contents').css({'background': 'none', 'filter': 'none'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('#logo-link').css({'filter': 'none', 'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
        $('.main-contents > *').css({'pointer-events': 'auto'});
    }
});

$(window).resize(function(){
    if (window.innerWidth > 576) {
        $('#my-nav').css({'opacity': '1', 'pointer-events': 'auto'});
        $('body').css({'height': 'auto', 'overflow-y': 'visible'});
        $('.main-contents').css({'background': 'none', 'filter': 'none'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('#logo-link').css({'filter': 'none', 'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
        $('.main-contents > *').css({'pointer-events': 'auto'});
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

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}
const ign = getCookie('ign');
$('#username').text(ign);