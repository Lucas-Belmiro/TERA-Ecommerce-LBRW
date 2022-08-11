import Form from 'react-bootstrap/Form';

function SelecaoTamanho() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="38"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="40"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="41"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />

            <Form.Check
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