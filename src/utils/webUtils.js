const fetchWebsite = async (url) => {
    const html = await fetch(url, {})
        .catch((e) => console.log("error while fetch", e))
        .then(response => response.text());
    return html;
};

export {fetchWebsite};