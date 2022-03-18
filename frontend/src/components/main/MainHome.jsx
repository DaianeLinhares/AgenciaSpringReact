import Carousel from "../carousel/Carousel";
import './MainHome.css';
import Bahia from '../../assets/svg/Bahia.svg';
import Patagonia from '../../assets/svg/PatagoniaChile.svg';
import Florianopolis from '../../assets/svg/Florianopolis.svg';

function MainHome() {
    return (
        <div className="MainHome">
            <h3>Nós ajudamos você a ter as melhores viagens sem preocupação </h3>
            <Carousel
                foto={Bahia}
                titulo="Os Melhores Destinos"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                fotoDois={Patagonia}
                tituloDois="Para As Melhores Viagens"
                textoDois="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                fotoTres={Florianopolis}
                tituloTres="Momentos Inesqueciveis"
                textoTres="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
            />
        </div>
    );
}
export default MainHome;