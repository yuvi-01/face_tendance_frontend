import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  function run() {
    console.log(email,password);
    var video = document.getElementById("myVideo");
    video.play();
  }

  return (
    <div>
      <video width={100} height={100} id="myVideo" loop>
        <source src="lines.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <h3>HELLO</h3>
        <section>
          <form>
            <h1>Login</h1>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email"  onChange={(e) => setEmail(e.target.value)}  required />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password"   onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor=""><input type="checkbox" />Remember Me</label>
              <a href="#">Forget Password</a>
            </div>
            <button type="button" onClick={() => run()} id="loginButton">Log in</button>
            <div id="message"></div>
            <div className="register">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
