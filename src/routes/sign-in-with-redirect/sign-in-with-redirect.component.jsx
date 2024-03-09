import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    // -> immediately invoked function
    // -> we can't make the useEffect's Hook callback async as that would cause memory leaks
    // since we wouldn't be able to clean the memory when the comp unmounts
    // eg: we CAN'T DO THIS:
    // useEffect(async() => {})
    (async () => {
      const response = await getRedirectResult(auth);

      if (response !== null) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
