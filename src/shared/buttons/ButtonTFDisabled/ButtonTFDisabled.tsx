import { buttonProps } from 'shared/types/buttonProps';
import './ButtonTFDisabled.scss';

const ButtonTFDisabled: React.FC<buttonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_disabled'>
            {label}
        </button>
    )
};

export default ButtonTFDisabled;