import { useState } from "react";
import "./css/header.css";
import "./css/main.css";
import "./css/details.css";
import Home from "./page/Home";
import Details from "./page/Details";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [dark, setDark] = useState("light");
  return (
    <div className={`App ${dark}`}>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/country/:name" element={<Details dark={dark} />} />
      </Routes>
    </div>
  );
}

export default App;
