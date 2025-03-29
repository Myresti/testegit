alert("Boas vindas ao jogo do número secreto");

Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt("Escolha um número entre 1 e 1010");
////console.log("Valor do chute:", chute);

let numeroSecreto = 4;

Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log("Resultado da comparação:", chute == numeroSecreto);

if (chute == numeroSecreto) {
alert("Acertou");
} else {
Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
console.log("Valor do número secreto:", numeroSecreto);
alert("O número secreto era " + numeroSecreto);
}


let diaDaSemana = prompt("Qual o dia da semana?");

if (diaDaSemana === 'sabado' || diaDaSemana ===  'domingo'){
  alert('Bom Final de Semana!');
}

else {
  alert('Ainda é Semana!');
}

let numero = prompt ('Digite um numero para verificar se é positivo ou negativo');
if(numero %2 == 0){
  alert('numero par');
} else{
  alert('numero impar');
}

let pontuacao = prompt ('Digite a pontuação');
if(pontuacao >= 100){
  alert('Parabéns, você venceu!');
} else{
  alert('Tente novamente para ganhar.');
}

let conta = prompt ('Qual o saldo da conta?');
alert(`o valor da conta é ${conta}`)

let nome = prompt ('Qual seu nome?');
//alert(`Seu nome é ${nome}`);

let contador = 1;
while (contador <= 10) {
  alert(contador);
  contador++;
}

let contador = prompt("Qual o numero?");
while (contador >= 0) {
  console.log(contador);
  contador--;
}
let contador  = 0 
let numero = prompt('Qual o numero?');
while (contador <= numero) {
  alert(contador);
  contador ++;
}


let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
let contador = parseInt(prompt("Qual o numero?"));
while (contador >= 0) {
  console.log(contador);
  contador--;
}


console.log('Boas vindas!');

let nome = "Tamires" ;
alert(` ola, ${nome}`)

console.log(` ola, ${nome}`);


let linguagem = prompt('qual a linguagem de programação que voce mais gosta?');
console.log(` ${linguagem}`);

let valor1 = 10;
let valor2 = 30;
let soma = valor1+valor2;
console.log( `A soma de ${valor1} + ${valor2} é ${soma}`);

let valor3 = 10;
let valor4 = 30;
let subtracao = valor3 - valor4;
console.log( `A a subracao de ${valor3} - ${valor4} é ${subtracao}`);

let idade = prompt('Qual sua idade?');
if(idade>=18){
  console.log ('Você é maior de idade!');

}else{
  console.log('Você é menor de idade!');
}

let numero = prompt('Digite um numero!');
 if ( numero%2 == 0){
  alert(" Positivo");
   } else{
    alert(" negativo");
   }

let contador  = 0;
while(contador<10){
  contador++;
  alert(contador);
}

let nota  = 8;
if (nota >=7){
  alert('Aprovado!');
} else{
  alert('Reprovado!');
}

let numeroAleatorio = Math.random(); 
console.log(numeroAleatorio);

let numeroAleatorio2  = Math.floor(Math.random()*10)+1; 
console.log(numeroAleatorio2);

let numeroAleatorio3  = Math.floor(Math.random()*1000)+1; 
console.log(numeroAleatorio3);

















