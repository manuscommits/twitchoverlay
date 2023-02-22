import { useSearchParams } from "react-router-dom";

const name = "channel";

const useQuery = () => {
    const [searchParams] = useSearchParams();
    return searchParams.has(name) ? searchParams.get(name) : undefined;
};

export default useQuery;