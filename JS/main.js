const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "img/ic/menu-close.svg";
    }
    
    else{
        navBtnImg.src = "img/ic/menu-open.svg";
    }
}