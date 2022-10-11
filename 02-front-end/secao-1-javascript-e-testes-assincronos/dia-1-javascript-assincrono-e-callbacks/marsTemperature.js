const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature();
    console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`);
}

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
setTimeout(() => sendMarsTemperature(), messageDelay());