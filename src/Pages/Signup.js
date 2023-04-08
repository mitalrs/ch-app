import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [cellNum, setCellNum] = useState('');

  function submitsigin(e) {
    e.preventDefault();
    console.log(userName, email);
    const authKey = process.env.REACT_APP_CHAT_AUTH_KEY;
    const uid = userName;
    const name = email;

    var user = new CometChat.User(uid);
    user.setName(name);
    CometChat.createUser(user, authKey).then(
      (user) => {
        console.log("user created", user);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  return (
    <form onSubmit={submitsigin}>
      <div className="heading-div">
        <h2>Create Account</h2>
        <span>Please fill the input blow here</span>
      </div>

      <div
        className="input-pdiv"
        style={{
          background: userName !== "" ? "#393E46" : " #232931",
        }}
      >
        <FontAwesomeIcon icon={faUser} className="icon" />
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
            background: userName !== "" ? "#393E46" : " #232931",
          }}
        ></input>
        <label htmlFor="userName">USERNAME</label>
      </div>

      <br />

      <div
        className="input-pdiv"
        style={{
          background: email !== "" ? "#393E46" : " #232931",
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
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
            background: email !== "" ? "#393E46" : " #232931",
          }}
        ></input>
        <label htmlFor="userMail">EMAIL</label>
      </div>

      <br />

      <div className="input-pdiv" style={{
            background: cellNum !== "" ? "#393E46" : " #232931",
          }}>
        <FontAwesomeIcon icon={faMobile} className="icon" />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={cellNum}
          onChange={(e) => {
            setCellNum(e.target.value);
          }}
          placeholder="+91"
          style={{
            background: cellNum !== "" ? "#393E46" : " #232931",
          }}
        ></input>
        <label htmlFor="phone">PHONE</label>
      </div>

      <br />

      <button type="submit" className="form-sm-btn">
        SIGN UP
      </button>

      <br />
      <p>
        Already have a account? <a href="/login">Sign in</a>
      </p>
    </form>
  );
}

export default Signup;
