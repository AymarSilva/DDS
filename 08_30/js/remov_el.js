'use strict';

let municipios = ['serra','Cariacica','Vila Velha','Viana'];

console.log(municipios[0].toUpperCase());
console.log(municipios);

//Remover 2 elementos a partir de indice 1
municipios.splice(1,2);
console.log("splice comeco: ",municipios);

//Remover 2 elementos no final
municipios.splice(-2,1);
console.log("splice no final: ",municipios);

// Preencher separador com -
municipios.join('-');
console.log("join: ",municipios);