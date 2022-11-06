import './PaginaNaoEncontrada.css'
import { Link } from 'react-router-dom';

//import api from '../../../services/api';

const PaginaNaoEncontrada = ()=>{


  return(
    <div>
        <h1>Página não encontrada 1</h1>
        <Link to="/login" as={Link} className="btn btn-success"> Fazer login </Link>
    </div>  
  )
}

export default PaginaNaoEncontrada;