// FOR LOOP
let texto = '';

for (let i = 0; i < 50; i++) {
    texto += i + ', ';
    if (i % 10 == 0) {
        texto += '<br>';
    }
}
document.getElementById('demo').innerHTML = texto;


// FOR LOOP ARRAY
let carros = ['ferrari', 'fusca', 'Palio', 'Corolla'];
let html = '<ul>';

for (let i in carros) {
    html += '<li>' +carros[i]+'</li>';
}

html += '</ul>';

document.getElementById('demo2').innerHTML = html;
