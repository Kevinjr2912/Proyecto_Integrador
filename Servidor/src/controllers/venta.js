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
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Prohibido (token inválido)
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // No autorizado (sin token)
  }
};

exports.getdetailSale = (req,res) => {
    db.query('SELECT CC.password,P.fecha,P.total FROM CredencialAccesoCliente CC INNER JOIN Cliente C ON CC.id_cliente = C.id_cliente INNER JOIN Pedido P ON C.id_cliente = P.idCliente',(err,result)=>{
        if(errr){
            return res.status(500).json({error: "Ocurrió un error al obtener los elementos"});
        }

        res.json(result)
    })
}