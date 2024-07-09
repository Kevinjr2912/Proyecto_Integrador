require("dotenv").config();

//Cargar las variables de entorno
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require('path');
const fs = require('fs');

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

//Configurar multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage }).array("dato_imagen", 5);

// Ruta para agregar producto y subir imágenes
exports.addProduct = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({message: 'Eror al cargar los archivos'});
    }

    const { nombre, precio, nombreCategoria, descripcion, equipo } = req.body;
    const files = req.files;

    db.query('INSERT INTO Productos (nombre, precio, descripcion, equipo) VALUES (?, ?, ?, ?)',[nombre, precio, descripcion, equipo],(err, result) => {
        if (err) {
          return res.status(500).json({message: 'Error al agregar el producto'});
        }

        const idProducto = result.insertId;

        db.query('INSERT INTO Categoria (nombreCategoria, idProductos) VALUES (?, ?)',[nombreCategoria, idProducto],(err, result) => {
            if (err) {
              return res.status(500).json({message: 'Error al agregar la categoría del producto'});
            }

            const imageValues = files.map(file => [idProducto,fs.readFileSync(path.join(__dirname, '../images/' + file.filename))]);

            db.query('INSERT INTO ImagenProducto (idProducto, dato_imagen) VALUES ?',[imageValues],(err, result) => {
                if (err) {
                  return res.status(500).json({message: 'Error al agregar las imágenes del producto'});
                }

                return res.status(201).json({ message: 'Producto e imágenes agregadas exitosamente'});
              }
            );
          }
        );
      }
    );
  });
};

exports.updateProduct = [
  authenticateJWT,
  (req, res) => {
    const productId = req.params.id;
    const updateP = req.body;

    console.log(updateP);

    db.query(
      "UPDATE Productos SET ? WHERE idProductos = ?",
      [updateP, productId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al modificar algún dato del producto");
          throw err;
        }

        res.status(200).send("Cambios realizados exitosamente");
      }
    );
  },
];

exports.deleteImgProduct = [
  authenticateJWT,
  (req, res) => {
    const idProduct = req.params.idProducto;
    const img = req.body;
    const arrayImgDelete = img.idImagenProducto;
    const hasError = false;

    for (let i = 0; i < arrayImgDelete.length; i++) {
      db.query(
        "DELETE FROM ImagenProducto WHERE idImagenProducto = ? AND idProducto = ?",
        [arrayImgDelete[i], idProduct],
        (err, result) => {
          if (err) {
            if (!hasError) {
              hasError = true;
              res.status(500).send("Error al eliminar las imágenes");
            }
            return;
          }

          if (i === arrayImgDelete.length - 1 && !hasError) {
            res.status(200).send("Imágenes eliminadas correctamente");
          }
        }
      );
    }
  },
];

exports.deleteProduct = [
  authenticateJWT,
  (req, res) => {
    const productId = req.params.id;

    console.log(productId);

    db.query(
      "DELETE FROM ImagenProducto WHERE idProducto = ?",
      productId,
      (err, result) => {
        if (err) {
          res
            .status(500)
            .send(
              "Error al eliminar dichas imagenes relacionadas con el producto"
            );
          throw err;
        }
      }
    );

    db.query(
      "DELETE FROM Productos WHERE idProductos = ?",
      productId,
      (err, result) => {
        if (err) {
          res.status(500).send("Error al eliminar dicho producto");
        }

        res
          .status(200)
          .send(
            "Producto eliminado de la base de datos así como sus respectivas imágenes"
          );
      }
    );
  },
];
