import React from 'react'; 
import '../../../sass/components/TextField.scss';

const TextField = ({ 
    type,
    value, 
    label
}) => {
    return (
        <input 
            className={`TextField`}
            type={type}
            value={value}
            placeholder={label}
        />
    );
};

export default TextField;