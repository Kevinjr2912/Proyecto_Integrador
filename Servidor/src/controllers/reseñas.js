require("dotenv").config();

//Cargar las variables de entorno
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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


// Agregar una reseña
exports.addReseña = async (req, res) => {
    const { comentario, puntuacion } = req.body;
    const idProductos = 2;  // ID estático del producto
   console.log(comentario, puntuacion);


    if (!comentario || puntuacion === undefined) {
      return res.status(400).json({ error: "Faltan datos necesarios" });
    }
  
    try {
      const result = await db.query(
        'INSERT INTO ReseñaProducto (comentario, puntuacion, idProductos) VALUES (?, ?, ?)',
        [comentario, puntuacion, idProductos]
      );
  
      res.status(201).json({ message: "Reseña agregada exitosamente", idReseñaProducto: result.insertId });
    } catch (error) {
      console.error('Error al agregar reseña:', error);
      res.status(500).json({ error: "Error al agregar reseña" });
    }
  };

  
  // Eliminar una reseña
  exports.deleteReseña = async (req, res) => {
    const { idReseñaProducto } = req.body;
  
    if (!idReseñaProducto) {
      return res.status(400).json({ error: "Falta el ID de la reseña" });
    }
  
    try {
      await db.query('DELETE FROM ReseñaProducto WHERE idReseñaProducto = ?', [idReseñaProducto]);
      res.status(200).json({ message: "Reseña eliminada exitosamente" });
    } catch (error) {
      console.error('Error al eliminar reseña:', error);
      res.status(500).json({ error: "Error al eliminar reseña" });
    }
  };

