import BarraPromocao from "../../Componentes/BarraPromocao";
import Footer from "../../Componentes/Footer";
import FormCadastro from "../../Componentes/FormCadastro";
import Topo from "../../Componentes/Topo";
import "./Cadastro.css"


const Cadastro = ()=>{
    return(
        <div>
            <BarraPromocao/>
            <Topo></Topo>
            <section>
                <div className="divisor-cadastro">
                    <h4>Insira seu cadastro abaixo</h4>
                    <section className="form-cadastro">
                        <div>
                            <FormCadastro></FormCadastro>
                        </div>
                        <div>
                            <img src="/imagens/ImageWoman.png"></img>
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

export default Cadastro;
