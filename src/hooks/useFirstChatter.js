import { useCallback, useState } from "react";
import useQuery from "./useQuery";
import useTwitchChat from "./useTwitchChat";

const useFirstChatter = (callback) => {
    const [, setChatters] = useState({});
    const channel = useQuery();

    const updateStateOnMessage = useCallback((oldChatters, displayName) => {
        var newChatters = oldChatters;
        if (oldChatters[displayName] === undefined) {
            newChatters = { ...oldChatters };
            newChatters[displayName] = true;
            callback(displayName);
        }
        return newChatters;
    }, [callback]);

    const onMessage = useCallback((channel, tags, message, self) => {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        setChatters((oldChatters) => updateStateOnMessage(oldChatters, displayName));
    }, [updateStateOnMessage]);

    useTwitchChat(channel, onMessage);
};

export default useFirstChatter;