const express = require('express');
const bodyParser = require('body-parser');
const customersRoutes = require('./routes/clientes');
const productsRoutes = require('./routes/productos');

const app = express();
const port = 3000;

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());

//usar las rutas de los items
app.use('/customers', customersRoutes);
app.use('/products', productsRoutes);

//iniciar el servidor
app.listen(port, () =>{
    console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});



