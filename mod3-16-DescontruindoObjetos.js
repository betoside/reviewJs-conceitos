let pessoa = {
    nome: "betao",
    sobrenome: "side",
    idade: 46,
    social: {
        facebook: "betosideFB",
        instagram: {
            url: "@betoside",
            seguidores: 1000

        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
    apelido: 'betao',
    filho: 'gustavo',
    filha: 'kaiane'

};

console.log(pessoa.nome);
console.log(pessoa.social.facebook);
console.log(pessoa.nomeCompleto);
console.log(pessoa.nomeCompleto());

let {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);

let {nome:pessoaNome, sobrenome:SobreNome2, idade:idade2, esporte = 'surf'} = pessoa;
console.log(pessoaNome, SobreNome2, idade2, esporte);


let conteudo = `
<pre>
    Parte 1:
    --------
    let pessoa = {
        nome: "betao",
        sobrenome: "side",
        idade: 46,
        social: {
            facebook: "betosideFB",
            instagram: "@betoside"
        },
        nomeCompleto: function () {
            return "${this.nome} ${this.sobrenome}";
        }
    };
    
    console.log(pessoa.nome);
    console.log(pessoa.social.facebook);
    console.log(pessoa.nomeCompleto);
    console.log(pessoa.nomeCompleto());
    
    
    let {nome, sobrenome, idade} = pessoa;
    console.log(nome, sobrenome, idade);
    
    let {nome:pessoaNome, sobrenome:SobreNome2, idade:idade2, esporte = 'surf'} = pessoa;
    console.log(pessoaNome, SobreNome2, idade2, esporte);
</pre>
`;
document.querySelector('.conteudo').innerHTML = conteudo;

console.log('-- x --');
let { facebook, instagram } = pessoa.social;
console.log(facebook, instagram);

let { nome: nome22, idade: idade22, social: { instagram: {url:instagram22, seguidores} } } = pessoa;
console.log(nome22, idade22, instagram22, seguidores);

// function pegarNomeCompleto(obj) {
function pegarNomeCompleto({filho, filha, social:{instagram: {url}}}) {
    // return obj.nome+' = '+obj.sobrenome;

    // let nome = obj.nome;
    // let sobrenome = obj.sobrenome;
    // return `${nome} x ${sobrenome}`;

    return `Filho: ${filho}. Filha: ${filha}. Siga em ${url}`;
}
console.log( pegarNomeCompleto(pessoa) );




conteudo = `
<pre>

    Parte 2:
    --------

    console.log('-- x --');
    let { facebook, instagram } = pessoa.social;
    console.log(facebook, instagram);
    
    let { nome: nome22, idade: idade22, social: { instagram: {url:instagram22, seguidores} } } = pessoa;
    console.log(nome22, idade22, instagram22, seguidores);
    
    // function pegarNomeCompleto(obj) {
    function pegarNomeCompleto({filho, filha, social:{instagram: {url}}}) {
        // return obj.nome+' = '+obj.sobrenome;
    
        // let nome = obj.nome;
        // let sobrenome = obj.sobrenome;
        // return "${nome} x ${sobrenome}";
    
        return "Filho: $ {filho}. Filha: $ {filha}. Siga em $ {url}";
    }
    console.log( pegarNomeCompleto(pessoa) );    
</pre>
`;
document.querySelector('.conteudo2').innerHTML = conteudo;