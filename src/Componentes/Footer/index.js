import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div>
                    <img
                        className="logo"
                        src={'/Imagens/logoBranca.png'}
                        alt="Logo da empresa"
                    ></img>

                    <div className="icones-sociais">
                        <img
                            src={'/Imagens/logoInsta.png'}
                            alt="Logo do Instagram"
                        ></img>
                        <img
                            src={'/Imagens/logoTwitter.png'}
                            alt="Logo do Twitter"
                        ></img>
                        <img
                            src={'/Imagens/logoFacebook.png'}
                            alt="Logo do Facebook"
                        ></img>
                        <img
                            src={'/Imagens/logoTwitter2.png'}
                            alt="Logo da Twitch"
                        ></img>
                    </div>
                </div>
            </section>

            <section className="direitos">
                <p>© 2022 Copyright: lucasbelmiro.com.br</p>
            </section>
        </>
    )
}

export default Footer
