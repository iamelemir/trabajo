const pool = require('../../database/db');
const bcrypt = require('bcryptjs')


exports.login = async function(req,res){
        try {
            const {rol, email, password} = req.body;     
            console.log(req.body)   
            if(rol == 'estudiante'){
                try {
                    const login = await pool.query("SELECT * FROM estudiante WHERE email = $1 ", [email]);
                      if (login.rowCount > 0) {
                          console.log('EMAIL Y PASSWORD CORRECTOS')
                          //console.log(login)
                          const compare = await bcrypt.compare(password, login.rows[0].password)
                          if (compare) {
                            const id = await pool.query("SELECT id from estudiante WHERE email = $1 ", [email]);
                              res.send({
                                  "code":200,
                                  "success": "Login Correcto",
                                  "id": id.rows[0].id
                              })
                          }else{
                            res.send({
                                "code":204,
                                "success":"Email and password does not match"
                           })
                          }
                      }else{
                          res.send({
                            message:"Email o Paaaword Erroneos"
                          })
                          console.log('DATOS INCORRECTOS')
                      }
                      res.json(id.rows);
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
                            const id = await pool.query("SELECT id FROM colegio WHERE email = $1", [email]);
                            res.send({
                                "code":200,
                                "success": "Login Correcto",
                                "id": id.rows[0].id
                            })
                            console.log(id.rows)
                            res.json( id.rows)
                        }else{
                          res.send({
                              "code":204,
                              "success":"Email and password does not match"
                         })
                        }
                    }else{
                        console.log('DATOS INCORRECTOS')
                    }
                    res.json( id.rows);
                  } catch (err) {
                    console.error(err.message);
                  }
              }else{
                  console.log(err.message);
              }
    } catch (err) {
        
    }
  }