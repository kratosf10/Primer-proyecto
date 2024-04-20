const express = require('express');
const app = express();

const PORT = 3001;

// Ruta predeterminada
app.get('/', (req, res) => {
    res.send('Calculadora');
});

// Ruta para sumar
app.get('/sumar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = num1 + num2;
    res.send(`La suma de ${num1} y ${num2} es ${resultado}`);
});

// Ruta para restar
app.get('/restar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = num1 - num2;
    res.send(`La resta de ${num1} y ${num2} es ${resultado}`);
});

// Ruta para multiplicar
app.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = num1 * num2;
    res.send(`El producto de ${num1} y ${num2} es ${resultado}`);
});

// Ruta para dividir
app.get('/dividir/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (num2 === 0) {
        res.send('Error: No se puede dividir por cero');
    } else {
        const resultado = num1 / num2;
        res.send(`El cociente de ${num1} dividido por ${num2} es ${resultado}`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});