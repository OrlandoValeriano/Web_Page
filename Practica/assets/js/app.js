// ============= SHOW MENU ===============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// =============== ADD NAV BLUR =================
const headerBlur = () => {
    const header = document.querySelector('.header');
    this.scrollY >= 50 ? header.classList.add('nav-blur')
                       : header.classList.remove('nav-blur');
}

window.addEventListener('scroll', headerBlur);

// =============== SHOW SCROLL UP ===============
const scrollUp = () => {
    const scroll = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scroll.classList.add('show-scroll')
                        : scroll.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// =============== CLOSE MENU IN ITEM ====================
const link = document.querySelectorAll('.nav__link');

const linkHidden = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

link.forEach(n => n.addEventListener('click', linkHidden));