 const calculadora = require('./calculadora');

test('Somar um mais dois igual a três', () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});

test('Subtrair dois menos um igual a um', () => {
  expect(calculadora.subtrair(2, 1)).toBe(1);
});

test('Multiplicar dois por dois igual a quatro', () => {
  expect(calculadora.multiplicar(2, 2)).toBe(4);
});

test('Dividir quatro por dois igual a dois', () => {
  expect(calculadora.dividir(4, 2)).toBe(2);
});