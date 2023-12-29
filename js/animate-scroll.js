// Criar instância da classe intersetObserver
const intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle("animate-show", entry.isIntersecting)
    })
})

const elements = document.querySelectorAll(".animate")
elements.forEach(el => intersectObserver.observe(el))