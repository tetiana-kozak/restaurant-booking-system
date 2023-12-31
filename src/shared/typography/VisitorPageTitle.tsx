type Props = {
  children: React.ReactNode
}
const VisitorPageTitle = ({ children }: Props) => {
  return (
    <div className="font-sans text-large md:text-h2 text-text-color text-center">
      {children}
    </div>
  )
}
export default VisitorPageTitle
