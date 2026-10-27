import searchTool from "../../assets/search-tool.svg"

// TODO: ADICIONAR FUNCIONALIDADE DO CAMPO DE BUSCA

const SearchField = () => {
    return (<form className="flex items-center rounded-lg bg-light-gray-3 w-139.75 h-15 px-6 pl-8 pr-6">
    <input
        className="flex-1 outline-none text-base leading-7 tracking-[.75px] placeholder:opacity-60"
        type="text"
        placeholder="Pesquisar produto..."
    />
    <button type="submit" aria-label="Enviar">
        <img src={searchTool} alt="" className="w-[18.76px] h-[19.72px] opacity-50" />
    </button>
    </form>)
};
export default SearchField;