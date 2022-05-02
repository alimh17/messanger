import React, { useEffect, useState } from "react";

import Chat from "../../components/chat/Chat";
import ChatsNav from "./components/chats_nav/ChatsNav";
import LeftSection from "./components/left_section/LeftSection";
import RightSection from "./components/right_section/RightSection";
import Sidebar from "../../components/sidebar/Sidebar";
import User from "../../components/user/User";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [active, setAcitve] = useState(false);
  const sidebar = useSelector((state) => state.sidebar);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === "" || token === null) {
      navigate("/login_register", { replace: true });
    }
  }, [navigate]);

  return (
    <section className={`${sidebar[4] && "blur-sm"} font-sans`}>
      <ChatsNav active={active} setAcitve={setAcitve} />
      <Sidebar />
      {!active && (
        <div className="mt-32 md:hidden">
          <User />
          <Chat />
        </div>
      )}
      <div className="hidden  md:flex ">
        <RightSection />
        <LeftSection />
      </div>
    </section>
  );
};

export default Home;
