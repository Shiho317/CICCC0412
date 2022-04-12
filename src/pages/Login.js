import React, { useRef, useState }from "react";
import { Navigate } from "react-router-dom";
import Form from "../components/Form";

const Login = ({ setUser }) => {
  const [toDashboard, setToDashboard] = useState(false);

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const afterSubmit = () => {
    setUser({
      name: userNameRef,
      password: passwordRef
    })
    setToDashboard(true);
  };

  if(toDashboard === true){
      return <Navigate to="/dashboard" />
  }

  return (
    <>
      <h1>Login</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={() => afterSubmit()} userNameRef={userNameRef} passwordRef={passwordRef}/>
    </>
  );
};

export default Login;
