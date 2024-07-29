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
exports.addResena = (req, res) => {
  const { idCliente, idProducto } = req.params;
  const { comentario, puntuacion } = req.body;

<<<<<<< HEAD
  // Inserción de datos
  db.query('INSERT INTO ReseñaProducto (comentario, puntuacion, idProductos, id_cliente) VALUES (?, ?, ?, ?)', [comentario, puntuacion, idProducto, idCliente], (err, result) => {
=======
  console.log(req.params);
  console.log(req.body);

  // Inserción de datos
  db.query('INSERT INTO ResenaProducto (comentario, puntuacion, idProductos, idCliente) VALUES (?, ?, ?, ?)', [comentario, puntuacion, idProducto, idCliente], (err, result) => {
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
    if (err) {
      return res.json({ error: "Error al insertar la reseña", details: err });
    }

    return res.json({message: "Reseña agregada exitosamente"})
  });
};

<<<<<<< HEAD
//edit reseña antigua /////////////////////////////////////////////////
  // if (!comentario || puntuacion === undefined) {
  //   return res.status(400).json({ error: "Faltan datos necesarios" });
  // }
  //
  // try {
  //   const result = await db.query(
  //     'INSERT INTO ReseñaProducto (comentario, puntuacion, idProductos) VALUES (?, ?, ?)',
  //     [comentario, puntuacion, idProductos]
  //   );
  //
  //   res.status(201).json({ message: "Reseña agregada exitosamente", idReseñaProducto: result.insertId });
  // } catch (error) {
  //   console.error('Error al agregar reseña:', error);
  //   res.status(500).json({ error: "Error al agregar reseña" });
  // }
//////////////////////////////////////////////////////////////////////

exports.updateResena = (req,res)=>{
  const idResenaProducto = req.params.idResenaProducto;
  const {comentario, puntuacion} = req.body;
  console.log(idResenaProducto)
  console.log(req.body)

  db.query("SELECT comentario,puntuacion FROM ReseñaProducto WHERE idReseñaProducto = ?",[idResenaProducto],(err,result)=>{
    if(err){
      console.log(err)
      return res.json({error: "Error al obtener dichos datos de la reseña"})
    }

    const comentarioDB = result[0].comentario;
    const puntuacionDB = result[0].puntuacion;
    let resenaEdit = {};

    if(comentario !=  comentarioDB){
      resenaEdit.comentario = comentario;
    }
  
    if(puntuacion != puntuacionDB){
      resenaEdit.puntuacion = puntuacion;
    }
    
    console.log(resenaEdit)

    db.query('UPDATE ReseñaProducto SET ? WHERE idReseñaProducto = ?',[resenaEdit,idResenaProducto],(err,result)=>{
      if(err){
        console.log(err + " error de update")
        return res.json({error: "Error al actualizar la reseña"})
      }
      console.log("reseña actualizada")
      return res.json({message: "Reseña actualizada"})
    })

  })
}
=======
exports.updateResena = (req, res) => {
  const idResenaProducto = req.params.idResenaProducto;
  const { comentario, puntuacion } = req.body;

  db.query("SELECT comentario, puntuacion FROM ResenaProducto WHERE idResenaProducto = ?", [idResenaProducto], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error al obtener los datos de la reseña" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Reseña no encontrada" });
    }

    const existingReseña = result[0];
    let resenaEdit = {};

    if (comentario !== existingReseña.comentario) {
      resenaEdit.comentario = comentario;
    }

    if (puntuacion !== existingReseña.puntuacion) {
      resenaEdit.puntuacion = puntuacion;
    }

    if (Object.keys(resenaEdit).length === 0) {
      return res.json({ message: "No se realizaron cambios en la reseña" });
    }

    db.query('UPDATE ResenaProducto SET ? WHERE idResenaProducto = ?', [resenaEdit, idResenaProducto], (err, result) => {
      if (err) {
        console.log(err + " error de update");
        return res.status(500).json({ error: "Error al actualizar la reseña" });
      }
      console.log("reseña actualizada " + resenaEdit.comentario);
      return res.json({ message: "Reseña actualizada exitosamente" });
    });
  });
};


>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88

// Eliminar una reseña
exports.deleteResena = (req, res) => {
  console.log("Esta entrando al controlador")
  console.log(req.params)
<<<<<<< HEAD
  const resenaId = req.params.resenaId;
  console.log("Este el id de la reseña a eliminar " + resenaId);

  db.query('DELETE FROM ReseñaProducto WHERE idReseñaProducto = ?', [resenaId],(err,res)=>{
    if(err){
      return res.json({error: "Error al eliminar dicha reseña"})
    }

    res.json({ message: "Reseña eliminada exitosamente" });
=======
  const {resenaId} = req.params;
  console.log("Este el id de la reseña a eliminar " + resenaId);

  db.query('DELETE FROM ResenaProducto WHERE idResenaProducto = ?', [resenaId],(err,result)=>{
    if(err){
      console.log(eror)
      return res.json({error: "Error al eliminar dicha reseña"})
    }

    return res.json({ message: "Reseña eliminada exitosamente" });
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
  }
  )
};

//muestra las reseñas referentes a un id de producto
exports.getResenas = async (req, res) => {
<<<<<<< HEAD
  const { id } = req.params; 
  try {
    db.query('SELECT RP.comentario, RP.puntuacion, RP.idReseñaProducto, RP.id_cliente FROM ReseñaProducto RP WHERE RP.idProductos = ?', [id], (error, result) => {
      if (error) {
=======
  const { idProducto } = req.params; 
  try {
    db.query('SELECT RP.comentario, RP.puntuacion, RP.idResenaProducto, RP.idCliente FROM ResenaProducto RP WHERE RP.idProductos = ?', [idProducto], (err, result) => {
      if (err) {
        console.log(err)
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
        return res.status(500).json({ error: "Error en la consulta SQL" });
      }
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
};