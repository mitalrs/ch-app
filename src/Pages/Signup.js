import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";


function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

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
      <label htmlFor="userName">USERNAME</label>
      <input
        type="text"
        id="userName"
        name="username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="username"
      ></input>
      <br />
      <label htmlFor="userMail">EMAIL</label>
      <input
        type="text"
        id="userMail"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      ></input>
      <br />
      <label htmlFor="phone">PHONE</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+91"
      ></input>
      <br />
      
      <button type="submit">SIGN UP</button>
      <br />
      <p>Already have a account? <a href="/login">Sign in</a></p>
    </form>
  );
}

export default Signup;
