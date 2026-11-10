import Logo from "./Logo";
import SearchField from "./SearchField";
import { Link, NavLink } from "react-router";
import miniCart from "../../assets/mini-cart.svg";

const Header = () => {
    return (
        <header>
            <div className="mx-auto max-w-310 py-8.5 flex flex-col gap-6">

                <div className="flex items-center gap-4">
                    <Logo />
                    <SearchField />
                    
                    <div className="flex items-center gap-7.5 whitespace-nowrap ml-12">
                        <Link to="/signup" 
                        className="underline decoration-solid underline-offset-3 decoration-1 text-dark-gray-2 hover:text-dark-gray-3">
                            Cadastre-se
                        </Link>
                        <button className="bg-primary hover:bg-tertiary text-white font-bold w-28.5 h-10 text-[14px] rounded-lg">
                            <Link to="/login">Entrar</Link>
                        </button>
                    </div>
                    
                    <img src={miniCart} alt="Carrinho de compras" className="w-8.25 h-7.5 ml-13.5" />
                </div>

                <nav>
                    <ul className="flex gap-8 text-dark-gray-2">
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/products">Produtos</NavLink></li>
                        <li><NavLink to="/categories">Categorias</NavLink></li>
                        <li><NavLink to="/orders">Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;