import useBuffer from "./useBuffer";
import useFirstChatter from "./useFirstChatter";

const useFirstChatterBuffer = () => {
    const { pushItem, popItems } = useBuffer();
    useFirstChatter(firstChatter => {
        console.log("new first chatter", firstChatter);
        pushItem(firstChatter);
    });

    return { getNextFirstChatters: popItems };
};

export default useFirstChatterBuffer;