import { ButtonProps } from "types/buttonProps";
import './ButtonTFPrimary.scss';

const ButtonTFPrimary: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_primary'>
            {label}
        </button>
    )
};

export default ButtonTFPrimary;