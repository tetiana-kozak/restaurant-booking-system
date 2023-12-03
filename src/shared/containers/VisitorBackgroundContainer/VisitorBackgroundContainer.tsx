type Props = {
  children: React.ReactNode
}

const VisitorBackgroundContainer = ({ children }: Props) => {
  return (
    <div className="rounded-md bg-iframe_bg_color h-full w-full shadow-page_shadow">
      {children}
    </div>
  )
}
export default VisitorBackgroundContainer
