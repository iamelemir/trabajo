const pool = require("../../database/db");

exports.subjectId = async (req, res) => {
    try {
      const { tipo } = req.params;
      const subject = await pool.query(
        "SELECT * FROM materia WHERE tipo = $1", [tipo]);
  
      res.json(subject.rows);
    } catch (err) {
      console.error(err.message);
    }
  };

  /* exports.historyId = async (req, res) => {
  try {
    const { id_estudiante } = req.params;
    const history = await pool.query(
      "SELECT * FROM historial WHERE id_estudiante = $1",
      [id_estudiante]
    );

    res.json(history.rows);
  } catch (err) {
    console.error(err.message);
  }
}; */