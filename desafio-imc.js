//recebe os parâmetros 
var nomePessoa = prompt("Informe o nome da pessoa: ")
var altura = prompt("Informe a altura da pessoa: ")
var peso = prompt("Informe o peso da pessoa: ")

//converte as cadeias de caracteres para dados do tipo float
altura = parseFloat(altura)
peso = parseFloat(peso)

//abaixo é feito a conversão da altura de centímetros para metros
altura = altura / 100

//realiza o cálculo de img
var imc = peso / altura * altura

//testes condicionais para identificar a classificação do peso com base no imc
var classificacao = "";

if(imc < 16 ){
    classificacao = "Baixo, peso muito grave!";
} else if(imc >= 16 && imc <= 16.99){
    classificacao = "Baixo, peso grave!";
} else if (imc >= 17 && imc <= 18.49){
    classificacao = "Baixo peso.";
} else if (imc >= 18.50 && imc <= 24.99){
    classificacao = "Peso normal";
} else if(imc >= 25 && imc <= 29.99){
    classificacao = "Sobrepeso";
} else if(imc >= 30 && imc<= 34.99){
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc<= 39.99){
    classificacao = "Obesidade Grau II";
} else if (imc > 40 ){
    classificacao = "Obesidade Grau III"
}

document.write(nomePessoa + " possui índice de massa corporal igual a: " + imc.toFixed(2) + " sendo classificado como: " + classificacao)