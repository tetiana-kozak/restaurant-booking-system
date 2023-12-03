import { ButtonProps } from "types/buttonProps";
import './ButtonTFDisabled.scss';

const ButtonTFDisabled: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_disabled'>
            {label}
        </button>
    )
};

export default ButtonTFDisabled;