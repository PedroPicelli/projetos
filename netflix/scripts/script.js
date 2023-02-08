const opc1 = window.document.getElementById('opcao1')
const opc2 = window.document.getElementById('opcao2')
const opc3 = window.document.getElementById('opcao3')

const tela1 = window.document.getElementById('tela1')   
const tela2 = window.document.getElementById('tela2')
const tela3 = window.document.getElementById('tela3')

opc1.addEventListener('click', opcao1)
opc2.addEventListener('click', opcao2)
opc3.addEventListener('click', opcao3)

function opcao1() {
    opc1.setAttribute('id', 'escolhido')
    opc2.removeAttribute('id')
    opc3.removeAttribute('id')
}

function opcao2() {
    opc2.setAttribute('id', 'escolhido')
    opc1.removeAttribute('id')
    opc3.removeAttribute('id')
}

function opcao3() {
    opc3.setAttribute('id', 'escolhido')
    opc2.removeAttribute('id')
    opc1.removeAttribute('id')
}

opc1.setAttribute('id', 'escolhido')

function checarTela() {
    if('id' in opc1.attributes) {
        tela1.style.display = 'flex'
        tela2.style.display = 'none'
        tela3.style.display = 'none'
    } else if('id' in opc2.attributes) {
        tela2.style.display = 'flex'
        tela1.style.display = 'none'
        tela3.style.display = 'none'
    } else if('id' in opc3.attributes) {
        tela3.style.display = 'flex'
        tela1.style.display = 'none'
        tela2.style.display = 'none'
    }

    setTimeout(() => {
        checarTela()
    }, 1)
}

checarTela()
