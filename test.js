// test.js

// Importamos las funciones desde el archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar } = require('./app.js');

// Prueba para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para convertir euros a dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

// Prueba para convertir dólares a yenes
test("One dollar should be 146.36 yenes", function() { 
    const yenes = fromDollarToYen(2);
    const expected = 2 * 146.36;
    expect(yenes).toBe(expected); 
});
//1 yen ---> 0.0051 pound