import useBuffer from "./useBuffer";
import usePostillon from "./usePostillon";

const usePostillonBuffer = () => {
    const { pushItems, popItems } = useBuffer();
    usePostillon(pushItems);

    return { getNextPostillonTickers: popItems };
};

export default usePostillonBuffer;