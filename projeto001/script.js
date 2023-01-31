var agora = new Date();
var hora = agora.getHours();
var txt = document.querySelector('p');
var img = document.querySelector('.imagem');

txt.innerText = `Agora são ${hora} horas.`;

if(hora >= 6 && hora < 12){
    txt.innerHTML += '<p>Bom Dia!</p>'
    document.body.style.background = '#eaea84';
    img.classList.add('day');
}

else if(hora >= 12 && hora < 18){
    txt.innerHTML += '<p>Boa Tarde!</p>'
    document.body.style.background = '#d78b66';
    img.classList.add('afternoon');
}

else{
    txt.innerHTML += '<p>Boa Noite!</p>'
    document.body.style.background = '#010131ab';
    img.classList.add('night');
}