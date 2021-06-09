function adicionar(numeros) {
    console.log( numeros );
}
adicionar(5, 6, 7, 8, 9, 10, 11);

function adicionar_numeros(...numeros) {
    console.log( numeros );
}
adicionar_numeros(5, 6, 7, 8, 9, 10, 11);

function adicionar_nomes(...nomes) {
    console.log( nomes );
}
adicionar_nomes("betao", 'nando', 'del', 'menino candonblé');


function somar_nomes (nomes, ...novosNomes) {
    let novoConjnto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjnto;
}

let surfers = ['adauto', 'andre'];
let locals = somar_nomes(surfers, 'nando', 'yan', 'jr');

console.log(locals);


let conteudo = `
<pre>
    Parte 1:
    --------
    function adicionar(numeros) {
        console.log( numeros );
    }
    adicionar(5, 6, 7, 8, 9, 10, 11);
    
    function adicionar_numeros(...numeros) {
        console.log( numeros );
    }
    adicionar_numeros(5, 6, 7, 8, 9, 10, 11);
    
    function adicionar_nomes(...nomes) {
        console.log( nomes );
    }
    adicionar_nomes("betao", 'nando', 'del', 'menino candonblé');
    
    
    function somar_nomes (nomes, ...novosNomes) {
        let novoConjnto = [
            ...nomes,
            ...novosNomes
        ];
        return novoConjnto;
    }
    
    let surfers = ['adauto', 'andre'];
    let locals = somar_nomes(surfers, 'nando', 'yan', 'jr');
    
    console.log(locals);
        
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



