import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameISValid, setFirstNameISValid] = useState(true);
  const [lastName, setLastName] = useState("");
  const [lastNameISValid, setLastNameISValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailISValid, setEmailISValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordISValid, setPasswordISValid] = useState(true);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    if (firstName.trim().length > 0) {
      setFirstNameISValid(true);
    }
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    if (lastName.trim().length > 0) {
      setLastNameISValid(true);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);

    if (email.trim().length > 0) {
      setEmailISValid(true);
    }
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);

    if (password.trim().length >= 6) {
      setPasswordISValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (firstName.trim().length === 0) {
      setFirstNameISValid(false);
    }

    if (lastName.trim().length === 0) {
      setLastNameISValid(false);
    }

    if (email.trim().length === 0) {
      setEmailISValid(false);
    }

    if (password.trim().length === 0 && password.trim().length < 6) {
      setPasswordISValid(false);
    }
  };

  const firstNameBlurHandler= ()=>{
    if(firstName.trim().length === 0){
      setFirstNameISValid(false);
    }
  }

  const lastNameBlurHandler=()=>{
    if(lastName.trim().length === 0){
      setLastNameISValid(false);
    }
  }

  const emailBlurHandler = () => {
    if (email.trim().length === 0) {
      setEmailISValid(false);
    }
  }

  const passwordBlurHandler = () => {
    if (password.trim().length === 0 || password.trim().length < 6) {
      setPasswordISValid(false);
    } 
  }

  return (
    <div className={classes.myForm}>
      <h2>
        Try it free 7 days <span>then $20/mo. thereafter</span>{" "}
      </h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          className={!firstNameISValid ? classes.invalid : ''}
        />
        {!firstNameISValid && (
          <span className={classes.error}>First name cannot be empty</span>
        )}
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          className={!lastNameISValid ? classes.invalid :''}
        />
        {!lastNameISValid && (
          <span className={classes.error}>Last name cannot be empty</span>
        )}
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={!emailISValid ? classes.invalid: ''}
        />
        {!emailISValid && (
          <span className={classes.error}>looks like this is not an email</span>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          className={!passwordISValid ? classes.invalid : ''}
        />
        {!passwordISValid && (
          <span className={classes.error}>Password cannot be empty</span>
        )}
        <button type="submit"> claim your free trial</button>
        <p>
          {" "}
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Form;
