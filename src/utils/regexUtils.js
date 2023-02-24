const findMatch = (text, regex) => {
    const match = regex.exec(text);
    return match && match[0]
};

const findAllMatches = (text, regex) => {
    const matches = new Set();
    var match;
    do {
        match = findMatch(text, regex);
        if (match) matches.add(match);
    } while (match);
    return Array.from(matches);
};

export { findMatch, findAllMatches };