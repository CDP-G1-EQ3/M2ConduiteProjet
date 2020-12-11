require('geckodriver');
const { Builder, By } = require('selenium-webdriver');


describe("Login tests: ", () => {

    let driver = null;
    const timing = 10; // ms

    beforeEach(async () => {
        driver = await new Builder()
                .forBrowser('firefox')
                .build();
    });

    afterEach(() => {
       driver.quit();
    });

    it("if the email is not valid, then user must stay at the login page", async () => {
        try {
            const url = "http://localhost/user/login";
            await driver.get(url);
            driver.findElement(By.id("inputLogin")).sendKeys("gmail.com-invalidMail");
            let btnLogin = await driver.findElement(By.id("btnLogin"));
            btnLogin.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/user/login");
        } catch (error) {
            fail(error);
        }       
    });

    it("if the password length is lower thant 8 characters, then the user should stay at the same page", async () => {
        try {
            const url = "http://localhost/user/login";
            await driver.get(url);
            driver.findElement(By.id("inputLogin")).sendKeys("user@gmail.com");
            driver.findElement(By.id("inputPassword")).sendKeys("aaaaaaa");
            let btnLogin = await driver.findElement(By.id("btnLogin"));
            btnLogin.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/user/login");
        } catch (error) {
            fail(error);
        }       
    });

    it("if the password and the email are right, then the user should be logged", async () => {
        try {
            const url = "http://localhost/user/login";
            await driver.get(url);
            driver.findElement(By.id("inputLogin")).sendKeys("elhadj@gmail.com");
            driver.findElement(By.id("inputPassword")).sendKeys("aaaaaaaa");
            let btnLogin = await driver.findElement(By.id("btnLogin"));
            btnLogin.click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/project");

        } catch (error) {
            fail(error);
        }       
    });

    it("if the email doesn't match any user, then an error should be printed", async () => {
        try {
            const url = "http://localhost/user/login";
            await driver.get(url);
            driver.findElement(By.id("inputLogin")).sendKeys("unknomw@gmail.com");
            driver.findElement(By.id("inputPassword")).sendKeys("aaaaaaaaaaaaaaaaaaaaa");
            let btnLogin = await driver.findElement(By.id("btnLogin"));
            btnLogin.click();
            await driver.manage().setTimeouts({ implicit: timing });
            let errorText = await driver.findElement(By.id("errorDiv")).getText();
            expect(errorText).toBe("Aucun utilisateur ne correspond à cette adresse email");
        } catch (error) {
            fail(error);
        }       
    });

    it("if the password is incorrect, then an error should be printed", async () => {
        try {
            const url = "http://localhost/user/login";
            await driver.get(url);
            driver.findElement(By.id("inputLogin")).sendKeys("elhadj@gmail.com");
            driver.findElement(By.id("inputPassword")).sendKeys("incorrectPasswordddddddddddd");
            let btnLogin = await driver.findElement(By.id("btnLogin"));
            btnLogin.click();
            await driver.manage().setTimeouts({ implicit: timing });
            let errorText = await driver.findElement(By.id("errorDiv")).getText();
            expect(errorText).toBe("Mot de passe incorrect");
        } catch (error) {
            fail(error);
        }       
    });

});