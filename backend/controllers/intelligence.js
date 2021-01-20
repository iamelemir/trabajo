const pool = require("../../database/db");

exports.intelligenceType = async function (req, res) {
  try {
      const intelligence = await pool.query("select * from public.tipo_inteligencia");
      res.json(intelligence.rows);
  } catch (err) {
    console.error(err.message);
  }
};