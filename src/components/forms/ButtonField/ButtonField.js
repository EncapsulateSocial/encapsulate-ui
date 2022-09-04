import '../../../sass/components/ButtonField.scss';

const ButtonField = ({ 
    label,
    type = "",
    fill = true,
    handler = null
}) => {
    return (
        <button 
            className={`ButtonField ${fill ? "ButtonField--filled" : ""}`}
            type={type}
            onClick={handler}
        > 
            {label}
        </button>
    );
}

export default ButtonField;