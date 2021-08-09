import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import "./SignIn.scss";
// import PropTypes from "prop-types";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: "/photos",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignIn(props) {
  return (
    <div className="login">
      <h3>Login Form</h3>
      <p>or login with social accounts</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
