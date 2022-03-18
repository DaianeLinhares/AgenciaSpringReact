import './MainDestino.css';
import Card from "../cards/Card";
import Grecia from '../../assets/svg/Grecia.svg';
import Florianopolis from '../../assets/svg/Florianopolis.svg';
import Arraial from '../../assets/svg/ArraialDoCabo.svg';
import Patagonia from '../../assets/svg/PatagoniaChile.svg';
import PortoGalinhas from '../../assets/svg/PortoDeGalinhas.svg';
import Bahia from '../../assets/svg/Bahia.svg';

function MainDestino() {
    return (
        <section className="MainDestino">
            <Card foto={Grecia}
                titulo="Grecia"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={1.985} />
            <Card foto={Florianopolis}
                titulo="Florianopolis"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={2.055} />
            <Card foto={Arraial}
                titulo="Arraial do Cabo"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={2.563} />
            <Card foto={Patagonia}
                titulo="Patagonia Chile"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={3.985} />
            <Card foto={PortoGalinhas}
                titulo="Porto de Galinhas"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={3.744} />
            <Card foto={Bahia}
                titulo="Bahia"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                valor={2.598} />
        </section>
    );
}
export default MainDestino;
