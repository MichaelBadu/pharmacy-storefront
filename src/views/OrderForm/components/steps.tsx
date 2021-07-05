import "../scss/step.scss";

import React, { Dispatch, SetStateAction } from "react";

import classNames from "classnames";

interface StepStateProps {
  step : number,
  setStep: Dispatch<SetStateAction<number>>,
}

interface StepProps extends StepStateProps{
  stepNumber: number,
}

const Step: React.FC <StepProps> = (props) =>{
  // tslint:disable-next-line:triple-equals
  const isCurrentClass = props.step == props.stepNumber? "current" : "";

  const handleClick = (e)=> {
    const id = e.currentTarget.dataset.id;
    props.setStep(id)
  }
  return(
    <li id ={`${props.stepNumber}`} data-id={props.stepNumber} className="step" onClick={handleClick}>
      <div className={classNames(`circle ${isCurrentClass}`)}>
        {props.stepNumber}
      </div>
      <p className= {classNames(`${isCurrentClass} step-text`)}>
        {props.children}
      </p>
    </li>
  )
}
const Steps: React.FC <StepStateProps> = (props) => {

  return(
    <>
      <ol>
        <Step {...props} stepNumber={1}>Fill up your form</Step>
        <Step {...props} stepNumber={2}>Add picture</Step>
        <Step {...props} stepNumber={3}>Send order</Step>
      </ol>
    </>
  )
}






export default Steps;
