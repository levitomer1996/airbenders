import React, { useReducer } from "react";
const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { isLogged: true, user: action.payload };
    case "signout":
      return { isLogged: false };
    case "set_user_party":
      return { ...state, user_party: action.payload };
    default:
      break;
  }
};
export const AuthProvider = ({ children }) => {
  //d = dispatch
  const [authState, d] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
    user_party: {},
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const Signin = (data) => {
    dispatch("signin", data);
    return;
  };
  const Signout = () => {
    dispatch("signout");
    return;
  };
  const setParty = (data) => {
    dispatch("set_user_party", data);
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin,
        Signout,
        setParty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
