import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

const Logo = ({mode = "header"}) => {
    const icon = mode === "footer" ? logoFooter : logoHeader;
    
    return <img src={icon} alt="Digital Store" className="w-63.25 h-11" />;
};

export default Logo;