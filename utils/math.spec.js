const mathUtils = require('./math');

// test suite - describe
// test case - it

describe('Unit-tests for mathUtils', function () {
    describe('#require', function () {
        it('should load module', function () {
            expect(mathUtils).toEqual(expect.any(Object));
            expect(Object.keys(mathUtils).length).toEqual(2);
        });
    });

    describe('#sum', function () {
        it('should return error missing..', function () {
            let res;
            try {
                res = mathUtils.sum();   
            } catch (error) {
                expect(error).toBeDefined();
            }
            expect(res).toBeUndefined();
        });

        it('should sum 2 values', function () {
            const res = mathUtils.sum(1, 2);
            expect(res).toEqual(3);
        });
    });
});