import { buttonProps } from "shared/types/buttonProps";
import './ButtonTFPrimary.scss';

const ButtonTFPrimary: React.FC<buttonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_primary'>
            {label}
        </button>
    )
};

export default ButtonTFPrimary;