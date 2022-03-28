import React, { useRef } from "react";
import "./MainContato.css";
import { Button } from "react-bootstrap";
import api from "../api";

const Formulario = () => {
  const nomeContato = useRef()
  const emailContato = useRef()
  const mensagem = useRef()

  
  function enviarDados(event) {
    event.preventDefault()
    api.post('/contatos', {
        nomeContato: nomeContato.current.value,
        emailContato: emailContato.current.value,
        mensagem: mensagem.current.value,
    }).then((res) => console.log(res.data)).catch((err) => console.log(err))
}
  return (
    
    <section className="MainContato">
      <div className="Div" onSubmit={enviarDados}>
        <h1>Precisa falar conosco</h1>
        <form className="Formulario">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Nome</label>
            <input type="text" className="form-control" id="formGroupExampleInput" ref={nomeContato}/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">E-mail</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" ref={emailContato} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Mensagem</label>
            <textarea name="" id="" cols="20" rows="10" ref={mensagem}></textarea>
          </div>
          <div>
            <Button variant="secondary" type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Formulario;