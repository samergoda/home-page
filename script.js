const nav = document.querySelector('nav')
const mobileNav = document.querySelector('.mobile-nav')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.mobile-menu-container .close-icon')
const mobileMenuContainer=document.querySelector('.mobile-menu-container')

window.addEventListener('scroll',()=>{
    if(window.scrollY>60){
        nav.classList.add('scrolled')
        mobileNav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled')
        mobileNav.classList.remove('scrolled')
    }
})






menuIcon.addEventListener('click',()=>{
    mobileMenuContainer.classList.add('active')
})
closeIcon.addEventListener('click',()=>{
    mobileMenuContainer.classList.remove('active')
})