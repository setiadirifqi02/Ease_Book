import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { deleteCookie } from "cookies-next";
import { useContext } from "react";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );

  const signIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleCloseModal: () => void
  ) => {
    setAuthState({
      loading: true,
      data: null,
      error: null,
    });
    try {
      const responses = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );

      // console.log(responses.data.token);
      setAuthState({
        loading: false,
        data: responses.data,
        error: null,
      });

      handleCloseModal();
    } catch (error: any) {
      // console.log(error.response.data.message);
      setAuthState({
        loading: false,
        data: data,
        error: error.response.data.message,
      });
    }
  };

  const signUp = async (
    {
      firstName,
      lastName,
      email,
      phone,
      city,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      city: string;
      password: string;
    },
    handleCloseModal: () => void
  ) => {
    setAuthState({
      loading: true,
      data: null,
      error: null,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        { firstName, lastName, email, phone, city, password }
      );
      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
      handleCloseModal();
      console.log(response.data);
    } catch (error: any) {
      setAuthState({
        loading: false,
        data: null,
        error: error.response.data.message,
      });
    }
  };

  const signOut = () => {
    deleteCookie("jwt");

    setAuthState({
      loading: false,
      data: null,
      error: null,
    });
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;
