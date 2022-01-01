import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const resetErrorHandler = () =>{
        setError();
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        const username = nameInputRef.current.value;
        const age = ageInputRef.current.value;

        console.log(nameInputRef.current.value);
        if (username.trim().length === 0 || age.trim().length === 0) {
          setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age (non-empty values)",
          });
          return;
        }
        if (+age < 1) {
          setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)",
          });
          return;
        }
        props.onAddUser(username, age);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    return (
      <Wrapper>
        {error && (
          <ErrorModel
            title={error.title}
            message={error.message}
            onErrorReset={resetErrorHandler}
          />
        )}
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </Wrapper>
    );

}

export default AddUser;