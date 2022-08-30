const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const logo = document.getElementById('logo');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const nav = document.getElementById('nav');
const ul = document.getElementById('ul');

hamburger.addEventListener('click', function handleClick1() {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    nav.style.justifyContent = 'flex-end';
    logo.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    ul.style.display = 'flex';
})

close.addEventListener('click', function handleClick2(){
    hamburger.style.display = 'block';
    close.style.display = 'none';
    nav.style.justifyContent = 'space-between';
    logo.style.display = 'block';
    main.style.display = 'flex';
    footer.style.display = 'block';
    ul.style.display = 'none';
})