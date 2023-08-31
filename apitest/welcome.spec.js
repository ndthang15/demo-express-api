const fetch = require('node-fetch');
let userToken;

describe('api test users', function () {
    it('should user login', async function () {
        const res = await fetchTest('http://localhost:6065/abc');
        
        expect(res.status).toEqual(404);
    });

    it('should get data', async function () {
        const res = await fetchTest('http://localhost:6065');
        expect(res).toBeDefined();
        expect(res.status).toEqual(200);
        const body = await res.json();
        expect(body.message).toEqual('Welcome');
    });
});

async function fetchTest(url, options) {
    const callApiTest = await fetch(url, options);
    if (callApiTest.status >= 500) {
      const errResultFromTest = await callApiTest.text();
      console.log(
        `Error Id From API [${_.get(options, 'method')}] ${url}`,
        errResultFromTest
      );
    }

    return callApiTest;
}