// Calculo de imc (indice de massa corporal)
const nome = "Lucas Vladson" // Nome da pessoa
const sobreno = "Correia de Lima" // Sobrenome da pessoa
const idade = 18 // idade
const peso = 92 // Peso
const altura = 1.75 // Altura
let imc // Para calcular o imc precisamos dividir o peso pela a altura multiplicado por ela mesma.
imc = peso / (altura * altura)
let nasci // Para sabemos a data de nascimento da pessoa precisamos subtrair o ano pela idade dela
nasci = 2024 - idade
// os + são para fazer a união dos valores, tanto as variáveis tanto as string
console.log(nome, sobreno,"nasceu em",nasci + ", tem " + idade + ", pesa " + peso + ", tem " + altura + " de altura", "e seu imc é", imc)
// Segunda forma que podemos fazer 
console.log(`${nome} ${sobreno}, tem ${idade}, possui ${altura}, pesa ${peso}, e seu indice de massa corporal é ${imc}.`)