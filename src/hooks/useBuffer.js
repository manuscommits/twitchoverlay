import { useCallback, useState } from "react";

const useBuffer = () => {
    const [buffer, setBuffer] = useState([]);

    const pushItems = useCallback((items) => {
        setBuffer(oldBuffer => oldBuffer.concat(items));
    }, [setBuffer]);

    const pushItem = useCallback((item) => {
        pushItems([item]);
    }, [pushItems]);

    const popItems = useCallback((n) => {
        var items = buffer.slice(0, n);
        setBuffer(buffer.slice(n, undefined));
        return items;
    }, [buffer]);

    return { pushItem, pushItems, popItems };
};

export default useBuffer;