import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Dodawanie from "./pages/dodawanie.js";
import "./pages/main.css";
function App() {
  return (
    <main className="hero">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dodawanie" element={<Dodawanie />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
