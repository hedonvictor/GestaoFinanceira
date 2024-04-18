import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha ) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha)

        if (res) {
            setError(res);
            return
        }

        navigate("/LoggedScreen")
    }

    // const { email, password } = this.state;
    return (
        <>
            <Container fluid style={{ height: '100vh' }}>
                <Row style={{ height: '100%' }}>
                    <Col md={6} className="logImgBackgroud" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        {/* left content */}
                    </Col>
                    <Col md={6} style={{ backgroundColor: '#DDF2FD', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Container para o formulário de login */}
                        <div className="login-container" >
                            <h2 className="mb-3">Fazer Login</h2>
                            <div className="">
                                <div className="mb-3">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Seu email:"
                                        id="email"
                                        value={email}
                                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Sua senha:"
                                        value={senha}
                                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                                        required
                                    />
                                </div>
                                <button className="btn btn-primary mb-3" onClick={handleLogin} style={{width: "100%"}}>Entrar</button>
                            </div>
                            <label>
                                Não posui conta ?
                                <strong>
                                    <Link to="/Register">&nbsp;Registre-se</Link>
                                </strong>
                            </label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginScreen;


