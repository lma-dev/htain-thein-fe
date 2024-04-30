import { useEffect } from "react";
import Pusher from "pusher-js";

const usePusher = (channelName, eventName, actionFunction) => {
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    });
    pusher.connection.bind("connected", () => {});

    const channel = pusher.subscribe(channelName);

    channel.bind(eventName, actionFunction);
    pusher.connection.bind("error", (err) => {
      console.error("Error connecting to Pusher:", err);
    });
    return () => {
      channel.unbind(eventName);
      pusher.unsubscribe(channelName);
    };
  }, [channelName, eventName, actionFunction]);
};

export default usePusher;
