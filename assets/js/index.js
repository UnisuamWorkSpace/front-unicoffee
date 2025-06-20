// Importando a função changeTitle do arquivo features.js
import { changeTitle } from "./features.js";
// Tornando a função changeTitle global para que possa ser usada em outros scripts
window.changeTitle = changeTitle;
// O evento DOMContentLoaded abaixo foi colocado para que sempre que uma página seja carregada,
// a função changeTitle seja executada e verifique se é necessário alterar o título da pagina.
document.addEventListener("DOMContentLoaded", () => {
    changeTitle();
});

const greetingSpan = document.querySelectorAll(".greeting");

const numeroRaw = localStorage.getItem("numero");
const accountDataRaw = localStorage.getItem("accountData");

if (numeroRaw && accountDataRaw) {
    const numero = JSON.parse(numeroRaw);
    const accountData = JSON.parse(accountDataRaw);

    if (accountData[numero] && accountData[numero].login) {
        greetingSpan.forEach(greetingSpan => {
            greetingSpan.innerHTML = `Olá, ${accountData[numero].login} !`;
        });
        
    }
}

if (document.querySelectorAll(".greeting")[0].innerHTML.length <= 0) {
    document.getElementById("profile-dropdown-mobile").classList.add("profile-dropdown-without-greeting");
    let logOut = document.querySelectorAll(".logOut");
    logOut.forEach(logOut => {
        logOut.classList.add("escondido");
    });
} else {
    
   document.querySelectorAll(".opcao").forEach(opcao => { 
        opcao.classList.add("escondido");
    });
}

const botaoDeSair = document.querySelectorAll(".logOut");

botaoDeSair.forEach(botaoDeSair => {

    botaoDeSair.addEventListener("click", function () {
    localStorage.removeItem("numero");
    localStorage.removeItem("pedidosCarrinho");
    localStorage.removeItem("cartItems");
});

});

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

  /*   let pedidosCarrinho = localStorage.getItem("pedidosCarrinho") || 0;
    document.querySelector(".item-count").innerHTML = pedidosCarrinho;
document.querySelectorAll(".addCart-btn").forEach(addCartBtn => {

    
    
    addCartBtn.addEventListener("click", function () {
        
        pedidosCarrinho++; 

        
        const itemContainer = this.closest(".itens-container");
        
        document.querySelector(".cart-container").innerHTML += `
    <div class="cart-item">
        <img src='${itemContainer.querySelector("img.zoom").src}' class="cart-container-img" />
        <div class="descricao-e-preco">
        <span><strong>${itemContainer.querySelector("span strong").innerText}</strong></span>
        <span>${itemContainer.querySelector(".price").innerText}</span>
        <label class="trash-can"><i class="fas fa-trash-alt"></i></label>
        </div>
    </div>
`;
        if(document.querySelectorAll(".trash-can")) {

            document.querySelectorAll(".trash-can").forEach(trashCan => {
            trashCan.addEventListener("click", function() {
                this.closest(".cart-item").remove();
            });
            });
        };

    
        document.querySelector(".item-count").innerHTML = pedidosCarrinho;
        addCartBtn.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            addCartBtn.innerHTML = 'ADICIONAR AO CARRINHO';
        }, 800);
       
        localStorage.setItem("pedidosCarrinho", pedidosCarrinho);
    });
    
}); */


// Initialize pedidosCarrinho and cartItems
let pedidosCarrinho = localStorage.getItem("pedidosCarrinho") || 0;
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function totalDeTudo() {
    let totalAPagar = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        const quantity = Number(item.quantity);
        totalAPagar += price * quantity;
    });

    console.log(totalAPagar);
    return totalAPagar;
}


// Update item count in the cart (displays number of items in cart)
document.querySelector(".item-count").innerHTML = pedidosCarrinho;

