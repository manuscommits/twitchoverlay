import { useEffect } from "react";
import tmi from "tmi.js";

var client;

const initChatConnection = async (channel, onMessage) => {
    if (client === undefined) {
        client = new tmi.Client({
            channels: [channel]
        });
        client.on('message', onMessage);
        client.connect()
            .then(() => console.log("Connection to " + channel + " initialized!"));
    }
};

const useTwitchChat = (channel, onMessage) => {
    useEffect(() => {
        initChatConnection(channel, onMessage);
        console.log("useEffect in useTwitch")
    }, [channel, onMessage]);
    console.log("useTwitchChat");
};

export default useTwitchChat;