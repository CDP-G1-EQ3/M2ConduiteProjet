require('geckodriver');
const { Builder, By } = require('selenium-webdriver');

describe("Register tests: ", () => {

    let driver = null;
    const timing = 1000;

    beforeEach(async () => {
        driver = await new Builder()
                .forBrowser('firefox')
                .build();
    });

    afterEach(() => {
       driver.quit();
    });

    it("after success registration, user should be redirected to the login page", async () => {
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("mail")).sendKeys("userRegister@gmail.com");
            driver.findElement(By.id("username")).sendKeys("userRegister");
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("aaaaaaaa");
            let btnRegister = await driver.findElement(By.id("btnRegister"));
            btnRegister.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/user/login");
        } catch (error) {
            fail(error);
        }       
    });

    it("if the user alread exists, then an message error should be printed", async () => {
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("mail")).sendKeys("userRegister@gmail.com");
            driver.findElement(By.id("username")).sendKeys("userRegister");
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("aaaaaaaa");
            let btnRegister = await driver.findElement(By.id("btnRegister"));
            btnRegister.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const textError = await driver.findElement(By.id("registerError")).getText();
            expect(textError).toBe("a user with this email already exists");
        } catch (error) {
            fail(error);
        }
    });

    it("if passwords are differents, then button register should not be enabled", async () => {
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("bbb");
            let isEnabled = await driver.findElement(By.id("btnRegister")).isEnabled();
            expect(isEnabled).toBe(false);
        } catch (error) {
            fail(error);
        }
    });

    it("all fields should be required", async () => {
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("aaaaaaaa");
            let btnRegister = await driver.findElement(By.id("btnRegister"));
            btnRegister.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/user/signup");
        } catch (error) {
            fail(error);
        }
    });
});