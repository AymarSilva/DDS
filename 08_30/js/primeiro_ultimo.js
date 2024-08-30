'use strict' //Impede uso de variaveis nao declaradas

let nome = "Aymar";
// sobrenome = "Silva";

// console.log(sobrenome);

const instrutor = "Eduardo Pereira Silva";

//Separa uma string em um array de strings com o separador escolhido
const pieces = instrutor.split(' ');

console.log("split: ",pieces);

//pop remove e retorna o ult elemento
let numero = pieces.pop();
console.log("pop :",numero);

//push empurra o item ao final da array
let array = [1,2,3,4];
array.push(5);
console.log("push: ",array);

//shift remove e retorna o primeiro
console.log("shift: ",array.shift());
console.log("array depois de shift: ",array)

//unshift adiciona na primeira posição
array.unshift(0);
console.log("array depois de unshift: ",array);

let cores = ['verde','azul','roxo']

for (let index = 0; index < array.length; index++) {
    console.log("for normal: ",cores[index]);
};

for (let cor of cores) {
    console.log("forOf: ",cor);
};

