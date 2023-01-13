import React from "react";
import Signup from "../components/Authentication/signup";
import Login from "../components/Authentication/login";
const LoginSignup = () => {
  const [loginsign, setLogorSign] = React.useState(false);
  return <>{!loginsign ? <Login /> : <Signup />}</>;
};

export default LoginSignup;
