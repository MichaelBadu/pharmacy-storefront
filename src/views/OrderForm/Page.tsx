import "./scss/index.scss"

import React, { useState } from "react";


import Form from "@temp/views/OrderForm/components/form";
import NextActionButton from "@temp/views/OrderForm/components/next-action-button";
import Steps from "@temp/views/OrderForm/components/steps";
import TitleBox from "@temp/views/OrderForm/components/title-box";

const Page: React.FC=()=>{
  const [step, setStep] = useState(3);

  return (
    <>
      <TitleBox/>
      <div className='form-container'>
        <Steps step={step} setStep={setStep}/>
        <Form/>
        <NextActionButton/>
      </div>
    </>
  )
    ;
}

export default Page;
