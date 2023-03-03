const resultado = window.document.getElementById('resultado')
let text
let textAgr

const all = []
const allDepois = []

function btnClicou(oC) {
    if(all.length === 0) {
        console.log('igual a zero')
        all[0] = oC
        text = String(oC)
    } else {
        text = ''
        all.push(oC)
        for(let c = (allDepois.length - 1); c >= 0; c--) {
            allDepois.pop()
        }
        for(let c = 0; c < all.length; c++) {
            allDepois.push(all[c])
        }
        allDepois.reverse()
        for(let c = 0; c < allDepois.length; c++) {
            textAgr = String(allDepois[c])
            text += textAgr
        }
        console.log(allDepois)
    }
    resultado.innerText = text
}
