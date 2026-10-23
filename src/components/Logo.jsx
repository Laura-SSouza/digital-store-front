import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

const Logo = ({mode = "header"}) => {
    const icon = mode == "footer" ? logoFooter : logoHeader;
    
    return <img src={icon} alt={mode} width={253} height={44} />;
};

export default Logo;