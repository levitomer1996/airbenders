import React from "react";
import useStyles from "./useStyles";
import "./App.css";
import Header from "./Components/Header/Header";
import MobileHeader from "./Components/Header/MobileHeader";
import Main from "./Pages/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ModalProvider } from "./Context/ModalContext";
import Modal from "./Components/Modal/Modal";
function App() {
  const classes = useStyles();
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <div className={classes.root}>
            <div className="web-background"></div>
            <div className={classes.child}>
              <Header />
              <MobileHeader />
              <Main />
            </div>
            <Modal />
          </div>{" "}
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
