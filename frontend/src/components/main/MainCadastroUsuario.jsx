import React, { useState } from "react";
import "./MainCadastroUsuario.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const UseState = () => {
    const [nome, setNome] = useState("Digite seu nome")
    const [email, setEmail] = useState("Digite seu E-mail")
    const [senha, setSenha] = useState("")
    const [endereco, setEndereco] = useState("Digite seu endereco")
    const [cidade, setCidade] = useState("Digite sua cidade")
    const [estado, setEstado] = useState("Digite seu estado!")

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