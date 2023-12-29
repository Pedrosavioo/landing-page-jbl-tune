const btnBlack = document.querySelector("#btn-black")
const btnWhite = document.querySelector("#btn-white")
const btnBlue = document.querySelector("#btn-blue")

const img = document.querySelector("#img")

btnBlack.addEventListener("click", function(){
    img.src = 'assets/Black.png';
    img.alt = 'Imagem 2';
})

btnWhite.addEventListener("click", function(){
    img.src = 'assets/White.png';
    img.alt = 'Imagem 2';
})

btnBlue.addEventListener("click", ()=>{
    img.src = 'assets/Blue.png';
    img.alt = 'Imagem 2';
})