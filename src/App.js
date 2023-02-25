
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Outlet } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';




class App extends React.Component {


  render() {
    return (
      <Auth0Provider
        domain="{yourDomain}"
        clientId="{yourClientId}"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
      <>

        <Header />
        <Outlet />
        <Footer />

      </>
      </Auth0Provider>
    );
  }
}


export default App;
