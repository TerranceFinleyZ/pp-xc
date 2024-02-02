let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar ')

menubar.onclick = () =>{
    menubar.classList.toggle('bx bx-x');
    mynav.classList.toggle('active');
}