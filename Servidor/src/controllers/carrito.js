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
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

exports.addCar = (req, res) => {
    const {idCliente,idProducto,cantidad} = req.body;
    console.log(req.body);

    db.query('INSERT INTO Carrito (idCliente) VALUES (?)',[idCliente],(err,result) => {
        if(err){
            return res.json({error: "Error al insertar el idCliente en el carrrito"});
        }

        const idCarrito = result.insertId;

        console.log("Este es el id del carrito insertado "  + idCarrito);

        db.query('INSERT INTO CarritoProducto (cantidad,idCarrito,idProductos) VALUES (?,?,?)',[cantidad,idCarrito,idProducto],(err,result) => {
            if(err){
                return res.json({error: "Error al insertar ciertos datos en la tabla "});
            }

            return res.json({message: "Producto agregado exitosamente"})
        })
    });
};

exports.getProductCar = (req,res) => {
    const {idCliente} = req.body;

    db.query('SELECT Carrito.idCarrito FROM Carrito WHERE Carrito.idCliente = ?',[idCliente],(err,result)=>{
        if(err){
            return res.json({error: "Error al obtener los productos contenidos en el carrito de cierto cliente"})
        }
    })
};
