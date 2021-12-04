import "./Header.scss";
import Logo from "../../assets/images/logo.png";

export default function Header(){
    return (
        <header className="header">
            <div className="container">
                <img src={Logo} alt="" />
            </div>
        </header>
    )
}