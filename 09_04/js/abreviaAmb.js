'use strict';

function abreviaAmb(item) {
   const formatado = item.split('-');
    if (formatado.length === 3) {
        let mensagem = formatado.splice(-1,1);
        return mensagem
    }else{
        let mensagem = formatado.splice(-2,2)
        return mensagem.join('-'); 
    };
   };

export default abreviaAmb;