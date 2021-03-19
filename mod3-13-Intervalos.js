let timer;
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.conteudo').innerHTML = txt;
}

function comecar() {
    timer = setInterval(showTime, 1000);
}
function parar() {
    clearInterval(timer);
}


let conteudo = `
<pre>
    Parte 1:
    --------
    let timer;
    function showTime() {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let txt = h+':'+m+':'+s;

        document.querySelector('.conteudo').innerHTML = txt;
    }

    function comecar() {
        timer = setInterval(showTime, 1000);
    }
    function parar() {
        clearInterval(timer);
    }
    
</pre>
`;
document.querySelector('.conteudo2').innerHTML = conteudo;


setTimeout(()=>{
    console.log('rodou');
}, 1000);