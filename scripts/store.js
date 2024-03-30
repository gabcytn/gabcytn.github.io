$(document).click(function(event){
    let target = event.target;
    if(target.classList.contains('fa-bars')){
        $('#my-nav').css({'opacity': '1', 'pointer-events': 'auto'});
        $('body').css({'height': '100dvh', 'overflow-y': 'hidden'});
        $('#logo-link').css({'filter': 'blur(3px)', 'pointer-events': 'none'});
        $('#sign-in-btn').removeClass('btn');
        $('#sign-in-btn').removeClass('btn-primary');
        $('#sign-in-btn').addClass('nav-link');
        $('#discount').css({'filter': 'blur(3px)', 'pointer-events': 'none'});

    } else if(!target.classList.contains('fa-bars') ){
        $('#my-nav').css({'opacity': '0', 'pointer-events': 'none'});
        $('body').css({'height': 'auto', 'overflow-y': 'visible'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('#logo-link').css({'filter': 'none', 'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
        $('#discount').css({'filter': 'none', 'pointer-events': 'auto'});
    }
});

$(window).resize(function(){
    if (window.innerWidth > 576) {
        $('#my-nav').css({'opacity': '1', 'pointer-events': 'auto'});
        $('body').css({'height': 'auto', 'overflow-y': 'visible'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('#logo-link').css({'filter': 'none', 'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
        $('#discount').css({'filter': 'none', 'pointer-events': 'auto'});
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