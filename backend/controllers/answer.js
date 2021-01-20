const pool = require('../../database/db')

exports.answer = async (req, res) => {
    try {
      const answer = await pool.query("SELECT * FROM respuesta ");
        res.json(answer.rows);
    } catch (err) {
      console.error(err.message);
    }
  };