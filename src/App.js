import React from "react";
import "./App.css";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
	<NavBar/>
      <UserPage />
    </div>
  );
}

export default App;
