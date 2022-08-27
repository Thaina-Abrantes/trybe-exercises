//Acesse o elemento elementoOndeVoceEsta.
let element = document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let father = element.parentElement;
father.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Olá! Lorem Ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.';

//Acesse o primeiroFilho a partir de pai.
let firstChild = father.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
element.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
element.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
element.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.
console.log(father.children[2]);
