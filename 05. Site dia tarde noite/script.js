var nom = window.prompt('Qual seu nome ?')

function carregar(){
    var msg = window.document.getElementById('msg')
    var pic = window.document.getElementById('pic')
    var dat = new Date
    var hor =  20//dat.getHours()
    msg.innerText = `Agora são exatamente ${hor} horas.`
    console.log(hor)
    var cab = window.document.querySelector("h1#cab")
    var cop = window.document.querySelector("p#cop")

    if (hor >= 0 && hor < 12){
        cab.innerText = `Bom dia ${nom} !`
        img.src = 'manha/manha.jpg'
        document.body.style.background = '#00ff6279'
    } else if (hor >= 12 && hor <= 18){
        cab.innerText = `Boa tarde ${nom} !`
        img.src = 'tarde/tarde.jpg'
        document.body.style.background = '#0099ff79'

    } else {
        cab.innerText = `Boa noite ${nom} !`
        img.src = 'noite/noite.jpg'
        document.body.style.background = '#100138f6'
        cab.style.color = '#00f5e179'
        cop.style.color = '#ffffff8a'

    }
}