"use client";
import { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import Layout from "../../../components/layout";
import { parseCookies } from "nookies";
import { Send } from "lucide-react";
import useFireStoreCollection from "../../../hooks/useFireStoreCollection";
import { useCreateQuery } from "../../../hooks/useCreateQuery";
import { createMessageApi } from "../../../api/chat/sendMessageDataApi";
import { handleErrors } from "../../../schema/errorHandler";
import { messageSchema } from "../../../schema/messageSchema";
import { MessageSchemaType } from "../../../types/ChatRoom/Zod/MessageSchemaType";

const ChatPage = () => {
  const [newMessage, setNewMessage] = useState("");
  const userIdFromCookies = parseCookies().userId;

  const senderId = parseInt(userIdFromCookies, 10);
  const { data: messages, count } = useFireStoreCollection(
    "messages",
    "timestamp"
  );
  const createSendMutation = useCreateQuery(createMessageApi);
  const sendMessage = async () => {
    try {
      const validationData: MessageSchemaType = messageSchema.parse(newMessage);
      await createSendMutation.mutateAsync(validationData);
      setNewMessage("");
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="chat-room" />
      </div>
      <div className="p-5">
        <div className="mr-5 mt-5 ">
          <div className="mb-4 overflow-y-auto max-h-screen md:max-h-[560px] sm:max-h-[360px] p-3">
            {messages?.map((message, index) => (
              <div
                className={`flex ${message?.senderId === senderId
                  ? "justify-end items-end"
                  : "justify-start items-start"
                  } mb-4`}
                key={index}
              >
                <div
                  className={`rounded-xl p-3 max-w-md ${message?.senderId === senderId
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                    } shadow-md`}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${message?.senderId === senderId
                      ? "text-yellow-400"
                      : "text-black"
                      }`}
                  ></p>
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
            <div>
              <button
                className="bg-red-500 text-white rounded p-2 mb-2 lg:mb-0 lg:mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 w-full lg:w-auto"
                onClick={sendMessage}
                aria-label="button"
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
