import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';

const TeacherLogin = () => {
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Perform authentication logic for teacher login using teacherId and password
    console.log("Teacher ID:", teacherId);
    console.log("Password:", password);

    // Add your authentication logic here (e.g., API calls, validation)
  }

  return (
    <div>
      <div>
        <h3>TEACHER LOGIN</h3>
        <section>
          <form>
            <h1>Login</h1>
            <div className="inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                placeholder="Teacher ID"
                onChange={(e) => setTeacherId(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={handleLogin} id="loginButton">
              Log in
            </button>
            <div className="register">
              <p>
                Don't have an account? <Link to="/teacher-register">Register</Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default TeacherLogin;
