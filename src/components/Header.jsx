import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import miniCart from "../../assets/mini-cart.svg";

const Header = () => {
    return (
        <header><Logo />
            <Link to="/Signup">Cadastre-se</Link>
            <Link to="/Login">Entrar</Link>
            <img src={miniCart} alt="Carrinho de compras" width={33} height={29} />
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/products">Produtos</NavLink></li>
                    <li><NavLink to="/categories">Categorias</NavLink></li>
                    <li><NavLink to="/orders">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;