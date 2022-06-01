function montar() {
    var ano = new Date
    var anoat = ano.getFullYear()
    var nasc = Number(window.document.getElementById('ano').value)
    var frase = window.document.getElementById('idade')
    var tit = window.document.getElementById('tit')
    var idade = anoat - nasc

    frase.innerText = `Informe todos os dados, por favor!`

    var checkM = window.document.getElementById('sexM')
    var checkH = window.document.getElementById('sexH')


    console.log(checkM.checked)

    if (nasc === 0 || nasc > anoat) {
        window.alert('[ERRO] Verifique as informações fornecidas')
         
    } else {
        window.alert('Dados corretos, prosseguindo...')

        if (checkH.checked && checkM.checked) {
            frase.innerText = `Selecionar apenas um sexo`
            img.src = 'imagens/x.jpg'

        } else if (checkM.checked) {
            frase.innerText = `A mulher descrita tem ${idade} anos!`
            if (idade >= 0 && idade <= 5) {
                img.src = 'imagens/bb girl.jpg'
                document.body.style.background = '#ff5fc2'
                tit.style.color = '#7B68EE'

            } else if (idade >= 5 && idade <= 14) {
                img.src = 'imagens/crianca girl.jpg'
                document.body.style.background = '#836FFF'
                tit.style.color = '	#FF1493'
            } else if (idade > 14 && idade <= 20) {
                img.src = 'imagens/jovem girl.jpg'
                document.body.style.background = '#FFDEAD'
                tit.style.color = '#FF69B4'
            } else if (idade > 20 && idade <= 40) {
                img.src = 'imagens/jovem girl.jpg'
                document.body.style.background = '#EE82EE'
                tit.style.color = ''
            } else if (idade > 30 && idade <= 50) {
                img.src = 'imagens/woman.jpg'
                document.body.style.background = '#DA70D6'
                tit.style.color = '#E0FFFF'
            } else if (idade >= 50 && idade <= 105) {
                img.src = 'imagens/old woman.jpg'
                document.body.style.background = '#BC8F8F'
                tit.style.color = '#FFE4B5'
            } else if (idade > 100) {
                img.src = 'imagens/esqueleto.jpg'
                document.body.style.background = '#B0E0E6'
                tit.style.color = '#F0E68C'
            }

        } else if (checkH.checked) {
            frase.innerText = `O homem descrito tem ${idade} anos!`
            if (idade >= 0 && idade <= 5) {
                img.src = 'imagens/bb.jpg'
                document.body.style.background = '#00BFFF'
                tit.style.color = '#FFFF00'
            } else if (idade >= 5 && idade <= 14) {
                img.src = 'imagens/crianca boy.jpg'
                document.body.style.background = '#191970'
                tit.style.color = '#FFD700'
            } else if (idade > 14 && idade <= 20) {
                img.src = 'imagens/jovem boy.jpg'
                document.body.style.background = '#5F9EA0'
                tit.style.color = '#A020F0'
            } else if (idade > 20 && idade <= 30) {
                img.src = 'imagens/man.jpg'
                document.body.style.background = '#48D1CC'
                tit.style.color = '#9400D3'
            } else if (idade > 30 && idade <= 50) {
                img.src = 'imagens/adulto.jpg'
                document.body.style.background = '#4682B4'
                tit.style.color = '#7B68EE'
            } else if (idade >= 50 && idade <= 105) {
                img.src = 'imagens/idoso.jpg'
                document.body.style.background = '	#778899'
                tit.style.color = '#F5FFFA'
            } else if (idade > 100) {
                img.src = 'imagens/esqueleto.jpg'
                document.body.style.background = '#000000'
                tit.style.color = '#F5FFFA'
            }
        }
    }
}






