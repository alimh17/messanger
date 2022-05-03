import React, { useEffect, useState } from "react";

import Chat from "../../components/chat/Chat";
import ChatsNav from "./components/chats_nav/ChatsNav";
import LeftSection from "./components/left_section/LeftSection";
import RightSection from "./components/right_section/RightSection";
import Sidebar from "../../components/sidebar/Sidebar";
import User from "../../components/user/User";
import { getProfileRequest } from "../../server/server";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../action/userDataAction";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const [active, setAcitve] = useState(false);
  const [loading, setLoading] = useState(false);
  const sidebar = useSelector((state) => state.sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === "" || token === null) {
      navigate("/login_register", { replace: true });
    }
    setLoading(true);
  }, [navigate, dispatch, token]);

  return (
    <>
      {loading ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
