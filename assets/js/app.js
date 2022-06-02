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

let themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener(
    'click', () => {
        document.body.classList.toggle('light')
        document.body.classList.toggle('dark')
    }
)

//  animation
AOS.init();

var options = {
    strings: ["I'm junior full-stack developer"],
    typeSpeed: 50,
    startDelay: 1000,
    showCursor: false,
};

var typed = new Typed('.driver .text', options);