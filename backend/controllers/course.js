const pool = require("../../database/db");

exports.courseId = async function (req, res) {
  try {
    const { id, ix } = req.params;
    let dato = [];
    const cursoID = await pool.query(
      "select curso.id from curso, grado, grupo where grado.indice = $1 and grupo.numeral = $2 and grado.id = curso.id_grado and grupo.id = curso.id_grupo",
      [id, ix]
    );
    if (cursoID.rows[0]) {
      const estudiantes = await pool.query(
        "select estudiante.id, nombre, apellido from curso, estudiante where curso.id =$1 and estudiante.id_curso=$1",
        [cursoID.rows[0].id]
      );
      /* otro for para ingresar dentro de cada estudiante su respectivo id-historial */
       if (estudiantes.rows[0]) {
        for (let i = 0; i < estudiantes.rows.length; i++) {
          const element = estudiantes.rows[i];
          const history = await pool.query("select historial.id from historial where historial.id_estudiante = $1",[element.id]);
          dato = history.rows.concat(estudiantes.rows)
        }
        res.json(dato)       
        } 
      } else {
      console.log("no existe este curso");
    }
  } catch (err) {
    console.error(err.message);
  }
};

exports.searchId = async function (req, res) {
  try {
    const {id} = req.body; 
    console.log(
      id
    )
    const idHistory = await pool.query('select historial.id from historial where historial.id_estudiante = $1',
    [id])
    console.log(idHistory)
    res.json(idHistory)
     } catch (err) {
    console.error(err.message);
    res.json(err.message)
      }
};

/* select historila.id from historial where historial.id_estudfiante = $1 */
//select * from notas from notas, historial where notas.id_historial = historial.id;
/* const {nit,nombre,direccion,telefono,director,email,} = req.body; FFFFFFffffffff
const sffflt = bcrypt.genSfffltSync(10);
const pfss = bcrypt.hfshSync(req.body.password, salt);  */

/* await JSON.stringify(pool.query("select nit, email from colegio where nit = $1 and email = $2", [nit, email], function(err, result){
    if(result.rows[0]){
        console.log("NIT Y CORREO YA SE ENCUENTRAN REGISRTRADOS")
        res.json("Ya estan registrados")
      } else{
      console.log("Registrado"); 
      const school = pool.query("INSERT INTO colegio (nit, nombre, direccion, telefono, director, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING nit",
        [nit, nombre, direccion, telefono, director, email, pass]
      );
      console.log(school)
      if(err){console.log(err);}
        else {
        
        pool.query('COMMIT')
          console.log(result)
          res.redirect('/login');
          return;
        }

    }
  })); */
/* 


obtener el id del curso por medio del indice del grado y numeral del grupo
*/
/*
 */

/* select  grado.indice, grupo.numeral from grado, grupo, curso,colegio estudiante where estudinate.id_curso = curso.id and colegio.id = grado.nit_colegio*/

/*       const course = await pool.query('select  colegio.id, colegio.nit, colegio.nombre, curso.id_grado, curso.id_grupo , grado.indice, grupo.numeral from curso, colegio, grado, grupo where  colegio.id = $1 and grado.id = curso.id_grado and grupo.id = curso.id_grupo and grado.indice = $2 and grupo.numeral = $3', [id,ix,ij,]);
 */
/* select colegio, grado, grupo  from  colegio, grado, grupo where colegio.id=2 and grado.indice = '11'and grupo.numeral = 'a' and colegio.id = grado.nit_colegio */
exports.allsCourses = async (req, res) => {
  try {
    const course = await pool.query("SELECT * FROM curso");
    res.json(course.rows);
    /*    console.log(grupo.rows) */
  } catch (err) {
    console.error(err.message);
  }
};

exports.insertCourse = async function (req, res) {
  try {
    const { id_grado, id_grupo } = req.body;
    const validateCourse = await pool.query(
      "select id_grado, id_grupo from curso where (id_grado = $1) and (id_grupo = $2)",
      [id_grado, id_grupo]
    );
    if (validateCourse.rows[0]) {
      res.json("Este curso ya esta agregado");
      console.log("Este curso ya existe");
    } else {
      const addCourse = await pool.query(
        "INSERT INTO curso (id_grado, id_grupo) VALUES ($1, $2)",
        [id_grado, id_grupo]
      );
      res.json("it's ok");
      console.log("curso agregado");
    }
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_grado, id_grupo } = req.body;

    const updateGrado = await pool.query(
      "UPDATE curso SET id_grado = $1 WHERE id = $2",
      [id_grado, id]
    );

    const updateGrupo = await pool.query(
      "UPDATE curso SET id_grupo = $1 WHERE id = $2",
      [id_grupo, id]
    );

    res.json("Update ok!");
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await pool.query("DELETE FROM curso WHERE id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
};
