const { Given, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const pwConfig = require("../playwright.config");

setDefaultTimeout(60 * 1000);

let browser, context, page;

Given("I open Google homepage", async function () {
  browser = await chromium.launch({
    headless: pwConfig.use.headless
  });

  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://www.google.com");
});

Then("the page title should contain Google", async function () {
  const title = await page.title();

  if (!title.includes("Google")) {
    throw new Error(`Title does not contain Google. Actual: ${title}`);
  }

  await browser.close();
});
