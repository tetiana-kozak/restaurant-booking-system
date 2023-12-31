type Props = {
  onClick?: () => void
  label: string
}

const ButtonTFDisabled = ({ onClick, label }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-normal md:text-p text-text-color leading-8 bg-button-disabled py-8 md:py-12 px-30 rounded-100 cursor-default"
    >
      {label}
    </button>
  )
}

export default ButtonTFDisabled
