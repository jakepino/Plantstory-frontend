import React from "react";
import "./App.css";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      {/* <NavBar/> */}
      <UserPage />
    </Container>
  );
}

export default App;
