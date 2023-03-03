import { useEffect, useState } from "react";
import { findAllMatches } from "../utils/regexUtils";
import { fetchWebsite } from "../utils/webUtils";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.der-postillon.com/search/label/Newsticker";

const tickerSitesRegex = /https:\/\/www\.der-postillon\.com\/\d+\/\d+\/newsticker-\d+\.html/gm;
const tickerRegex = /\+\+\+[^+<>\n{}=;]+\+\+\+/gm;

const findNewsSites = async () => {
    const html = await fetchWebsite(corsAnywhere + url);
    const tickerSitesUrls = findAllMatches(html, tickerSitesRegex);
    console.log("found urls", tickerSitesUrls);
    return tickerSitesUrls;
};

const getTickerMessages = async () => {
    const urls = await findNewsSites();
    const allTickerMessages = await Promise.all(urls.flatMap(async (tickerUrl) => {
        const html = await fetchWebsite(corsAnywhere + tickerUrl);
        const tickerMessages = findAllMatches(html, tickerRegex);
        return tickerMessages;
    }))
    const flatMessages = allTickerMessages
        .flatMap((tickers) => tickers)
        .map(decodeURIComponent);

    const uniqueMessages = [...new Set(flatMessages)];
    console.log("found ticker", uniqueMessages);
    return uniqueMessages;
};

const usePostillion = () => {
    const [tickerMessages, setTickerMessages] = useState();

    useEffect(() => {
        if (!tickerMessages) getTickerMessages().then(setTickerMessages);
    }, [tickerMessages]);

    return tickerMessages;
};

export default usePostillion;