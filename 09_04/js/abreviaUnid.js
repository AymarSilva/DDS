'use strict';

function abreviaUnid(unidade) {
    const unidSplit = unidade.split(' ');
    let unidUm = unidSplit.splice(0,1);
    unidUm = String(unidUm);
    let unidUmForm = '';
    for (let index = 0; index < 4; index++) {
        unidUmForm += unidUm[index];
        if (index === 3) {
            unidUmForm += '. ';
        };
    };
    let array = unidSplit.splice(0,3);
    if (array[0] === 'DE') {
        return unidUmForm+array[0]+' '+array[1];
    } else {
        return unidUmForm+array[0];
    };
};

export default abreviaUnid;