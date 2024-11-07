import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}
