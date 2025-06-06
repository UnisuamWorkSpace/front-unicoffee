// Importando a função changeTitle do arquivo features.js
import { changeTitle } from "./features.js";
// Tornando a função changeTitle global para que possa ser usada em outros scripts
window.changeTitle = changeTitle;
// O evento DOMContentLoaded abaixo foi colocado para que sempre que uma página seja carregada,
// a função changeTitle seja executada e verifique se é necessário alterar o título da pagina.
document.addEventListener("DOMContentLoaded", () => {
    changeTitle();
});

const greetingSpan = document.getElementById("greeting");

const numeroRaw = localStorage.getItem("numero");
const accountDataRaw = localStorage.getItem("accountData");

if (numeroRaw && accountDataRaw) {
    const numero = JSON.parse(numeroRaw);
    const accountData = JSON.parse(accountDataRaw);

    if (accountData[numero] && accountData[numero].login) {
        greetingSpan.innerHTML = `Olá, ${accountData[numero].login} !`;
    }
}

if (greetingSpan.innerHTML.length > 0) {
    document.querySelectorAll(".opcao").forEach(opcao => {
        opcao.classList.add("escondido");
    });
} else {
    document.getElementById("logOut").classList.add("escondido");
}


let limiteAumentar =  25; 
let limiteDiminuir = 15;
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    
    let tamanhoDaFonte = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("font-size"));
    
    if(tamanhoDaFonte >= limiteAumentar) {

        let mensagemDeErro = document.getElementById("mainPageErrorMsg");

        mensagemDeErro.innerHTML = "Limite de aumentar fonte foi atingido";

        mensagemDeErro.style.fontSize = "20px";

        mensagemDeErro.classList.add("show");

        setTimeout(function (){
            mensagemDeErro.classList.remove("show");
        }, 3000);

        return;
    }else {
        
        document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("font-size")) + 1) + "px";
        
        let botoes = document.querySelectorAll("button");
        
        botoes.forEach( (botoes) => {
            botoes.style.fontSize = parseFloat(window.getComputedStyle(botoes, null).getPropertyValue("font-size")) + 1 + "px";
        });

        let links = document.querySelectorAll("a");
        links.forEach( (links) => {
            links.style.fontSize = parseFloat(window.getComputedStyle(links, null).getPropertyValue("font-size")) + 1 + "px";
        });

        let span = document.querySelectorAll("span");
        span.forEach( (span) => {
            span.style.fontSize = parseFloat(window.getComputedStyle(span, null).getPropertyValue("font-size")) + 1 + "px";
        });

        let strong = document.querySelectorAll("strong");
        strong.forEach( (strong) => {
            strong.style.fontSize = parseFloat(window.getComputedStyle(strong, null).getPropertyValue("font-size")) + 1 + "px";
        });
    }
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    
    let tamanhoDaFonte = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("font-size"));
    
    if(tamanhoDaFonte <= limiteDiminuir) {
        let mensagemDeErro = document.getElementById("mainPageErrorMsg");

        mensagemDeErro.innerHTML = "Limite de diminuir fonte foi atingido";

        mensagemDeErro.style.fontSize = "20px";

        mensagemDeErro.classList.add("show");

        setTimeout(function (){
            mensagemDeErro.classList.remove("show");
        }, 3000);

        return;
    }else {
        
        document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("font-size")) - 1) + "px";
    
        let botoes = document.querySelectorAll("button");
        
        botoes.forEach( (botoes) => {
            botoes.style.fontSize = parseFloat(window.getComputedStyle(botoes, null).getPropertyValue("font-size")) - 1 + "px";
        });
    
        let links = document.querySelectorAll("a");
        links.forEach( (links) => {
            links.style.fontSize = parseFloat(window.getComputedStyle(links, null).getPropertyValue("font-size")) - 1 + "px";
        });

        let span = document.querySelectorAll("span");
        span.forEach( (span) => {
            span.style.fontSize = parseFloat(window.getComputedStyle(span, null).getPropertyValue("font-size")) -1 + "px";
        });

        let strong = document.querySelectorAll("strong");
        strong.forEach( (strong) => {
            strong.style.fontSize = parseFloat(window.getComputedStyle(strong, null).getPropertyValue("font-size")) - 1 + "px";
        });
    }
    
});

function addDarkTheme () {
    document.getElementById("navbar").classList.add("navbar-shadow");
        
    document.body.classList.add("dark-theme");
        
    return black = true;
}

    let black =  localStorage.getItem('tema') === 'true';
    
    if(black) {
        addDarkTheme();
    }

document.getElementById("tema").addEventListener("click", () => {
    let black =  localStorage.getItem('tema') === 'true';
    
    if(black){
     
        document.getElementById("navbar").classList.remove("navbar-shadow");  

        document.body.classList.remove("dark-theme");

        black = false;
    }else {
        addDarkTheme();
        black = true;
    }
    localStorage.setItem("tema", black);
});

window.addEventListener("scroll", () => {
    const botaoDeSubir = document.getElementById("botao-de-subir");
    if(window.scrollY >= 636) {
        botaoDeSubir.classList.add("scroll");
    }else {
        botaoDeSubir.classList.remove("scroll");
    }

    const navCenter = document.getElementById("navbar-center");
    if(window.scrollY >= 100) {
        navCenter.classList.add("top");
    }else {
        navCenter.classList.remove("top");
    }
});