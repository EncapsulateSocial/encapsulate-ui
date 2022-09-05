import TextField from "../../../components/forms/TextField/TextField";
import ButtonField from "../../../components/forms/ButtonField/ButtonField";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    let navigate = useNavigate();

    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleSignInClick = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <form className="RegisterForm" onSubmit={handleRegisterFormSubmit}>
            <h2 className="RegisterForm__title">Create an Account</h2>
            <div className="RegisterForm__register-section">
                <div className="RegisterForm__input-container">
                    <TextField type="text" label="Username" />
                    <TextField type="text" label="Email address" />
                    <TextField type="password" label="Password" />
                    <TextField type="password" label="Confirm password" />
                </div>
                <ButtonField
                    className="RegisterForm__sign-up-button"
                    label="Sign up"
                    type="submit"
                    fullWidth={true}
                />
            </div>
            <div className="RegisterForm__sign-in-section">
                <p className="RegisterForm__sign-in-description">
                    Or, if you already have an account
                </p>
                <ButtonField
                    className="RegisterForm__sign-in-button"
                    label="Sign in"
                    type="text"
                    fill={false}
                    fullWidth={true}
                    handler={handleSignInClick}
                />
            </div>
        </form>
    );
};

export default RegisterForm;