const palavra = document.querySelector('#string')
const botaoInverte = document.querySelector('#botaoInverte')
const resposta5 = document.querySelector('#escreva-5')


botaoInverte.addEventListener("click",()=>{
    inverteString(palavra.value)
})

function inverteString(string){
    let stringInvertida = ""
    for(i=string.length-1;i>=0;i--){
        stringInvertida = stringInvertida + string[i] 
        
    }
    resposta5.innerHTML = "A string invertida é: "+ stringInvertida
}