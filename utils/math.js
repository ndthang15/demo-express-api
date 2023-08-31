function sum(a, b) {
    if (!a) 
        throw new Error('a is required!');
    if (!b) 
        throw new Error('b is required!');
    return a + b;
}

module.exports = { sum, function() {} };