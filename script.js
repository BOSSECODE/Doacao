const form = document.getElementById("formdoacao");


form.addEventListener("submit", function(e) {

    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let tipo_sanguineo = document.getElementById("tipo_sanguineo").value;


   
    if (nome.length < 3) {
        alert("Nome inválido");
        return;
    }


    if (idade < 16) {
        alert("Você precisa ter 16 anos ou mais");
        return;
    }

   
    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }

    
    if (telefone.length < 8) {
        alert("Telefone inválido");
        return;
    }

    
    if (cidade.trim() === "") {
        alert("Cidade é obrigatória");
        return;
    }

    if (estado.trim() === "") {
        alert("Estado é obrigatório");
        return;
    }
    
  if (isNaN(peso) || peso < 50) {
    alert("Peso insuficiente para doação.");
    return;
  }

  if (tipo_sanguineo.trim() === "") {
      alert("Tipo sanguíneo é obrigatório");
      return;
  }

  alert("Cadastro realizado com sucesso!");
});