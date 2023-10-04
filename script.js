AOS.init();



const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const li = [...menu.querySelectorAll ("a")]
console.log(li)

menuButton.addEventListener("click", () => {
    activeMenu()
});


function activeMenu (){
    menu.classList.toggle("active");   
}

li.forEach(elemento =>{
    elemento.addEventListener('click', (evento) =>{
        evento.stopImmediatePropagation()
        activeMenu()
    })
})



const myCarouselElement = document.querySelector('#carouselExampleIndicators')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})