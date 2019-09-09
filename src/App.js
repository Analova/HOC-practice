import React from "react";
import "./App.scss";

import UserProfile from "./components/user-profile/user-profile.component";

function App() {
  return (
    <div className="App">
      <UserProfile name="Jane Morries" email="morriesJane@gmail.com" />
    </div>
  );
}

export default App;
