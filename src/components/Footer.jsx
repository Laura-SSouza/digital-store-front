import Logo from "./Logo";
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import Info from "./Info";


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
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>

                <div className="flex justify-between gap-25.5">

                    <Info 
                        title="Informação"
                        informations={[
                            {"text": "Sobre Drip Store", "link": "/about"},    
                            {"text": "Segurança", "link": "/safety"},
                            {"text": "Wishlist", "link": "/wishlist"},
                            {"text": "Blog", "link": "/blog"},
                            {"text": "Trabalhe Conosco", "link": "/work"},
                            {"text": "Meus Pedidos", "link": "/orders"}
                        ]}

                    />

                    <Info 
                        title="Categorias"
                        informations={[
                            {"text": "Camisetas", "link": "/shirts"},    
                            {"text": "Calças", "link": "/pants"},
                            {"text": "Bonés", "link": "/hats"},
                            {"text": "Headphones", "link": "/headphones"},
                            {"text": "Tênis", "link": "/sneakers"},
                        ]}

                    />
                </div>

                <div className="flex flex-col items-start gap-2">
                    <p className="pb-2 font-bold">Contato</p>
                    <p className="w-58">Av. Santos Dummont, 1510 - 1
                    andar - Aldeota, Fortaleza -
                    CE, 60150-191</p>
                    <p>(85) 3051-3411</p>
                </div>

            </div>

            <div className="pb-5.5 mx-auto max-w-310 flex flex-col gap-5">
                <hr className="text-light-gray-2 opacity-30" />
                <p className="flex justify-center text-xs">&copy; {new Date().getFullYear()} Digital Store</p>
            </div>
        </footer>
    );
};

export default Footer;