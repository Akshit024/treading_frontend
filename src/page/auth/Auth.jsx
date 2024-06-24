/* eslint-disable no-unused-vars */
import React from "react";
import "./Auth.css";
import SignUp from "./SignUp";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import ForgotPasswordForm from "./ForgotPasswordForm";
const Auth = () => {
  const nevigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50 ">
        <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white ">
          <h1 className="text-5xl font-bold pb-8">Akshit Treading</h1>
          {location.pathname == "/signup" ? (
            <section className="w-[75%]">
              <SignUp />
              <div className="flex items-center justify-center">
                <span>have already account ?</span>
                <Button variant="ghost" onClick={() => nevigate("/signin")}>
                  signin
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-[75%]">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span> back to login page ?</span>
                <Button variant="ghost" onClick={() => nevigate("/signup")}>
                  signin
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-[75%]">
              <SignIn />
              <div className="flex items-center justify-center pt-8">
                <span>forgot password ?</span>
                <Button variant="ghost" onClick={() => nevigate("/forgot-password")}>
                  update password
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <span>create new account ?</span>
                <Button variant="ghost" onClick={() => nevigate("/signup")}>
                  signup
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
