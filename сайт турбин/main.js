const menu = document.querySelector(".menu")
const telephone = document.querySelector(".telephone")
const opaciti = document.querySelector(".remont_p")
const body = document.querySelector("body")
const govno = document.querySelector(".remont")



function burger() {
    menu.classList.toggle("active");
    telephone.classList.toggle("active");
    opaciti.classList.toggle("opaciti");
    body.classList.toggle("overflow");
    govno.classList.toggle("govno")
}


function burger2() {
    menu.classList.toggle("active");
    telephone.classList.toggle("active");
    body.classList.toggle("overflow");

}