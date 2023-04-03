import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";

const appId = process.env.REACT_APP_CHAT_APP_ID;
const region = process.env.REACT_APP_CHAT_REGION;
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appId, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// const authKey = process.env.REACT_APP_CHAT_AUTH_KEY;
// const uid = "user1";

// //login
// CometChat.login(uid, authKey).then(
//   user => {
//     console.log("Login Successful:", { user });
//   },
//   error => {
//     console.log("Login failed with exception:", { error });
//   }
// );

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  

  function submitLogin(e) {
    e.preventDefault();
    console.log(userName,email);
    const authKey = process.env.REACT_APP_CHAT_AUTH_KEY;
  const uid = email;
  
  //login
  CometChat.login(uid, authKey).then(
    user => {
      console.log("Login Successful:", { user });
    },
    error => {
      console.log("Login failed with exception:", { error });
    }
  );
  }

  return (
    <form onSubmit={submitLogin}>
      <label htmlFor="userName"></label>
      <input
        type="text"
        id="userName"
        name="username"
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        placeholder="UserName"
      ></input>
      <br />
      <label htmlFor="userMail"></label>
      <input
        type="text"
        id="userMail"
        name="email"
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        placeholder="Email"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
