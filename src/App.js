import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import WithDarkMode from "./HOC/WithDarkMode";
import MainLayouts from "./layouts/MainLayouts";
import NotFounPage from "./pages/404/NotFounPage";

import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

const App = () => {
  useEffect(() => {}, []);

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
      <MainLayouts>
        <WithDarkMode>
          <Routes>
            <Route index element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFounPage />} />
          </Routes>
        </WithDarkMode>
      </MainLayouts>
    </ToastProvider>
  );
};

export default App;
