import React from "react";
import "./App.scss";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";
function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        dataSource="https://jsonplaceholder.typicode.com/posts"
        name="Jane Morris"
        email="morrisJane@gmail.com"
      />
    </div>
  );
}

export default App;
