import { useCallback, useState } from "react";
import { nullArrayWithLength } from "../utils/jsUtils";
import useFirstChatterBuffer from "./useFirstChatterBuffer";
import useFirstChatterMessageMapper from "./useFirstChatterMessageMapper";
import usePostillonBuffer from "./usePostillonBuffer";

const maxMessages = 4;
const preFilledArray = nullArrayWithLength(maxMessages);
const prefix = "+++ ";
const suffix = " +++";
const maxCycles = 2;

const useTicker = () => {
    const [, setCycleCountner] = useState(0);
    const [messageList, setMessageList] = useState(preFilledArray);

    const { getNextFirstChatters } = useFirstChatterBuffer();
    const { getNextPostillonTickers } = usePostillonBuffer();

    const { mapToMessage } = useFirstChatterMessageMapper();

    const updateMessages = useCallback(() => {
        const newFirstChatters = getNextFirstChatters(maxMessages);
        const postillonTickers = getNextPostillonTickers(maxMessages - newFirstChatters.length);
        const emptySlots = nullArrayWithLength(maxMessages - newFirstChatters.length - postillonTickers.length);
        const newMessageList = newFirstChatters
            .map(mapToMessage)
            .concat(postillonTickers)
            .map(message => prefix + message + suffix)
            .concat(emptySlots);
        console.log("Updating ticker messages!", newMessageList);
        setMessageList(newMessageList);
    }, [getNextFirstChatters, getNextPostillonTickers, mapToMessage]);

    const onCycleComplete = useCallback(() => {
        setCycleCountner((oldCycleCoutner) => {
            if (oldCycleCoutner % maxCycles === 0) updateMessages();
            return oldCycleCoutner + 1;
        });
    }, [setCycleCountner, updateMessages]);

    return { messageList, onCycleComplete };
};

export default useTicker;