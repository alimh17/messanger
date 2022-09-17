import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const MessagesList = ({ messages, user, current }) => {
  return (
    <ScrollToBottom className="flex flex-col h-screen">
      {messages &&
        messages.map((msg, i) => (
          <div className={`flex  p-3  w-full `} key={i}>
            <div
              className={` w-full flex ${
                msg && msg.auther === user.username
                  ? "justify-start"
                  : "justify-end"
              } `}
            >
              <div
                className={`${
                  msg && msg.auther === user.username ? "mr-2" : "order-2 ml-2"
                } `}
              >
                <img
                  src={
                    msg && msg.auther === user.username
                      ? `http://localhost:5000/${user.image}`
                      : `http://localhost:5000/${current.image}`
                  }
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div
                className={`w-full md:w-1/2  rounded-lg justify-between  ${
                  msg && msg.auther === user.username
                    ? "bg-blue-300"
                    : "bg-gray-300"
                } relative `}
              >
                <div className="flex  text-sm justify-between p-3 w-full">
                  <h2 className="font-bold">
                    {msg && msg.auther === user.username
                      ? "شما"
                      : current.username}
                  </h2>
                  <p>{msg && msg.time}</p>
                </div>
                <div className="text-right ">
                  <p className="p-3">{msg && msg.content}</p>
                </div>
                <div
                  style={
                    msg && msg.auther === user.username
                      ? {
                          width: 0,
                          height: 0,
                          borderTop: "5px solid transparent",
                          borderBottom: "5px solid transparent",
                          borderRight: "10px solid #93C5FD",
                          position: "absolute",
                          left: "-10px",
                          bottom: " 20%",
                        }
                      : {
                          width: 0,
                          height: 0,
                          borderTop: "5px solid transparent",
                          borderBottom: "5px solid transparent",
                          borderLeft: "10px solid var(--pallet-8)",
                          position: "absolute",
                          right: "-10px",
                          bottom: " 20%",
                        }
                  }
                ></div>
              </div>
            </div>
          </div>
        ))}
    </ScrollToBottom>
  );
};

export default MessagesList;
