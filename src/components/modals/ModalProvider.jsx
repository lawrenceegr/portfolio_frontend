import React, { createContext, useState } from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";

export const ModalContext = createContext();

// export function openModal(){
//   return useContext(ModalContext)
// }
export const useModal = () => {
  return useContext(ModalContext);
};

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);



  const openModal = (content) => {
    setIsOpen(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setOpenLogin(false);
    setOpenSignUp(false)

    
  };

  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal,setOpenLogin,setOpenSignUp ,openLogin,openSignUp}}>
      {children}
    </ModalContext.Provider>
  );
}
