// sem operator spread apenas faço uma referencia ao arry inicial, 
//logo toda a alteração irá refletir nele

let arr = ['a', 'b', 'c'];
let arr2 = arr;

arr2.push('d');

console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);

//com operator spread eu cria uma cópia do array e consigo manipular sem alterar o array inicial

let arr3 = ['a', 'b', 'c'];
let arr4 = [...arr3];

arr4.push('d');

console.log(`arr3 = ${arr3}`);
console.log(`arr4 = ${arr4}`);