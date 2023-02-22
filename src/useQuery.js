import { useLocation } from "react-router-dom";

const name = "channel";

const useQuery = () => {
    const query = new URLSearchParams(useLocation().search);
    return query.has(name) ? query.get(name) : undefined;
};

export default useQuery;