import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function submitLogin(e) {
    e.preventDefault();
    console.log(userName, email);
    const authKey = process.env.REACT_APP_CHAT_AUTH_KEY;
    const uid = userName;

    //login
    CometChat.login(uid, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }

  return (
    <form onSubmit={submitLogin}>
      <div className="heading-div">
        <h2>LogIn</h2>
        <span>Please sigin in to continue</span>
      </div>

      <div className="input-pdiv" style={{
        background: userName !== '' ? '#393E46' : ' #232931'
      }}>
      <FontAwesomeIcon icon={faUser} className="icon"/>
        <input
          type="text"
          id="userName"
          name="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="USERNAME"
          style={{
            background: userName !== '' ? '#393E46' : ' #232931'
          }}
        ></input>
        <label htmlFor="userName">USERNAME</label>
      </div>

      <br />

      <div className="input-pdiv" style={{
        background: email !== '' ? '#393E46' : ' #232931'
      }}>
      <FontAwesomeIcon icon={faEnvelope} className="icon"/>
        <input
          type="text"
          id="userMail"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="EMAIL"
          style={{
            background: email !== '' ? '#393E46' : ' #232931'
          }}
        ></input>
        <label htmlFor="userMail">EMAIL</label>
      </div>

      <br />

      <button className="form-sm-btn" type="submit">
        LOGIN
      </button>

      <br />

      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </form>
  );
}

export default Login;
