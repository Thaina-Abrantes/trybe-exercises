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

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

function reverseString(str) {
    const modifiedString = str.split('').reverse().join('');
    return modifiedString;
}
