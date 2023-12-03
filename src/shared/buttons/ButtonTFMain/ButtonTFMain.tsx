import { buttonProps } from 'shared/types/buttonProps';
import './ButtonTFMain.scss';

const ButtonTFMain: React.FC<buttonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button_tf_main'>
            {label}
        </button>
    )
};

export default ButtonTFMain;