import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "components/Header";
import NotFound from "components/NotFound";
import AddEditPage from "features/Photo/pages/AddEdit";
import productApi from "api/productApi";
import firebase from "firebase";
import SignIn from "features/Auth/pages/SignIn";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBrFWEz22AKGfM_5nQT54ExtPA6FrwwRhE",
  authDomain: "redux-photo-app-38ba0.firebaseapp.com",
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // setIsSignedIn(!!user);
        if (!user) {
          // user logs out, handle something here!!
          console.log("User is not logged in.");
          return;
        }
        localStorage.setItem(
          "firebaseui::rememberedAccounts",
          JSON.stringify(user.providerData)
        );
        console.log(user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        setProductList(response.data);
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch product list.");
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/photos/:photoId" component={AddEditPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
