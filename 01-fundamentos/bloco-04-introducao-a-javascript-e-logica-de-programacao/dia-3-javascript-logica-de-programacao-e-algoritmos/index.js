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

//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let skills = ['java', 'javascript', 'python', 'html', 'css'];

let smallest = skills[0];
for (let index = 0; index < skills.length; index += 1) {
    if (skills[index].length < smallest.length) {
        smallest = skills[index];
    }
}
console.log(smallest);

let biggest = skills[0];
for (let index = 0; index < skills.length; index += 1) {
    if (skills[index].length > biggest.length) {
        biggest = skills[index];
    }
}
console.log(biggest);
