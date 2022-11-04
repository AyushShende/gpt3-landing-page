import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import Features from "./containers/features/Features";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Blog from "./containers/blog/Blog";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  );
}

export default App;
