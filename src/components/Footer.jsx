import Logo from "./Logo";
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"


// TODO: USAR MAP PROS LINKS DO FOOTER (ULTIMAS 3 DIVS)

const Footer = () => {
    return (
        <footer className="bg-dark-gray text-white">
            <div className="py-18 flex justify-between mx-auto max-w-311">

                <div className="flex flex-col gap-9">    
                    <Logo mode="footer" />

                    <p className="w-76.75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    
                    <div className="flex items-start gap-7">
                        <a href="facebook.com" target="_blank"><img src={facebook} alt="facebook" /></a>
                        <a href="instagram.com" target="_blank"><img src={instagram} alt="instagram" /></a>
                        <a href="twitter.com" target="_blank"><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>

                <div className="flex justify-between gap-25.5">
                    <div className="flex flex-col gap-3">
                        <p className="pb-5 font-bold">Informação</p>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe Conosco</p>
                        <p>Meus Pedidos</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="pb-5 font-bold">Categorias</p>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <p className="pb-5 font-bold">Contato</p>
                    <p className="w-75">Av. Santos Dummont, 1510 - 1
                    andar - Aldeota, Fortaleza -
                    CE, 60150-191</p>
                    <p>(85) 3051-3411</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;