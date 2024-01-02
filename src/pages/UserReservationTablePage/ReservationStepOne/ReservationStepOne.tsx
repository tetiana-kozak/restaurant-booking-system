import { useState } from "react";
import ButtonTFDisabled from "shared/buttons/ButtonTFDisabled/ButtonTFDisabled";
import ButtonTFMain from "shared/buttons/ButtonTFMain/ButtonTFMain";
import StepsTabs from 'shared/stepsTabs/StepsTabs/StepsTabs';
import BasicDateCalendar from "../BasicDateCalendar/BasicDateCalendar";

const ReservationStepOne = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const steps = ['Крок 1', 'Крок 2', 'Крок 3', 'Крок 4'];
    const activeStep = 0;

    const clickNext = () => {

    };
  
    const clickTurnBack = () => {
      
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