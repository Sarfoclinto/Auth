import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function AppForm() {
  const [activeSignTab, setActiveSignTab] = useState({
    signin: true,
    signup: false,
  });
  return (
    <div className="loginbg debug text-white flex flex-col justify-center items-center rounded-xl p-10 min-w-fit">
      <h1 id="heading" className="text-2xl">
        Welcome Back
      </h1>
      <p>Welcome back! Please enter your details</p>
      <div
        id="signTab"
        className="p-1 rounded-md signtab-bg flex gap-x-3 min-w-fit"
      >
        <button
          className="px-10 py-2 rounded-lg"
          style={{
            backgroundColor: activeSignTab.signin ? "#1c0338" : "#161a3e",
          }}
          onClick={() =>
            setActiveSignTab(() => {
              return {
                signin: true,
                signup: false,
              };
            })
          }
        >
          Sign in
        </button>
        <button
          style={{
            backgroundColor: activeSignTab.signup ? " #1c0338" : "#161a3e",
          }}
          className="px-10 py-2 rounded-lg "
          onClick={() => {
            setActiveSignTab(() => {
              return {
                signin: false,
                signup: true,
              };
            });
          }}
        >
          Sign up
        </button>
      </div>
      <div className="form pt-5">
        {activeSignTab.signin ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default AppForm;
