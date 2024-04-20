const express = require('express');
const app = express();

const PORT = 3000;

const usuario = {
  nombre: 'Solvetic Developer',
  email: 'solvetic@xxxx.com',
  edad: 36,
  fechaRegistro: new Date(),
  direccion: {
    ciudad: 'Madrid',
    pais: 'Spain'
  }
};

console.log('Nombre Usuario:' + usuario.nombre);
console.log('Email Usuario:' + usuario.email);
console.log('Edad del Usuario:' + usuario.edad);
console.log('Fecha de Registro:' + usuario.fechaRegistro);
console.log('Pais Usuario:' + usuario.pais);

app.get('/', (req, res) => {
  res.send('¡Hola, Semillaristas!');
});

app.get('/nosotros', (req, res)=>{
   
    res.send('PAG INFO');

});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});