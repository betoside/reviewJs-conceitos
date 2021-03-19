function somar(x, y) {
    return x + y;
}
console.log( somar(10, 5) );

// 

let adicionar = function (x, y) {
    return x+y;
}
console.log( adicionar(20,5) );

// 

let mais = (x,y) => {
    return x+y;
};
console.log( mais(30,5) );

// 

let maisReduzindoLinha = (x,y) => x+y;
// usando algo específico ele funciona como RETURN diretamente
console.log( maisReduzindoLinha(40,5) );

// 

let umParametro = (nome) => {
    return nome.length;
};
console.log( umParametro('alberto') );

// 

let umParametro2 = (nome) => nome.length;
console.log( umParametro2('alberto') );

// 

let umParametro3 = nomeDoParametro => nomeDoParametro.length;
// arrow function hahahahahaah
// sendo apenas uma acao especificia é possivel fazer isso
// funciona
console.log( umParametro3('alberto') );

console.log( "OBS: função anônima ou Arrow Function não possui o obj 'this'" );


let conteudo = `
<pre>
    Parte 1:
    --------
    function somar(x, y) {
        return x + y;
    }
    console.log( somar(10, 5) );
    
    // 
    
    let adicionar = function (x, y) {
        return x+y;
    }
    console.log( adicionar(20,5) );
    
    // 
    
    let mais = (x,y) => {
        return x+y;
    };
    console.log( mais(30,5) );
    
    // 
    
    let maisReduzindoLinha = (x,y) => x+y;
    // usando algo específico ele funciona como RETURN diretamente
    console.log( maisReduzindoLinha(40,5) );
    
    // 
    
    let umParametro = (nome) => {
        return nome.length;
    };
    console.log( umParametro('alberto') );
    
    // 
    
    let umParametro2 = (nome) => nome.length;
    console.log( umParametro2('alberto') );
    
    // 
    
    let umParametro3 = nomeDoParametro => nomeDoParametro.length;
    // arrow function hahahahahaah
    // sendo apenas uma acao especificia é possivel fazer isso
    // funciona
    console.log( umParametro3('alberto') );
    
    console.log( "OBS: função anônima ou Arrow Function não possui o obj 'this'" );
    
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;



