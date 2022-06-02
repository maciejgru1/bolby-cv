/*=========================================================================
    Parallax layers
    =========================================================================*/
let paralax = document.querySelector('.parallax');
new Parallax(paralax);

let hamburgerElement = document.querySelector('.hamburger');

hamburgerElement.addEventListener(
    'click', () => {
        hamburgerElement.classList.toggle('open');

        document.body.classList.toggle('menu-open')
    }
)

//  animation

AOS.init();

var options = {
    strings: ['I am senior full stack NINJA developer'],
    typeSpeed: 50,
    startDelay: 1000,
    showCursor: false,
};

var typed = new Typed('.driver .text', options);