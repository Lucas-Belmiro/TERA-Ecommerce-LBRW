import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import './SelecaoTamanho.css'

function SelecaoTamanho(props) {
    const [tamanho, setTamanho] = useState('38')

    useEffect(() => {
        const produtosExtistentes =
            JSON.parse(localStorage.getItem('itensDoCarrinho')) || []

        produtosExtistentes.forEach((element) => {
            if (element.id == props.id) {
                element.size = tamanho
            }
        })

        localStorage.setItem(
            'itensDoCarrinho',
            JSON.stringify(produtosExtistentes)
        )
    }, [tamanho])

    return (
        <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        className="form-selecao"
                        onClick={() => setTamanho(38)}
                        inline
                        label="38"
                        name="tamanho 38"
                        type={type}
                        id={`inline-${type}-1`}
                        defaultChecked
                        aria-label="button 38"
                    />
                    <Form.Check
                        onClick={() => setTamanho(40)}
                        inline
                        label="40"
                        name="tamanho 40"
                        type={type}
                        id={`inline-${type}-2`}
                        aria-label="button 38"
                    />
                    <Form.Check
                        onClick={() => setTamanho(41)}
                        inline
                        label="41"
                        name="tamanho 41"
                        type={type}
                        id={`inline-${type}-3`}
                        aria-label="button 38"
                    />

                    <Form.Check
                        onClick={() => setTamanho(44)}
                        inline
                        label="44"
                        name="tamanho 44"
                        type={type}
                        id={`inline-${type}-4`}
                        aria-label="button 38"
                    />
                </div>
            ))}
        </Form>
    )
}

export default SelecaoTamanho
