import "./FormLogin.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

function FormLogin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Insira seu e-mail" />
        <Form.Text className="text-muted">
          Nos comprometemos a não compartilhar seus dados.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Insira sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Manter login" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      <Link to="/cadastro" as={Link} className="botao-cadastro"> Fazer cadastro </Link>
    </Form>
  );
}

export default FormLogin;
