const pool = require("../../database/db");
const nodemailer = require('nodemailer');
/* 
para insertar el CURSO  , se necesita el indice del grado y el grupo
para que el grado vaya acorde al colegio que inicio dsesion, 
se debe guardar en el estado de Reactjs cuando inicie sesion 
el id del colegio y consultar el NitInstitucional
asi, se podraa:
curso= id-grado, id-grupo
grado= nit-colegio, indice
se necesita agreagr el grado, nit colegio y indice del grupo
*/
exports.sendEmail = async(req, res)=> {
    try {
        let transpoter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'osborne.kuhn83@ethereal.email',
                pass: 'uUAT2zSrN8nWdxuWBb'
        }});
    let mailOptions = {
        from: 'elemir',
        to: 'elemir18@gmail.com',
        subject: 'Invitacion de registro PEV',
        text: 'Te invitamos a hacer login en nuestra web para completar el resgistro, el User es: Correo Electronico y el pass es tu numero de identificacion'
    }

    transpoter.sendMail(mailOptions, (error, info) => {
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log('email enviado')
            res.status(200).jsonp(req.body);
        }
    })

    } catch (error) {        
    }    
  }