const btnBlack = document.querySelector("#btn-black")
const btnWhite = document.querySelector("#btn-white")
const btnBlue = document.querySelector("#btn-blue")

const img = document.querySelector("#img-model")

btnBlack.addEventListener("click", function(){
    img.src = 'assets/Black.png';
    img.alt = 'Headphone Tune 520BT black';
})

btnWhite.addEventListener("click", function(){
    img.src = 'assets/White.png';
    img.alt = 'Headphone Tune 520BT white';
})

btnBlue.addEventListener("click", function(){
    img.src = 'assets/Blue.png';
    img.alt = 'Headphone Tune 520BT blue';
})