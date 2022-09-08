import React from 'react'; 
import '../../../sass/components/ButtonField.scss';

const ButtonField = ({ 
    label,
    type = "",
    fill = true,
    fullWidth = false,
    handler = null
}) => {
    return (
        <button 
            className={`ButtonField 
                ${fill ? "ButtonField--filled" : ""}
                ${fullWidth ? "ButtonField--full-width" : ""}
            `}
            type={type}
            onClick={handler}
        > 
            {label}
        </button>
    );
}

export default ButtonField;