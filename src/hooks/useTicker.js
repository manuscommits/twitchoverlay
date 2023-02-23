import { useCallback, useState } from "react";
import useFirstChatter from "./useFirstChatter";

const maxMessages = 4;

const useTicker = () => {
    const [state, setMessageList] = useState({ messageList: [], index: 0 });

    const pushMessage = useCallback((message) => {
        setMessageList(oldState => {
            if (oldState.messageList.length < maxMessages) {
                return { ...oldState, messageList: oldState.messageList.concat([message]) }
            }
            const newMessageList = [...oldState.messageList];
            newMessageList[oldState.index] = message;
            return { messageList: newMessageList, index: (oldState.index + 1) % maxMessages };
        });
    }, []);

    useFirstChatter(pushMessage);

    return state.messageList;
};

export default useTicker;