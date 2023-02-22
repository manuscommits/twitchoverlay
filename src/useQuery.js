import { useSearchParams } from "react-router-dom";

const name = "channel";

const useQuery = () => {
    const [searchParams] = useSearchParams();
    searchParams.has(name) && console.log("URL parameter ", searchParams.get(name));
    return searchParams.has(name) ? { channel: searchParams.get(name) } : undefined;
};

export default useQuery;