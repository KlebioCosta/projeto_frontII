function inserirMensagem(obj) {}

  function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    var obj = {nome: nome, email: email, mensagem: mensagem};
    inserirMensagem(obj);

   
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    alert("Mensagem enviada com sucesso!");
  }