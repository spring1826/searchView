import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Home from "./pages/Home/home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <div>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
