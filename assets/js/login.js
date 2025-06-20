function showPassword () {

    var passwordInput = document.getElementById("senhaLogin");
  
    
   
    if(passwordInput.type === "password") {
      passwordInput.type = "text";
      document.getElementById("toggle-img").src = "../assets/img/icons/visibilityOn.svg";
    }else {
      passwordInput.type = "password";
      document.getElementById("toggle-img").src = "../assets/img/icons/visibilityOff.svg";
    }
    
  }

  function passwordRequirement () {

    let value = document.getElementById("senhaLogin").value;
  
    var regex = /^[a-zA-Z]{8}$/;
    
  
    if(regex.test(value) === false) {
      document.getElementById("senhaLoginSpan").textContent = "A senha atual não contém 8 caracteres alfabéticos!";
      return false;
    }else {
      document.getElementById("senhaLoginSpan").textContent = "";
      return true;
    }
  }
  
  function loginRequirement (){
    let value = document.getElementById("mainLogin").value;
  
    var regex = /^[a-zA-Z]{6}$/;
  
    if(regex.test(value) === false) {
      document.getElementById("mainLoginSpan").textContent = "O login atual não contém 6 caracteres alfabéticos!";
      return false;
    }else {
      document.getElementById("mainLoginSpan").textContent = "";
      return true;
    }
  }

  document.getElementById("limparTela").addEventListener("click", () => {
  
    input = document.querySelectorAll("input");

    for(i = 0; i < input.length - 1; i++){
      input[i].value = "";
    };


  });

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    if(loginRequirement() === false) {

      return;
    }


    if(passwordRequirement('senhaLogin', 'senhaLoginSpan') === false) {
      
      return;
    }

      
    const storedAccounts = JSON.parse(localStorage.getItem("accountData"));
  
          const login = {
              login: event.target.login.value,
              senha: event.target.senhaLogin.value
          }
  
          for(i = 0; i < storedAccounts.length; i++) {
              if(storedAccounts[i].login === login.login && storedAccounts[i].senha === login.senha){
                localStorage.setItem('numero', i);
                window.location.href = "../index.html";
                return;
              }
          }

          let errorMessage = document.getElementById("mensagemDeErro");
          
          errorMessage.className = "show";
          
          setTimeout(function (){
            errorMessage.className = errorMessage.className.replace("show", "");
          }, 3000);
                
      });