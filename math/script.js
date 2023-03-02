
const btn = window.document.getElementById('btn')
const enviar = window.document.getElementById('enviar')
const resp = window.document.getElementById('resp')
const aeP = window.document.getElementById('ae')
const rcP = window.document.getElementById('rc')
let operador = ''
let valor1 = 0
let valor2 = 0
let acabou = true

btn.addEventListener('click', cmc)
enviar.addEventListener('click', verificar)

function cmc() {
    const tmp = window.document.getElementById('tmp').value
    const tmpAparecer = window.document.getElementById('tmpAparecer')
    let tmpCaindo = tmp
    if(tmp < 1 || tmp > 60 || tmp === '') {
        alert('Insira um valor válido!')
    } else {
        aeP.innerText = ''
        rcP.innerText = ''
        escolher()
        acabou = false
        tmpAparecer.innerHTML = `Tempo: <strong>${tmpCaindo}</strong>`
        tmpCaindo--
        setInterval(() => {
            if(tmpCaindo >= 0) {
                tmpAparecer.innerHTML = `Tempo: <strong>${tmpCaindo}</strong>`
                if(acabou === true) {
                    tmpAparecer.innerHTML = `Tempo: <strong>Nenhum</strong>`
                    tmpCaindo = 0
                } else if(tmpCaindo === 0) {
                    setTimeout(() => {
                        tmpAparecer.innerHTML = `Tempo: <strong>Nenhum</strong>`
                        verificar()
                        acabou = true
                    }, 1000)
                }
                tmpCaindo--
            }
        }, 1000)
    }
}

function botao() {
    const perg = window.document.getElementById('pergunta')
    if(acabou === false) {
        btn.setAttribute('disabled', '')
        enviar.removeAttribute('disabled')
        resp.removeAttribute('disabled')
    } else {
        btn.removeAttribute('disabled')
        enviar.setAttribute('disabled', '')
        resp.setAttribute('disabled', '')
        perg.innerText = ''
        resp.value = ''
    }
    setTimeout(() => {
        botao()
    }, 1)
}

function escolher() {
    const perg = window.document.getElementById('pergunta')
    var num1 = Math.floor(Math.random() * 100) + 1
    var num2 = Math.floor(Math.random() * 100) + 1
    var ope = Math.floor(Math.random() * 5) + 1
    num1 = 10
    num2 = 3
    ope = 4

    switch(ope) {
        case 1: 
            ope = '+'
            break;

        case 2:
            ope = '-'
            break;

        case 3:
            ope = '×'
            break;

        case 4:
            ope = '÷'
            break;

        default:
            ope = 'elevacao'
            break;
    }

    if(ope === 'elevacao') {
        num2 = Math.floor(Math.random() * 3) + 1
        perg.innerHTML = `${num1}<sup>${num2}</sup>`
    } else {
        perg.innerText = `${num1} ${ope} ${num2}`
    }

    operador = ope
    valor1 = num1
    valor2 = num2
}

function verificar() {
    acabou = true
    const dDp = []
    let lDp = false
    let resposta = 0
    switch(operador) {
        case '+':
            resposta = valor1 + valor2
            break;

        case '-':
            resposta = valor1 - valor2
            break;

        case '×':
            resposta = valor1 * valor2
            break;

        case '÷':
            resposta = valor1 / valor2
            break;

        case 'elevacao':
            resposta = valor1 ** valor2
            break;
    }
    resposta = String(resposta)
    for(let c = 0; c < resposta.length; c++) {
        if(resposta[c] == '.') {
            lDp = c
        }
    }
    if(lDp != false) {
        for(let c = (resposta.length - 1); c > lDp; c--) {
            dDp.push(resposta[c])
        }
        if(dDp.length > 2) {
            resposta = Number(resposta)
            resposta = resposta.toFixed(2)
        }
    }
    resposta = Number(resposta)
    if(resposta == resp.value) {
        aeP.innerText = 'Você acertou!'
        aeP.style.color = 'green'
    } else {
        aeP.innerText = 'Você errou!'
        aeP.style.color = 'red'
    }
    rcP.innerText = `A resposta era: ${resposta}`
}

botao()