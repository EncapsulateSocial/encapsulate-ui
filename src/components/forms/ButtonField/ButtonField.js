import '../../../sass/components/ButtonField.scss';

const ButtonField = ({ 
    label,
    type,
    fill = true
}) => {
    return (
        <button 
            className={`ButtonField ${fill ? "ButtonField--filled" : ""}`}
            type={type}
        > 
            {label}
        </button>
    );
}

export default ButtonField;