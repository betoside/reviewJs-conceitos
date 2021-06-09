let telefone1 = '52 3 43';
console.log( telefone1.padEnd(9, '*') );
// padEnd diz que a string tem que ter no mínimo 9 caracteres

console.log('--'.repeat(3));

let telefone2 = '52 3 43';
console.log( telefone2.padEnd(9, '-') );

console.log('--'.repeat(3));

let cartao = '1234123412341234';
let lastDigits = cartao.slice(-4);
let cartaoMask = lastDigits.padStart(16, '*');
console.log('esse é o seu cartão?', cartao);
console.log('lastDigits', lastDigits);
console.log('cartaoMask', cartaoMask);




let conteudo = `
<pre>
    Parte 1:
    --------
    

    
            
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



