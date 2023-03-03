import { useEffect } from "react";
import { findAllMatches } from "../utils/regexUtils";
import { fetchWebsite } from "../utils/webUtils";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.der-postillon.com/search/label/Newsticker";

const tickerSitesRegex = /https:\/\/www\.der-postillon\.com\/\d+\/\d+\/newsticker-\d+\.html/gm;
const tickerRegex = /\+\+\+[^+<>\n{}=;]+\+\+\+/gm;
const maxSites = undefined;

const findNewsSites = async () => {
    const html = await fetchWebsite(corsAnywhere + url);
    const tickerSitesUrls = findAllMatches(html, tickerSitesRegex);
    console.log("found urls", tickerSitesUrls);
    return tickerSitesUrls;
};

const getTickerMessages = async () => {
    const urls = await findNewsSites();
    const allTickerMessages = await Promise.all(urls.slice(0, maxSites).flatMap(async (tickerUrl) => {
        const html = await fetchWebsite(corsAnywhere + tickerUrl);
        const tickerMessages = findAllMatches(html, tickerRegex);
        return tickerMessages;
    }));
    const flatMessages = allTickerMessages
        .flatMap((tickers) => tickers)
        .map(ticker => ticker.replaceAll("+++", "").trim())
        .map(decodeURIComponent)
        .filter(ticker => !ticker.includes("\\"));
    const uniqueMessages = [...new Set(flatMessages)];
    console.log("found ticker", uniqueMessages, "raw ticker", allTickerMessages);

    const shuffledMessages = uniqueMessages.sort(() => 0.5 - Math.random());
    return shuffledMessages;
};

const usePostillon = (callback) => {
    useEffect(() => {
        getTickerMessages().then(callback);
        // eslint-disable-next-line
    }, []);
};

export default usePostillon;