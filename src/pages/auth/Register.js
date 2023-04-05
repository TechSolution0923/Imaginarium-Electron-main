import React from "react";

// core components
import { Input } from "../../components/core/input";
import { PrimaryLink, SecondaryLink } from "../../components/core/button";
import { Logo, BG } from "../../components/pages/auth";

export default function Register() {
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
          {/* header */}
          <div className="flex justify-center mb-6">
            <label className="w-50 h-6 font-bold text-[18px] text-white leading-6">
              Create Your Account
            </label>
          </div>

          {/* form */}
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="FIRST NAME"
                type="text"
                name="firstname"
                placeholder="Julia"
              />

              <Input
                label="LAST NAME"
                type="text"
                name="lastname"
                placeholder="Ellei"
              />
            </div>
            <Input
              label="USERNAME"
              type="text"
              name="username"
              placeholder="juliaellei"
            />
            <Input
              label="EMAIL"
              type="email"
              name="email"
              placeholder="juliaellei@gmail.com"
            />
            <Input
              label="PASSWORD"
              type="password"
              name="password"
              placeholder="please enter your password"
            />
            <Input
              label="CONFIRM PASSWORD"
              type="password2"
              name="password2"
              placeholder="please enter your password"
            />
          </div>
          <div className="flex justify-center">
            <PrimaryLink label="REGISTER" to="" handleClick={() => {}} />
          </div>
          <div className="flex justify-center">
            <SecondaryLink label="LOG IN" to="/login" handleClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
