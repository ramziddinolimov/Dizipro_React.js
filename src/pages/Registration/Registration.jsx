import Header from "../../components/Header/Header";
import "./Registration.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Registration () {
    return (
        <div className="registration">
            <Header />

            <section className="registration_main-section">
                <img className="registration_bee-image" src={BeeImage} alt="" />
                <div className="registration_form-wrapper">
                    <form className="registration_form">
                         <h2 className="registration_title">Sign Up</h2>

                         <div className="registration_form_inputs">
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

                         <Link className="registration_form_forgot-password-link" to="/forgot-password">Forgot your password?</Link>

                         <Button>Registration</Button>

                         <div className="registration_form_signup-text-wrapper">
                            <p>Don't have an account?</p>
                            <Link className="registration_form_forgot-password-link" to="/signup">Sign up</Link>
                         </div>
                    </form>
                </div>
            </section>
        </div>
    )
}