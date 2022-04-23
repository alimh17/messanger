import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import WithDarkMode from "./HOC/WithDarkMode";
import MainLayouts from "./layouts/MainLayouts";
import NotFoundPage from "./pages/404/NotFoundPage";

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
            <Route path="/" index element={<Home />} />
            <Route path="/login_register" element={<Auth />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </WithDarkMode>
      </MainLayouts>
    </ToastProvider>
  );
};

export default App;
