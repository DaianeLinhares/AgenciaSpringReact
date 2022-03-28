import React, { useRef } from "react";
import "./MainCadastroUsuario.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import api from "../api";

const UseState = () => {
    const [nome] = useRef()
    const [email] = useRef()
    const [senha] = useRef()
    const [endereco] = useRef()
    const [cidade] = useRef()
    const [estado] = useRef()

    return (
        <section className="MainCadastroUsuario">
            <div className="DivFormulario">
                <Form className="FormularioContato">
                    <Row>
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" value={nome}
                                onChange={e => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" value={senha}
                                onChange={e => setSenha(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-4" >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={endereco}
                            onChange={e => setEndereco(e.target.value)} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control value={cidade}
                                onChange={e => setCidade(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Estado</Form.Label>
                            <Form.Control value={estado}
                                onChange={e => setEstado(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onChange={e => alert(e.target.value)}>
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
}
export default UseState;