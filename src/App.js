import "./App.css";
import NavBar from "./Component/NavBar.js";
import { Outlet } from "react-router-dom";
// import { CometChat } from "@cometchat-pro/chat";

// const appId = process.env.REACT_APP_CHAT_APP_ID;
// const region = process.env.REACT_APP_CHAT_REGION;
// const appSetting = new CometChat.AppSettingsBuilder()
//   .subscribePresenceForAllUsers()
//   .setRegion(region)
//   .build();

// CometChat.init(appId, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//     // You can now call login function.
//   },
//   (error) => {
//     console.log("Initialization failed with error:", error);
//     // Check the reason for error and take appropriate action.
//   }
// );

//create user(signin)
// const authKey = process.env.REACT_APP_CHAT_AUTH_KEY;
// const uid = "user1";
// const name = "Kevin";

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//   (user) => {
//     console.log("user created", user);
//   },
//   (error) => {
//     console.log("error", error);
//   }
// );

//login
// CometChat.login(uid, authKey).then(
//   user => {
//     console.log("Login Successful:", { user });    
//   },
//   error => {
//     console.log("Login failed with exception:", { error });    
//   }
// );

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
