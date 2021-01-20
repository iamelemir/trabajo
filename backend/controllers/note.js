const pool = require("../../database/db");

exports.note = async (req, res) => {
    try {
      const { id_historial } = req.params;
      const note = await pool.query("select * from nota where id_historial = $1", [id_historial]);
      res.json(note.rows);
    } catch (err) {
      console.error(err.message);
    }
}

exports.insertNote = async (req, res) => {
  try {
          const {nota, id_historial, materia } = req.body;
          const insertNote = await pool.query("INSERT INTO  nota (nota, id_historial, materia) VALUES ($1,$2,$3)",[nota, id_historial, materia]);
          console.log(insertNote)
  } catch (error) {
    console.log(error)
  }
}
/* exports.insertNote = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query("SELECT id, nombre, apellido FROM estudiante WHERE identificacion = $1", [id]);
    res.json(student.rows[0]);
    //console.log('id estudiante' +" " +student.rows[0].id)
     if(student.rows[0]){
      const history = await pool.query("SELECT historial.id FROM historial WHERE historial.id_estudiante = $1", [student.rows[0].id]);
      //console.log('id historial' +' ' + history.rows[0].id)
      if (history.rows[0]) {
        const notaId = await pool.query('select nota.id from nota where nota.id = $1', [history.rows[0].id])
        //console.log('nota Id'+notaId.rows[0].id)
        if (notaId.rows[0]) {
          const {nota, materia } = req.body;
          const insertNote = await pool.query("INSERT INTO  nota (nota, id_historial, materia) VALUES ($1,$2,$3)",[nota, history.rows[0].id, materia]);
          console.log(insertNote)
        }else{
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        }
      }else{
        console.log('Este estudiante no tiene nota registrada')
      }
    }else{
      console.log('Este estudiante no esta registrado')
    } 
  } catch (error) {
    console.log(error)
  }
} */

/* select nota, historial from nota, historial where nota.id_historial = historial.id; */