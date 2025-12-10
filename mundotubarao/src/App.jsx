import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Principal from "./pages/Principal";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Nav from "./components/Nav/Nav";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/cadastro" element={<Cadastro setUser={setUser} />} />
      <Route path="/principal" element={<Principal user={user} />} />
      <Route path="/about" element={<About user={user} />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
