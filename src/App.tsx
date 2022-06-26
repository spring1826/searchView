import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Home from "./pages/Home/home";
import ClubDetail from "./pages/ClubDetail/ClubDetail";
import { Layout } from "./components/Layout/Layout";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ClubDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
