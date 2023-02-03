function verify(){
    var tinicio = document.getElementById('txtinicio').value;
    var tfim = document.getElementById('txtfim').value;
    var tpasso = document.getElementById('txtpasso').value;
    var res = document.getElementById('res');

    if(tinicio.length == 0 || tfim.length == 0 || tpasso.length == 0){
        res.innerHTML = '<p>Impossível contar</p>';
    }
    else{
        var inicio = Number(tinicio);
        var fim = Number(tfim);
        var passo = Number(tpasso);

        if(passo <= 0){
            window.alert('Passo Inválido! Considerando Passo 1');
            passo++;
        }

        res.innerHTML = '';
        if(inicio < fim){
            for(let x = inicio;x <= fim;x += passo){
                res.innerHTML += `${x} \u{1F449}`;
            }
            res.innerHTML += '\u{1F3C1}';
        }

        else if(inicio > fim){
            for(let x = inicio;x >= fim;x -= passo){
                res.innerHTML += `${x} \u{1F449}`;
            }
            res.innerHTML += '\u{1F3C1}';
        }
        else{
            res.innerHTML = '<p>Impossível contar</p>';
        }
    }
}