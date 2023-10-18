import './ModalContainer.scss'

type Props = {
  children: React.ReactNode
  handleClose: () => void
  title: string
}

const ModalContainer = ({ children, handleClose, title }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="text-large font-medium">{title}</h5>
          <button onClick={() => handleClose()}>X</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
export default ModalContainer
