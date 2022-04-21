import React , {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
      <div>
        <Routes>
          <Route index element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </ToastProvider>
  );
};

export default App;
