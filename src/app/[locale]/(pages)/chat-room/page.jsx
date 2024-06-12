"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import { parseCookies } from "nookies";
import { Send } from "lucide-react";
import Spinner from "../../../components/Spinner/Spinner";
import { createData } from "../../../utils/ApiMethodHelper";
import { firestore } from "../../../libs/firebaseConfig";

const ChatPage = ({ params }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userIdFromCookies = parseCookies().userId;

  const senderId = parseInt(userIdFromCookies, 10);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
        setMessages(messagesData);
      });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    try {
      const message = { message: newMessage, senderId: senderId };
      await createData("/send-message", message);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  console.log("messages", messages);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="chat-room" />
      </div>
      <div className="p-5">
        <div className="mr-5 mt-5 ">
          <div className="mb-4 overflow-y-auto max-h-screen md:max-h-[560px] sm:max-h-[360px]">
            {messages?.map((message, index) => (
              // This will log true or false in the console
              <div
                className={`flex ${
                  message?.senderId === senderId
                    ? "justify-end items-end"
                    : "justify-start items-start"
                } mb-4`}
                key={index}
              >
                <div
                  className={`rounded-lg p-3 max-w-md ${
                    message?.senderId === senderId
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-black"
                  } shadow-md`}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      message?.senderId === senderId
                        ? "text-yellow-400"
                        : "text-black"
                    }`}
                  >
                    {/* {message?.senderInfo?.name ?? "still loading ..."} */}
                  </p>
                  <p className="text-base break-words">{message.message}</p>
                  <small className="text-xs text-gray-400 mt-1">
                    {message.timestamp}
                  </small>
                </div>
              </div>
            ))}
          </div>

          {/* Chat input field */}
          <div className="flex justify-between flex-wrap gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border border-gray-300 rounded p-2 mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:border-blue-500"
            />
            <div className="">
              <button
                className="bg-red-500 text-white rounded p-2 mb-2 lg:mb-0 lg:mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 w-full lg:w-auto"
                onClick={sendMessage}
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
