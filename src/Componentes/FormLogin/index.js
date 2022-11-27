import './FormLogin.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { CartContext } from '../../Providers/CartProvider'

function FormLogin() {
    const navigate = useNavigate()

    let meuInputEmail = useRef(null)
    let meuInputSenha = useRef(null)
    const [userId, setUserId] = useState('')
    const { nomeLog, setNomeLog } = React.useContext(CartContext)

    function printa() {
        const tokenExistente = localStorage.getItem('token') || []

        const options2 = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ tokenExistente: tokenExistente }),
        }

        fetch(`https://lucasbelmiro.com/verifyToken`, options2).then((res) => {
            if (res.status == 200) {
                res.json().then((data) => {
                    localStorage.setItem('idUser', data.userVerify._id)
                })
            } else {
                console.log('dados não enviados')
            }
        })

        const idUser = localStorage.getItem('idUser') || []

        const options3 = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ valorNome: idUser }),
        }

        console.log(idUser)

        fetch(`https://lucasbelmiro.com/findName`, options3).then((res) => {
            if (res.status == 200) {
                res.json().then((data) => {
                    setNomeLog(data.nome)

                    console.log(nomeLog)
                })
            } else {
                console.log('dados nao enviados')
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        let email = meuInputEmail.current.value
        let senha = meuInputSenha.current.value

        let post = { email, senha }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify(post),
        }

        fetch('https://lucasbelmiro.com/login', options).then((res) => {
            console.log(res)

            meuInputEmail.current.value = ''
            meuInputSenha.current.value = ''

            if (res.status == 200) {
                //alert("Usuário logado com sucesso!");

                res.json().then((data) => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    printa()
                    //return navigate('/comprafinal')
                })
            } else {
                alert('Erro ao logar')
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço de e-mail</Form.Label>
                <Form.Control
                    ref={meuInputEmail}
                    type="email"
                    placeholder="Insira seu e-mail"
                />
                <Form.Text className="text-muted">
                    Nos comprometemos a não compartilhar seus dados.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    ref={meuInputSenha}
                    type="password"
                    placeholder="Insira sua senha"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Manter login" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
            <Link to="/cadastro" as={Link} className="botao-cadastro">
                {' '}
                Fazer cadastro{' '}
            </Link>
        </Form>
    )
}

export default FormLogin
