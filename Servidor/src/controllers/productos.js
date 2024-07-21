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

//Configurar multer
<<<<<<< HEAD
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage: storage }).array("dato_imagen", 5);
=======
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).array('imagen',5);
>>>>>>> 6dcd462de3267c3bc639a50732e1ad085e9af9fa

// Ruta para agregar producto y subir imágenes
exports.addProduct = (req, res) => {
  upload(req, res, (err) => {
    const files = req.files;

    if (!files) {
      return res.status(404).json({ message: "Imagenes no recibidas" });
    }

    const { nombre, precio, nombreCategoria, descripcion, equipo } = req.body;
    
    
    let idCategoria = 0;

    if (nombreCategoria == "Overol") {
      idCategoria = 2;
    } else {
      idCategoria = 1;
    }

    db.query("INSERT INTO Productos (nombre, precio, descripcion, equipo, id_categoria) VALUES (?, ?, ?, ?, ?)",[nombre, precio, descripcion, equipo, idCategoria],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Error al agregar el producto" });
        }

        const idProducto = result.insertId;
        const imageValues = files.map((file) => [idProducto,file.buffer]);

        db.query("INSERT INTO ImagenProducto (idProducto,imagen) VALUES ?",[imageValues],(err, result) => {
            if (err) {
              console.log("Sucedio un error");

              return res.status(500).json({message: "Error al agregar las imágenes del producto"});
              
            }
            return res.status(201).json({ message: "Producto e imágenes agregadas exitosamente" });
          }
        );
      }
    );
  });
};


exports.getAllProducts = (req, res) => {
  db.query('SELECT Productos.idProductos, Productos.nombre, Productos.precio, Productos.descripcion, Productos.equipo, Categoria.nombreCategoria FROM Productos INNER JOIN Categoria ON Productos.id_categoria = Categoria.idCategoria', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener los elementos'});
    }
    console.log(result);
    return res.json(result);
  });
}

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const productFront = req.body;
  const { nombre, precio, descripcion, equipo } = req.body;

  db.query('SELECT * FROM Productos WHERE idProductos = ?', [productId], (err, result) => {
    if (err) {
      console.error("Error al obtener el producto:", err);
      return res.status(500).json({ message: "Error al obtener el producto con el ID especificado" });
    }

    if (result.length === 0) {
      return res.status(404).json({message: "No se encontró ningún producto con el ID especificado"});
    }

    const product = result[0];
    const updateProduct = {};

    if (nombre != product.nombre) {
      updateProduct.nombre = nombre;
    }
    if (precio != product.precio) {
      updateProduct.precio = precio;
    }
    if (descripcion != product.descripcion) {
      updateProduct.descripcion = descripcion;
    }
    if (equipo != product.equipo) {
      updateProduct.equipo = equipo;
    }

    db.query(
      "UPDATE Productos SET ? WHERE idProductos = ?",
      [updateProduct, productId],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar el producto:", err);
          return res.status(500).json({ message: "Error al modificar algún dato del producto" });
        }
        return res.status(200).json(productFront);
      }
    );
  });
};


exports.deleteProduct = (req, res) => {
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
  };
