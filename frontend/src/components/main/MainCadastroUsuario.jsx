import React, { useRef } from "react";
import "./MainCadastroUsuario.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import api from "../api";

const Formulario = () => {
    const nome = useRef()
    const email = useRef()
    const senha = useRef()
    const endereco = useRef()
    const cidade = useRef()
    const estado = useRef()

    function enviarDados(event) {
        event.preventDefault()
        api.post("clientes/", {
            nome: nome.current.value,
            email: email.current.value,
            senha: senha.current.value,
            endereco: endereco.current.value,
            cidade: cidade.current.value,
            estado: estado.current.value,
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
        window.alert("Mensagem enviada!")
        window.location.reload();
    }

    return (
        <section className="MainCadastroUsuario">
            <div className="DivFormulario">
                <Form className="FormularioContato" onSubmit={enviarDados}>
                    <Row>
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" ref={nome} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" ref={email} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={senha} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-4" >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" ref={endereco} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" ref={cidade} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" ref={estado} />
                        </Form.Group>
                    </Row>
                    <Button variant="secondary" type="submit">Enviar</Button>
                </Form>
            </div>
        </section>
    );
}
export default Formulario;