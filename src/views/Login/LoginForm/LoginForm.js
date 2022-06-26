import '../../../sass/layout/_forms.scss';
import TextField from '../../../components/forms/TextField/TextField';
import ButtonField from '../../../components/forms/ButtonField/ButtonField';
import { Link } from 'react-router-dom';

// Handle login form submission
const handleLoginFormSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    // TODO: implement logic for login for submission
};

const LoginForm = () => {
    return (
        <form className="LoginForm" onSubmit={handleLoginFormSubmit}>
            <h2 className="LoginForm__title">Sign Into Account</h2>
            <div className="LoginForm__input-container">
                <TextField type="text" label="Email or username" />
                <TextField type="password" label="Password" />
            </div>
            <div className="LoginForm__options-container">
                <div className="LoginForm__remember-me">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <Link className="LoginForm__forgot-password" to="/forgotPassword">Forgot password?</Link>
            </div>
            <ButtonField label="Login" type="text" />
        </form>
    );
};

export default LoginForm;