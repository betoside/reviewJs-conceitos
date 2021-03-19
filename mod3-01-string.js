let nome = 'Boniek Lacerda Leal';
let resultado = '';

resultado = nome.length;
resultado2 = nome.indexOf('Lacerda');
resultado3 = nome.indexOf(' ');
resultado4 = '';

if (nome.indexOf('Leal') > -1) {
    resultado4 = 'Achou';
} else {
    resultado4 = 'Nao Achou';
}

document.querySelector('.parte1').innerHTML = resultado;
document.querySelector('.parte12').innerHTML = resultado2;
document.querySelector('.parte13').innerHTML = resultado3;
document.querySelector('.parte14').innerHTML = resultado4;

// 
let slice_nome = 'Boniek Lacerda Leal';
let slice_resultado = '';

let material_23 = `
    material 2/3

    .slice()
    .slice(10)
    .slice(-4)
    .slice(-17,-10)
    .slice(pos ini, pos fim)
    funciona com negativo

    .substring()
    .substring(10)
    .substring(10, 15)
    .substring(pos ini, pos fim)
    nao funciona com negativo

    .substr()
    .substr(0, 7)
    .substr(8, 15) lacerda leal
    .substr(posicao inicial, qtd de caracteres)
    .substr(-4, 2)
    funciona com negativo
`;
document.querySelector('.material_23').innerHTML = '<pre>'+material_23+'</pre>';


let material_33 = `
    material 3/3

    replace(de, para)
    replace('carro', 'moto')
    replace('ruim', 'bom')

    .toUpperCase()
    .toLowerCase()
    .concat()
    .charAt(3) exibe o caracter na posicao
    .split(' ') // gera um array
    .split(',')
    .split('a')
`;
document.querySelector('.material_33').innerHTML = '<pre>'+material_33+'</pre>';
let split_exemplo = 'antes uma palavra com letra A';
let array_split_exemplo = split_exemplo.split('a');
console.log('array_split_exemplo: ', array_split_exemplo);