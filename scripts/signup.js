$(document).click(function(event){
    let target = event.target;
    if(target.classList.contains('fa-bars')){
        $('#my-nav').css({'right' : '0', 'opacity': '1'});
        $('body').css({'height': '100dvh', 'overflow': 'hidden'});
        $('.navbar-brand a').css({'pointer-events': 'none'});
        $('form').css({'filter': 'blur(5px)'});
        $('#logo-img').css({'filter': 'blur(5px)'});
        $('form > *').css({'pointer-events': 'none'});
        $('#sign-in-btn').removeClass('btn');
        $('#sign-in-btn').removeClass('btn-primary');
        $('#sign-in-btn').addClass('nav-link');

    } else if(target.classList.contains('main-section') || target.classList.contains('form-control') || target.classList.contains('form-label') || target.tagName == 'FORM'){
        $('#my-nav').css({'right' : '-75%'});
        $('body').css({'height': 'auto', 'overflow': 'visible'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('form').css({'filter': 'none'});
        $('#logo-img').css({'filter': 'none'});
        $('form > *').css({'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
    }
});

$(window).resize(function(){
    if (window.innerWidth > 550) {
        $('#my-nav').css({'right' : '-75%'});
        $('body').css({'height': 'auto', 'overflow': 'visible'});
        $('.navbar-brand a').css({'pointer-events': 'auto'});
        $('form').css({'filter': 'none'});
        $('#logo-img').css({'filter': 'none'});
        $('form > *').css({'pointer-events': 'auto'});
        $('#sign-in-btn').addClass('btn');
        $('#sign-in-btn').addClass('btn-primary');
        $('#sign-in-btn').removeClass('nav-link');
    }
});

let value1 = '2024';
let value2 = '';
let value3 = '';
for (let i = 0; i<4; i++){
    value2 += String(Math.floor(Math.random() * 10));
    value3 += String(Math.floor(Math.random() * 10));
}
let finalValue = value1 + ' ' + value2 + ' ' + value3;
document.querySelector('#id').value = finalValue;

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password')
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    let isValid = validateEmail(document.querySelector('#email').value);
    if(!form.checkValidity() || password.value !== confirmPassword.value || !isValid || password.value.length <= 4){
        event.preventDefault();
        if(password.value.length <= 4){
            password.setCustomValidity('Too short')
        } else{
            password.setCustomValidity('');
        }
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.');
        } else {
            confirmPassword.setCustomValidity('');  
        }
        if(!isValid){
            document.querySelector('#email').setCustomValidity('Invalid Email')
        } else{
            document.querySelector('#email').setCustomValidity('')
        }
    }

    else if(form.checkValidity()){
        saveInputs();
        
    }
    
    form.classList.add('was-validated')
});



function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function saveInputs() {
    const ign = document.getElementById('ign').value;
    const firstName = document.getElementById('f-name').value;
    const lastName = document.getElementById('l-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gameID = finalValue;

   

    document.cookie = `ign=${ign}`;
    document.cookie = `firstName=${firstName}`;
    document.cookie = `lastName=${lastName}`;
    document.cookie = `email=${email}`;
    document.cookie = `password=${password}`;
    document.cookie = `gameID=${gameID}`;
}

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
});

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

$('label').addClass('text-light')