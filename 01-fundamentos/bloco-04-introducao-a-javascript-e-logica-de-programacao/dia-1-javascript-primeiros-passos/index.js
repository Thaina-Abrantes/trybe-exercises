const num1 = 13;
const num2 = 72;
const num3 = 315;

//1
console.log("Exercício 1:");
const a = 12;
const b = 6;

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let div = a / b;
let modulo = a % b;

//2
console.log("Exercício 2:");
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//3
console.log("Exercício 3:");
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

//4
console.log("Exercício 4:");
const valor = -2;

if (valor > 0) {
    console.log("positive");
} else if (valor < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//5
console.log("Exercício 5:");
let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let somaDoTriangulo = ang1 + ang2 + ang3;

if (somaDoTriangulo <= 0) {
    console.log("Inválido");   
} else if(somaDoTriangulo === 180) {
    console.log(true);
} else {
    console.log(false);
}

//6
console.log("Exercício 6:");
const peca = "peão";

if(peca.toLowerCase() === "dama") {
    console.log("A dama pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
} else if (peca.toLowerCase() === "rei") {
    console.log("O rei move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
} else if (peca.toLowerCase() === "torre") {
    console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
} else if (peca.toLowerCase() === "cavalo") {
    console.log("O cavalo se move sempre em L (letra ele), ou seja, duas casas num sentido (vertical ou horizontal) e uma casa no outro sentido (horizontal ou vertical).");
} else if (peca.toLowerCase() === "bispo") {
    console.log("O bispo pode mover-se por qualquer número de casas, mas somente nas diagonais e até que outra peça esteja no caminho.");
} else if (peca.toLowerCase() === "peão") {
    console.log("Os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.");
} else {
    console.log("Peça inválida!");
}

//7
console.log("Exercício 7:");
const notaEmPorcentagem = 87;

if(notaEmPorcentagem >= 90 && notaEmPorcentagem <= 100) {
    console.log('Conceito A');
} else if (notaEmPorcentagem >= 80 && notaEmPorcentagem < 90) {
    console.log('Conceito B');
} else if (notaEmPorcentagem >= 70 && notaEmPorcentagem < 80) {
    console.log('Conceito C');
} else if (notaEmPorcentagem >= 60 && notaEmPorcentagem < 70) {
    console.log('Conceito D');
} else if (notaEmPorcentagem >= 50 && notaEmPorcentagem < 60) {
    console.log('Conceito E');
} else if (notaEmPorcentagem < 50 && notaEmPorcentagem >= 0) {
    console.log('Conceito F');
} else {
    console.log('Nota inválida!');
}

//8
console.log("Exercício 8:");
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//9
console.log("Exercício 9:");
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//10
console.log("Exercício 10:");
const valorCusto = 200;
const impostoSobreOCusto = valorCusto * (20 / 100);
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = 300;
const qntVendida = 1000;
const lucro = (valorVenda - valorCustoTotal) * qntVendida;

if (lucro > 0) {
    console.log(lucro);
} else {
    console.log('Prejuízo');
}

//11
console.log("Exercício 10:");
const salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    const aliquotaInss8 = salarioBruto * (8 / 100);
    salarioBase = salarioBruto - aliquotaInss8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    const aliquotaInss9 = salarioBruto * (9 / 100);
    salarioBase = salarioBruto - aliquotaInss9;
} else if (salarioBruto >= 2594.93 <= 5189.82) {
    const aliquotaInss11 = salarioBruto * (11 / 100);
    salarioBase = salarioBruto - aliquotaInss11;
} else {
    const aliquotaInssMax = 570.88;
    salarioBase = salarioBruto - aliquotaInssMax;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 <= 2826.65) {
    const aliquotaIr7EMeio = (salarioBase * (7.5 / 100)) - 142.80;
    salarioLiquido = salarioBase - aliquotaIr7EMeio;
} else if (salarioBase >= 2826.66 <= 3751.05) {
    const aliquotaIr15 = (salarioBase * (15 / 100)) - 354.80;
    salarioLiquido = salarioBase - aliquotaIr15;
} else if (salarioBase >= 3751.06 <= 4664.68) {
    const aliquotaIr22EMeio = (salarioBase * (22.5 / 100)) - 636.13;
    salarioLiquido = salarioBase - aliquotaIr22EMeio;
} else {
    const aliquotaIr27EMeio = (salarioBase * (27.5 / 100)) - 869.36;
    salarioLiquido = salarioBase - aliquotaIr27EMeio;
}
console.log(salarioLiquido);