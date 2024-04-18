import React, {useState,} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !senha | !senhaConf) {
        setError("Preencha todos os campos");
        return;
    } else if(senha !== senhaConf){
      setError("As senhas não são iguais");
      return;
    }
    
    const res = signup(email, senha, firstName, lastName);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/");
  }

  return (
    <Container className="mt-5 p-5" style={{ backgroundColor: '#DDF2FD', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Form>
        <Row className="mb-4">
          <Form.Group as={Col} md="6">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              required
              type="nome"
              placeholder="Nome:"
              value={firstName}
              onChange={(e) => [setFirstName(e.target.value), setError("")]}
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Sobrenome:</Form.Label>
            <Form.Control
              required
              type="sobrenome"
              placeholder="Sobrenome:"
              value={lastName}
              onChange={(e) => [setLastName(e.target.value), setError("")]}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} md="12">
          <Form.Label>Email:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="E-mail:"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              required
            />
          </InputGroup>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha:"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
              required
            />
            <Form.Control.Feedback type="invalid">
              Sua senha deve conter no minimo 8 caracteres!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha:"
              value={senhaConf}
              onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceito todos os termos e condições"
            feedback="Campo nao selecionado!"
            feedbackType="invalid"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button onClick={handleSignup}>Criar conta</Button>
        </Form.Group>
        <Form.Label>
          Já possui conta ?
          <strong>
            <Link to="/LoginScreen">&nbsp;Entrar</Link>
          </strong>
        </Form.Label>
      </Form>
    </Container>
  );
}

export default Register;















// export default function Register() {


//     return (
//         <Form>
//             <Form.Group className="mb-3" controlId="formRegisterName">
//                 <Form.Label>Nome:</Form.Label>
//                 <Form.Control type="email" placeholder="Nome:" />
//                 <Form.Label>Sobrenome:</Form.Label>
//                 <Form.Control type="email" placeholder="Sobrenome:" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formRegisterEmail">
//                 <Form.Label>E-mail:</Form.Label>
//                 <Form.Control type="email" placeholder="E-mail:" />
//                 <Form.Text className="text-muted">
//                     Nunca compartilhamos seu email com terceiros.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formRegisterPassword">
//                 <Form.Label>Senha:</Form.Label>
//                 <Form.Control type="password" placeholder="Senha:" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formCheckbox">

//             </Form.Group>
//         </Form>

//     )
// }