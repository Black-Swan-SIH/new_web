import React, { useState } from "react";
import "../styles/Main.css";
import play from "../assets/play.png";
import Lottie from "lottie-react";
import home from "../assets/home.json";
import at from "../assets/at.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose, isLogin, setIsLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const url = isLogin
        ? "https://sih-backend-xengu.ondigitalocean.app/admin/signin"
        : "https://sih-backend-xengu.ondigitalocean.app/admin/signup";

      const response = await axios.post(
        url,
        {
          username: formData.username,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (isLogin) {
        localStorage.setItem("userToken", response.data.data.userToken);
        navigate("/admin/dashboard");
      } else {
        setMessage("Admin added successfully.");
        setIsLogin(true);
      }

      setFormData({ username: "", password: "" });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        {message && <p className="message">{message}</p>}
        <form id="form" onSubmit={handleSubmit}>
          <div
            id="forms"
            style={{
              width: "33vw",
            }}
          >
            <div style={{ width: "80%" }}>
              <h2>Username</h2>
              <input
                style={{ width: "100%" }}
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ width: "80%" }}>
              <h2>Password</h2>
              <input
                style={{ width: "100%" }}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />
          <div style={{ width: "180px", color: "white", fontFamily: "poppins", fontWeight: "400" }}>
            <button type="submit" className="submit-button close-button" disabled={loading} style={{
              backgroundColor: loading ? "grey" : "black",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "6px",
              paddingBottom: "6px",
              borderRadius: "12px",

            }}>
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="toggle-button close-button"
          style={{
            backgroundColor: "black",
            color: "white",
            paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "6px",
              paddingBottom: "6px",
              borderRadius: "12px",
          }}
        >
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div id="main">
      <div id="content">
        <h1 id="head">Black Swan</h1>
        <h2 id="subhead">
          Connecting <i className="italics">experts</i> to talent with<br></br>
          <i className="italics">precision</i> and{" "}
          <i className="italics">insight</i>
        </h2>
        <button id="button" onClick={handleGetStartedClick}>
          <img src={play} alt="" width={"22px"} />
          <h1>Get Started</h1>
        </button>
        <div id="sideborders"></div>
        <div id="topborders"></div>
        <div id="lottie">
          <Lottie
            autoplay
            animationData={home}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
        <div id="atone">
          <img src={at} alt="" width={"60px"} />
        </div>
        <div id="attwo">
          <img src={at} alt="" width={"60px"} />
        </div>
      </div>
      {isModalOpen && <Modal isLogin={isLogin} setIsLogin={setIsLogin}/>}
    </div>
  );
};

export default Main;
