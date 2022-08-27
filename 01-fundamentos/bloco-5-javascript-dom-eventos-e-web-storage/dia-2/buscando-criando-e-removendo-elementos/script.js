//Acesse o elemento elementoOndeVoceEsta.
let element = document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let father = element.parentElement;
father.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Olá! Lorem Ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.';

//Acesse o primeiroFilho a partir de pai.
let firstChild = father.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
element.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
element.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
element.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.
father.children[2];

//Crie um irmão para elementoOndeVoceEsta.
let outroFilho = document.createElement('section');
father.appendChild(outroFilho);

//Crie um filho para elementoOndeVoceEsta.
let terceiroFilhoDoFilho = document.createElement('section');
element.appendChild(terceiroFilhoDoFilho);

//Crie um filho para primeiroFilhoDoFilho.
let primeiroBisnetoDoPai = document.createElement('section');
primeiroFilhoDoFilho.appendChild(primeiroBisnetoDoPai);

//A partir desse filho criado, acesse terceiroFilho.
primeiroBisnetoDoPai.parentNode.parentNode.nextElementSibling;