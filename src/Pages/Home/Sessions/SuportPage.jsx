import React from "react";
import { useState } from "react";

import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";


export default function SuportPage() {

    // State para armazenar o texto digitado pelo usuário
    const [message, setMessage] = useState('');

    // Função para enviar o email
    const sendEmail = () => {
        // Lógica para enviar o email aqui
        console.log('Email enviado com sucesso:', message);
        // Limpa o campo de texto após enviar o email
        setMessage('');
    };
    return (
        <section className="container mt-5">
            <Card style={{ backgroundColor: 'whiteSmoke' }} className="border-0">
                <CardHeader className="p-4">
                    <h2>
                        Houve algum problema ?
                    </h2>
                </CardHeader>
                <CardBody>
                    <CardText className="p-3">
                        <span >
                            Nos envie um email contendo:
                        </span>
                        <i>
                            <ul>
                                <li>Seu nome e email</li>
                                <li>Seu problema</li>
                                <li>Quando ocorreu/ocorre</li>
                            </ul>
                        </i>
                        <span>Envie tambem suas dúvidas, responderemos com prazer!</span>
                    </CardText>
                    <Form>
                        <Form.Group controlId="formMessage">
                            <Form.Label><i>Digite aqui sua mensagem:</i></Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Digite sua mensagem aqui..."
                                // value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="mt-2" variant="primary" onClick={sendEmail}>
                            Enviar Email
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    )
}