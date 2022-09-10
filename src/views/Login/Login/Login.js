import React from 'react'; 
import Header from '../../../components/headers/Header';
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
    return (
        <div className="Login">
            <Header className="Login__header" simplify={true} />
            <LoginForm />
        </div>
    );
};

export default Login;