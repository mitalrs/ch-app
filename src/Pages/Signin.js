import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";


function Signin() {
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
      <label htmlFor="userName"></label>
      
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
      <label htmlFor="userMail"></label>
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
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signin;
