import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { QueryClientProvider, QueryClient } from 'react-query'

import WithDarkMode from "./HOC/WithDarkMode";
import MainLayouts from "./layouts/MainLayouts";
import NotFoundPage from "./pages/404/NotFoundPage";

import Register from './pages/auth/register/Register'
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

const App = () => {
  useEffect(() => { }, []);

  const queryClient = new QueryClient()

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
      <QueryClientProvider client={queryClient}>
        <MainLayouts>
          <WithDarkMode>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" index element={<Home />} />
            </Routes>
          </WithDarkMode>
        </MainLayouts>
      </QueryClientProvider>
    </ToastProvider>
  );
};

export default App;
