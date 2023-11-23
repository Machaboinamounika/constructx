import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    axios
      .post("/api/forgot-password", data)
      .then((response) => {
        setErrorMessage("");
        alert("Password reset email sent!");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <img src="https://www.tradefairdates.com/logos/constructech_logo_1057.png" alt="Constructechx Logo" />
      <br></br>
      <br></br>
      <h1>Forgot Password</h1>
      <p style={{ marginTop: '30px' }}>Please enter your email address to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ForgotPasswordPage;