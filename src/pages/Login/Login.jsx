import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/images/bee.png"

export default function Login () {
    return (
        <div className="login">
            <Header />

            <section className="login_main-section">
                <img className="login_bee-image" src={BeeImage} alt="" />
                <form className="login_form">
                    <h2 className="login_title">Log in</h2>
                </form>
            </section>
        </div>
    )
}