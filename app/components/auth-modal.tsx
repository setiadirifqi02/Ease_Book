"use client";
import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInput from "./auth-modal-input";
import useAuth from "@/hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 360,
  maxWidth: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  textAlign: "center",
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const { loading, error, data } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signIn, signUp } = useAuth();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isSignIn) {
      signIn({ email: inputs.email, password: inputs.password }, handleClose);
    } else {
      signUp(inputs, handleClose);
    }
    setInputs({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      password: "",
    });
  };

  const renderContent = (isSignInContent: string, isSignUpContent: string) => {
    return isSignIn ? isSignInContent : isSignUpContent;
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "btn btn-md text-white rounded-full  px-8 text-sm md:text-lg md:px-12 border-opacity-0 bg-blue-500 hover:text-blue-600 hover:bg-white",
          "btn btn-md rounded-full px-8 md:px-12 text-sm md:text-lg bg-blue-50 text-blue-500 hover:bg-blue-600  hover:text-white hover:border-0"
        )}`}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <span className="loading loading-ring loading-lg bg-blue-600"></span>
            </div>
          ) : (
            <>
              <h3 className="uppercase font-semibold text-blue-600  text-xl">
                {renderContent("Sign in", "Create New Account")}
              </h3>
              <div className="divider"></div>
              <p className="mt-2 capitalize">
                {renderContent(
                  "Log Into Your Account ",
                  "Create new Ease book Account "
                )}
              </p>
              <AuthModalInput
                inputs={inputs}
                onChangeHandler={onChangeHandler}
                isSignIn={isSignIn}
              />
              <button
                onClick={handleSumbit}
                type="submit"
                disabled={disabled}
                className="btn btn-md disabled:bg-gray-200  my-2 bg-blue-600 text-white rounded-lg w-full"
              >
                {renderContent("Sign In", "Create Account")}
              </button>
            </>
          )}
          {error ? (
            <div role="alert" className="alert alert-error rounded-xl mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
