import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ToastProvider>
  );
};

export default App;
