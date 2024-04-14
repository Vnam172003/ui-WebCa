import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function MainLayout() {
  console.log("sasss");
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
