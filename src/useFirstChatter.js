import { useCallback, useState } from "react";
import useQuery from "./useQuery";
import useTwitchChat from "./useTwitchChat";

const chatterNames = "names";
const firstChatter = "first";

const timeout = 10000;

const useFirstChatter = () => {
    const [state, setState] = useState({ [chatterNames]: {}, [firstChatter]: undefined });
    const channel = useQuery();

    const resetAfterTimeout = useCallback(() =>
        setTimeout(() => setState(oldState => ({ ...oldState, [firstChatter]: undefined })), timeout), []);

    const updateStateOnMessage = useCallback((oldState, displayName) => {
        var newState = oldState;
        if (!oldState[firstChatter] && oldState[chatterNames][displayName] === undefined) {
            newState = { ...oldState };
            newState[chatterNames][displayName] = true;
            newState[firstChatter] = displayName;
            resetAfterTimeout();
        }
        return newState;
    }, []);

    const onMessage = useCallback((channel, tags, message, self) => {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        setState((oldState) => updateStateOnMessage(oldState, displayName));
    }, []);

    useTwitchChat(channel, onMessage);

    return state[firstChatter];
};

export default useFirstChatter;