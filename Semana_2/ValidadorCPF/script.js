console.log("Javascript carregado");

function validaCPF(cpf) {
  //   console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    // console.log("numerosocpf " + numeros);
    // console.log("digito do cpf " + digitos);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    // console.log(soma);

    // Si resto for 0 então resultado 0, se não então 11 - resto
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validação do primeiro digito
    if (resultado != digitos.charAt(0)) {
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);
    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }
    // console.log(soma);
    // Si resto for 0 então resultado 0, se não então 11 - resto
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validação do segundo digito
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true;
  }
}

function validacao() {
  console.log("Iniciando validação CPF");
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  //Pegando o cpf e armazenando
  var cpf = document.getElementById("cpf_digitado").value;
  //   console.log(cpf);

  var resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
