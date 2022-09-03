//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function calculateFactorial(number) {
    let predecessor = number - 1;
    let factorial = number;
    for (let index = predecessor; index > 0; index -= 1) {
        factorial = factorial * index;
    }
    return factorial;
}
console.log(calculateFactorial(10));
