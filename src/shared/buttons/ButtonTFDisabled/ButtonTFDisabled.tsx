type Props = {
  onClick?: () => void
  label: string
}

const ButtonTFDisabled = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-p text-text-color leading-8  bg-button-disabled py-13 px-30 rounded-100 cursor-default"
    >
      {label}
    </button>
  )
}

export default ButtonTFDisabled
