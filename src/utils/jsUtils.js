const nullArrayWithLength = (n) => {
    if (n <= 0) return [];
    return Array.apply(null, Array(n)).map(i => i);
};

const getRandomElementFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export { nullArrayWithLength, getRandomElementFromList };