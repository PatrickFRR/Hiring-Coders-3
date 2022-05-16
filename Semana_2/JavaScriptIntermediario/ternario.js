let isvalid = false; //true or false

// sem ternario
function verify(isvalid) {
  if (isvalid) { // isvalid == true
    return true;
  } else {
    return false;
  }
}
console.log(verify(isvalid));

//Simplificando a mesma função com o conceito de ternario

// com ternario

// const = constante - valor que não muda
const result = isvalid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0: -1;

console.log(numeroResultado)