const button = document.querySelector("#menu-open")
const menuMobile = document.querySelector(".menu-mobile")

button.addEventListener('click', function() {
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
})