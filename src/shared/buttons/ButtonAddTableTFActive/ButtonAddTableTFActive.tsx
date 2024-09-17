type Props = {
  onClick?: () => void
  label: string
}

const ButtonAddTableTFActive = ({ onClick, label }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-[131px] p-[12px_24px] rounded-[100px] bg-button-secondary font-sans text-[14px] text-white text-center font-[300] leading-6 tracking-[0.15px] cursor-pointer"
    >
      {label}
    </button>
  )
}

export default ButtonAddTableTFActive


