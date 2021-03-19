let diaNome = '';
let diasEscolhidos = '';
let diaDaSemana = '';

function informarDia(dia) {
    switch (parseInt(dia)) {
        case 2:
            diaNome = 'segunda-feira';
            break;
        case 3:
            diaNome = 'terça-feira';
            break;
        case 4:
            diaNome = 'quarta-feira';
            break;
        case 5:
            diaNome = 'quinta-feira';
            break;
        case 6:     
            diaNome = 'sexta-feira';
            break;
        case 7:
            diaNome = 'sábado';
            break;
        case 1:
            diaNome = 'domingo';
            break;
    }
    return diaNome;
}

let botao = document.getElementById('botao');
botao.addEventListener('click', ()=>{
    limparConsulta();
    rodarPrograma();
});

function rodarPrograma() {
    document.getElementsByName('chkDia').forEach(element => {
        if (element.checked) {
            diaDaSemana = informarDia(element.value);
            diasEscolhidos += ' ' + diaNome + '. ';
        }
    });
    if (diaDaSemana == '') {
        diasEscolhidos = 'Nenhum dia foi escohido';
    }
    document.getElementById('dia').value = diasEscolhidos;
}

function limparConsulta() {
    document.getElementById('dia').value = '';
    diasEscolhidos = '';
    diaDaSemana = '';
}