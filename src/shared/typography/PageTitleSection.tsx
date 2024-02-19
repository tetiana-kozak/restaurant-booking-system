import { ReactNode } from 'react'

type Props = {
  children: React.ReactNode
}
const PageTitleSection = ({ children }: Props) => {
  return (
    <div className=" p-[16px_8px]">
      <h1 className="text-text-color text-left font-sans text-xLarge font-normal leading-9">{children}</h1>
    </div>
  )
}
export default PageTitleSection;

