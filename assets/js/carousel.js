// Para usar o import nesse arquivo é necessario que ele esteja sendo usado como modulo, ou seja,
// no front ele deve ser importado da seguinte forma:
// <script type="module" src="assets/js/carousel.js"></script>
import { changeTitle } from "./features.js";
// Tornando a função changeTitle global para que possa ser usada em outros scripts
window.changeTitle = changeTitle;

async function adjustPath() {
    const currentPage = window.location.pathname.split("/").pop();
    let pathJson = "";
    let pathImage = "";
    if (currentPage === "index.html" || currentPage === "") {
        pathImage = "./assets/img/carousel/";
        pathJson = "./assets/data/carousel.json";
    } else if (currentPage === "acessorios.html" || currentPage === "cafeterias.html") {
        pathImage = "../assets/img/carousel/";
        pathJson = "../assets/data/carousel.json";
    }
    let endImagePath = [];
    // Buscando o JSON com os caminhos das imagens
    const dataJson = await fetch(pathJson);
    // tornando o JSON em um objeto JavaScript
    const imagesPath = await dataJson.json();
    imagesPath.forEach((image) => {
        image.path = pathImage + image.path;
        endImagePath.push(image);
    });
    console.log(pathImage, currentPage);
    console.log(endImagePath);
    return endImagePath;
}
//
// Criando e animando o carousel
//
let currentIndex = 1;
let interval;
let totalSlides = 0;
let carouselTag;
let indicators;

async function createCarousel() {
    const images = await adjustPath();
    totalSlides = images.length;

    // Pegando os elementos
    carouselTag = document.getElementById("carousel");
    indicators = document.getElementById("indicators");

    // Criando os slides
    images.forEach((image) => {
        const aTag = document.createElement("a");
        if (image.href.toLowerCase() === "accessories")
            aTag.href = "./pages/acessorios.html#termicas";
        else if (image.href.toLowerCase() === "coffee maker")
            aTag.href = "./pages/cafeteiras.html#philco";
        else
            aTag.href = "index.html";

        const imgTag = document.createElement("img");
        imgTag.src = image.path;
        imgTag.alt = image.alt;
        aTag.appendChild(imgTag);
        carouselTag.appendChild(aTag);
    });

    // Clonando o primeiro e o último slide
    const firstSlide = carouselTag.children[0].cloneNode(true);
    const lastSlide = carouselTag.children[totalSlides - 1].cloneNode(true);
    carouselTag.appendChild(firstSlide);
    carouselTag.insertBefore(lastSlide, carouselTag.firstChild);

    // Criando os indicadores
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i + 1));
        indicators.appendChild(dot);
    }

    // Botões
    document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentIndex - 1));
    document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentIndex + 1));

    // Transição suave
    carouselTag.addEventListener('transitionend', () => {
        const slideWidth = carouselTag.offsetWidth;
        if (currentIndex === 0) {
            carouselTag.style.transition = 'none';
            currentIndex = totalSlides;
            carouselTag.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
        if (currentIndex === totalSlides + 1) {
            carouselTag.style.transition = 'none';
            currentIndex = 1;
            carouselTag.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    });

    startCarousel();
    interval = setInterval(nextSlide, 10000);
}

function startCarousel() {
    const slideWidth = carouselTag.offsetWidth;
    carouselTag.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function goToSlide(index) {
    const slideWidth = carouselTag.offsetWidth;
    carouselTag.style.transition = 'transform 0.5s ease';
    carouselTag.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;

    if (index === 0) {
        updateIndicators(totalSlides - 1);
    } else if (index === totalSlides + 1) {
        updateIndicators(0);
    } else {
        updateIndicators(index - 1);
    }

    resetInterval();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function updateIndicators(index) {
    document.querySelectorAll('.indicator').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
}

createCarousel();