import React, { useContext, useState, useEffect } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {

  const navigate = useNavigate();

  /* ===== STATES ===== */
  const [meetingCode, setMeetingCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const { addToUserHistory } = useContext(AuthContext);

  /* ===== LIVE CLOCK ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ===== FUNCTIONS ===== */

  const handleJoinVideoCall = async () => {

    if (!meetingCode.trim()) {
      setErrorMsg("Please enter a meeting code.");
      return;
    }

    setErrorMsg("");

    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  const handleCreateMeeting = async () => {
    const randomCode =
      Math.random().toString(36).substring(2, 10);

    await addToUserHistory(randomCode);
    navigate(`/${randomCode}`);
  };

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="homePage">

      {/* ===== NAVBAR ===== */}
      <nav className="homeNav">

        <h2 className="brand">
          Alpha <span>Speed</span>
        </h2>

        <div className="navRight">

          <IconButton
            className="historyBtn"
            onClick={() => navigate("/history")}
          >
            <RestoreIcon />
            <span>History</span>
          </IconButton>

          <div className="liveClock">
            <span>{formattedTime}</span>
            <small>{formattedDate}</small>
          </div>

          <Button
            className="logoutBtn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>

        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="heroArea">

        <div className="heroLeft">

          <p className="welcome">Welcome back 👋</p>

          <h1>
            Ready for your next
            <span> meeting?</span>
          </h1>

          <p className="subtitle">
            Enter a meeting code or create a new instant room.
          </p>

          <div className="joinBox">

            <TextField
              label="Enter Meeting Code"
              variant="outlined"
              onChange={(e) => setMeetingCode(e.target.value)}
              fullWidth
            />

            <Button
              className="joinBtn"
              variant="contained"
              onClick={handleJoinVideoCall}
            >
              Join Now
            </Button>

            <Button
              className="createBtn"
              variant="outlined"
              onClick={handleCreateMeeting}
            >
              Create Meeting
            </Button>

          </div>

          {errorMsg && <p className="inputError">{errorMsg}</p>}

        </div>

        <div className="heroRight">
          <img src="/logo3.svg" alt="meeting visual" />
        </div>

      </section>

      {/* ===== FEATURES ===== */}
      <section className="quickFeatures">

        <div className="featureCard">
          <h3>⚡ Instant Join</h3>
          <p>No setup required. Just enter code & go.</p>
        </div>

        <div className="featureCard">
          <h3>🔒 Secure Sessions</h3>
          <p>Encrypted meetings built for safety.</p>
        </div>

        <div className="featureCard">
          <h3>📜 History Access</h3>
          <p>Rejoin previous calls anytime.</p>
        </div>

      </section>

    </div>
  );
}

export default withAuth(HomeComponent);