import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Page/Home/HomePage";
import PageAuth from "../Page/Auth";
import Products from "../Page/Shop/Products";
import Cart from "../Page/Cart";

function RouterElement() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/auth" element={<PageAuth />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/danhsach" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default RouterElement;
