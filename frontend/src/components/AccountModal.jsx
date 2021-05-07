import { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AccountModal = (props) => {
  const [active, setActive] = useState("login");

  return (
    <Modal
      isOpen={props.IsOpen}
      onRequestClose={props.onClose}
      style={customStyles}
    >
      <div className="absolute right-4 top-4">
        <button
          className="bg-transparent border border-black rounded-full p-1"
          style={{ boxShadow: "0 1px 0px 0px black" }}
          onClick={props.onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {active === "login" && (
        <LoginForm
          onRegisterClick={() => setActive("register")}
          onFormSubmit={props.onLoginFormSubmit}
        />
      )}
      {active === "register" && (
        <SignupForm onLoginClick={() => setActive("login")} />
      )}
    </Modal>
  );
};

export default AccountModal;
