let info = ['javascript', 'guitarra', 'surf', '@betoside'];

let [ curso, instrumento, esporte, instagram ] = info;
let [ a ] = info;
let [ treinamento, b, c, redesocial ] = info;
let [ treinamento2, , , redesocial2 ] = info;
let [ , instrumento2, esporte2, ] = info;

console.log(curso, instrumento, esporte, instagram);
console.log(a);
console.log(treinamento, redesocial);
console.log(treinamento2, redesocial2);
console.log(instrumento2, esporte2);

// 

let [ amigo1, amigo2, seculo=21] = ['vinicius', 'juneca'];
console.log(amigo1, amigo2, seculo);

// 

function criar() {
    // return [1, 2, 3];
    // or
    let bbbb = [1, 2, 3];
    return bbbb;
}
let numeros = criar();
let [ccc, ddd, eee] = numeros;
console.log(ccc, ddd, eee);


let conteudo = `
<pre>
    Parte 1:
    --------
    let info = ['javascript', 'guitarra', 'surf', '@betoside'];

    let [ curso, instrumento, esporte, instagram ] = info;
    let [ a ] = info;
    let [ treinamento, b, c, redesocial ] = info;
    let [ treinamento2, , , redesocial2 ] = info;
    let [ , instrumento2, esporte2, ] = info;
    
    console.log(curso, instrumento, esporte, instagram);
    console.log(a);
    console.log(treinamento, redesocial);
    console.log(treinamento2, redesocial2);
    console.log(instrumento2, esporte2);
    
    // 
    
    let [ amigo1, amigo2, seculo=21] = ['vinicius', 'juneca'];
    console.log(amigo1, amigo2, seculo);
    
    // 
    
    function criar() {
        // return [1, 2, 3];
        // or
        let bbbb = [1, 2, 3];
        return bbbb;
    }
    let numeros = criar();
    let [ccc, ddd, eee] = numeros;
    console.log(ccc, ddd, eee);
    
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



