import './ModalActions.scss'

type Props = {
  handleClose: () => void
}

const ModalActions = ({ handleClose }: Props) => {
  return (
    <div className="main-modal_actions">
      <button type="button" className="button " onClick={() => handleClose()}>
        Скасувати
      </button>
      <button type="submit" className="button bg-button-primary ">
        Зберегти
      </button>
    </div>
  )
}
export default ModalActions
