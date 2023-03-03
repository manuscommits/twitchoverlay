import { useCallback, useEffect, useState } from "react";
import useFirstChatter from "./useFirstChatter";
import usePostillion from "./usePostillion";

const maxMessages = 8;
const preFilledArray = Array.apply(null, Array(maxMessages)).map(i => i);
const tickerTimeInterval = 30000;

const useTicker = () => {
    const [state, setMessageList] = useState({ messageList: preFilledArray, index: 0 });
    const postillionTicker = usePostillion();

    const pushMessage = useCallback((message) => {
        console.log("pushMessage", message);
        setMessageList(oldState => {
            const newMessageList = [...oldState.messageList];
            newMessageList[oldState.index] = message;
            return { messageList: newMessageList, index: (oldState.index + 1) % maxMessages };
        });
    }, []);

    useEffect(() => {
        if (postillionTicker) {
            postillionTicker.forEach((message, index) => setTimeout(() => pushMessage(message), index * tickerTimeInterval))
        }
    }, [postillionTicker, pushMessage]);

    useFirstChatter(pushMessage);

    return state.messageList;
};

export default useTicker;