const pool = require('../../database/db')

exports.form = async (req, res) => {
    try {
      const form = await pool.query("SELECT * FROM formulario");
        res.json(form.rows);
    } catch (err) {
      console.error(err.message);
    }
  };