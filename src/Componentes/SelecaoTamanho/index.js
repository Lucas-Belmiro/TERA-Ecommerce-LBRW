import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function SelecaoTamanho() {

const [tamanho, setTamanho] = useState('38')

  useEffect(()=>{
    setTamanho(localStorage.setItem("tamanho", JSON.stringify(38)))
}, [])

  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check onClick={() => setTamanho(localStorage.setItem("tamanho", JSON.stringify(38)))}
            inline
            label="38"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            defaultChecked

          />
          <Form.Check onClick={() => setTamanho(localStorage.setItem("tamanho", JSON.stringify(40)))}
            inline
            label="40"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
      
          />
          <Form.Check onClick={() => setTamanho(localStorage.setItem("tamanho", JSON.stringify(41)))}
            inline
            label="41"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />

            <Form.Check onClick={() => setTamanho(localStorage.setItem("tamanho", JSON.stringify(44)))}
            inline
            label="44"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}
    </Form>
  );
}

export default SelecaoTamanho;