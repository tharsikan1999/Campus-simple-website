const button = document.querySelector(".arrow");

const links = document.querySelector("nav ul")


button.addEventListener("click",()=>{
    links.classList.toggle("display");
    button.children[0].classList.toggle("display1");
    button.children[1].classList.toggle("display2");
    button.children[2].classList.toggle("display3");
})