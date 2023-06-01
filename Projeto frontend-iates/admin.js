function validarUsuario(obj) {
   
    if (obj.email === 'admin@admin.com' && obj.senha === '1234') {
      return true;
    } else {
      return false;
    }
  }

  function fazerLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var obj = {email: email, senha: senha};
    if (validarUsuario(obj)) {
      
      window.location.href = "mensagens.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }

    
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
  }