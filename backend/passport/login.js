const pool = require('../../database/db');
const bcrypt = require('bcryptjs')


exports.login = async function(req,res){
        try {
            const rol = req.body.rol;
            const email= req.body.email;
            const password = req.body.password;
        
            if(rol == 'estudiante'){
                try {
                    const login = await pool.query("SELECT * FROM estudiante WHERE email = $1 ", [email]);
                      if (login.rowCount > 0) {
                          console.log('EMAIL Y PASSWORD CORRECTOS')
                          //console.log(login)
                          const compare = await bcrypt.compare(password, login.rows[0].password)
                          if (compare) {
                              res.send({
                                  "code":200,
                                  "success": "Login Correcto"
                              })
                          }else{
                            res.send({
                                "code":204,
                                "success":"Email and password does not match"
                           })
                          }
                      }else{
                          console.log('DATOS INCORRECTOS')
                      }
                      res.json(login.rows);
                    } catch (err) {
                    console.error(err.message);
                  }
              }else if(rol == 'colegio'){
                try {
                    const login = await pool.query("SELECT * FROM colegio WHERE email = $1", [email]);
                      if (login.rowCount > 0) {
                        console.log('EMAIL Y PASSWORD CORRECTOS')
                        //console.log(login)
                        const compare = await bcrypt.compare(password, login.rows[0].password)
                        if (compare) {
                            res.send({
                                "code":200,
                                "success": "Login Correcto"
                            })
                            res.json('login verificado')
                        }else{
                          res.send({
                              "code":204,
                              "success":"Email and password does not match"
                         })
                        }
                    }else{
                        console.log('DATOS INCORRECTOS')
                    }
                    res.json(login.rows);
                  } catch (err) {
                    console.error(err.message);
                  }
              }else{
                  console.log(err.message);
              }
    } catch (err) {
        
    }
  }