'use strict';

const instrutores = [
    'Amanda Xavier Nascimento',
    'Anna Julya dos Santos da Silva',
    'Aymar Antonio Silva',
    'Daniel Kaleb de Oliveira Alves Moreira',
    'Deivid Guimarães Gonçalves Filho',
    'Emanoel Vitor Ventura Atanazio',
    'Isaac Lucca de Paula Barbara',
    'Matheus Sarti Brunelli',
    'Sarah Monteiro Duque',
    'Heloisa Rangel Guimarães',
    'Marco Antônio Santos Medeiros',
    'Pietro Gabriel Heringer Menezes',
    'Vitor Vargas Parajara',
    'Samara da Silva Ribeiro',
    'João Pedro Costa Silva',
    'Gabriel de Assis Sperandio'
];

const div = document.getElementById('div-espaco');

for(const instrutor of instrutores){
    const partesNome = instrutor.split(' ');
    const quebraLinha = document.createElement('br');
    const span = document.createElement('span');

    span.innerText = partesNome[0];
    span.innerText += ' ';
    span.innerText += partesNome[partesNome.length-1];

    div.appendChild(span);
    div.appendChild(quebraLinha);
    document.body.appendChild(div);
};