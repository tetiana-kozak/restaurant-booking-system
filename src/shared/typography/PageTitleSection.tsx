import { ReactNode } from 'react'

type Props = {
  children: React.ReactNode
}
const PageTitleSection = ({ children }: Props) => {
  return (
    <div className="border-b-2 border-primary border-solid">
      <h1 className="mb-[10px]">{children}</h1>
    </div>
  )
}
export default PageTitleSection
