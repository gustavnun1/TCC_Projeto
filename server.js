const btnMobile = document.getElementById('imagemS');

function toogleMenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toogleMenu, true);