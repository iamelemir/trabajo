const pool = require("../../database/db");

exports.historyId = async (req, res) => {
  try {
    const { id } = req.params;
    const history = await pool.query("select historial.id from historial where historial.id_estudiante = $1",[id]);
    res.json(history.rows);
    console.log(history.rows)
  } catch (err) {
    console.error(err.message);
  }
};

/*   if (estudiantes.rows[0]) {
           const idHistory = await pool.query('select historial.id from historial where historial.id_estudiante = $1',
            [estudiantes.rows[0].id])
            res.json(estudiantes.rows)
          res.json(idHistory)
          console.log(idHistory)
          }else{
           console.log("No Existe este historial")
         } */

exports.captureHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query(
      "SELECT historial.id, estudiante.nombre, estudiante.apellido FROM historial, estudiante WHERE identificacion = $1 and estudiante.id = historial.id_estudiante",
       [id]);
         res.json(student.rows);
         console.log(student.rows)
  } catch (error) {
    console.log(error)
  }
}
/* exports.allHistorials = async (req, res) => {
  try {
    const historials = await pool.query("select * from historial");
    res.json(historials.rows);
  } catch (error) {
    console.error(err.message);
  }
}; */
