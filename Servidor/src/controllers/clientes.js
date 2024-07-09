require('dotenv').config();

//Cargar las variables de entorno
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

// Conexión a la base de datos
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


//Loguearse
exports.login = async (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM Cliente WHERE email = ?",[email],async (err, result) => {
      if (err) {
        res.status(500).send("Error en el servidor");
        throw err;
      }
      if (result.length === 0) {
        return res.status(401).send("Invalido");
      }
      const customer = result[0];
      console.log(customer.password);
      //Verificar contraseña (con bcrypt)

      const validPassword = await bcrypt.compare(password, customer.password);
      if (!validPassword) {
        return res.status(401).send("Credenciales invalidas");
      }
      //generar JWT
      const token = jwt.sign({ id: customer.id_cliente }, process.env.JWT_SECRET, {
        expiresIn: "10h",
      });
      res.json({ token });
    }
  );
};

//Agregar cliente como usuario al sistema
exports.addCustomer = (req, res) => {
  const newCustomer = req.body;
  
  // Hashear la contraseña antes de guardarla (bcrypt)
  bcrypt.hash(newCustomer.password, 10, (err, hash) => {
    // 10 es el número de rondas de hashing
    if (err) {
      res.status(500).send("Error al hashear la contraseña");
      throw err;
    }

    newCustomer.password = hash;

    db.query('INSERT INTO Cliente SET ?', newCustomer ,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al agregar el usuario");
          throw err;
        }
        res.status(201).send("Usuario agregado correctamente");
      }
    );
  });
};

//Obtener todos los clientes
exports.allCustomers = (req, res) => {
  db.query('SELECT * FROM Cliente', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener los usuarios');
      throw err;
    }
    res.json(result);
  });
};

