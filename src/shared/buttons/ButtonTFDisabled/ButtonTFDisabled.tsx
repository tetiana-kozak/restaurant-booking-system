
type Props = {
    onClick: () => void
    label: string
}
  
const ButtonTFDisabled = ({ onClick, label }: Props) => {
    return (
      <button onClick={onClick} className="font-sans text-p leading-8 cursor-pointer bg-button-disabled py-10 px-41 rounded-100">
        {label}
      </button>
    )
}
  
export default ButtonTFDisabled;