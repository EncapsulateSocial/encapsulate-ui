import '../../../sass/layout/forms/login/LoginForm.scss';
import TextField from '../../../components/forms/TextField/TextField';
import ButtonField from '../../../components/forms/ButtonField/ButtonField';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    // For redirecting to another page
    let navigate = useNavigate();

    // Handle login form submission
    const handleLoginFormSubmit = (e) => {
        // Prevent the page from reloading
        e.preventDefault();

        // TODO: implement logic for login for submission
    };

    // Handle create account button click
    const handleCreateAccountClick = (e) => {
        e.preventDefault();
        navigate("/register");
    }

    return (
        <form className="LoginForm" onSubmit={handleLoginFormSubmit}>
            <h2 className="LoginForm__title">Sign Into Account</h2>
            <div className="LoginForm__login-section">
                <div className="LoginForm__input-container">
                    <TextField type="text" label="Email or username" />
                    <TextField type="password" label="Password" />
                </div>
                <div className="LoginForm__options-container">
                    <Link 
                        className="LoginForm__forgot-password" 
                        to="/forgotPassword"
                    >
                        Forgot password?
                    </Link>
                </div>
                <ButtonField 
                    className="LoginForm__login-button"
                    label="Login" 
                    type="text" 
                    fullWidth={true}
                />
            </div>
            <div className="LoginForm__create-account-section">
                <p className="LoginForm__create-account-description">
                    Or, if you don't have an account
                </p>
                <ButtonField 
                    className="LoginForm__create-account-button"
                    label="Create account" 
                    type="text" 
                    fill={false} 
                    fullWidth={true}
                    handler={handleCreateAccountClick}
                />
            </div>
        </form>
    );
};

export default LoginForm;