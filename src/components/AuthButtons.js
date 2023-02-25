import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from "./LoginButton.js";
import Logout from "./LogoutButton.js";

function AuthButtons() {

  const {
    isAuthenticated,
  } = useAuth0();

  return isAuthenticated ? <Logout /> : <Login />
}

export default AuthButtons;