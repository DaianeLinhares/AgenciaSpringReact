import './MainDestino.css';
import Card from "../cards/Card";
import { useState, useEffect } from 'react';
import api from "../api"

function MainDestino() {

    const [destino, setDestino] = useState([]);

    useEffect(() => {
        api.get('/destinos')
            .then(resposta => {
                setDestino(resposta.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    return (
        <section className="MainDestino" key={destino.id}>
            {destino.map((destino) => (
                <Card foto={destino.imagem}
                    titulo={destino.nomeDestino}
                    texto={destino.descricao}
                    valor={destino.preco} />
            )
            )}
        </section>
    )
}
export default MainDestino