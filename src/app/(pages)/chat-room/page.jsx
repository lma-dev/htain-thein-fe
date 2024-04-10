"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import { parseCookies } from "nookies";
import { FetchAllMessageService } from "../../services/ChatService/FetchAllMessageService";
import { createMessagesService } from "../../services/ChatService/CreateMessageService";
import { useDoubleParameterCreateQuery } from "../../hooks/useCreateQuery";
import usePusher from "../../hooks/usePusher";
import { Send } from "lucide-react";
import ToastsBox from "../../components/Toasts/ToastsBox";
import Spinner from "../../components/Spinner/Spinner";
const ChatPage = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userIdFromCookies = parseCookies().userId;

  const senderId = parseInt(userIdFromCookies, 10);
  const createMessageMutation = useDoubleParameterCreateQuery(
    "chats",
    createMessagesService
  );

  const handleMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data.message]);
  };

  usePusher(process.env.NEXT_PUBLIC_CHAT_CHANNEL, handleMessage);

  const { data, isLoading: loadingMessages } = FetchAllMessageService(senderId);

  const sendMessage = async () => {
    await createMessageMutation.mutateAsync({ id: senderId, data: newMessage });
    setNewMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (data) {
      setMessages(data.messages);
    }
  }, [data]);

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="chat-room" />
      </div>
      {loadingMessages ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="p-5">
          <div className="mr-5 mt-5 ">
            <div className="mb-4 overflow-y-auto max-h-screen md:max-h-[560px] sm:max-h-[360px]">
              {messages?.map((message, index) => (
                // This will log true or false in the console
                <div
                  className={`flex ${
                    message?.senderInfo?.id === senderId
                      ? "justify-end items-end"
                      : "justify-start items-start"
                  } mb-4`}
                  key={index}
                >
                  <div
                    className={`rounded-lg p-3 max-w-md ${
                      message?.senderInfo?.id === senderId
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                    } shadow-md`}
                  >
                    <p
                      className={`text-sm font-semibold mb-1 ${
                        message?.senderInfo?.id === senderId
                          ? "text-yellow-400"
                          : "text-black"
                      }`}
                    >
                      {message?.senderInfo?.name ?? "still loading ..."}
                    </p>
                    <p className="text-base break-words">{message.message}</p>
                    <small className="text-xs text-gray-400 mt-1">
                      {message.createdAt}
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
      )}
    </Layout>
  );
};

export default ChatPage;
