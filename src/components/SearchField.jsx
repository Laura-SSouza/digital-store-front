import searchTool from "../../assets/search-tool.svg"
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchField = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    const handleChange = (value) => {
        setInput(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/products?filter=${encodeURIComponent(input)}`)
    };

    return (<form className="flex items-center rounded-lg bg-light-gray-3 w-139.75 h-15 px-6"
        onSubmit={handleSubmit}>
    <input
        className="flex-1 outline-none text-base leading-7 tracking-[.75px]"
        type="text"
        placeholder="Pesquisar produto..."
        value={input} onChange={(e) => handleChange(e.target.value)}
    />
    <button type="submit" aria-label="Enviar">
        <img src={searchTool} alt="" className="w-[18.76px] h-[19.72px] opacity-50" />
    </button>
    </form>)
};
export default SearchField;