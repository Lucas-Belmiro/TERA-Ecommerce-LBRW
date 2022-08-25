import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./SelecaoTamanho.css"

function SelecaoTamanho(props) {

const [tamanho, setTamanho] = useState('38')


useEffect(()=>{
  
  const produtosExtistentes = JSON.parse(localStorage.getItem("itensDoCarrinho")) || [];

  produtosExtistentes.forEach(element => {
      if(element.id == props.id){
          element.size = tamanho
      }
  });

  localStorage.setItem("itensDoCarrinho", JSON.stringify(produtosExtistentes))


}, [tamanho])

  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check className='form-selecao' onClick={() => setTamanho(38)}
            inline
            label="38"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            defaultChecked

          />
          <Form.Check onClick={() => setTamanho(40)}
            inline
            label="40"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
      
          />
          <Form.Check onClick={() => setTamanho(41)}
            inline
            label="41"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />

            <Form.Check onClick={() => setTamanho(44)}
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