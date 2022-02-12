let sobreMi = document.querySelector("#sobremi");

let scrolling = document.querySelector("#secc2");

sobreMi.addEventListener("click", irseccion2, false);

function irseccion2(e) {
    scrolling.scrollIntoView({
        behavior: "smooth",
        // inline: "center"
    });
}

let contacto = document.querySelector("#contact");
let scrolling2 = document.querySelector("#contact");

contacto.addEventListener("click", ircontacto, false)

function ircontacto(e) {
    scrolling2.scrollIntoView({
    behavior: "smooth",
    // block: "center",
    // inline: "center"
    })
}
// function abreteSesamo1() {
//     window.open("https://www.google.com/maps/place/Concepci%C3%B3n+del+Uruguay,+Entre+R%C3%ADos/@-32.4737636,-58.2700328,14z/data=!4m2!3m1!1s0x95afdb005dbc939d:0x3c8a23c6cb1334b2")
// }
// function abreteSesamo2() {
//     window.open("https://mail.google.com/mail/u/0/#inbox")
// }
// function abreteSesamo3() {
//     window.open("https://www.linkedin.com/in/pilar-ansa-722753216/")
// }
// function abreteSesamo4() {
//     window.open("https://github.com/Piliansa");