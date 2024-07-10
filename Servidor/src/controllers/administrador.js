require("dotenv").config();

//Cargar las variables de entorno
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

//Agregar admin al sistema
exports.addAdmin = (req, res) => {
  const newAdmin = req.body;
  console.log(newAdmin);

  bcrypt.hash(newAdmin.password, 10, (err, hash) => {
    // 10 es el número de rondas de hashing
    if (err) {
      res.status(500).send("Error al hashear la contraseña");
      return; // Stop execution if there's an error hashing
    }

    newAdmin.password = hash;
    console.log(newAdmin.password);
    db.query("INSERT INTO CredencialAccesoAdministrador (email, password) VALUES (?,?)",
      [newAdmin.email, newAdmin.password],
      (err, result) => {
        if (err) {
          res
            .status(500)
            .send(
              "Error al agregar las credenciales de acceso del administrador"
            );
          throw err;
        }

        const idCredencialAdmin = result.insertId;
        console.log(idCredencialAdmin);

        db.query(
          "INSERT INTO Administrador VALUES (primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, correoPayPal, id_credencial_admin)",
          [
            newAdmin.primerNombre,
            newAdmin.segundoNombre,
            newAdmin.apellidoPaterno,
            newAdmin.apellidoMaterno,
            newAdmin.correoPayPal,
            idCredencialAdmin,
          ]
        ),
          (err, result) => {
            if (err) {
              res
                .status(500)
                .send("Error al agregar los datos del administrador");
            }

            res
              .status(200)
              .send("Credenciales de acceso asignados al nuevo administrador");
            return;
          };
      });
  });
};

//Loguearse
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  db.query(
    "SELECT CredencialAccesoAdministrador.email,CredencialAccesoAdministrador.password FROM CredencialAccesoAdministrador INNER JOIN Administrador ON CredencialAccesoAdministrador.id_credencial_admin = Administrador.idAdministrador WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        res.status(500).send("Error en el servidor");
        throw err;
      }
      if (result.length === 0) {
        return res.status(401).send("Invalido");
      }
      const admin = result[0];

      //Verificar contraseña (con bcrypt)
      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Credenciales invalidas" });
      }
      //generar JWT
      const token = jwt.sign(
        { id: admin.idAdministrador },
        process.env.JWT_SECRET,
        {
          expiresIn: "10h",
        }
      );
      res.json({ token });
    }
  );
};
