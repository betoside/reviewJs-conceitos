let n = 10.659871231231;
let resultado = n;
let resultado2 = n.toFixed(3);
console.log(resultado, typeof(resultado));
console.log(resultado2, typeof(resultado2));

let n2 = '25.7';


let soma = n2 + 5;
let soma2 = parseInt(n2) + 5;
let soma3 = parseFloat(n2) + 5;
console.log('soma:', soma);
console.log('soma2:', soma2);
console.log('soma2:', soma3);

let conteudo = `
<pre>
    let n = 10.659871231231;
    let resultado = n;
    let resultado2 = n.toFixed(3);
    console.log(resultado, typeof(resultado));
    console.log(resultado2, typeof(resultado2));

    let n2 = '25.7';


    let soma = n2 + 5;
    let soma2 = parseInt(n2) + 5;
    let soma3 = parseFloat(n2) + 5;
    console.log('soma:', soma);
    console.log('soma2:', soma2);
    console.log('soma2:', soma3);
</pre>
`;

document.querySelector('.conteudo').innerHTML = conteudo;