import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const eventHandler = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All fields are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        return Navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            Sign up with your Email and Password or with Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onBlur={eventHandler}
              />
            </div>
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
                "Sign up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-1 text-sm mt-2">
            <span className="font-semibold">Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-700 ">
              Sign in
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

export default SignUp;
