import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  
  const [input,setInput] = useState({ title: "", amount: "" });

  console.log(input);

  const titleChangeHandler = (event) => {
    setInput({
      title: event.target.value,
      amount: input.amount
    });
  }

  const amountChangeHandler = (event) => {
    setInput({
      title: input.title,
      amount: event.target.value,
    });
  }

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={input.title} onChange={titleChangeHandler}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={input.amount} onChange={amountChangeHandler}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
