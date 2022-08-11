import "./Footer.css"

const Footer = ()=>{
    return (

        <>
        <section className="footer">
            <div>
                <img className="logo" src="/imagens/logoBranca.png" alt="Logo da empresa"></img>
                
                <div className="icones-sociais">
                    <img src="/imagens/logoInsta.png" alt="Logo do Instagram"></img>
                    <img src="/imagens/logoTwitter.png" alt="Logo do Twitter"></img>
                    <img src="/imagens/logoFacebook.png" alt="Logo do Facebook"></img>
                    <img src="/imagens/logoTwitter2.png" alt="Logo da Twitch"></img>
                </div>

            </div>
        </section>

        <section className="direitos">
            <h6>
                 © 2022 Copyright: lucasbelmiro.com.br
            </h6>
        </section>

        </>
    )
}

export default Footer;