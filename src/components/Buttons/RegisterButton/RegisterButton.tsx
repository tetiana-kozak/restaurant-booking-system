type Props = { children: React.ReactNode }

const RegisterButton = ({ children }: Props) => {
  return (
    <button type="submit" className="button">
      {children}
    </button>
  )
}
export default RegisterButton
