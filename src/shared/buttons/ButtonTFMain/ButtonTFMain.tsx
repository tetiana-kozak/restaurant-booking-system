type Props = {
  onClick?: () => void
  label: string
}

const ButtonTFMain = ({ onClick, label }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-normal md:text-p  text-text-color leading-8 cursor-pointer bg-button-primary py-12 px-30 rounded-100 hover:shadow-hover-btn hover:bg-hover-btn-primary transition-all"
    >
      {label}
    </button>
  )
}

export default ButtonTFMain
