'use strict';

function instrutor(nome) {
    const formatado = nome.split(' ');
    const nomeForm = formatado[0]+' '+formatado[formatado.length-1]; 
    return nomeForm;
};

export default instrutor;