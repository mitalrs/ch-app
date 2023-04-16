import "./App.css";
import NavBar from "./Component/NavBar.js";
import { Outlet } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
