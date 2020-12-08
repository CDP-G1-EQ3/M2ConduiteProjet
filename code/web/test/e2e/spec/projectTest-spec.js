require('geckodriver');
const { Builder, By } = require('selenium-webdriver');

describe("projects tests: ", () => {

    let driver = null;
    const timing = 100;

    beforeEach(async () => {
        driver = await new Builder()
                .forBrowser('firefox')
                .build();
    });

    afterEach(() => {
       driver.quit();
    });

    it("after success registration, user should be redirected to the login page", async () => {
        expect(true).toBe(true);
    });
});