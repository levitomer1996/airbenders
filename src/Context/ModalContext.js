import React, { useReducer } from "react";
const ModalContext = React.createContext();
const ModalReducer = (state, action) => {
  switch (action.type) {
    case "open":
      return {
        isOpen: true,
        content: action.payload.content,
        params: action.payload.params,
      };
    case "close":
      return { isOpen: false };
    default:
      break;
  }
};
export const ModalProvider = ({ children }) => {
  //d = dispatch
  const [modalState, d] = useReducer(ModalReducer, {
    isOpen: false,
    content: null,
    params: null,
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const openModal = (data) => {
    dispatch("open", data);
    return;
  };
  const closeModal = () => {
    dispatch("close");
    return;
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
