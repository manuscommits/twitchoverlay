import { useCallback } from "react";
import { getRandomElementFromList } from "../utils/jsUtils";

const welcomeList = [
    (name) => "Sei gegrüßt " + name + "!",
    (name) => "Hallo " + name + "!",
    (name) => name + " ist jetzt hier!"
];

const useFirstChatterMessageMapper = () => {

    const mapToMessage = useCallback((firstChatter) => {
        var messageBuilder = getRandomElementFromList(welcomeList);
        return messageBuilder(firstChatter);
    }, []);

    return { mapToMessage };
};

export default useFirstChatterMessageMapper;