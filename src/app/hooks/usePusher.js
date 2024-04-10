import { useEffect } from "react";
import Pusher from "pusher-js";

const usePusher = (channelName, handleMessage) => {
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    });

    const channel = pusher.subscribe(channelName);

    channel.bind(process.env.NEXT_PUBLIC_CHAT_EVENT, handleMessage);

    return () => {
      channel.unbind(process.env.NEXT_PUBLIC_CHAT_EVENT);
      pusher.unsubscribe(channelName);
    };
  }, [channelName, handleMessage]);
};

export default usePusher;
