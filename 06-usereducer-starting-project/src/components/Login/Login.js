import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useContext } from 'react/cjs/react.development';
import AuthContext from '../store/auth-conext';
import Input from '../Input/Input';

const emailReducer = (state, action) =>{
  if (action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.includes('@')}
  } if (action.type === 'INPUT_BLUR') {
    return {value : state.value, isValid: state.value.includes('@')}
  }
  return {value : '', isValid: false}
}

const passwordReducer = (state, action) =>{
  if (action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.trim().length > 6}
  } if (action.type === 'INPUT_BLUR') {
    return {value : state.value, isValid: state.value.trim().length > 6}
  }
  return {value : '', isValid: false}
}

const Login = () => {
  
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value : '',
    isValid: false
  });
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value : '',
    isValid: false
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const {isValid:emailIsValid} = email;
  const {isValid:passwordIsValid} = password;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      email.isValid && password.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      email.isValid && password.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(email.value, password.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
   
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={email.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={password.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
