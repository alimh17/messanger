import React, { useEffect, useState } from "react";

import ChatsNav from "./components/chats_nav/ChatsNav";
import LeftSection from "./components/left_section/LeftSection";
import RightSection from "./components/right_section/RightSection";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatList from "../../components/chatList/ChatList";
import WarningAlert from "../../components/alert/WarningAlert";
import Chat from "../../components/chat/Chat";

const Home = () => {
  const [active, setAcitve] = useState(false);
  const sidebar = useSelector((state) => state.sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === "" || token === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate, dispatch, token]);

  return (
    <>
      <section
        className={`${
          sidebar[4] && "blur-sm"
        } font-sans dark:bg-slate-800 h-screen`}
      >
        <ChatsNav active={active} setAcitve={setAcitve} />
        <Sidebar />
        <WarningAlert />
        {!active && (
          <div className="mt-32 md:hidden ">
            <ChatList />
            <Chat />
          </div>
        )}

        <div className="hidden  md:flex ">
          <RightSection />
          <LeftSection />
        </div>
      </section>
    </>
  );
};

export default Home;
