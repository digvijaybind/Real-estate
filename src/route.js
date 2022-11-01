import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/menu/Header";
import { Listingpage } from "./pages/listingpage/Listingpage";
import { Investnow } from "./pages/Investnow/Investnow";
import DetailsPage from "./pages/DetailPages/Detailspage";
import Card from "./components/card/Card";
import Profile from "./pages/profile/Profile";
import Commonbutton from "./components/commonButton/Commonbutton";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./index.css";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/listingpage" element={<Listingpage />} exact />
          <Route path="/profilepage" element={<Profile />} exact />
          <Route path="/registerpage" element={<Register />} exact />
          <Route path="/loginpage" element={<Login />} exact />
          <Route path="/Investnow" element={<Investnow />} exact />
          <Route path="/detailspage" element={<DetailsPage />} exact />
          <Route path="/card" element={<Card />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
