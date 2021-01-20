const pool = require("../../database/db");
const bcrypt = require('bcryptjs');

exports.allStudentes = async function (req, res) {
  try {
    const studens = await pool.query("select * from public.estudiante");
    res.json(studens.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.insertStudent = async function (req, res) {
  try {
    const { id_curso, identificacion, nombre, apellido, email} = req.body;
    /* const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(req.body.password, salt); */ 
    const insertStudent = await pool.query(
      "INSERT INTO public.estudiante(id_curso, identificacion, nombre, apellido, email) VALUES ($1, $2, $3, $4, $5)",
      [id_curso, identificacion, nombre, apellido,email]
    );
    res.json(insertStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.studentId = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query("select nombre, apellido from curso, estudiante where curso.id =$1 and estudiante.id_curso=$1",
     [id]);
     res.json(student.rows)
  } catch (err) {
    console.error(err.message);
  }
};

/* 
  if(cursoID.rows[0]) {
         const estudiantes = await pool.query("select nombre, apellido from curso, estudiante where curso.id =$1 and estudiante.id_curso=$1",
          [cursoID.rows[0].id])
        
        res.json(estudiantes.rows)
        console.log(estudiantes)
         //const historyId = await pool.query("select historial.id from historial where historial.id_curso = $1",[cursoID.rows[0].id])
        //console.log(cursoID.rows[0].id)
        //console.log('historial id' + " " + historyId.rows[0].id)
        //res.json(historyId.rows[0].id) ;
          if(historyId.rows[0]){
            const insertNotes = await pool.query("INSERT INTO nota (nota, id_historial, materia) VALUES ($1,$2,$3)",
             [nota, id_historial.rows[0].id, materia]);
        }else{ 
          console.log("ingrese los valores")
        }  
      }else{
        console.log('no existe este curso')
      }
*/
exports.updateStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const { identificacion, nombre, apellido, id_curso, email, password, password2 } = req.body;
  
      const updateIdentificacion = await pool.query(
        "UPDATE estudiante SET identificacion = $1 WHERE id = $2",
        [identificacion, id]
      );
      const updateNombre = await pool.query(
        "UPDATE estudiante SET nombre = $1 WHERE id = $2",
        [nombre, id]
      );
      const updateApellido = await pool.query(
        "UPDATE estudiante SET apellido = $1 WHERE id = $2",
        [apellido, id]
      );
      const updateId_Curso = await pool.query(
        "UPDATE estudiante SET id_curso = $1 WHERE id = $2",
        [id_curso, id]
      );
      const updateEmail = await pool.query(
        "UPDATE estudiante SET email = $1 WHERE id = $2",
        [email, id]
      );

      const updatePassword = await pool.query(
        "UPDATE estudiante SET password = $1 WHERE id = $2",
        [password, id]
      );

      const updatePassword2 = await pool.query(
        "UPDATE estudiante SET password2 = $1 WHERE id = $2",
        [password2, id]
      );
      res.json("Update ok!");
    } catch (err) {
      console.error(err.message);
    }
  }
