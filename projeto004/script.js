function calcular(){
    var tnum = document.getElementById('txtnum').value;
    var tab = document.getElementById('seltab');
    
    if(tnum.length == 0){
        window.alert('Por favor, digite um número!');
    }
    else{
        var n = Number(tnum);

        tab.innerHTML = '';

        for(var x = 1;x <= 10; x++){
            let item = document.createElement('option');
            item.text = `${n} x ${x} = ${n * x}`;
            item.value = `tab${x}`;
            tab.appendChild(item);
        }
    }
}
