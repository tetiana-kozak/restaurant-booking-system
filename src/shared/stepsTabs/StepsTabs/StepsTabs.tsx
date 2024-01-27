type Props = {
  steps: string[];
  activeStep: number;
}

const StepTabs = ({ steps, activeStep }: Props) => {

  return (
    <div className="w-665">
      <div>
        {steps.map((step, index) => {
          let buttonClass = 'bg-stepper';
          let textColor = 'text-text-color';

          if (index < activeStep) {
            buttonClass = 'bg-secondary';
          } else if (index === activeStep) {
            buttonClass = 'bg-button-secondary';
            textColor = 'text-white';
          } else if (index > activeStep) {
            buttonClass = 'bg-stepper';
          }

          return (
            <button
              type="button"
              key={index}
              className={`py-20 px-10 w-164 font-sans text-p ${textColor} ${buttonClass}`}
              disabled={index > activeStep || index === 0}
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
