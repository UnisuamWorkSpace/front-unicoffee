// Para usar o import nesse arquivo é necessario que ele esteja sendo usado como modulo, ou seja,
// no front ele deve ser importado da seguinte forma:
// <script type="module" src="assets/js/carousel.js"></script>;
import { changeTitle, whichRelativePath } from "./features.js";
// Tornando as funcoes globais para que possam ser usadas em outros scripts;
window.changeTitle = changeTitle;
window.whichRelativePath = whichRelativePath;
//-------------------------------------------------------------------------------------------//
// Essa seção serve para colocar o estilo do carousel dinâmicamente no head da página;
const headTag = document.querySelector("head");
const linkTag = document.createElement("link");
linkTag.rel = "stylesheet";
linkTag.href = whichRelativePath("css", "carousel.css");
headTag.appendChild(linkTag);
//-------------------------------------------------------------------------------------------//
// Essa seção serve para importar dinâmicamente no head da página os estilos do font-awesome;
const linkTagFont = document.createElement("link");
linkTagFont.rel = "stylesheet";
linkTagFont.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
headTag.appendChild(linkTagFont);
//-------------------------------------------------------------------------------------------//
// Essa seção serve para construir dinâmicamante as estrturas do carrousel no HTML, bastando
// apenas que o docuemnto html tenha uma tag main e importe no cabeçalho do arquivo esse script em
// type module e usando a opção defer para que ele seja carregado assim que a página for carregada;
const mainTag = document.querySelector("main");
const sectionTag = document.createElement("section");
sectionTag.classList.add("carousel-container");
const divTagCarousel = document.createElement("div");
divTagCarousel.classList.add("carousel");
divTagCarousel.id = "carousel";
sectionTag.appendChild(divTagCarousel);
const buttonTagPrev = document.createElement("button");
buttonTagPrev.classList.add("nav", "prev");
buttonTagPrev.id = "prevBtn";
buttonTagPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
sectionTag.appendChild(buttonTagPrev);
const buttonTagNext = document.createElement("button");
buttonTagNext.classList.add("nav", "next");
buttonTagNext.id = "nextBtn";
buttonTagNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
sectionTag.appendChild(buttonTagNext);
const divTagIndicators = document.createElement("div");
divTagIndicators.classList.add("indicators");
divTagIndicators.id = "indicators";
sectionTag.appendChild(divTagIndicators);
mainTag.insertBefore(sectionTag, mainTag.firstChild);
//-------------------------------------------------------------------------------------------//
// Essa função retorna um array corrigindo os caminhos relativos das imagens do carousel de acordo com a página que estamos;
async function setRelativePath() {
    // Setando o caminho do arquivo json que contém os nomes, os hrefs e os alts das imagens;
    const carouselPath = whichRelativePath("data", "carousel.json");
    // Criando um array para armazenar os caminhos relativos das imagens;
    let endImagePath = [];
    // Buscando o JSON com os caminhos das imagens;
    const dataJson = await fetch(carouselPath);
    // tornando o JSON em um objeto JavaScript;
    const imagesPath = await dataJson.json();
    // Percorrendo o array de imagens e corrigindo os caminhos relativos;
    imagesPath.forEach((image) => {
        // Corrigindo os caminhos relativos substituindo os caminhos originais pelos caminhos corrigidos de acordo com a página atual;
        image.name = whichRelativePath("carousel", image.name);
        // Adicionando os dicionarios que representam as imagens ao array;
        endImagePath.push(image);
    });
    // Retornando o array com os caminhos corrigidos;
    return endImagePath;
}
// Iniciando a criação do carousel e a inserção dinamica das imagens;
// Criando algumas variáveis globais;
let currentIndex = 1; // Controla o index do slide atual;
let interval; // Controla o intervalo de troca de slide;
let totalSlides = 0; // Quantidade de slides;
let carouselTag; // Elemento do carousel;
let indicators; // Elemento dos indicadores;
const slideInterval = 7000; // Controla o tempo de troca de slide em milesegundos;
const transitionSpeed = 5.0; // Controla a velocidade de transição entre os slide em segundos;
// Essa função cria o carousel e insere as imagens dinamicamente;
async function createCarousel() {
    // Pegando as imagens devidamente corrigidas ao caminho relativo;
    const images = await setRelativePath();
    // Definindo o total de slides;
    totalSlides = images.length;
    // Pegando os elementos HTML que receberam os slides e os indicadores;
    carouselTag = document.getElementById("carousel");
    indicators = document.getElementById("indicators");
    // Inserindo as imagens no carousel dinamicamente;
    images.forEach((image) => {
        // Cria um novo elemento html, a tag de link a;
        const aTag = document.createElement("a");
        // Tantando atribuir o link da devida página de acordo com a descrição da imagem;
        if (image.alt.toLowerCase() === "accessories")
            // Caso a imagem seja de acessórios, o link vai para a página de acessórios;
            aTag.href = whichRelativePath("pages", "acessorios.html#termicas");
        else if (image.alt.toLowerCase() === "coffee maker")
            // Caso a imagem se trate de maquinas de cafe, o link vai para a página de cafeteiras;
            aTag.href = whichRelativePath("pages", "cafeteiras.html#philco");
        else
            // Caso a umagem não seja de nada especifico, o link não recebe um redirecionamento;
            aTag.href = "#";
        // Criando um novo elemmento html, a tag de imagem;
        const imgTag = document.createElement("img");
        // Definindo o src e o alt da imagem;
        imgTag.src = image.name;
        imgTag.alt = image.alt;
        // Adicionando a tag de imagem na tag de link;
        aTag.appendChild(imgTag);
        // Adicionando a tag de link no carousel;
        carouselTag.appendChild(aTag);
    });

    // Clonando o primeiro e o último slide para que ele seja possivel fazer a transição suave e circular continua;
    const firstSlide = carouselTag.children[0].cloneNode(true);
    const lastSlide = carouselTag.children[totalSlides - 1].cloneNode(true);
    // Adicionando os slides clonados no carousel;
    carouselTag.appendChild(firstSlide);
    carouselTag.insertBefore(lastSlide, carouselTag.firstChild);
    // Criando os elementos HTML dos indicadores, aqui são criadas dinamicamente de acordo com o total de slides;
    for (let i = 0; i < totalSlides; i++) {
        // Cada indicador é uma div e é uma das bolinhas que indicam qual slide está sendo mostrado; 
        const dot = document.createElement('div');
        // Definindo as classes das bolinhas;
        dot.classList.add('indicator');
        // Definindo a primeira bolinha como ativa;
        if (i === 0) dot.classList.add('active');
        // Adicionando o evento de click nas bolinhas, para que ao clicar nelas, se possa mudar também de slide;
        dot.addEventListener('click', () => goToSlide(i + 1));
        // Adicionando as bolinhas criadas elemento HTML dos indicadores;
        indicators.appendChild(dot);
    }
    // Definindo o evento de click nos botões de avançar e voltar, para que ao clicar nelas, se possa mudar de slide;
    document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentIndex - 1));
    document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentIndex + 1));
    // Definindo o evento de transição do carousel, para que ele seja possivel fazer a transição suave e circular continua;
    carouselTag.addEventListener('transitionend', () => {
        // Definindo o index do slide atual;
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
    // Posicioando na posição inicial;
    startCarousel();
    interval = setInterval(nextSlide, slideInterval);
}
// Função para iniciar o carousel e posicionar na primeira imagem;
function startCarousel() {
    const slideWidth = carouselTag.offsetWidth;
    carouselTag.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
// Funçã responsavel por mudar para um slide especifico, recebe o index do slide;
function goToSlide(index) {
    const slideWidth = carouselTag.offsetWidth;
    carouselTag.style.transition = `transform ${transitionSpeed}s ease`;
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
// Funçã responsavel por avançar para o slide seguinte;
function nextSlide() {
    goToSlide(currentIndex + 1);
}
// Função para ativar a bolinha do slide atual e desativar as demais;
function updateIndicators(index) {
    document.querySelectorAll('.indicator').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
// Funçao que reinicia a contagem do tempo a cada mudada de slide;
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, slideInterval);
}
// Chamando a criação do carousel para que ele seja criado dinamicamente e comece a se exibido, essa linha basicamente inicia todo o processo;
createCarousel();