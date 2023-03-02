
const botao = document.querySelector('#botao')
const numero = document.querySelector('#numero')
const resposta2 = document.querySelector('#escreva-2')

botao.addEventListener("click", ()=>{
    verificaFibonacci(numero.value)
})


function verificaFibonacci(elemento){
    let penultimoNumero = 1
    let ultimoNumero = 0
    let numero

    while (elemento> penultimoNumero+ultimoNumero){
        numero = ultimoNumero + penultimoNumero
        ultimoNumero = penultimoNumero
        penultimoNumero = numero
    }


    if(elemento > penultimoNumero + ultimoNumero || elemento< penultimoNumero + ultimoNumero && elemento != 0){
        resposta2.innerHTML = "O número escrito não pertence na sequência de Fibonacci"
    } else {
        resposta2.innerHTML = "O resultado escrito pertence na sequência de Fibonacci"
    }
    console.log()
}
