window.addEventListener('load', carregar)
function carregar(){
    var img = window.document.getElementById('img1')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var div1 = window.document.getElementById('div1')
    if(min <= 9 && min >= 0){
        div1.innerHTML = `Agora são exatamente ${hora}:0${min}`
    }
    else{
        div1.innerHTML = `Agora são exatamente ${hora}:${min}`
    }
    if(hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        window.document.body.style.backgroundColor = 'rgb(27, 54, 54)'
        div1.style.backgroundColor = 'rgb(27, 54, 54)'
    }
    else if(hora > 18 || hora <= 4){
        img.src = 'noite.jpg'
        window.document.body.style.backgroundColor = 'rgb(41, 34, 34)'
        div1.style.backgroundColor = 'rgb(41, 34, 34)'
    }
}