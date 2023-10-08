import './ModalContainer.scss'

type Props = {
  children: React.ReactNode
  handleClose: (isOpen: boolean) => void
}

const ModalContainer = ({ children, handleClose }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="text-large font-medium">Додати заклад</h5>
          <button onClick={() => handleClose(false)}>X</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">
          <button className="button">Скасувати</button>
          <button className="button bg-button-primary">Зберегти</button>
        </div>
      </div>
    </div>
  )
}
export default ModalContainer
