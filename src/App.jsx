import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./views/home/Home.jsx";
import Profile from "./views/profile/Profile.jsx";
import Credential from "./views/settings/views/Credential.js";
import FactorAuthentication from "./views/settings/views/FactorAuthentication.js";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import "./App.css";
import Account from "./views/settings/Account.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="settings/account" element={<Account />} />
          <Route
            path="settings/security/credentials"
            element={<Credential />}
          />
          <Route
            path="settings/security/2fa"
            element={<FactorAuthentication />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
