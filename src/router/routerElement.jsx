import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import Login from "../Page/Auth/Login/Login";
import HomePage from "../Page/Home/HomePage";

function RouterElement() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default RouterElement;
