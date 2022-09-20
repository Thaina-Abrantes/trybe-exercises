const { encode, decode } = require('./encode-decode');

describe('Testa as funções encode() e decode()', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });

    it('encode deve ser uma funçao', () => {
        expect(typeof encode).toEqual('function');
    });

    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
    });

    it('decode deve ser uma funçao', () => {
        expect(typeof decode).toEqual('function');
    });

    it('O retorno de encode("aeiou") deve ser "12345"', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    it('O retorno de decode("12345") deve ser "aeiou"', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    it('O retorno de encode("maria") deve ser "m1r31"', () => {
        expect(encode('maria')).toBe('m1r31');
    });

    it('O retorno de decode("m1r31") deve ser "maria"', () => {
        expect(decode('m1r31')).toBe('maria');
    });

    it('O retorno da encode() deve ter o mesmo número de caracteres', () => {
        expect(encode('teste').length).toEqual(5);;
    });

    it('O retorno da decode() deve ter o mesmo número de caracteres', () => {
        expect(decode('teste').length).toEqual(5);;
    });
})