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

  // Inserción de datos
  db.query('INSERT INTO ReseñaProducto (comentario, puntuacion, idProductos, id_cliente) VALUES (?, ?, ?, ?)', [comentario, puntuacion, idProducto, idCliente], (err, result) => {
    if (err) {
      return res.json({ error: "Error al insertar la reseña", details: err });
    }

    return res.json({message: "Reseña agregada exitosamente"})
  });
};

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

// Eliminar una reseña
exports.deleteResena = (req, res) => {
  console.log("Esta entrando al controlador")
  console.log(req.params)
  const resenaId = req.params.resenaId;
  console.log("Este el id de la reseña a eliminar " + resenaId);

  db.query('DELETE FROM ReseñaProducto WHERE idReseñaProducto = ?', [resenaId],(err,res)=>{
    if(err){
      return res.json({error: "Error al eliminar dicha reseña"})
    }

    res.json({ message: "Reseña eliminada exitosamente" });
  }
  )
};

//muestra las reseñas referentes a un id de producto
exports.getResenas = async (req, res) => {
  const { id } = req.params; 
  try {
    db.query('SELECT RP.comentario, RP.puntuacion, RP.idReseñaProducto, RP.id_cliente FROM ReseñaProducto RP WHERE RP.idProductos = ?', [id], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Error en la consulta SQL" });
      }
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
};