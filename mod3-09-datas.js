// em JS, a contagem do mês começa do 0
// let d = new Date(2021, 2, 17, 15, 50, 10);
// let d = new Date('2021-02-17 15:50:10'); // formato date string
let d = new Date('2021-10-04 12:00:10');
console.log( 'd:', d ); 
console.log( 'd.toUTCString:', d.toUTCString() ); 

d = new Date(0);
console.log( 'd:', d ); 
console.log( 'd.toUTCString:', d.toUTCString() ); 

d = new Date(9879797876876987); // milisegundos
console.log( 'd:', d ); 
console.log( 'd.toUTCString:', d.toUTCString() ); 

let conteudo = `
<pre>
    Parte 1:
    --------
    // em JS, a contagem do mês começa do 0
    // let d = new Date(2021, 2, 17, 15, 50, 10);
    // let d = new Date('2021-02-17 15:50:10'); // formato date string
    let d = new Date('2021-10-04 12:00:10');
    console.log( 'd:', d ); 
    console.log( 'd.toUTCString:', d.toUTCString() ); 
    
    d = new Date(0);
    console.log( 'd:', d ); 
    console.log( 'd.toUTCString:', d.toUTCString() ); 
    
    d = new Date(9879797876876987); // milisegundos
    console.log( 'd:', d ); 
    console.log( 'd.toUTCString:', d.toUTCString() ); 
    
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;

d = new Date();
let novoValor = d.getFullYear();
console.log( '-- x --' ); 
console.log( 'd:', d ); 
console.log( 'd.getFullYear:', d.getFullYear() ); 
console.log( 'd.getDay (base 0):', d.getDay() ); 
console.log( 'd.getDate:', d.getDate() ); 
console.log( 'd.getMinutes:', d.getMinutes() ); 
console.log( 'd.getHours():', d.getHours() ); 
console.log( 'd.getMilliseconds():', d.getMilliseconds() ); 
console.log( 'd.getTime():', d.getTime() ); 
console.log( 'Date.now():', Date.now() ); 

conteudo = `
<pre>
    Parte 2:
    --------
    d = new Date();
    let novoValor = d.getFullYear();
    console.log( 'd:', d ); 
    console.log( 'd.getFullYear:', d.getFullYear() ); 
    console.log( 'd.getDay (base 0):', d.getDay() ); 
    console.log( 'd.getDate:', d.getDate() ); 
    console.log( 'd.getMinutes:', d.getMinutes() ); 
    console.log( 'd.getHours():', d.getHours() ); 
    console.log( 'd.getMilliseconds():', d.getMilliseconds() ); 
    console.log( 'd.getTime():', d.getTime() ); 
    console.log( 'Date.now():', Date.now() ); 
    
</pre>
`;
document.querySelector('.conteudo2').innerHTML = conteudo;

d = new Date();
console.log( '-- x --' ); 

d.setFullYear(2022);
novoValor = d;
console.log( 'd.setFullYear2022):', novoValor ); 

d.setMonth(11);
novoValor = d;
console.log( 'd.setMonth(11):', novoValor ); 

d = new Date();
d.setDate( d.getDate() + 5 );
novoValor = d;
console.log( 'd.setDate(5):', novoValor ); 

d = new Date();
novoValor = d.getDay() + 1;
console.log( 'd.getDay():', novoValor + 'ª' ); 

conteudo = `
<pre>
    Parte 3:
    --------

    d = new Date();
    console.log( '-- x --' ); 
    
    d.setFullYear(2022);
    novoValor = d;
    console.log( 'd.setFullYear2022):', novoValor ); 
    
    d.setMonth(11);
    novoValor = d;
    console.log( 'd.setMonth(11):', novoValor ); 
    
    d = new Date();
    d.setDate( d.getDate() + 5 );
    novoValor = d;
    console.log( 'd.setDate(5):', novoValor ); 
    
    d = new Date();
    novoValor = d.getDay() + 1;
    console.log( 'd.getDay():', novoValor + 'ª' ); 
    
</pre>
`;
document.querySelector('.conteudo3').innerHTML = conteudo;