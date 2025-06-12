// Para usar o import nesse arquivo é necessario que ele esteja sendo usado como modulo, ou seja,
// no front ele deve ser importado da seguinte forma:
// <script type="module" src="assets/js/carousel.js"></script>
import { changeTitle } from "./features.js";
// Tornando a função changeTitle global para que possa ser usada em outros scripts
window.changeTitle = changeTitle;
// Recuperando o elemento com id "carousel"
const carouselTag = document.getElementById("carousel");

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
    const dataJson = await fetch(pathJson);
    const imagesPath = await dataJson.json();
    imagesPath.forEach((image) => {
        image.path = pathImage + image.path;
        endImagePath.push(image);
    });
    console.log(pathImage, currentPage);
    console.log(endImagePath);
    return endImagePath;
}

adjustPath()