import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  ButtonsContainer,
  SignInContainer,
  SignInFormButton,
} from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();

      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email!");
          break;
        case "auth/popup-closed-by-user":
          console.log("User closed the Google Sign In Popup");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <SignInFormButton type="submit">Sign In</SignInFormButton>

          {/* -> by default buttons are of type submit and logically we can only have one submite button */}
          <SignInFormButton
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </SignInFormButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
