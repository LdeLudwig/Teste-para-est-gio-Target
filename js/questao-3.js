//objeto e JSON
const faturamentoDiario =[
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]
const valoresFaturamento = JSON.stringify(faturamentoDiario, ['valor'])
const diasFaturamento = JSON.stringify(faturamentoDiario, ['dia'])

//botoes e resposta
const botaoMenorValor = document.querySelector('#menorFaturamento')
const botaoMaiorValor = document.querySelector('#maiorFaturamento')
const BotaoDiaFaturamentoMaior = document.querySelector('#diaFaturamentoMaior')
const resposta3 = document.querySelector('#escreva-3')


//Encontrar menor faturamento.
botaoMenorValor.addEventListener("click", (elemento)=>{
    isolaFaturamento(elemento.target.id,valoresFaturamento)
}) 

//Encontrar maior faturamento.
botaoMaiorValor.addEventListener("click", (elemento)=>{
    isolaFaturamento(elemento.target.id,valoresFaturamento)
})

//Encontrar dias que o faturamento foi maior que a média mensal
BotaoDiaFaturamentoMaior.addEventListener("click", (elemento)=>{
    isolaFaturamento(elemento.target.id,valoresFaturamento)
})

function isolaFaturamento (idBotao,evento){
    let valores = []
    let zeros = 0

    for (i=0; i<faturamentoDiario.length; i++){
        if(valores.indexOf(faturamentoDiario[i].valor)){
            valores.push(faturamentoDiario[i].valor)
        }
    }
    let indiceZeros = valores.indexOf(zeros)

    //apagando os elementos com valor 0.
    while(indiceZeros >=0){
        valores.splice(indiceZeros,1)
        indiceZeros = valores.indexOf(zeros)
    }

    //Definindo operação de acordo com o botão
    if(idBotao === "menorFaturamento"){
        const menorValor = Math.min(...valores)
        resposta3.innerHTML = "O menor faturamento foi R$" + menorValor
    }else if(idBotao === "maiorFaturamento"){
        const maiorValor = Math.max(...valores)
        resposta3.innerHTML = "O maior faturamento foi R$" + maiorValor
    }else{
        const mediaFaturamento = valores.reduce((a,b)=> a + b, 0)/valores.length
        diasSuperiorMedia(faturamentoDiario,indiceZeros,mediaFaturamento)
        }
}

function diasSuperiorMedia (arrFaturamento,indice,valorMedia){
    let dias = []
    let valores = []
    let diasMaior = []
    
    for (i=0; i<faturamentoDiario.length; i++){
        if(dias.indexOf(faturamentoDiario[i].dia)){
            dias.push(faturamentoDiario[i].dia)
        }
    }
    for (i=0; i<faturamentoDiario.length; i++){
        if(valores.indexOf(faturamentoDiario[i].valor)){
            valores.push(faturamentoDiario[i].valor)
        }
    }
    //Comparando os faturamentos de cada dia com a média e os armazenando no array
    for(i=0;i<valores.length;i++){
        if(valores[i] > valorMedia){
            diasMaior.push(i+1)
        }
    }
    resposta3.innerHTML = "Os dias com o faturamento maior do que a média, sendo ela R$" + valorMedia + ", são os dias: " + diasMaior
}