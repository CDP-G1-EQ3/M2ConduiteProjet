require('geckodriver');
const { resolve } = require('path');
const { title } = require('process');
const { Builder, By } = require('selenium-webdriver');


let driver = null;
const timing = 100;

describe("projects tests: ", () => {

    const email = "userProject@gmail.com";
    const password = "aaaaaaaa";

    beforeAll(async() => {
        await register(email, password);
        await login(email, password);
   });

    afterAll(() => {
       driver.quit();
    });

    it("user should be redirected to the project creation page", async () => {
        try {
            await driver.get("http://localhost/project");
            await driver.findElement(By.id("btnCreateProject")).click();
            await sleep(timing);
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe("http://localhost/project/new");
        } catch (error) {
            fail(error);
        }
    });

    it("project title should be required", async () => {
        try {
            const url = "http://localhost/project/new";
            await driver.get(url);
            await driver.findElement(By.id("btnCreate")).click();
            await driver.manage().setTimeouts({ implicit: timing });
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe(url);
        } catch (error) {
            fail(error);
        }
    });

    it("if the project already exists, then an error should be printed", async () => {
        try {
            await createProject("title", "description");
            await createProject("title", "description");
            const textError = await driver.findElement(By.id("errorMsg")).getText();
            expect(textError).toBe("Un projet avec ce titre éxiste déjà");
        } catch (error) {
            fail(error);
        }
    });

    it("The created project should be displayed", async () => {
        try {
            await createProject("title1", "description1");
            await driver.get("http://localhost/project");
            let tbody = driver.findElement(By.css("tbody"));
            let projects = await tbody.findElements(By.css("tr"));
            let found = false;
            for(let project of projects) {
                let help = await project.findElements(By.css("td"));
                const name = await help[0].getText();
                const description = await help[1].getText();
                if (name === "title1" && description === "description1") {
                    found = true;
                    break;
                }
            }
            expect(found).toBe(true);
        } catch (error) {
            fail(error);
        }
    });

    it("a click on a project name should redirect to the backlog page", async () => {
        try {
            await createProject("test click", "uzumaki");
            await driver.get("http://localhost/project");
            let tbody = driver.findElement(By.css("tbody"));
            let projects = await tbody.findElements(By.css("tr"));
            for(let project of projects) {
                let help = await project.findElements(By.css("td"));
                const name = await help[0].getText();
                const description = await help[1].getText();
                if (name === "test click" && description === "uzumaki") {
                    let link = await help[0].findElement(By.css("a"));
                    await link.click();
                    await driver.manage().setTimeouts({ implicit: timing });
                    const currentUrl = await driver.getCurrentUrl();
                    expect(true).toBe(currentUrl.includes("http://localhost/backlog"));
                }
            }
 
        } catch (error) {
            fail(error);
        }
    });

});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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