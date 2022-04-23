import React, { useState } from "react";
import ChatsNav from "./components/chats_nav/ChatsNav";
import Sidebar from "../../components/sidebar/Sidebar";
import LeftSection from "./components/left_section/LeftSection";
import RightSection from "./components/right_section/RightSection";

const Home = () => {
  const [active, setAcitve] = useState(false);

  return (
    <section className="">
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
