import Header from "../../components/Header/Header";
import "./Registration.scss";
import BeeImage from "../../assets/images/bee.png"
import Input from "../../components/Input/input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

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
                                type="text"
                                placeholder="Your name"
                                name="name"
                                required
                                
                             />
                             
                             <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                
                             />

                            <Input
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                             />
                         </div>

                         <div className="registration_gender-radio">
                             <p className="registration_gender_title">Gender</p>

                             <div className="registration_gender_wrapper">
                                 <label className="registration_gender_item">
                                    <input type="radio" name="gender" />
                                    <p>Male</p>
                                </label>

                                <label className="registration_gender_item">
                                    <input type="radio" name="gender" />
                                    <p>Female</p>
                                 </label>
                             </div>
                         </div>

                         <Select options={options} />

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