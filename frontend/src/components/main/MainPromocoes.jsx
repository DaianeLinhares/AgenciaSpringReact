import "./MainPromocoes.css";
import Card from '../cards/Card';
import Portugal from "../../assets/svg/Portugal.svg";
import PortugalDois from "../../assets/svg/PortugalDois.svg";
import PortugalNoite from "../../assets/svg/PortugalNoite.svg";

function MainPromocoes() {
    return (
        <>
            <h1 className="Titulo">Aproveite Nossas Promoçoes</h1>
            <div className="MainPromocoes">
                <Card foto={Portugal}
                    titulo="Portugal"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    
                    Sed faucibus purus sit amet ligula cursus."
                    valor={3.587}
                    textopromocao="R$"
                    valorpromocao={1.905} />
                <Card foto={PortugalDois}
                    titulo="Portugal"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                    valor={4.569}
                    textopromocao="R$"
                    valorpromocao={2.205} />
                <Card foto={PortugalNoite}
                    titulo="Portugal"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus purus sit amet ligula cursus."
                    textovalor="R$"
                    valor={2.355}
                    textopromocao="R$"
                    valorpromocao={999} />
            </div>
        </>
    );
}
export default MainPromocoes;
