type Props = { children: React.ReactNode }

const RegisterButton = ({ children }: Props) => {
  return (
    <button type="submit" className="button  bg-button-primary">
      {children}
    </button>
  )
}
export default RegisterButton
