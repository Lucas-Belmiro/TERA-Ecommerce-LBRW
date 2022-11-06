import "./Form2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";

const Form2 = ({ salvarForm2, estadoBotaoForm2 }) => {
  const [disable, setDisable] = useState(false);

  let meuInputCartao = useRef(null);
  let meuInputValidade = useRef(null);
  let meuInputCodigo = useRef(null);
  let meuInputNome = useRef(null);
  let meuInputParcelas = useRef(null);
  let meuInputBotao = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (disable === true) {
      setDisable(false);
      meuInputBotao.current.textContent = "Salvar";
      estadoBotaoForm2(false);
    } else {
      setDisable(true);
      meuInputBotao.current.textContent = "Editar";
      salvarForm2({
        cartao: meuInputCartao.current.value,
        validade: meuInputValidade.current.value,
        codigo: meuInputCodigo.current.value,
        nome: meuInputNome.current.value,
        parcelas: meuInputParcelas.current.value,
      });
      estadoBotaoForm2(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className="mt-3">Número do Cartão</Form.Label>
        <Form.Control
          required
          disabled={disable}
          as={InputMask}
          mask="9999 9999 9999 9999"
          ref={meuInputCartao}
          type="text"
          placeholder="Insira o número do cartão"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Validade</Form.Label>
        <Form.Control
          required
          disabled={disable}
          as={InputMask}
          mask="99/9999"
          ref={meuInputValidade}
          type="text"
          placeholder="Insira a validade"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Número de verificação</Form.Label>
        <Form.Control
          required
          disabled={disable}
          as={InputMask}
          mask="999"
          ref={meuInputCodigo}
          type="text"
          placeholder="Insira o número de verificação"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          disabled={disable}
          ref={meuInputNome}
          type="text"
          placeholder="Insira o nome da titular"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Parcelas</Form.Label>
        <Form.Select ref={meuInputParcelas} disabled={disable} id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
      </Form.Group>

      <Button
        ref={meuInputBotao}
        className="mb-3 w-100 mt-3"
        variant="primary"
        type="submit"
      >
        Salvar
      </Button>
    </Form>
  );
};

export default Form2;
