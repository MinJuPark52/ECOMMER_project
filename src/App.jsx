import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Head/Header";
import LoginPage from "./components/Head/LoginPage";
import Home from "./components/main/Home";
import Footer from "./components/Footer/Foo";
import JoinPage from "./components/Head/joinPage";
import Pagination from "./components/main/Pagination";
import KakaoLogin from "./components/Head/KakaoLogin";
import Cart from "./components/main/Cart";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />{" "}
        <Route path="/kakaoLojin" element={<KakaoLogin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Pagination />
      <Footer />
    </div>
  );
};

export default App;
