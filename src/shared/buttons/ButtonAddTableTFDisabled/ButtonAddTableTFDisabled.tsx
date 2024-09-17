type Props = {
  onClick?: () => void
  label: string
}

const ButtonAddTableTFDisabled = ({ onClick, label }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-[131px] p-[12px_24px] rounded-[100px] bg-stepper font-sans text-[14px] text-text-color text-center font-[300] leading-6 tracking-[0.15px] cursor-default"
    >
      {label}
    </button>
  )
}

export default ButtonAddTableTFDisabled
