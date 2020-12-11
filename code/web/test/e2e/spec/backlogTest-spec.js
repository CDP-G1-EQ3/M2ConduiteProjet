require('geckodriver');
const { fail } = require('assert');
const { info } = require('console');
const { resolve } = require('path');
const { title } = require('process');
const { Builder, By } = require('selenium-webdriver');


let driver = null;
const timing = 100;
const baseUrl = "http://localhost/backlog/";

describe("backlog tests: ", () => {

    const email = "elhadj@gmail.com";
    const password = "aaaaaaaa";

    beforeAll(async() => {
        driver = await new Builder()
                .forBrowser('firefox')
                .build();
        await login(email, password);
   });

    afterAll(() => {
      driver.quit();
    });

    it("There should be a btn to create a U.S ", async () => {
        try {
            await driver.get("http://localhost/backlog/1");
            await driver.manage().setTimeouts({ implicit: timing });
            const element = await driver.findElements(By.id("btnCreateUs"));
            expect(true).toBe(element.length != 0);
        } catch (error) {
            fail(error);
        }
   });

    it("Description should be required when creating new U.S", async () => {
        try {
            await driver.get("http://localhost/backlog/1");
            await driver.manage().setTimeouts({ implicit: timing });
            const backlogTbody = await driver.findElement(By.id("backlogTbody"));
            const usNumber = await backlogTbody.findElements(By.css("tr")).length;
            await driver.findElement(By.id("btnCreateUs")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            await driver.findElement(By.id("submitUsForm")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            const newBacklogTbody = await driver.findElement(By.id("backlogTbody"));
            const newUsNumber = await newBacklogTbody.findElements(By.css("tr")).length;
            expect(usNumber).toBe(newUsNumber);
        } catch (error) {
            fail(error);
        }
   });

    it("backlog should contains a U.S after his creation", async () => {
        try {
            await driver.get("http://localhost/backlog/1");
            await driver.manage().setTimeouts({ implicit: timing });
            await driver.findElement(By.id("btnCreateUs")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            await driver.findElement(By.id("description2")).sendKeys("test description");
            await driver.findElement(By.id("submitUsForm")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            const backlogTbody = await driver.findElement(By.id("backlogTbody"));
            const userStories = await backlogTbody.findElements(By.css("tr"));
            let found = false;
            for (let us of userStories) {
                let usComponents = await us.findElements(By.css("td"));
                const description = await usComponents[0].getText();
                if (description === "test description") {
                    found = true;
                }
            }
            expect(found).toBe(true);
        } catch (error) {
            fail(error);
        }
   });
    it("start date and end date should be required when starting a sprint ", async () => {
        try {
            await driver.get("http://localhost/backlog/1");
            await driver.manage().setTimeouts({ implicit: timing });
            startButtons = await driver.findElements(By.className("btnShowStartSprintModal"));
            if (startButtons.length > 0)
                await startButtons[0].click();
            await driver.manage().setTimeouts({ implicit: timing });
            await driver.findElement(By.id("btnSubmitStartSprint")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(true).toBe(currentUrl.includes("http://localhost/backlog"));
        } catch (error) {
            fail(error);
        }
   });


    it("when the user click on a us, the UI to delete or to edit the us should appear", async () => {
        try {
            await driver.get("http://localhost/backlog/1");
            await driver.manage().setTimeouts({ implicit: timing });
            const backlogTbody = await driver.findElement(By.id("backlogTbody"));
            const userStories = await backlogTbody.findElements(By.css("tr"));
            if (userStories.length > 0) {
                const tds = await userStories[0].findElements(By.css("td"));
                await tds[0].click();
                await driver.manage().setTimeouts({ implicit: timing });
                const infosUs = await driver.findElements(By.id("infosUs"));
                expect(infosUs.length).toBe(1);
            } 
       } catch (error) {
            fail(error);
        }
   });
});

async function register(email, password) {
   try {
        driver = await new Builder()
                   .forBrowser('firefox')
                   .build();
       const url = "http://localhost/user/signup";
       await driver.get(url);
       driver.findElement(By.id("mail")).sendKeys(email);
       driver.findElement(By.id("username")).sendKeys("userProject");
       driver.findElement(By.id("password")).sendKeys(password);
       driver.findElement(By.id("passwordConfirmation")).sendKeys(password);
       await driver.findElement(By.id("btnRegister")).click();
       await driver.manage().setTimeouts({ implicit: 100 });
   } catch (error) {
       console.error(error);
   }       
}

async function login(email, password) {
    try {
        await driver.get("http://localhost/user/login");
        driver.findElement(By.id("inputLogin")).sendKeys(email);
        driver.findElement(By.id("inputPassword")).sendKeys(password);
        await driver.findElement(By.id("btnLogin")).click();
        await driver.manage().setTimeouts({ implicit: timing });
    } catch (error) {
        console.error(error);
    }  
}

async function createProject(title, description) {
    const url = "http://localhost/project/new";
    await driver.get(url);
    await driver.findElement(By.id("inputTitle")).sendKeys(title);
    await driver.findElement(By.id("inputDescription")).sendKeys(description);
    await driver.findElement(By.id("btnCreate")).click();
    await driver.manage().setTimeouts({ implicit: timing });
}