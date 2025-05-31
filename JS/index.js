const greetingSpan = document.getElementById("greeting");
if(JSON.parse(localStorage.getItem("numero"))) {   
    greetingSpan.innerHTML = `Olá, ${JSON.parse(localStorage.getItem("accountData"))[JSON.parse(localStorage.getItem("numero"))].login} !`;   
}

if(greetingSpan.innerHTML.length > 0) {
    const opcao = document.querySelectorAll(".opcao");
    opcao.forEach(opcao => {
        opcao.classList.add("escondido");
    });
    
    /* document.querySelector(".profile-dropdown").innerHTML = ''; */
    /* document.querySelector(".profile-dropdown").innerHTML = "<a href='./index.html' id='logOut' class='tamanho-da-fonte'>Sair</a>"; */
}else {
    document.getElementById("logOut").classList.add("escondido");
}

if(document.getElementById("logOut")) {
document.getElementById("logOut").addEventListener("click", function () {
    localStorage.removeItem("numero");
});
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
    }
    
});

let black = false;
document.getElementById("tema").addEventListener("click", () => {
    
     
    if(black){
        
        document.getElementById("navbar").classList.remove("dark-theme","navbar-shadow");  
        
        document.querySelectorAll("button").forEach((button) => {
            button.classList.remove("dark-theme"); 
        });
        
        document.querySelectorAll("a").forEach((a) => {
           
            a.classList.remove = "dark-theme"; 
        });

        document.querySelector("div.navbar-left a").innerHTML = "<img src='./images/modo_claro.png'  class='logo'/>";
        document.getElementById("menu-check").style.color = "#4B2E2B";
        document.querySelector(".navbar-center").classList.remove("dark-theme");
        document.querySelector(".profile-dropdown").classList.remove("dark-theme");

        document.querySelectorAll(".dropdown-content").forEach((dropdown_content) => {
            dropdown_content.classList.remove("dark-background");
        });

        black = false;
    }else {

        document.getElementById("navbar").classList.add("dark-theme","navbar-shadow");
        
        document.querySelectorAll("button").forEach((button) => {
            button.classList.add("dark-theme");
        });

        document.querySelectorAll("a").forEach((a) => {
              
            a.classList.add = "dark-theme";     
        });

        document.querySelector("div.navbar-left a").innerHTML = "<img src='./images/modo_escuro.png'  class='logo'/>";
        document.getElementById("menu-check").style.color = "burlywood";
        document.querySelector(".navbar-center").classList.add("dark-theme");
        document.querySelector(".profile-dropdown").classList.add("dark-theme");

        document.querySelectorAll(".dropdown-content").forEach((dropdown_content) => {
            dropdown_content.classList.add("dark-background");
        });
        
        black = true;
    }
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