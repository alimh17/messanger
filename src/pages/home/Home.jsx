import React, { useEffect, useState } from "react";
import ChatsNav from "./components/chats_nav/ChatsNav";
import Sidebar from "../../components/sidebar/Sidebar";
import LeftSection from "./components/left_section/LeftSection";
import RightSection from "./components/right_section/RightSection";
import { useNavigate } from "react-router-dom";
import Setting from "../../components/setting/Setting";
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
  }, []);

  return (
    <section className={`${sidebar[4] && "blur-sm"} `}>
      <ChatsNav active={active} setAcitve={setAcitve} />
      <Sidebar />
      <div className="hidden  md:flex ">
        <RightSection />
        <LeftSection />
      </div>
    </section>
  );
};

export default Home;
