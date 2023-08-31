async function getStudents() {
    return Promise.resolve([{ id: 1, name: 'testUser1' }]);
}

module.exports = { getStudents };