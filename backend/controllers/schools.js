const pool = require("../../database/db");
const bcrypt = require('bcryptjs');
const { connect } = require("../../database/db");
const flash = require('connect-flash')


exports.schoolId = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await pool.query("SELECT * FROM colegio WHERE id = $1", [
      id,
    ]);

    res.json(school.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.allSchools = async (req, res) => {
  try {
    const schools = await pool.query("select * from colegio");
    res.json(schools.rows);
  } catch (error) {
    console.error(err.message);
  }
};

exports.insertSchool = async function (req, res) {
  
  try {
    const {nit,nombre,direccion,telefono,director,email,} = req.body; 
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(req.body.password, salt); 

    await JSON.stringify(pool.query("select nit, email from colegio where nit = $1 and email = $2", [nit, email], function(err, result){
        if(result.rows[0]){
            console.log("NIT Y CORREO YA SE ENCUENTRAN REGISRTRADOS")
            res.json("Ya estan registrados")
          } else{
          console.log("Registrado"); 
          const school = pool.query("INSERT INTO colegio (nit, nombre, direccion, telefono, director, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING nit",
            [nit, nombre, direccion, telefono, director, email, pass]
          );
          console.log(school)
          if(err){console.log(err);}
						else {
						
						pool.query('COMMIT')
							console.log(result)
							res.redirect('/login');
							return;
						}
          /* res.json(addSchool.rows);  
          console.log(addSchool.rows)  */
        }
      }));
    
     } catch (err) {
    console.error(err.message);
    res.json(err.message)
      }
};

exports.updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nit,
      nombre,
      direccion,
      telefono,
      director,
      email,
      password
    } = req.body;

    const updateNit = await pool.query(
      "UPDATE colegio SET nit = $1 WHERE id = $2",
      [nit, id]
    );

    const updateName = await pool.query(
      "UPDATE colegio SET nombre = $1 WHERE id = $2",
      [nombre, id]
    );

    const updateDireccion = await pool.query(
      "UPDATE colegio SET direccion = $1 WHERE id = $2",
      [direccion, id]
    );

    const updateTelefono = await pool.query(
      "UPDATE colegio SET telefono = $1 WHERE id = $2",
      [telefono, id]
    );

    const updateDirector = await pool.query(
      "UPDATE colegio SET director = $1 WHERE id = $2",
      [director, id]
    );

    const updateEmail = await pool.query(
      "UPDATE colegio SET email = $1 WHERE id = $2",
      [email, id]
    );

    const updatePass = await pool.query(
      "UPDATE colegio SET password = $1 WHERE id = $2",
      [password, id]
    );

    res.json("Update ok!");
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSchool = await pool.query("DELETE FROM colegio WHERE id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
};
