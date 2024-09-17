type Props = {
  onClick?: () => void
  label: string
}

const ButtonAddTableTFSecondary = ({ onClick, label }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="font-sans text-[14px] text-text-color text-center font-normal leading-6 tracking-normal cursor-pointer"
    >
      {label}
    </button>
  )
}

export default ButtonAddTableTFSecondary
