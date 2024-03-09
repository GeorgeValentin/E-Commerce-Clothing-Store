import { Outlet } from "react-router-dom";
import { Fragment } from "react";

// -> the useSelector HOOK is used to extract data out of the redux
// store and into a component
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

// -> importing a svg file as a ReactComponent; can be used like so: <CrownLogo />
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  // -> the selector updates whenever the state data changes
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    // -> we do this so that we can use the <Navigation /> as a top level
    // component (parent), i.e., it is rendered on every page (we want it
    // to function like a menu that it's shown everywhere), and for
    // that page's specific content we have the <Outlet /> component,
    // which acts as a placeholder for that page's specific content, i.e.
    // the specific child we are routing to
    // -> we use the <Fragment /> as a top level parent
    // component, it is required by react's rule of containing everything
    // from a component in a parent and it will render to nothing
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          {/* -> even thourgh we have made the styled-component for a Link component
          we want it to be render as a span*/}
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {/* -> if isCartOpen is true then render <CartDropdown /> */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      {/* -> render the current route's component */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
