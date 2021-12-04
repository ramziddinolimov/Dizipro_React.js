import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/images/bee.png"

export default function Login () {
    return (
        <div className="login">
            <Header />

            <img src={BeeImage} alt="" />
        </div>
    )
}