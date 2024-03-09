import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Spinner from "./components/spinner/spinner.component";
import { setCurrentUser } from "./store/user/user.reducer";
import { GlobalStyle } from "./global.styles";

// -> dynamic importing
// -> react will not render this until it needs it
// -> when the component is lazily loaded show the SpinnerComponent
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  // -> use the useDispatch to get a dispatch associated with our store
  // that we can use to pass actions (objects containing a type and a payload(the new data for the state) to)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // -> create a function that only picks the accessToken and
      // email and immediately invoke it
      // -> pickedUser will be an obj of shape { accessToken, email }
      // when the user exists
      const pickedUser =
        user &&
        (({ accessToken, email, displayName }) => ({
          accessToken,
          email,
          displayName,
        }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    // -> run this function when we unmount the component so that
    // we dispose the onAuthStateChangedListener and avoid memory leaks
    return unsubscribe;

    // -> even though we see a warning here that says that dispatch
    // may change, we know that in redux's case it will never change
    // -> we get the warning because react does not know that the
    // dispatch will never change
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* 
          -> when you match the route "/" render the component <Home /> 
        */}
          <Route index={true} element={<Home />} />

          {/*
         -> path="/shop/*" => match shop/anything 
         -> we do this because we want the <Shop /> component
         to have its own routes inside
        */}
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
