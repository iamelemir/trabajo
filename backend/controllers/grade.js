const pool = require("../../database/db");

exports.gardeId = async (req, res) => {
    try {
      const { id } = req.params;
      const grade = await pool.query("SELECT * FROM grado WHERE id = $1", [id,]);
      res.json(grade.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
}


exports.allsGardes = async (req, res) => {
    try {
        const grade = await pool.query("SELECT * FROM grado ");
        res.json(grade.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
}

exports.insertGrade = async function (req, res) {
    try {
    const { nit_colegio, indice } = req.body;
      const addGrade = await pool.query(
        "INSERT INTO grado ( nit_colegio, indice) VALUES ($1,$2)",
        [ nit_colegio, indice]
      );
      res.json(addGrade.rows);
    } catch (err) {
      console.error(err.message);
    }
  }

  exports.updateGrade = async (req, res) => {
    try {
      const { id } = req.params;
      const { nit_colegio, indice } = req.body;
  
      const updateNit_colegio = await pool.query(
        "UPDATE grado SET nit_colegio = $1 WHERE id = $2",
        [nit_colegio, id]
      );
  
      const updateIndice = await pool.query(
        "UPDATE grado SET indice = $1 WHERE id = $2",
        [indice, id]
      );

      res.json("Update ok!");
    } catch (err) {
      console.error(err.message);
    }
  }

