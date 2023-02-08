var lista = [];
const res = document.querySelector('#res');
const ret = document.querySelector('#retorno');

function adicionar(){
    let tnum = document.querySelector('#txtn').value;
    let n = Number(tnum);

    if(tnum.length == 0 || n > 100 || n < 1 || lista.indexOf(n) != -1){
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    else{
        lista.push(n);
        let valor = document.createElement('option');
        valor.text = `Valor ${n} adicionado.`;
        valor.value = `ret${lista.indexOf(n)}`;
        ret.appendChild(valor);
        res.innerHTML = '';
    }
    num.value = '';
    num.focus();
}

function verificar(){
    if(lista.length == 0){
        window.alert('Adicione valores antes de finalizar');
    }
    else{
        lista.sort();
        let tamanho = lista.length;
        let soma = 0;

        for(let i in lista){
            soma += lista[i];
        }

        res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi: ${lista[tamanho - 1]}</p>`;
        res.innerHTML += `<p>O menor valor informado foi: ${lista[0]}</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma/tamanho}</p>`;
    }
}
