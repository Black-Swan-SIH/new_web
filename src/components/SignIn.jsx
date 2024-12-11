import React, { useState } from "react";
import "../styles/SignIn.css";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Heading from "./Heading.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sign({ but, a, text, children, apiUrl }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        apiUrl,
        {
          username: formData.username,
          password: formData.password,
        },
        { withCredentials: true }
      );
      console.log("Response from backend:", response.data);
      const token = response.data.data.userToken; // Adjust this based on the API response structure
      if (token) {
        localStorage.setItem("userToken", token);
        console.log("Token stored in local storage:", token);
      } else {
        console.warn("No token received in the response.");
      }
      // console.log("Response from backend:", response.status);
      // console.log("Response from backend:", response.data.data.role);
      if (response.data.data.role === "candidate") {
        navigate("/candidatelist");
      } else if (response.data.data.role === "admin") {
        navigate("/dashboard");
      }
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="sign w-[150%] h-full relative">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="glass-form">
        <h2>{children}</h2>
        <form onSubmit={handleSubmit} action="#">
          <Heading fontSize="18px">username</Heading>
          <Input
            name="username"
            value={formData.username}
            onChange={handleChange}
          >
            abc@gmail.com
          </Input>
          <Heading fontSize="18px">Password</Heading>
          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
          >
            password
          </Input>
          <p className="footer-text">
            <Heading fontSize="15px" color="grey">
              {text}{" "}
            </Heading>
            <a href="#">{a}</a>
          </p>
          <div className="text-center relative">
            <Button>{but}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
