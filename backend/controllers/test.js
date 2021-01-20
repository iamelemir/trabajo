const pool = require("../../database/db");

exports.allTest = async function (req, res) {
    try {
      const test = await pool.query("select * from public.test");
      res.json(test.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  exports.insertTest = async function (req, res) {
    try {
      const { id_est, id_form, id_preg, id_resp } = req.body;
      const insertTest = await pool.query(
        "INSERT INTO public.test(id_est, id_form, id_preg, id_resp) VALUES ($1, $2, $3, $4)",
        [id_est, id_form, id_preg, id_resp]
      );
      res.json(insertTest.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  exports.testStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const testStudent = await pool.query("SELECT id, id_est FROM test  WHERE id_est = $1", [
        id,
      ]);
      res.json(testStudent.rows);
    } catch (err) {
      console.error(err.message);
    }
  };