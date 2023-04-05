import React from "react";

// core components
import { BG, Logo } from "../../components/pages/auth";
import { Input } from "../../components/core/input";
import { PrimaryLink, SecondaryLink } from "../../components/core/button";

export default function ResetEmail() {
  return (
    <div className="w-full h-[calc(100vh]">
      <div className="relative !w-full h-[calc(100vh)] bg-[url('/public/assets/img/background.png')] bg-center bg-cover bg-no-repeat">
        <BG />

        <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>

        <div className="absolute flex flex-col p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto bg-neutral-840 opacity-[.90] rounded-md">
          <div className="flex flex-row justify-center items-center mb-10">
            <Logo />
          </div>
          {/* title */}
          <div className="flex justify-center mb-6">
            <label className="w-50 h-6 font-bold text-lg text-white">
              Reset Password
            </label>
          </div>

          <Input
            label="EMAIL"
            type="email"
            name="email"
            placeholder="juliaellei@gmail.com"
          />

          <div className="flex justify-center">
            <PrimaryLink
              label="RESET"
              to="/reset-password"
              handleClick={() => {}}
            />
          </div>
          <div className="flex justify-center">
            <SecondaryLink label="LOG IN" to="/login" handleClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
