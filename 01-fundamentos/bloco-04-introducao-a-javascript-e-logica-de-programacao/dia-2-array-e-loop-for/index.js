let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

/*Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma);

/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/
let media = soma / numbers.length;
console.log(media);

/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

/*🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/
console.log('Maior:');
let maior = numbers[5];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(maior);
//outra forma:
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(max);

/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
let qntDeImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        qntDeImpares += 1;
    } 
}
if (qntDeImpares === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(qntDeImpares);
}


/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/
let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    } 
}
console.log(menor);

/*Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/
let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}
console.log(array);

/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.*/
let divisao = [];
for (let i = 0; i < array.length; i += 1) {
    divisao.push(array[i] / 2);
}
console.log(divisao);