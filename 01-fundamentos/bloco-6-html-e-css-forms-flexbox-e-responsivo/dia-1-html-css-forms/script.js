//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

const submit = document.getElementById('enviar');

submit.addEventListener('click', (event) => {
    event.preventDefault();
})

//Crie um botão que limpe as informações contidas nos campos;

const btnClear = document.createElement('button');
const lbl = document.createTextNode("Apagar");
btnClear.appendChild(lbl);
btnClear.type = 'reset';
const buttonPai = document.getElementById('buttons-container');
buttonPai.appendChild(btnClear);
