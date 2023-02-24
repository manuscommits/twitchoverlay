import { useCallback, useEffect, useState } from "react";
import useFirstChatter from "./useFirstChatter";
import usePostillion from "./usePostillion";

const maxMessages = 10;

const useTicker = () => {
    const [state, setMessageList] = useState({ messageList: [], index: 0 });
    const postillionTicker = usePostillion();

    const pushMessage = useCallback((message) => {
        console.log("pushMessage", message);
        setMessageList(oldState => {
            if (oldState.messageList.length < maxMessages) {
                return { ...oldState, messageList: oldState.messageList.concat([message]) }
            }
            const newMessageList = [...oldState.messageList];
            newMessageList[oldState.index] = message;
            return { messageList: newMessageList, index: (oldState.index + 1) % maxMessages };
        });
    }, []);

    useEffect(() => {
        if (postillionTicker) {
            postillionTicker.forEach((message, index) => setTimeout(() => pushMessage(message), index * 10000))
        }
    }, [postillionTicker, pushMessage]);

    useFirstChatter(pushMessage);

    return state.messageList;
};

export default useTicker;