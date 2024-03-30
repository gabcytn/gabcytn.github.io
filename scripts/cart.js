$(document).click(function(event){
    let target = event.target;
    if(target.classList.contains('fa-bars')){
        $('#my-nav').css({'right' : '0', 'opacity': '1'});
        $('body').css({'height': '100dvh', 'overflow-y': 'hidden'});
        $('.main-contents').css({'filter': 'blur(5px)'});
        $('#logo-link').css({'filter': 'blur(5px)', 'pointer-events': 'none'});
        $('.main-contents > *').css({'pointer-events': 'none'});
        $('#sign-in-btn').removeClass('btn');
        $('#sign-in-btn').removeClass('btn-primary');
        $('#sign-in-btn').addClass('nav-link');

    } else if(!target.classList.contains('fa-bars') ){
        $('#my-nav').css({'right' : '-75%'});
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
        $('#my-nav').css({'right' : '-75%'});
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


let quantity = $('#quantity');
quantity.val(1)
let initialPrice = quantity.val() * 99.99;
$('#total-price').text(initialPrice.toFixed(2));

$('.add-count').click(function() {
    let currVal = Number(quantity.val());
    quantity.val(currVal + 1);

    let totalPrice = $('#total-price').text();
    totalPrice = Number(totalPrice) + 99.99;
    totalPrice = totalPrice.toFixed(2);
    $('#total-price').text(totalPrice);
});

$('.minus-count').click(function() {
    let currVal = Number(quantity.val());
    if(Number(quantity.val()) > 1){
        quantity.val(currVal - 1);
        let totalPrice = $('#total-price').text();
        totalPrice = Number(totalPrice) - 99.99;
        totalPrice = totalPrice.toFixed(2);
        $('#total-price').text(totalPrice);
    }
})

$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});

$('.item-wrapper.one-fade').click(function(){
    $('.active-cart-item-name').text('Pokeball');
    $('.active-cart-item-description').text('For pokemon capture.');
    $('.active-cart img').attr('src', '../media/poke items/Poké Ball.png');

    $('.item-wrapper.one-fade').addClass('border border-3');
    $('.two-fade').removeClass('border border-3');
    $('.two-fade').removeClass('border border-3');
})

$('.item-wrapper.two-fade').click(function(){
    $('.active-cart-item-name').text('Bag');
    $('.active-cart-item-description').text('Increases item capacity.');
    $('.active-cart img').attr('src', '../media/poke items/Bag Upgrade (1).png');

    $('.two-fade').addClass('border border-3');
    $('.one-fade').removeClass('border border-3');
    $('.three-fade').removeClass('border border-3');
})

$('.item-wrapper.three-fade').click(function(){
    $('.active-cart-item-name').text('Incense');
    $('.active-cart-item-description').text('Attracts wild Pokemon');
    $('.active-cart img').attr('src', '../media/poke items/Incense.png');

    $('.three-fade').addClass('border border-3');
    $('.one-fade').removeClass('border border-3');
    $('.two-fade').removeClass('border border-3');
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
