import BarraPromocao from "../../Componentes/BarraPromocao";
import Footer from "../../Componentes/Footer";
import FormLogin from "../../Componentes/FormLogin";
import Topo from "../../Componentes/Topo";
import "./Login.css"


const Login = ()=>{
    return(
        <div>
            <BarraPromocao/>
            <Topo></Topo>
            <section>
                <div className="divisor-login">
                    <h4>Insira seu login abaixo</h4>
                    <section className="form-login">
                        <div>
                            <FormLogin></FormLogin>
                        </div>
                        <div>
                            <img src="/imagens/sportMan.png" alt="Esportista com garrafa de água na mão"></img>
                        </div> 
                    </section>
                </div>

                <div>
                    
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Login;
