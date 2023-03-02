//botao e resposta
const botaoPercentual = document.querySelector('#mostrarPercentual')
const resposta4 = document.querySelector('#escreva-4')
//array
const faturamento = [
    {
        "cidade": "SP",
        "valor": 67836.43
    },
    {
        "cidade": "RJ",
        "valor": 36678.66
    },
    {
        "cidade": "MG",
        "valor": 29229.88
    },
    {
        "cidade": "ES",
        "valor": 27165.48
    },
    {
        "cidade": "Outros",
        "valor": 19849.53
    }
]
const valores = []
//array percentagem
const percentagem = []

for (i=0; i<faturamento.length; i++){
    if(valores.indexOf(faturamento[i].valor)){
        valores.push(faturamento[i].valor)
    }
}
const faturamentoTotal = valores.reduce((a,b)=> a + b, 0)

botaoPercentual.addEventListener("click", ()=>{
    mostrarPercentual(faturamento,faturamentoTotal)
})

function mostrarPercentual (array,media){
    for(i=0;i<faturamento.length;i++){
        array[i].valor = (array[i].valor*100)/media
    }
    for(i=0;i<array.length;i++){
        if(percentagem.indexOf(array[i].valor)){
            percentagem.push(array[i].valor)
        }
    }
    //Achei melhor especificar cada elemento pois ficaria confuso somente os números.
    resposta4.innerHTML = "A porcentagem que cada cidade representa no faturamento total, respectivamente, é: "+ percentagem[0]+"%, "+ percentagem[1]+"%, "+ percentagem[2]+"%, "+ percentagem[3]+"% e "+ percentagem[4]+"%"
}