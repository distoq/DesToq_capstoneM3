import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Cart from "../pages/cart";
import LoginPage from "../pages/login";
import Register from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default Routers;