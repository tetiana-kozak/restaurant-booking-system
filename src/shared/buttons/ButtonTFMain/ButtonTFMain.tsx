
type Props = {
    onClick: () => void
    label: string
  }

const ButtonTFMain = ({ onClick, label }: Props) => {
    return (
        <button onClick={onClick} className="font-sans text-p text-text-color leading-8 cursor-pointer bg-button-primary py-13 px-30 rounded-100 hover:shadow-hover-btn focus:shadow-hover-btn active:shadow-hover-btn transition-btn-transition">
            {label}
        </button>
    )
};

export default ButtonTFMain;