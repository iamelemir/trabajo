const pool = require("../../database/db");

exports.grupoId = async (req, res) => {
    try {
      const { id } = req.params;
      const grupo = await pool.query("SELECT * FROM grupo WHERE id = $1", [id,]);
      res.json(grupo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
}

exports.allsGrupos = async (req, res) => {
    try {
        const grupo = await pool.query("SELECT * FROM grupo");
        res.json(grupo.rows);
     /*    console.log(grupo.rows) */
    } catch (err) {
      console.error(err.message);
    }
}

exports.insertGrupo = async function (req, res) {
    try {
    const { numeral } = req.body;
      const addGrupo = await pool.query(
        "INSERT INTO grupo numeral VALUES ($1)",
        [ numeral]
      );     
    } catch (err) {
      console.error(err.message);
    }
  }

  exports.updateGrade = async (req, res) => {
    try {
      const { id } = req.params;
      const { numeral } = req.body;
  
      const updateNumeral = await pool.query(
        "UPDATE grupo SET numeral = $1 WHERE id = $2",
        [numeral]
      );
  
      res.json("Update ok!");
    } catch (err) {
      console.error(err.message);
    }
  }

