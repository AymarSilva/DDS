'use strict';

let ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5022'
];

for (const item of ambientes) {
    const separador = item.split('-');
    const isNumber = Number(separador[separador.length-1]);

    if(!Number.isInteger(isNumber)){
        console.log(separador[separador.length-1]);
    } else {
        console.log(separador[separador.length-2]+'-'+separador[separador.length-1])
    };
}