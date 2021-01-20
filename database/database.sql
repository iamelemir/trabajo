/* 
AQUÍ SE ENCUENTRAN LA ESTRUCTURA DE TODAS LAS TABLAS QUE SE TIENEN EN LA BASE DE DATOS.
psql -U elemir pev;
 */

/* 
ENTIDADES
- Colegio: Nit,Nombre, Direccion, Telefono, Director, Email.
- Grado: Id, nit_col,  indice
- Grupo: Id, numeral
- Curso:Id, Id_grado, Id_grupo
- Estudiante: Id, nombre, apellido, id_curso, email
- Historial: Id, id_estudiante, id_curso
- Nota: Id, periodo, nota, id_historial
- Materia: Id, nombre, tipo
- TipoInteligencia: Id, tipo
- orientacion: Id_materia, Id_tipoInteligenica
- Formulario: Id, Id_test, nombre
- Pregunta: Id, Id_formulario, enunciado, estado
- Respuesta: Id, Id_pregu, Id_tipoInteligancia, descripcion
- Test: Id, Id_Est, Id_form, Id_preg, Id_resp

 */

create table colegio ( 
    id serial primary KEY,
    nit varchar(50) not null,
    nombre varchar(50) not null,
    direccion varchar(50) not null,
    telefono varchar(50) not null,
    director varchar(50) not null,
    email text not null);

/* alter table colegio add column password text;
alter table colegio add column password2 text; */


create table grado (
    id serial primary key,
    nit_colegio serial, 
    indice varchar(50) not null, 
    FOREIGN KEY(nit_colegio) REFERENCES colegio(id));

create table grupo ( 
    id serial primary key, 
    numeral varchar(50) not null);

create table curso (
    id serial primary key, 
    id_grado serial, 
    id_grupo serial, 
    foreign key(id_grado) references grado(id), 
    foreign key(id_grupo) references grupo(id)); 

create table estudiante(
    id serial primary key, 
    identificacion varchar(50) not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    id_curso int,
    email text not null,
    foreign key(id_curso) references curso(id));
    
/* alter table estudiante add column password text;
alter table estudiante add column password2 text; */

create table historial(
    id serial primary key,
    id_estudiante serial, 
    id_curso serial,
    foreign key(id_estudiante) references estudiante(id),
    foreign key(id_curso) references curso(id));

create table nota(
    id serial primary key, 
    nota int not null, 
    id_historial int,
    foreign key(id_historial) references historial(id));

create table materia(
    id serial primary key, 
    nombre varchar(50) not null, 
    tipo varchar(50) not null);

create table tipo_Inteligencia(
    id serial primary key, 
    tipo varchar(50) not null);

create table orientacion( 
    id_materia serial, 
    id_tipoInteligencia serial,
    foreign key(id_materia) references materia(id),
    foreign key(id_tipoInteligencia) references tipo_Inteligencia(id));

create table formulario(
    id serial primary key, 
    nombre varchar(50)  not null);

create table pregunta(
    id serial primary key, 
    enunciado varchar(250) not null, 
    estado bool, 
    id_formulario int,
    foreign key(id_formulario) references formulario(id));

create table respuesta(
    id serial primary key, 
    id_pregunta int, 
    descripcion varchar(250) not null, 
    Id_tipoInteligancia int, 
    foreign key(Id_tipoInteligancia) references tipo_Inteligencia(id));

create table test(
    id serial primary key, 
    id_Est serial, 
    id_form serial, 
    id_preg serial, 
    id_resp serial,
    foreign key(id_Est) references estudiante(id),
    foreign key(id_form) references formulario(id),
    foreign key(id_preg) references pregunta(id),
    foreign key(id_resp) references respuesta(id));


/* 
T1 Verbal - Lingüística--, 
T2 Lógica - Matemática--,
T3 Visual - Espacial--,
T4 corporal - Cinestésica--, 
T5 Musical - Rítmica--, 
T6 Intrapersonal, 
T7 Interpersonal.
T8 Naturalista --
Nota: Desde T1 - T7  son los campos para cada tipo de inteligencia. */
