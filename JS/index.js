const greetingSpan = document.getElementById("greeting");
if(JSON.parse(localStorage.getItem("numero"))) {   
    greetingSpan.innerHTML = `Olá, ${JSON.parse(localStorage.getItem("accountData"))[JSON.parse(localStorage.getItem("numero"))].login} !`;   
}

if(greetingSpan.innerHTML.length > 0) {
    const opcao = document.querySelectorAll(".opcao");
    opcao.forEach(opcao => {
        opcao.classList.add("escondido");
    });
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

    let black =  JSON.parse(localStorage.getItem('tema'));
    
    if(black) {
        addDarkTheme();
    }

document.getElementById("tema").addEventListener("click", () => {
    let black =  JSON.parse(localStorage.getItem('tema'));
    
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