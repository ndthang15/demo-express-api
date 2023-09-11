const dalStudent = require('./users')();

describe('Unit-tests for dalStudent', function () {
    describe('#require', function () {
        it('should load module', function () {
            expect(dalStudent).toEqual(expect.any(Object));
            expect(Object.keys(dalStudent).length).toEqual(1);
        });
    });

    describe('#getStudents', function () {
        it('should get student', async function () {
            const res = await dalStudent.getStudents();
            expect(res).toBeDefined();
            expect(res.length).toEqual(1);
            expect(res[0].id).toEqual(1);
        });
    });
});