// Update the cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-container");

    // Clear current cart items before rendering the new ones
    if(window.location.pathname.endsWith("cafeteiras.html")  || window.location.pathname.endsWith("acessorios.html")) {
        cartContainer.innerHTML = `
        <div class="fechar-carrinho">
            <span>Carrinho</span>
            <label for="cart-check" id="close-cart"><i class="fas fa-times-circle"></i></label>
        </div>
        <div class="fecharCompra">
            <span><strong>Total a Pagar: R$ ${totalDeTudo().toFixed(2).replace('.', ',')}</strong></span>
            <a href="./paginaDeErro.html" class="fechar-pedido"><i class="fas fa-lock"></i>Fechar Pedido</a>
        </div>
    `;
    }else {
        cartContainer.innerHTML = `
        <div class="fechar-carrinho">
            <span>Carrinho</span>
            <label for="cart-check" id="close-cart"><i class="fas fa-times-circle"></i></label>
        </div>
        <div class="fecharCompra">
            <span><strong class="totalDaCompra">Total a Pagar: R$ ${totalDeTudo().toFixed(2).replace('.', ',')}</strong></span>
            <a href="./pages/paginaDeErro.html" class="fechar-pedido"><i class="fas fa-lock"></i>Fechar Pedido</a>
        </div>
    `;
    }
    

    // Render each item in the cart
    cartItems.forEach(item => {
        const total = parseFloat(item.price.slice(3).replace(',', '.')) * item.quantity;
        
        
        
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.src}" class="cart-container-img" />
                <div class="descricao-e-preco">
                    <span><strong>${item.name}</strong></span>
                    <span>${item.price}</span>
                    <span>Quantidade: ${item.quantity}</span>
                    <span>Total: R$ ${total.toFixed(2).replace('.', ',')}</span>
                    <label class="trash-can">Remover Item: <i class="fas fa-trash-alt"></i></label>
                </div>
            </div>
        `;
        
    });

    // Reattach the event listeners for trash can buttons
    document.querySelectorAll(".trash-can").forEach(trashCan => {
        trashCan.addEventListener("click", function() {
            const cartItem = this.closest(".cart-item");
            const itemImage = cartItem.querySelector(".cart-container-img").src;
            const itemName = cartItem.querySelector("strong").innerText;
            const itemPrice = cartItem.querySelector(".descricao-e-preco span:nth-child(2)").innerText;

            // Find the item in the cartItems array
            const itemIndex = cartItems.findIndex(item => 
                item.src === itemImage && item.name === itemName && item.price === itemPrice
            );

            if (itemIndex !== -1) {
                const item = cartItems[itemIndex];

                if (item.quantity > 1) {
                    // Decrease quantity
                    item.quantity--;

                    // Update the quantity display
                    cartItem.querySelector("span:nth-child(3)").innerText = `Quantidade: ${item.quantity}`;

                    const total = parseFloat(item.price.slice(3).replace(',', '.')) * item.quantity;

                    cartItem.querySelector("span:nth-child(4)").innerText = `Quantidade: ${total.toFixed(2).replace('.', ',')}`;
            
                    document.querySelector(".totalDaCompra").innerText = `Total a Pagar: R$ ${totalDeTudo().toFixed(2).replace('.', ',')}`;
                } else {
                    // Remove item from cart
                    cartItems.splice(itemIndex, 1);
                    cartItem.remove();
                    
                }

                // Update localStorage and cart count
                pedidosCarrinho--;
                localStorage.setItem("pedidosCarrinho", pedidosCarrinho);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                document.querySelector(".item-count").innerHTML = pedidosCarrinho;
            }
        });
    });
}

// Function to add item to the cart
document.querySelectorAll(".addCart-btn").forEach(addCartBtn => {
    addCartBtn.addEventListener("click", function () {
        const itemContainer = this.closest(".itens-container");
        const itemImage = itemContainer.querySelector("img.zoom").src;
        const itemName = itemContainer.querySelector("span strong").innerText;
        const itemPrice = itemContainer.querySelector(".price").innerText;

        // Check if item already exists in cart
        const existingItemIndex = cartItems.findIndex(item => 
            item.src === itemImage && item.name === itemName && item.price === itemPrice
        );

        if (existingItemIndex !== -1) {
            // If the item exists, increase quantity
            cartItems[existingItemIndex].quantity++;
        } else {
            // If the item doesn't exist, add it to the cart with quantity 1
            cartItems.push({
                src: itemImage,
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        // Increase item count in the cart and update localStorage
        pedidosCarrinho++;
        localStorage.setItem("pedidosCarrinho", pedidosCarrinho);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Update the cart display
        updateCartDisplay();

        // Show the updated item count
        document.querySelector(".item-count").innerHTML = pedidosCarrinho;

        // Change button text to "Added"
        this.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            this.innerHTML = 'ADICIONAR AO CARRINHO';
        }, 800);
    });
});

// Call the updateCartDisplay function on page load to render the cart items
window.onload = updateCartDisplay;

window.isChecked = function (event) {
    let checkBoxId = event.target.id;
    let checkBox = document.getElementById(checkBoxId);
    let menu = document.getElementById(`${checkBox.dataset.target}`);
    let label = document.querySelector(`label[for=${checkBoxId}]`);
    
    document.body.addEventListener('click', function (event) {
    
        if(event.target === label.children[0]) {
            return;
        }

        if(!menu.contains(event.target) && event.target !== checkBox)  {
            checkBox.checked = false;
        }
    
    });
    
};
