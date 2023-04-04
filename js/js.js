const caret = document.getElementById('caret');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (caret) {
    caret.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}