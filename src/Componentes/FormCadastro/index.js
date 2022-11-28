import './FormCadastro.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'

function FormCadastro() {
    const navigate = useNavigate()
    let meuInputNome = useRef(null)
    let meuInputEmail = useRef(null)
    let meuInputSenha = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()

        let nome = meuInputNome.current.value
        let email = meuInputEmail.current.value
        let senha = meuInputSenha.current.value

        let post = { nome, email, senha }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify(post),
        }

        fetch('https://lucasbelmiro.com/save', options).then((res) => {
            console.log(res)
            meuInputNome.current.value = ''
            meuInputEmail.current.value = ''
            meuInputSenha.current.value = ''

            if (res.status == 200) {
                alert('Usuário cadastrado com sucesso!')
                return navigate('/login')
            } else {
                alert('Erro ao cadastrar')
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    required
                    ref={meuInputNome}
                    type="text"
                    placeholder="Insira seu nome"
                />
                <Form.Text className="text-muted">
                    Nos comprometemos a não compartilhar seus dados.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    required
                    ref={meuInputEmail}
                    type="email"
                    placeholder="Insira seu e-mail"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    required
                    ref={meuInputSenha}
                    type="password"
                    placeholder="Insira sua senha"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>

            <Link to="/login" as={Link} className="botao-login">
                {' '}
                Fazer login{' '}
            </Link>
        </Form>
    )
}

export default FormCadastro
