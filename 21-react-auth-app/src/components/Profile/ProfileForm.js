import { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  
  const newPasswordInputRef = useRef();
  const authContext = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(authContext.token);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
