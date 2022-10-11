const messageDelay = () => Math.floor(Math.random() * 5000);
const success = () => Math.floor(Math.random() * 10);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)).toFixed(1) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const temperature = getMarsTemperature();
const delay = messageDelay();

const sendMarsTemperature = (callback1, callback2) => {
    const busy = success();
    (busy > 6 ? callback2('Robot is busy') : callback1(temperature));
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit, handleError), delay);
setTimeout(() => sendMarsTemperature(greet, handleError), delay);
