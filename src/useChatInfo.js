import { useCallback, useState } from "react";
import useQuery from "./useQuery";
import useTwitchChat from "./useTwitchChat";

const chatterNames = "names";
const firstChatter = "first";

const timeout = 5000;

const useChatInfo = () => {
    const [state, setState] = useState({ [chatterNames]: {}, [firstChatter]: undefined });
    const channel = useQuery();

    const resetAfterTimeout = () => {
        setTimeout(() => setState(s => ({ ...s, [firstChatter]: undefined })), timeout);
    }

    const onMessage = useCallback((channel, tags, message, self) => {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        setState((s) => {
            const c = { ...s };
            if (!c[firstChatter] && c[chatterNames][displayName] === undefined) {
                c[chatterNames][displayName] = true;
                c[firstChatter] = displayName;
                resetAfterTimeout();
            }
            return c;
        });
    }, []);

    useTwitchChat(channel, onMessage);

    return state[firstChatter];
};

export default useChatInfo;