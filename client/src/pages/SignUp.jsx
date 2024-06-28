import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20 mx-16">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-4xl font-bold font-serif dark:text-white">
            Divyam's Blog
          </Link>
          <p className="text-sm mt-3 font-semibold">
            Sign up with your Email and Password or with Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button color="dark" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-1 text-sm mt-2">
            <span className="font-semibold">Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-700 ">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
