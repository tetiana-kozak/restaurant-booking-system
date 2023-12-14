
type Props = {
    onClick: () => void
    label: string
}
  
const ButtonTFDisabled = ({ onClick, label }: Props) => {
    return (
      <button onClick={onClick} className="font-sans text-p text-text-color leading-8 cursor-pointer bg-button-disabled py-13 px-30 rounded-100 hover:shadow-hover-btn active:shadow-hover-btn focus:shadow-hover-btn transition-btn-transition">
        {label}
      </button>
    )
}
  
export default ButtonTFDisabled;