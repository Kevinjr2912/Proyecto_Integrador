require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const customersRoutes = require ('./routes/clientes');
const productsRoutes = require ('./routes/productos');
const comprobantesPagoRoutes = require ('./routes/comprobantes');
const resenasRoutes = require ('./routes/resenas');
const adminRoutes = require ('./routes/administrador');
const dipomexRoutes = require('./routes/dipomex');
<<<<<<< HEAD
const shippingDataRoutes = require('./routes/datosEnvio')
const carRoutes = require ('./routes/carrito')
=======
const shippingDataRoutes = require('./routes/datosEnvio');
const comprobantesPagoRoutes = require('./routes/comprobantes');
const carRoutes = require('./routes/carrito');
const resenasRoutes = require ('./routes/resenas');
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88

const app = express();
const port = process.env.DB_PORT || 3000;

<<<<<<< HEAD
// Configuración de CORS para permitir solicitudes desde cualquier origen
=======
// Configurar CORS para permitir solicitudes desde cualquier origen
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de los items
app.use('/customers', customersRoutes);
app.use('/products', productsRoutes);
app.use('/admins',adminRoutes);
app.use('/api',dipomexRoutes);
//app.use('/shippingData',shippingDataRoutes);
app.use('/comprobantes', comprobantesPagoRoutes);
app.use('/cars',carRoutes);
<<<<<<< HEAD
app.use('/resenas', resenasRoutes)
=======
app.use('/resenas', resenasRoutes);

// Servir archivos estáticos desde el directorio 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88

app.listen(port, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
