import { Link } from "react-router";

const NotFound = () => {
    return (
        <div>
            <h3>Página não encontrada</h3>
            <Link to="/">Voltar para página inicial.</Link>
        </div>
    );
};

export default NotFound;