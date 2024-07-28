require("dotenv").config();

//Cargar las variables de entorno
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("Conexión a la base de datos MySQL establecida");
});

// Middleware de autenticación
//const authenticateJWT = (req, res, next) => {
  //const authHeader = req.headers.authorization;
  //if (authHeader) {
    //const token = authHeader.split(" ")[1];
    //jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      //if (err) {
        //return res.sendStatus(403); // Prohibido (token inválido)
      //}
      //req.user = user;
      //next();
    //});
  //} else {
   // res.sendStatus(401); // No autorizado (sin token)
  //}
//};




const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('El archivo debe ser formato PDF o una imagen (PNG, JPG, JPEG)'));
    }
  }
}).single('comprobante');

exports.addComprobante = (req, res) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(500).json({ message: 'Error al subir el comprobante' });
      } else if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Ocurrió un error' });
      }

      const { idPedido, idEstatus } = req.body;
      const archivo = req.file.buffer;

      if (!req.file) {
        return res.status(404).json({ message: 'Archivo no recibido' });
      }

      db.query(
        'INSERT INTO ComprobantePago (id_Pedido, Comprobante_pago, id_estatus) VALUES (?, ?, ?)',
        [idPedido, archivo, idEstatus],
        (err, result) => {
          if (err) {
            console.error('Error al insertar el comprobante de pago:', err);
            return res.status(500).json({ message: 'Error al insertar el comprobante de pago' });
          }

          console.log("Éxito");

          return res.status(201).json({ message: 'Comprobante de pago insertado exitosamente', idVenta: result.insertId });
        }
      );
    });
};
