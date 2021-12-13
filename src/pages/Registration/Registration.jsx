import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Login () {
    return (
        <div className="login">
            <Header />

            <section className="login_main-section">
                <img className="login_bee-image" src={BeeImage} alt="" />
                <div className="login_form-wrapper">
                    <form className="login_form">
                         <h2 className="login_title">Log in</h2>

                         <div className="login_form_inputs">
                             <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                error={true}
                             />

                            <Input
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                             />
                         </div>

                         <Link className="login_form_forgot-password-link" to="/forgot-password">Forgot your password?</Link>

                         <Button>Login</Button>

                         <div className="login_form_signup-text-wrapper">
                            <p>Don't have an account?</p>
                            <Link className="login_form_forgot-password-link" to="/signup">Sign up</Link>
                         </div>
                    </form>
                </div>
            </section>
        </div>
    )
}