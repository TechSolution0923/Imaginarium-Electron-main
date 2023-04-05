import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import AppleLogin from "react-apple-login";

// context
import { AuthContext } from "../context/AuthContext";

// core components
import { Input } from "../../components/core/input";
import { PrimaryLink, SecondaryLink } from "../../components/core/button";

// page components
import { Logo, BG } from "../../components/pages/auth";

export default function Login() {
  const { setIsAuthenticated } = React.useContext(AuthContext);

  const responseGoogle = (response) => {
    // console.log(response);
  };

  return (
    <div className="w-full h-[calc(100vh)]">
      <div className="relative !w-full h-[calc(100vh)] bg-[url('/public/assets/img/background.png')] bg-center bg-cover bg-no-repeat">
        <BG />

        <label className="absolute top-6 right-10 !w-37 h-5 font-bold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>

        <div className="absolute flex flex-col p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[33rem] bg-neutral-840 opacity-[.95] rounded-md">
          <div className="flex flex-row justify-center items-center mb-10">
            <Logo />
          </div>
          <div className="flex justify-center mb-6">
            <label className="w-50 h-6 font-bold text-[18px] text-white leading-6">
              Sign into Your Account
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              label="EMAIL"
              type="email"
              name="email"
              placeholder="juliaellei@gmail.com"
            />
            <div>
              <div className="flex flex-row justify-between items-center">
                <label className="flex flex-start font-bold leading-5 text-[9px] text-white tracking-[.25em]">
                  PASSWORD
                </label>

                <Link
                  className="w-8 text-[10px] font-normal	text-[#1daeff] mb: 1 no-underline"
                  to="/reset-email"
                >
                  Forgot?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="please enter your password"
              />
            </div>
          </div>
          <div className="h-14 flex justify-center">
            <PrimaryLink
              label="LOG IN"
              to="/dashboard"
              handleClick={() => {
                setIsAuthenticated(true);
                localStorage.setItem("auth", true);
              }}
            />
          </div>
          <div className="mt-10 mb-2">
            <GoogleLogin
              clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="flex items-center w-full h-8 bg-white cursor-pointer rounded-md"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    className="p-1.5"
                    src="assets/img/Google.png"
                    alt="google"
                  />
                  <div className="m-auto  font-bold text-[10px] text-center leading-5 text-[#010101] tracking-[.25em]">
                    LOG IN WITH GOOGLE
                  </div>
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="mb-3">
            <AppleLogin
              // clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
              clientId="com.react.apple.login"
              render={(renderProps) => (
                <button
                  className="flex items-center w-full h-8 bg-black  rounded-md"
                  // onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <img
                    className="p-1.5"
                    src="assets/img/Apple.png"
                    alt="google"
                  />
                  <div className="m-auto font-bold text-[10px] text-center leading-5 text-[#cdcdcd] tracking-[.25em]">
                    LOG IN WITH APPLE
                  </div>
                </button>
              )}
              // redirectURI="https://redirectUrl.com"
            />
          </div>
          <SecondaryLink label="CREATE ACCOUNT" to="/register" />
        </div>
      </div>
    </div>
  );
}
