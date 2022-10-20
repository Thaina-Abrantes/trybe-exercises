const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('Bulbasau', (error, _message) => {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar';
    getPokemonDetails('Bulbasaur', (_error, message) => {
      try {
        expect(message).toBe(expectedMessage);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
