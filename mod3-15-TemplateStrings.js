let nome = 'Betoside';
let idade = 30;
let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem farei ${idade+1}`;
console.log('frase: ', frase);


let conteudo = `
<pre>
    Parte 1:
    --------
    let nome = 'Betoside';
    let idade = 30;
    let frase = "Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem farei ${idade+1}";
    console.log('frase: ', frase);
    
    
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;