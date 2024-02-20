'use client'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { Send } from 'lucide-react';
import { parseCookies } from "nookies";
import Toast from '../../components/Toasts/ToastsBox';
import { fetchMessagesService } from '../../services/ChatService/FetchMessagesService';
import { createMessagesService } from '../../services/ChatService/CreateMessageService';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const senderId = parseCookies().userId;
    console.log('senderId', senderId);
    const pusherJob = () => {
        console.log('in pusher ...');
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        });

        const channel = pusher.subscribe('home-chat');

        channel.bind('keeper', function (data) {
            console.log('in keeper ...');
            setMessages(prevMessages => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind('keeper');
            pusher.unsubscribe('home-chat');

        };
    }

    const formatHumanTime = (timestamp) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(timestamp).toLocaleString(undefined, options);
    };

    const fetchData = async () => {
        try {
            console.log('in fetching ...');
            const [fetchAllMessages, fetchUserInfo] = await fetchMessagesService(senderId, setLoading);
            setLoading(false);
            setMessages(fetchAllMessages.messages);
            setUserInfo(fetchUserInfo.data);
        } catch (error) {
            if (error instanceof Error) {
                Toast.error(error.message);
            } else {
                Toast.error("An error occurred");
            }
        }

    };

    const sendMessage = async () => {
        await createMessagesService(senderId, newMessage);
        setNewMessage("");
    };

    useEffect(() => {

        fetchData();
        pusherJob();
    }, []);



    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='chat-room' />
            </div>
            {loading ? (
                <span>Loading... </span>
            ) : (
                <div className='p-5'>
                    <div className="mr-5 mt-5 ">

                        <div className="mb-4 overflow-y-auto max-h-screen md:max-h-[560px] sm:max-h-[360px]">
                            {messages.map((message, index) => (
                                <div className={`flex ${message.sender_id === senderId ? 'justify-end items-end' : 'justify-start items-start'} mb-4`} key={index}>
                                    <div className={`rounded-lg p-3 max-w-md ${message.sender_id === senderId ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} shadow-md`}>
                                        <p className={`text-sm font-semibold mb-1 ${message.sender_id === senderId ? 'text-yellow-400' : 'text-black'}`}>{userInfo.name}</p>
                                        <p className="text-base break-words">{message.message}</p>
                                        <small className="text-xs text-gray-400 mt-1">
                                            {formatHumanTime(message.created_at)}
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
}

export default ChatPage;