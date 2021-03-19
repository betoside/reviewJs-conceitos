function alterar(titulo) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
    // console.clear();
    // console.log(titulo);
    // console.log(document.getElementById('titulo'));
}
// alterar('Gustavo');

function carregarInformacoes () {
    // aqui escreve comandos
    // console.log('Jogo favorito: Fortnite');
    // alert('Jogo favorito: Fortnite');
    document.getElementById('titulo').innerHTML = 'Gustavo';
}

carregarInformacoes()

function azul() {
    limpar();
    document.getElementById('titulo').classList.add('azul');
}
function vermelho() {
    limpar();
    document.getElementById('titulo').classList.add('vermelho');
}
function verde() {
    limpar();
    document.getElementById('titulo').classList.add('verde');
}
function limpar() {
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('verde');
}

function mostrarTelefone(elemento) {
    document.getElementById('telefone').style.display = 'block';
    elemento.style.display = 'none';
}

// 09 ARRAY
let carros = [
    'Pálio',
    'Uno',
    'Corolla',
    'Ferrari'
];
console.log(carros);