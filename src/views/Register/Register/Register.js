import React from 'react'; 
import Header from '../../../components/headers/Header';
import RegisterForm from "../RegisterForm/RegisterForm";

const Register = () => {
    return (
        <div className="Register">
            <Header simplify={true} />
            <RegisterForm />
        </div>
    );
};

export default Register;