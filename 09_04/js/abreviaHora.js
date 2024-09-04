'use strict';

const anuncios = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
];

function abreviaHora(dataHora) {
    const data = new Date(dataHora);
    const hora = data.toLocaleTimeString('pt-br',{hour:'2-digit',minute:'2-digit'});
    return hora;  
};

export default abreviaHora;