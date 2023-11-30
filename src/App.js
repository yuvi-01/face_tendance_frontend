import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import TeacherLogin from "./TeacherReg";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<TeacherLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
