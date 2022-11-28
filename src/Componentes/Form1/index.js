import './Form1.css'
import Button from 'react-bootstrap/Button'
import InputMask from 'react-input-mask'
import Form from 'react-bootstrap/Form'
import { useEffect, useRef, useState } from 'react'

const Form1 = ({ salvarForm, estadoBotaoForm1 }) => {
    const [disable, setDisable] = useState(false)

    let meuInputCep = useRef(null)
    let meuInputCidade = useRef(null)
    let meuInputEstado = useRef(null)
    let meuInputRua = useRef(null)
    let meuInputNumero = useRef(null)
    let meuInputComplemento = useRef(null)
    let meuInputBotao = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()

        if (disable === true) {
            setDisable(false)
            meuInputBotao.current.textContent = 'Salvar'
            estadoBotaoForm1(false)
        } else {
            setDisable(true)
            meuInputBotao.current.textContent = 'Editar'
            salvarForm({
                cep: meuInputCep.current.value,
                cidade: meuInputCidade.current.value,
                estado: meuInputEstado.current.value,
                rua: meuInputRua.current.value,
                numero: meuInputNumero.current.value,
                complemento: meuInputComplemento.current.value,
            })
            estadoBotaoForm1(true)
        }
    }

    function handleChange(event) {
        event.preventDefault()

        let cep = meuInputCep.current.value
        let numbers = cep.replace(/[^0-9]/g, '')

        if (numbers.length > 7) {
            fetch(`https://viacep.com.br/ws/${numbers}/json/`).then((res) => {
                res.json().then((data) => {
                    meuInputCidade.current.value = data.localidade
                    meuInputEstado.current.value = data.uf
                    meuInputRua.current.value = data.logradouro
                })
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group
                onChange={handleChange}
                className="mb-3"
                controlId="formBasicText"
            >
                <Form.Label className="mt-3">Insira seu CEP</Form.Label>
                <Form.Control
                    disabled={disable}
                    as={InputMask}
                    mask="99999-999"
                    ref={meuInputCep}
                    required
                    type="text"
                    placeholder="Insira seu cep"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                    disabled={disable}
                    type="text"
                    ref={meuInputCidade}
                    placeholder="Insira o nome da cidade"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    disabled={disable}
                    type="text"
                    ref={meuInputEstado}
                    placeholder="Insira o nome do Estado"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Rua</Form.Label>
                <Form.Control
                    disabled={disable}
                    type="text"
                    ref={meuInputRua}
                    placeholder="Insira sua rua"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Número</Form.Label>
                <Form.Control
                    disabled={disable}
                    required
                    type="text"
                    ref={meuInputNumero}
                    placeholder="Insira seu número"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                    disabled={disable}
                    required
                    type="text"
                    ref={meuInputComplemento}
                    placeholder="Insira o complemento"
                />
            </Form.Group>

            <Button
                className="mb-3 button-form1"
                ref={meuInputBotao}
                variant="primary"
                type="submit"
            >
                Salvar
            </Button>
        </Form>
    )
}

export default Form1
