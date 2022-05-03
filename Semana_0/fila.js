
//Fila ou FIFO (First-In, First-Out) significa o primeiro que entra é o primeiro que sai.


var fila = [];
//push acrescenta um novo elemento ao array
console.log("Hora de fazer a fila....");
fila.push(1);
fila.push(2);
fila.push(3);
console.log(fila);

//shift retira o primeiro elemento ao 
console.log("O primeiro sai da fila");
fila.shift();
console.log(fila);

console.log("O primeiro sai da fila");
fila.shift();
console.log(fila);

console.log("Acabou a fila!");
fila.shift();
console.log(fila);