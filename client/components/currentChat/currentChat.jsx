import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatForm from "./components/chatForm";
import Topbar from "./components/topbar";
import MessagesList from "./components/messagesList";
import axios from "axios";
import { useMemo } from "react";

const socket = io("http://localhost:5000");

const initMessage = {
  id: "",
  time: "",
  content: "",
  auther: "",
  to: "",
};

const CurrentChat = () => {
  const [message, setMessage] = useState(initMessage);
  const [messages, setMessages] = useState([]);

  const current = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);

  const handleGetMessages = async () => {
    const res = await axios.post("http://localhost:5000/api/current_chat", {
      data: { user, current },
    });

    const allMessages = res.data.data.map((item) => {
      if (current._id === item.content.id || user.id === item.content.id) {
        return item.content;
      } else {
        setMessages([]);
      }
    });

    setMessages(allMessages);
  };

  // useMemo(() => {
  //   handleGetMessages();
  // }, [current]);

  useEffect(() => {
    setMessage({
      ...message,
      auther: user.username,
      id: user.id,
      to: current._id,
    });
    handleGetMessages();
  }, [current]);

  useEffect(() => {
    socket.on("onMessage", (data) => {
      setMessages((msg) => [...msg, data]);
    });
  }, [socket]);

  return (
    <div className="w-full md:w-8/12  h-screen font-sans overflow-y-scroll relative ">
      <Topbar />
      <MessagesList messages={messages} user={user} current={current} />
      <ChatForm
        msg={message}
        setMsg={setMessage}
        msgs={messages}
        setMsgs={setMessages}
        socket={socket}
      />
    </div>
  );
};

export default CurrentChat;
