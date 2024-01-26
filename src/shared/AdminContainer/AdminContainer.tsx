import { ReactNode } from 'react'

type Props = {
  children: React.ReactNode
}
const AdminContainer = ({ children }: Props) => {
  return (
    <div className="p-[40px_32px]">
        {children}
    </div>
  )
}
export default AdminContainer;
