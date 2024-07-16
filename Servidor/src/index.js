require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const customersRoutes = require('./routes/clientes');
const productsRoutes = require('./routes/productos');
const comprobantesPagoRoutes = require('./routes/comprobantes');;

const app = express();
const port = process.env.DB_PORT || 3000;   


// Configurar CORS para permitir solicitudes desde cualquier origen
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(cors(corsOptions));

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

// Usar las rutas de los items
app.use('/customers', customersRoutes);
app.use('/products', productsRoutes);
app.use('/comprobantes', comprobantesPagoRoutes);

app.listen(port, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
