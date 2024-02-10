let num =  document.getElementById('txtn')
let lista = document.getElementById('valtab')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert('Tudo ok!')
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}





/*
function adicionar(){
    let num = [document.getElementById('txtn')]
    let tab = document.getElementById('valtab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        num.push(n)
        tab.innerHTML = ''
        let item = document.createElement('option')
        item.text = `O valor ${n} adicionado.`
        item.value = `tab${n}`
    }
}

*/