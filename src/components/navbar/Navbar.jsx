import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { gapi } from 'gapi-script';
import logo from '../../assets/logo.svg';
import './navbar.css';
import LoginButton from '../login/login';
import LogoutButton from '../logout/logout';


const clientId = "648410281622-i6k0ns4v3s291bgtjseeceob9o1802rh.apps.googleusercontent.com";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Updated line

  const [userName, setUserName] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: clientId,
        scope: ""
      }).then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        const name = profile.getName(); // Get the user's name
        setUserName(name); // Store the user's name
        setIsAuthenticated(true);
        navigate('/match'); // Ensure this route matches your route setup
      } else {
        setIsAuthenticated(false);
        setUserName(''); // Clear the user's name
        navigate('/app');
      }
    }

    gapi.load('client:auth2', start);
  }, [navigate]); // Updated dependency array

  return (
    <div className="oko_navbar">
      <div className="oko_navbar-links">
        <div className="oko_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="oko_navbar-links_container">
          <p><Link to="/app">Home</Link></p>


          {/* Other links */}
          {isAuthenticated && <p><Link to="/match">My Oko</Link></p>}
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <span>{userName}</span> {/* Display the user's name */}
              <LogoutButton onLogoutSuccess={() => {
                setIsAuthenticated(false);
                setUserName(''); // Clear the user's name on logout
              }} />
            </>
          ) : (
            <LoginButton onLoginSuccess={() => {
              // You might need to handle setting the user's name here as well, depending on your login flow
            }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
