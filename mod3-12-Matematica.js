let novoValor = Math.round(3.67);
console.log('novoValor: ', novoValor);

novoValor = Math.round(3.5);
console.log('novoValor: ', novoValor);

novoValor = Math.round(3.4);
console.log('novoValor: ', novoValor);

novoValor = Math.floor(3.99);
console.log('novoValor: ', novoValor);

novoValor = Math.ceil(3.01);
console.log('novoValor: ', novoValor);

novoValor = Math.abs(3.01);
console.log('novoValor: ', novoValor);

novoValor = Math.abs(-3.01);
console.log('novoValor: ', novoValor);

novoValor = Math.min(3, 100, 30, 20, 5);
console.log('novoValor: ', novoValor);

novoValor = Math.max(3, 100, 30, 20, 5);
console.log('novoValor: ', novoValor);

novoValor = Math.random();
novoValor = Math.floor(novoValor * 5);
console.log('novoValor: ', novoValor);

let conteudo = `
<pre>
    Parte 1:
    --------
    let novoValor = Math.round(3.67);
    console.log('novoValor: ', novoValor);

    novoValor = Math.round(3.5);
    console.log('novoValor: ', novoValor);

    novoValor = Math.round(3.4);
    console.log('novoValor: ', novoValor);

    novoValor = Math.floor(3.99);
    console.log('novoValor: ', novoValor);

    novoValor = Math.ceil(3.01);
    console.log('novoValor: ', novoValor);

    novoValor = Math.abs(3.01);
    console.log('novoValor: ', novoValor);

    novoValor = Math.abs(-3.01);
    console.log('novoValor: ', novoValor);

    novoValor = Math.min(3, 100, 30, 20, 5);
    console.log('novoValor: ', novoValor);

    novoValor = Math.max(3, 100, 30, 20, 5);
    console.log('novoValor: ', novoValor);

    novoValor = Math.random();
    novoValor = Math.floor(novoValor * 5);
    console.log('novoValor: ', novoValor);
    
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;
