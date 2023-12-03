import './ModalActions.scss'

type Props = {
  handleClose: () => void
  isSubmitButtonDisabled: boolean
}

const ModalActions = ({ handleClose, isSubmitButtonDisabled }: Props) => {
  return (
    <div className="main-modal_actions">
      <button
        type="button"
        className="button text-button-primary"
        onClick={() => handleClose()}
      >
        Скасувати
      </button>
      <button
        type="submit"
        className={`button  ${
          isSubmitButtonDisabled ? 'bg-button-disabled ' : 'bg-button-primary '
        }`}
        disabled={isSubmitButtonDisabled}
      >
        Зберегти
      </button>
    </div>
  )
}
export default ModalActions
