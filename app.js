// app.js

// Función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Conversión de monedas
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// Convertir de dólar a yen
const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 146.36;
    return valueInYen;
}

// Convertir de euro a dólar
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Convertir de yen a libra (vacío por ahora)
const fromYenToPound = () => {
    // Implementación vacía
}

// Exportar las funciones para que puedan ser utilizadas en test.js
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };