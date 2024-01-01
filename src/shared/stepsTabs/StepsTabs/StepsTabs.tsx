
type Props = {
  steps: string[];
  activeStep: number;
}

const StepTabs = ({ steps, activeStep }:Props) => {

  return (
    <div className="w-665">
      <div>
        {steps.map((step, index) => {
          let buttonClass = 'stepper';
          if (index < activeStep) {
            buttonClass = 'stepper';
          } else if (index === activeStep) {
            buttonClass = 'button-secondary';
          } else if (index > activeStep) {
            buttonClass = 'secondary';
          }
          return (
            <button
              type="button"
              className={`py-10 px-20 w-164 font-sans text-p text-text-color bg-${buttonClass}`}
              disabled={index > activeStep}
            >
              {step}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default StepTabs;