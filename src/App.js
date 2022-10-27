import "./App.css";
import { Brand, Navbar } from "./components";
import Header from "./containers/header/Header";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  );
}

export default App;
