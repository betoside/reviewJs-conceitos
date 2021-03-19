let lista = ['ovo', 'farinha', 'leite', 'fermento'];
let resultado = lista.toString();
let resultado2 = lista.join('/');
let resultado3 = lista.indexOf('ovo');
let resultado4 = lista.indexOf('ovos');
lista.push('prato');
lista[0] = 'ovos';
lista[5] = 'liquidificador';
lista[lista.length] = 'milho';
console.log( 'lista', lista ); 
console.log( 'toString', typeof( resultado ) ); 
console.log( resultado, typeof( resultado ) ); 
console.log( 'resultado2: ', resultado2 ); 
console.log( 'indexOf: ', resultado3 ); 
console.log( 'indexOf: ', resultado4 ); 

let conteudo = `
<pre>
    Parte 1:
    --------

    let lista = ['ovo', 'farinha', 'leite', 'fermento'];
    let resultado = lista.toString();
    let resultado2 = lista.join('/');
    let resultado3 = lista.indexOf('ovo');
    let resultado4 = lista.indexOf('ovos');
    lista.push('prato');
    lista[0] = 'ovos';
    lista[5] = 'liquidificador';
    lista[lista.length] = 'milho';
    console.log( 'lista', lista ); 
    console.log( 'toString', typeof( resultado ) ); 
    console.log( resultado, typeof( resultado ) ); 
    console.log( 'resultado2: ', resultado2 ); 
    console.log( 'indexOf: ', resultado3 ); 
    console.log( 'indexOf: ', resultado4 ); 
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;


let lista2 = ['ovo', 'farinha', 'leite', 'fermento'];

delete lista2[1];
console.log( 'lista2', lista2 );

lista2.splice(1, 1) // para remover apenas o que a gente quer
console.log( 'lista2', lista2 );

lista2.splice(1, 2)
console.log( 'lista2', lista2 );

let lista3 = ['Prato', 'Liquidificador', 'Forno'];
resultado = lista2.concat(lista3);
console.log( 'resultado: ', resultado );



let lista4 = ['ovo', 'farinha', 'leite', 'fermento'];
lista4.sort();
console.log( lista4 );
lista4.reverse();
console.log( lista4 );


conteudo = `
<pre>

    Parte 2:
    --------

    let lista2 = ['ovo', 'farinha', 'leite', 'fermento'];

    delete lista2[1];
    console.log( 'lista2', lista2 );
    
    lista2.splice(1, 1) // para remover apenas o que a gente quer
    console.log( 'lista2', lista2 );
    
    lista2.splice(1, 2)
    console.log( 'lista2', lista2 );
    
    let lista3 = ['Prato', 'Liquidificador', 'Forno'];
    resultado = lista2.concat(lista3);
    console.log( 'resultado: ', resultado );
    
    
    let lista4 = ['ovo', 'farinha', 'leite', 'fermento'];
    lista4.sort();
    console.log( lista4 );
    lista4.reverse();
    console.log( lista4 );
    
</pre>
`;
document.querySelector('.conteudo2').innerHTML = conteudo;



// parte 3
let lista5 = [45, 6, 7, 43, 44];
let lista6 = [];

lista6 = lista5.map((item)=>{
    return item * 2;
});
console.log( 'lista6', lista6 );

let lista7 = [];
for(let i in lista5) {
    lista7.push(lista5[i])
}
console.log( 'lista7', lista7 );

let lista8 = lista5.filter((item)=>{
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});
console.log( 'lista8', lista8 );


lista8 = lista5.every((item)=>{
    if (item > 20) {
        return true;
    } else {
        return false;
    }
})
console.log( 'lista8', lista8 );


lista8 = lista5.some((item)=>{
    return (item > 20) ? true : false;
})
console.log( 'lista8', lista8 );




conteudo = `
<pre>

    Parte 3:
    --------

    let lista5 = [45, 6, 7, 43, 44];
    let lista6 = [];

    lista6 = lista5.map((item)=>{
        return item * 2;
    });
    console.log( 'lista6', lista6 );

    let lista7 = [];
    for(let i in lista5) {
        lista7.push(lista5[i])
    }
    console.log( 'lista7', lista7 );

    let lista8 = lista5.filter((item)=>{
        if (item < 20) {
            return true;
        } else {
            return false;
        }
    });
    console.log( 'lista8', lista8 );


    lista8 = lista5.every((item)=>{
        if (item > 20) {
            return true;
        } else {
            return false;
        }
    })
    console.log( 'lista8', lista8 );


    lista8 = lista5.some((item)=>{
        return (item > 20) ? true : false;
    })
    console.log( 'lista8', lista8 );
</pre>
`;
document.querySelector('.conteudo3').innerHTML = conteudo;


// parte 3
let lista9 = [45, 6, 7, 43, 44];
let lista10 = [];


lista10 = lista9.find((item)=>{
    return (item == 43) ? true : false;
})
console.log( 'lista10', lista10 );


lista10 = lista9.findIndex((item)=>{
    return (item == 43) ? true : false;
})
console.log( 'lista10', lista10 );


lista9 = [
    {id:1, nome:'Alberto', apelido:'betao'},
    {id:2, nome:'Kaiane', apelido:'Ka'},
    {id:3, nome:'Gustavo', apelido:'Gutão'},
    {id:4, nome:'Marina', apelido:'Japa'}
];
let pessoa = lista9.find((item)=>{
    return (item.nome == 'Kaiane')? true : false ;
});
console.log( 'pessoa', pessoa );
pessoa = lista9.findIndex((item)=>{
    return (item.nome == 'Kaiane')? true : false ;
});
console.log( 'pessoa (index)', pessoa );



conteudo = `
<pre>

    Parte 4:
    --------

</pre>
`;
document.querySelector('.conteudo4').innerHTML = conteudo;