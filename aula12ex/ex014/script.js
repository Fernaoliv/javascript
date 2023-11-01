function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/foto-manha-gimp.png'
        document.body.style.background = '#b8b2a4'
    } else if (hora >= 0 && hora < 6) {
        //BOA MADRUGADA
        img.src = 'imagens/foto-madrugada-gimp-g.png'
        document.body.style.background = '#192f60'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/foto-tarde-gimp.png'
        document.body.style.background = '#f09e54'
    } else {
        //BOA NOITE
        img.src = 'imagens/foto-noite-gimp-g.png'
        document.body.style.background = '#150b16'
    }
}