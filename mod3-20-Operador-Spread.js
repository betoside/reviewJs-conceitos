let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8];
console.log(outros);

//

let info = {
    nome:'betao',
    sobrenome:'cordeiro',
    idade: 30
};
let novaInfo = {
    ...info,
    cidade: 'Campina Grande',
    estado: 'paraíba',
    pais: 'Brasil'
};
console.log( novaInfo );

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status:0,
        token: '007007007',
        data_cadastro: '...'
    };
    return novasInfo;
}

console.log( adicionarInfo({nome:'Alberto',sobrenome:'carlos'}) );


let conteudo = `
<pre>
    Parte 1:
    --------
    let numeros = [1, 2, 3, 4];
    let outros = [...numeros, 5, 6, 7, 8];
    console.log(outros);

    //

    let info = {
        nome:'betao',
        sobrenome:'cordeiro',
        idade: 30
    };
    let novaInfo = {
        ...info,
        cidade: 'Campina Grande',
        estado: 'paraíba',
        pais: 'Brasil'
    };
    console.log( novaInfo );

    function adicionarInfo(info) {
        let novasInfo = {
            ...info,
            status:0,
            token: '007007007',
            data_cadastro: '...'
        };
        return novasInfo;
    }
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



