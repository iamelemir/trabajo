import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/registrarEscuela.css";


export default class Carrusel extends Component {
  render() {
    return (
      
      <div className="about">
      <br/><br/><br/>
           <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Inteligencia lingüística</h3>
              <p>Son Gokū es un personaje ficticio, protagonista de la serie de manga y anime Dragon Ball. Fue creado por Akira Toriyama en 1984..</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>NARUTO</h3>
              <p>Naruto, romanizada como NARUTO, es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>  
            </Carousel.Item>
        </Carousel>
      </div>
      
    );
  }
}
