const { myFizzBuzz } = require('./my-fizz-buzz');

describe('Testa a função myFizzBuzz', () => {
    it('Testa se o retorno de myFizzBuzz(15) é "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Testa se o retorno de myFizzBuzz(12) é "fizz"', () => {
        expect(myFizzBuzz(12)).toBe('fizz');
    })

    it('Testa se o retorno de myFizzBuzz(20) é "buzz"', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    })

    it('Testa se o retorno de myFizzBuzz(7) é 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })

    it('Testa se o retorno de myFizzBuzz("2") é false', () => {
        expect(myFizzBuzz('2')).toBe(false);
    })
})