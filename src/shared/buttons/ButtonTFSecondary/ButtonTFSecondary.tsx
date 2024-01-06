type Props = {
  onClick?: () => void
  label: string
}

const ButtonTFSecondary = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-normal md:text-p text-button-primary leading-8 cursor-pointer py-13 px-30 rounded-100 hover:bg-hover-btn-secondary hover:shadow-hover-btn transition-all"
    >
      {label}
    </button>
  )
}

export default ButtonTFSecondary
