
/* exports.login = async (req, res) => {
    
      const {rol, email, password } = req.params;
      if(rol == 'estudiante'){
        try {
            const login = await pool.query(
              "SELECT * FROM estudiante WHERE email = $1 and password = $2", [email, password]);
              res.json(login.rows);
        
          } catch (err) {
            console.error(err.message);
          }
      }else if(rol == 'colegio'){
        try {
            const login = await pool.query(
              "SELECT * FROM colegio WHERE email = $1 and password = $2", [email, password]);
              res.json(login.rows);
          } catch (err) {
            console.error(err.message);
          }
      }else{
          console.log(err, "No existe esta direccion");
      }
  }; */