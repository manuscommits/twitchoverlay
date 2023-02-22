import { useCallback, useState } from "react";
import useQuery from "./useQuery";
import useTwitchChat from "./useTwitchChat";

const useChatInfo = () => {
    const channel = useQuery();
    const [state, setState] = useState({ "names": {}, "first": undefined });

    const onMessage = useCallback((channel, tags, message, self) => {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        setState((s) => {
            const c = { ...s };
            c["names"][displayName] = (c["names"][displayName] || 0) + 1;
            if (!c["first"]) {
                if (c["names"][displayName] === 1) {
                    c["first"] = displayName;
                    setTimeout(() => setState(st => ({ ...st, "first": undefined })), 5000);
                }
            }
            return c;
        });
    }, []);

    useTwitchChat(channel, onMessage);

    return state["first"];
};

export default useChatInfo;