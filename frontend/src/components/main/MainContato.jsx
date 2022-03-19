import React, { useState } from "react";
import "./MainContato.css";
import { Button } from "react-bootstrap";

const UseState = () => {
  const [nome, setNome] = useState("Digite seu nome")
  const [email, setEmail] = useState("Digite seu E-mail")
  const [mensagem, setMensagem] = useState("Digite sua mensagem aqui!")

  return (
    
    <section className="MainContato">
      <div className="Div">
        <h1>Precisa falar conosco</h1>
        <form className="Formulario">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Nome</label>
            <input type="text" className="form-control" id="formGroupExampleInput" value={nome}
              onChange={e => setNome(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">E-mail</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Mensagem</label>
            <textarea name="" id="" cols="20" rows="10" value={mensagem}
              onChange={e => setMensagem(e.target.value)}></textarea>
          </div>
          <div>
            <Button variant="secondary" type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default UseState;