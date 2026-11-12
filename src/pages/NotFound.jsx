import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-50">
            <h3>Página não encontrada.</h3>
            <Link to="/"
            className="underline decoration-solid underline-offset-3 decoration-1 text-primary hover:text-tertiary">
                Voltar para página inicial.
            </Link>
        </div>
    );
};

export default NotFound;