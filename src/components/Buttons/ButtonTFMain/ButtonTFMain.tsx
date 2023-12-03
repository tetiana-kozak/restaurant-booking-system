import { ButtonProps } from "types/buttonProps";
import './ButtonTFMain.scss';

const ButtonTFMain: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_main'>
            {label}
        </button>
    )
};

export default ButtonTFMain;