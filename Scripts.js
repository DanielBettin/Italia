const menuToggle = document.getElementById("menu-toggle");
const menuLista = document.querySelector(".Botones-opciones ul");

menuToggle.addEventListener("click", () => {
    menuLista.classList.toggle("menu-visible");
});



const slides = document.querySelectorAll(".slide-img");
let slideIndex = 0;

function mostrarSlide() {
    slides.forEach((img, i) => {
        img.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");

    slideIndex = (slideIndex + 1) % slides.length;
}

mostrarSlide();              
setInterval(mostrarSlide, 4000);  



const selectorIdioma = document.querySelector("select[name='idioma']");
const mensajeBienvenida = document.getElementById("welcome-message");


const mensajes = {
    es: "Bienvenido a la Cultura Italiana",
    en: "Welcome to the Italian Culture"
};

const menuTextos = {
    es: ["Lugares", "Actividades", "Conoce Italia", "Informacion"],
    en: ["Places", "Activities", "Know Italy", "Information"]
};


const menuItems = document.querySelectorAll(".Botones-opciones ul a");


function actualizarIdioma(idioma) {

    
    mensajeBienvenida.textContent = mensajes[idioma];

   
    menuItems.forEach((item, index) => {
        item.textContent = menuTextos[idioma][index];
    });
}


actualizarIdioma("es");


selectorIdioma.addEventListener("change", (e) => {
    actualizarIdioma(e.target.value);
});

const galeriaDestinos = document.querySelector(".destinos-galeria");
const leftZone = document.querySelector(".left-zone");
const rightZone = document.querySelector(".right-zone");

let scrollInterval = null;

function startScrolling(direction) {
    stopScrolling();
    scrollInterval = setInterval(() => {
        galeriaDestinos.scrollLeft += direction;
    }, 20); 
}

function stopScrolling() {
    clearInterval(scrollInterval);
}


leftZone.addEventListener("mouseenter", () => startScrolling(-10));
leftZone.addEventListener("mouseleave", stopScrolling);


rightZone.addEventListener("mouseenter", () => startScrolling(10));
rightZone.addEventListener("mouseleave", stopScrolling);