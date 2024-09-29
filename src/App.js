import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { Brand, ACT, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />

      <h1>App</h1>
    </div>
  );
};

export default App;
