
const sum = (a, b) => {
    return a + b;
}

// INFO
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// DOLAR A YEN
const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 146.36;
    return valueInYen;
}

// EURO A DOLAR
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.0051;  
    return valueInPound;
}


module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };