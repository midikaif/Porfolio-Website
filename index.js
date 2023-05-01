const links = document.querySelectorAll('.tab-links');
const contents = document.querySelectorAll('.tab-contents');
const navLinks = document.querySelector('#nav-links')


function opentab(tablinks) {
    for (let link of links) {
        link.classList.remove("active-links");
    }
    for (let content of contents) {
        content.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tablinks).classList.add('active-tab');
}

function toggleNavbar() {
    navLinks.classList.toggle('active');
}

function showNavbar() {
    if (!navLinks.style.right || navLinks.style.right === '-14rem') {
        navLinks.style.right = '0'
    } else {
        navLinks.style.right = '-14rem'
    }
}

function showProfile() {
    const selfie = document.querySelector('.about-col-1');
    const about = document.querySelector('.about-col-2')
    selfie.classList.toggle('not-active');
    about.classList.toggle('not-active');
}
