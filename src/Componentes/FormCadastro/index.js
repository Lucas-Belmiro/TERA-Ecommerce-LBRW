import "./FormCadastro.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


function FormCadastro() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="email" placeholder="Insira seu nome" />
        <Form.Text className="text-muted">
          Nos comprometemos a não compartilhar seus dados.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="password" placeholder="Insira seu e-mail" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Insira sua senha" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>

      <Link to="/login" as={Link} className="botao-login"> Fazer login </Link>


    </Form>
  );
}

export default FormCadastro;
