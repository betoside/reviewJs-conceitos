// array = LISTAGEM NUMERADA
// objeto = LISTAGEM NOMEADA
// 10 OBJETO
let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function () {
        this.ligado = true;
        console.log('ligando o '+this.modelo);
        console.log('Vrumm Vrumm');
    },
    acelerar:function () {
        if (this.ligado == true) {
            console.log('Vraummmmmm');
        } else {
            console.log(this.nome+' '+this.modelo+' '+'não está ligado');
        }
    }
}
// console.log(carro.nome);
// console.log(carro.modelo);
// console.log(carro.peso);
carro.ligar();
carro.acelerar();