const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/db");
/*######################################### */
const passport = require('passport')
/* ######################################## */

const school = require("./backend/controllers/schools");
const student = require("./backend/controllers/students");
const grade = require('./backend/controllers/grade')
const grupo = require('./backend/controllers/grupo')
const course = require('./backend/controllers/course')
const history = require('./backend/controllers/history')
const notas = require('./backend/controllers/note')
const subject = require('./backend/controllers/subject')
const test = require('./backend/controllers/test')
const orientation = require('./backend/controllers/orientation')
const intelligence = require('./backend/controllers/intelligence')
const question = require('./backend/controllers/questions')
const answer = require('./backend/controllers/answer')
const form = require('./backend/controllers/form')
const login = require('./backend/passport/login');
const email = require('./backend/controllers/send-email')


app.use(cors());
app.use(express.json());
/*  */
/* app.get("/login/:rol/:email/:password",login.login) */
/*  */
/* #################################################################33 */


/* logins */

app.post("/login", login.login);
/*  */

/* All methods related to schools */
app.get("/colegio/:id", school.schoolId);
app.get("/colegios", school.allSchools);
app.post("/colegios", school.insertSchool);
app.put("/colegio/:id", school.updateSchool);
app.delete("/colegio/:id", school.deleteSchool);

/* All methods related to students */

app.get("/estudiantes", student.allStudentes);
app.post("/estudiante", student.insertStudent)
app.get("/estudiante/:id", student.studentId);
app.put("/estudiante/:id", student.updateStudent);

/* ####################################  ENVIANDO EMAILS DE INVITACION*/
app.post('/send-email', email.sendEmail);

/* #################################### */
app.post('/historiales', course.searchId)
/*  grades */
app.get('/grado/', grade.allsGardes);
app.get('/grado/:id', grade.gardeId);
app.post('/grado/', grade.insertGrade);
app.put('/grado/:id', grade.updateGrade);

/* Grupos */
app.get('/grupo/', grupo.allsGrupos);
app.get('/grupo/:id', grupo.grupoId);
app.post('/grupo/', grupo.insertGrupo);
app.put('/grupo/:id', grupo.updateGrade)

/* Cursos */
app.get('/cursos/', course.allsCourses)

app.get('/curso/:id/:ix/', course.courseId)

app.post('/curso/', course.insertCourse)
app.put('/curso/:id', course.updateCourse)
app.delete('/curso/:id', course.deleteCourse)

/* Historial's */
app.get('/historial/:id', history.historyId)
app.get('/historial_id/:id', history.captureHistory)
/* app.get('/historial/:id', history.allHistorials); */
/* 16 */
/* No de febrero del 201tas */
app.get("/notas/:id_historial", notas.note);
app.post("/nota/:id", notas.insertNote);

/* Materias - Subjects*/
app.get('/materias/:tipo', subject.subjectId);

/* Test */
app.get('/test', test.allTest);
app.post('/test', test.insertTest);
app.get('/test/:id', test.testStudent);

/* Orientation */
app.get('/orientaciones/', orientation.allOrientation)

/* intelligence */
app.get('/inteligencias', intelligence.intelligenceType)

/* Preguntas */
app.get('/pregunta', question.questions)
app.get('/preguntas', question.allQuestions)

/* Respuestas */
app.get('/respuestas', answer.answer)
/* Formulario */
app.get('/formulario', form.form)



app.listen(9000, () => {
  console.log("server has started on port 9000");
});
