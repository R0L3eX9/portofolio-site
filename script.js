const burgerBtn = document.getElementById('burger');
const navBar = document.getElementById('nav-bar');
let isBurgerPressed = false;

burgerBtn.addEventListener('click', () => {
    if(!isBurgerPressed) {
        isBurgerPressed = true;
        navBar.style.display = "block";
        burgerBtn.style.transition = "all .5s";
        burgerBtn.style.transform = "rotate(90deg)";
    } else {
        isBurgerPressed = false;
        navBar.style.display = "none";
        burgerBtn.style.transition = "all .5s";
        burgerBtn.style.transform = "rotate(0deg)";
    }
})
