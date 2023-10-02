const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const li = [...menu.querySelectorAll ("a")]
console.log(li)

menuButton.addEventListener("click", () => {
    fazJonson()
});


function fazJonson (){
    menu.classList.toggle("active");   
}

li.forEach(elemento =>{
    elemento.addEventListener('click', (evento) =>{
        evento.stopImmediatePropagation()
        fazJonson()
    })
})