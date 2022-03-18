import './Carousel.css'
import { Carousel } from 'react-bootstrap';

function Carrousel(props){
  return(
<Carousel className='container'>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={props.foto}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={props.fotoDois}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>{props.tituloDois}</h3>
        <p>{props.textoDois}.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.fotoTres}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>{props.tituloTres}</h3>
        <p>{props.TextoTres}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}
export default Carrousel;
  