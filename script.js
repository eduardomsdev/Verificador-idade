function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] verifique se as informaçoes estao corretas")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //bebe
img.setAttribute('src', 'image/bebe.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'image/jo-homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'image/h-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'image/idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //bebe
                img.setAttribute('src','image/bebe.jpg')
            } else if (idade < 21){
                //jovem 
                img.setAttribute('src','image/jo-mulher.jpeg')
            } else if( idade < 50){
                //adulta 
                 img.setAttribute('src','image/m-adulta.jpg')
            } else {
                //idosa
                img.setAttribute('src','image/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
            res.innerHTML = `detectamos ${genero} com ${idade} anos`

            
            res.appendChild(img)
}
}