type Props = {
  children: React.ReactNode
}

const VisitorBackgroundContainer = ({ children }: Props) => {
  return (
    <div className="rounded-md bg-iframe_bg_color h-full md:h-calc-h w-full shadow-page_shadow overflow-auto">
      {children}
    </div>
  )
}
export default VisitorBackgroundContainer
