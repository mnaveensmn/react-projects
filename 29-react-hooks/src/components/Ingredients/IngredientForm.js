import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  
  const [input, setInput] = useState({ title: "", amount: "" });

  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setInput((prevInputState) => ({
      title: newTitle,
      amount: prevInputState.amount,
    }));
  }

  const amountChangeHandler = (event) => {
    const newAmount = event.target.value;
    setInput((prevInputState) => ({
      title: prevInputState.title,
      amount: newAmount,
    }));
  }

  const submitHandler = event => {
    event.preventDefault();
    // ...
    props.onAddIngredient(input);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={input.title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={input.amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
