
const button = document.querySelector(".button");
let text = document.querySelector(".text");


const create = ()=>{
    let input = document.querySelector(".input");
    text.textContent = input.value;

}

button.addEventListener("click", function () {

    create();
    
})

const colorContainer = document.querySelector(".color-container");

const colors = document.querySelectorAll(".color");

colors.forEach(function (item) {
    
    let nombre = item.className;
    let nombre2 = nombre.split(" ");

    item.style.backgroundColor = nombre2[0];

    item.setAttribute("title", nombre2[0]);

    item.addEventListener("click", function () {
        
        let lol = nombre2[0];
        text.style.color = lol;

        text.classList.toggle("crazy-animation-text", false)

    })

})

const crazy = document.querySelector(".crazy");

crazy.setAttribute("title","crazy")

crazy.addEventListener("click", function () {
    
    text.classList.add("crazy-animation-text");

})

