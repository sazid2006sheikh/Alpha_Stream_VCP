import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const router = useNavigate();

  return (
    <nav className='glassNav'>
     <div className="navHeader">
      <img src="./logo1.png" alt="Alpha Stream Logo" className="navLogo" />
    </div>

      <div className="navlist">
        <p onClick={() => router("/meeting/324qbcd1")}>
          Join as Guest
        </p>

        <p onClick={() => router("/auth")}>
          Register
        </p>

        <div
          className="loginBtn"
          role='button'
          onClick={() => router("/auth")}
        >
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
}