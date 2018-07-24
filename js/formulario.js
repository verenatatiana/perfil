function enviar(){
  var informacoes = document.getElementById("nome");

  if(nome.value != ""){
    alert("Obrigada "+nome.value+", mas esta área está indisponível no momento");
  } else {
    alert("Por gentileza, insira seus dados");
  }
}
