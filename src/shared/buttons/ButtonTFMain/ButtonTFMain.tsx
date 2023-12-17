type Props = {
  onClick?: () => void
  label: string
}

const ButtonTFMain = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-p text-text-color leading-8 cursor-pointer bg-button-primary py-13 px-30 rounded-100 hover:shadow-hover-btn hover:bg-hover-btn-primary transition-all"
    >
      {label}
    </button>
  )
}

export default ButtonTFMain
