import React, { useState, useContext } from "react";
import abserver from "../api/abserver";
import AuthContext from "../Context/AuthContext";
import getToken from "./getToken";

export default () => {
  const [party, setStateParty] = useState({});
  const [spinner, setSpinner] = useState(false);
  const { setParty } = useContext(AuthContext);
  var token = getToken();
  const getParty = async () => {
    console.log("ggeting party");
    try {
      setSpinner(true);
      const res = await abserver.get("/party", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      setStateParty(res.data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
      setSpinner(false);
    }
  };
  return [party, getParty, spinner];
};
