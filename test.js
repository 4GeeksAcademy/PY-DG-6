


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// EURO = DOLAR 
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

// DOLAR = YENES 
test("One dollar should be 146.36 yenes", function() { 
    const yenes = fromDollarToYen(2);
    const expected = 2 * 146.36;
    expect(yenes).toBe(expected); 
});
// YEN = POUND
test("One yen should be 0.0051 pound", function (){
    const yen= fromYenToPound (3);
    const expected = 3 * 0.0051;
    expect(yen).toBe(expected);
})

const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');
