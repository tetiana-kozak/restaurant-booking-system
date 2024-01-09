import { useState } from "react";
import { toast } from "react-toastify";
import ButtonTFDisabled from "shared/buttons/ButtonTFDisabled/ButtonTFDisabled";
import ButtonTFMain from "shared/buttons/ButtonTFMain/ButtonTFMain";
import StepsTabs from 'shared/stepsTabs/StepsTabs/StepsTabs';
import BasicDateCalendar from "../BasicDateCalendar/BasicDateCalendar";

const ReservationStepOne = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const steps = ['Крок 1', 'Крок 2', 'Крок 3', 'Крок 4'];
    const [activeStep, setActiveStep] = useState<number>(0);

    const clickNext = () => {
      const isDateSelected = true; //Якщо обрана дата і час на календарі - ще треба змінити!

      if(isDateSelected){
        setCurrentStep(currentStep + 1);
        setActiveStep(activeStep + 1);
      } else if(activeStep === 3){

      } else {
        toast.info('Оберіть зручну дату в календарі!');
      }

    };
  
    const clickTurnBack = () => {
      setCurrentStep(currentStep - 1);
      setActiveStep(activeStep - 1);
    }

    return(
      <div>
        <StepsTabs steps={steps} activeStep={activeStep}/>
        <BasicDateCalendar />
        {currentStep > 0 ? (
          <ButtonTFDisabled onClick={clickTurnBack} label="Повернутись"/>
        ) : null}
        <ButtonTFMain onClick={clickNext} label="Підтвердити"/>
      </div>
    )
};

export default ReservationStepOne;