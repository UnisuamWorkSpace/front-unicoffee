// Para usar o import nesse arquivo é necessario que ele esteja sendo usado como modulo, ou seja,
// no front ele deve ser importado da seguinte forma:
// <script type="module" src="assets/js/carousel.js"></script>
import { changeTitle } from "./features.js";
// Tornando a função changeTitle global para que possa ser usada em outros scripts
window.changeTitle = changeTitle;
// Recuperando o elemento com id "carousel"
const carouselTag = document.getElementById("carousel");

console.log(carouselTag);