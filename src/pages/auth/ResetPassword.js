import React from "react";

// core components
import { BG, Logo } from "../../components/pages/auth";
import { Input } from "../../components/core/input";
import { PrimaryLink, SecondaryLink } from "../../components/core/button";

export default function ResetPassword() {
  // const [isShown, setIsSHown] = useState(false);

  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

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
          <div className="flex justify-center mb-6">
            <label className="w-50 h-6 font-bold text-lg text-white">
              Reset Password
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              label="New Password"
              type="password"
              name="password"
              placeholder="Enter new password"
            />
            <Input
              label="Confirm password"
              type="password"
              name="password"
              placeholder="Confirm password"
            />
            {/* <img className="p-1.5" src="assets/img/eye.png" alt="eye" /> */}
          </div>
          <div className="h-14 flex justify-center">
            <PrimaryLink
              label="SAVE"
              to="/reset-password"
              handleClick={() => {}}
            />
          </div>
          <SecondaryLink label="LOG IN" to="/login" handleClick={() => {}} />

          {/* <Input
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        /> */}
        </div>
      </div>
    </div>
  );
}
