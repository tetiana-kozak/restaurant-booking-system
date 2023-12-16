
type Props = {
    onClick: () => void
    label: string
}

const ButtonTFSecondary = ({ onClick, label }: Props) => {
    return (
        <button onClick={onClick} className="font-sans text-p text-button-primary leading-8 cursor-pointer bg-iframe_bg_color py-13 px-30 rounded-100 hover:shadow-hover-btn focus:shadow-hover-btn active:shadow-hover-btn transition-btn-transition">
            {label}
        </button>
    )
};

export default ButtonTFSecondary;