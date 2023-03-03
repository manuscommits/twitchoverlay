const nullArrayWithLength = (n) => {
    if (n <= 0) return [];
    return Array.apply(null, Array(n)).map(i => i);
};

export { nullArrayWithLength };