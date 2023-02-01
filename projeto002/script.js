const img = document.querySelector('div');
const txt = document.getElementsByTagName('p')[2];
const ver = document.getElementById('botao');
const form = document.querySelector('form');
            
ver.addEventListener('click', verify);
            

function verify(){
    var atano = new Date();
    var atual = atano.getFullYear();
    var fsexo = document.getElementsByName('sexo');
    var sexo = '';
    var tano = document.getElementById('txtano');
    var ano = Number(tano.value);
    var idade = atual - ano;

    if(ano <= 0 || ano > atual){
        window.alert('[ERRO] Verifique os dados e tente novemente');
    }
    else{
        img.classList.remove('baby', 'boy', 'girl', 'teenboy', 'teengirl', 'man', 'woman', 'oldguy', 'oldlady', 'hidden');
        img.classList.add('imagem');

        if(fsexo[0].checked){
            sexo  = 'Homem';
            if(idade >= 0 && idade < 4){
                img.classList.add('baby');
            }
            else if(idade < 12){
                img.classList.add('boy');
            }
            else if(idade < 30){
                img.classList.add('teenboy');
            }
            else if(idade < 60){
                img.classList.add('man');
            }
            else{
                img.classList.add('oldguy');
            }
        }
        else if(fsexo[1].checked){
            sexo = 'Mulher';
            if(idade >= 0 && idade < 4){
                img.classList.add('baby');
            }
            else if(idade >= 4 && idade < 12){
                img.classList.add('girl');
            }
            else if(idade >= 12 && idade < 30){
                img.classList.add('teengirl');
            }
            else if(idade >= 30 && idade < 60){
                img.classList.add('woman');
            }
            else{
                img.classList.add('oldlady');
            }
        }

        txt.innerText = `Detectamos ${sexo} de ${idade} anos.`;
        txt.style.textAlign = 'center';
                    
    }
}