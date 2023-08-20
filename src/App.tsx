import React from 'react';
import './styles/App.css';
import NavBar from "./components/NavBar";
import FlowersList from "./components/FlowersList";
import FlowerInfo from "./components/FlowerInfo";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FlowersList/>
      <FlowerInfo/>
    </div>
  );
}

export default App;
