import './ModalActions.scss'

type Props = {
  handleClose: () => void
}

const ModalActions = ({ handleClose }: Props) => {
  return (
    <div className="modal-actions">
      <button className="button" onClick={() => handleClose()}>
        Скасувати
      </button>
      <button type="submit" className="button bg-button-primary">
        Зберегти
      </button>
    </div>
  )
}
export default ModalActions
