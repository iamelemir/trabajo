const pool = require('../../database/db')

exports.questions = async (req, res) => {
    try {
      const question = await pool.query("SELECT * FROM pregunta where pregunta.estado = false order by random() limit 5  ");
        res.json(question.rows);
    } catch (err) {
      console.error(err.message);
    }
  };


  exports.allQuestions = async (req, res) => {
    try {
      const question = await pool.query("SELECT * FROM pregunta");
        res.json(question.rows);
    } catch (err) {
      console.error(err.message);
    }
  };