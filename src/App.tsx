import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Home from "./pages/Home/home";
import GlobalStyle from "./styles/GlobalStyle";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
