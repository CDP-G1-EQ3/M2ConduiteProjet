require('geckodriver');
const { Builder, By } = require('selenium-webdriver');
const assert = require("assert");


/* if the user's registration was successful then he should be redirected to the login page */
(async function myFunction() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .build();
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("mail")).sendKeys("user@gmail.com");
            driver.findElement(By.id("username")).sendKeys("user");
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("aaaaaaaa");
            let btnRegister = await driver.findElement(By.id("btnRegister"));
            btnRegister.click();
            await driver.manage().setTimeouts({ implicit: 1000 });
            const currentUrl = await driver.getCurrentUrl();
            assert(currentUrl === "http://localhost/user/login");
        } catch (error) {
            console.log(error);
        }finally {
            driver.quit();
        }
})();


/* if the user already exists then it should stay at same page */
(async function myFunction() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .build();
        try {
            const url = "http://localhost/user/signup";
            await driver.get(url);
            driver.findElement(By.id("mail")).sendKeys("user@gmail.com");
            driver.findElement(By.id("username")).sendKeys("user");
            driver.findElement(By.id("password")).sendKeys("aaaaaaaa");
            driver.findElement(By.id("passwordConfirmation")).sendKeys("aaaaaaaa");
            let btnRegister = await driver.findElement(By.id("btnRegister"));
            btnRegister.click();
            await driver.manage().setTimeouts({ implicit: 1000 });
            const currentUrl = await driver.getCurrentUrl();
            assert(currentUrl === url);
        } catch (error) {
            console.log(error);
        }finally {
            driver.quit();
        }
})();