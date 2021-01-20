const pool = require("../../database/db");

exports.allOrientation = async function (req, res) {
  try {
    const orientation = await pool.query("select * from public.orientacion");
    res.json(orientation.rows);
  } catch (err) {
    console.error(err.message);
  }
};