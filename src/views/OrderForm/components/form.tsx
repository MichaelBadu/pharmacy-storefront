import "../scss/form.scss";

import React from 'react';

const Form: React.FC = () => {
  return(
    <form>
      <p>Name</p>
      <input type={'text'}/>
      <p>Surname</p>
      <input type={'text'}/>
      <p>Email</p>
      <input type={'text'}/>
      <p>Mobile</p>
      <input type={'text'}/>
    </form>
  )
}

export default Form;
