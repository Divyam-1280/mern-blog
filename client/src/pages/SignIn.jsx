import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

function SignIn() {
  const [formData, setformData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const eventHandler = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        return Navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="h-screen translate-y-[20%] mx-16">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-4xl font-bold font-serif dark:text-white">
            Divyam's Blog
          </Link>
          <p className="text-sm mt-3 font-semibold">
            Sign in with your Email and Password or with Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onBlur={eventHandler}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onBlur={eventHandler}
              />
            </div>
            <Button color="dark" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" color="light" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-1 text-sm mt-2">
            <span className="font-semibold">Don't have an account?</span>
            <Link to={"/sign-up"} className="text-blue-700 ">
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
