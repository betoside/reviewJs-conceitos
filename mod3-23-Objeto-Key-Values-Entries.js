let listaArray = ['ovo', 'café', 'banana', 'aveia', 'uva'];
console.log('[]', typeof listaArray );

let listaObj = {nome: 'polo', sobrenome: 'karate'};
console.log('{}', typeof listaObj);

let alimentos = ['ovo', 'café', 'banana', 'aveia', 'uva'];
console.log('keys', Object.keys(alimentos) );
console.log('values', Object.values(alimentos) );
console.log('entries', Object.entries(alimentos) );

console.log('--'.repeat(3));

let pessoa = {
    nome: 'adauto',
    local: 'stella maris',
    filosofia: 'surfamos qualquer mar com qualquer prancha'
};
console.log('keys', Object.keys(pessoa) );
console.log('values', Object.values(pessoa) );
console.log('entries', Object.entries(pessoa) );






let conteudo = `
<pre>
    Parte 1:
    --------
    
    let listaArray = ['ovo', 'café', 'banana', 'aveia', 'uva'];
    console.log('[]', typeof listaArray );
    
    let listaObj = {nome: 'polo', sobrenome: 'karate'};
    console.log('{}', typeof listaObj);
    
    let alimentos = ['ovo', 'café', 'banana', 'aveia', 'uva'];
    console.log('keys', Object.keys(alimentos) );
    console.log('values', Object.values(alimentos) );
    console.log('entries', Object.entries(alimentos) );
    
    console.log('--'.repeat(3));
    
    let pessoa = {
        nome: 'adauto',
        local: 'stella maris',
        filosofia: 'surfamos qualquer mar com qualquer prancha'
    };
    console.log('keys', Object.keys(pessoa) );
    console.log('values', Object.values(pessoa) );
    console.log('entries', Object.entries(pessoa) );
            
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



