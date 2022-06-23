import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/home";

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
