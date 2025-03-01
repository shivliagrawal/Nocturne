import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "../styles/Home.css";
import coverImage from "../assets/startshopping.png";
import startButton from "../assets/start-button.png"; // Custom button image

Modal.setAppElement("#root");

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Cover Image */}
      <div className="cover-image">
        <img src={coverImage} alt="Buy Hard Cover" />
      </div>

      {/* Start Shopping Button (Opens Modal) */}
      <img
        src={startButton}
        alt="Start Shopping"
        className="start-btn"
        onClick={() => setModalIsOpen(true)}
      />

      {/* Login/Signup Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-box"
        overlayClassName="modal-overlay"
      >
        <h2>Welcome to Nocturnè</h2>
        <p>Please log in or sign up to continue.</p>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
