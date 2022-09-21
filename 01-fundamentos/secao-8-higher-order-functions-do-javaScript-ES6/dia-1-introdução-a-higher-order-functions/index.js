function createEmployer(nomeCompleto) {
    const arrayName = nomeCompleto.toLowerCase().split(' ');
    const emailAdressName = arrayName.join('_');
    const emailAdress = `${emailAdressName}@trybe.com`;

    return { 
        nomeCompleto: nomeCompleto,
        email: emailAdress
    }
}

const newEmployees = (createEmployer) => {
    const employees = {
        id1: createEmployer('Pedro Guerra'),
        id2: createEmployer('Luiza Drumond'),
        id3: createEmployer('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees(createEmployer));
