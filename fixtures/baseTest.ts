import {test as base,Page} from '@playwright/test';

type MyFixtures={
    loginPage:Page;
};

export const test=base.extend<MyFixtures>({
    loginPage:async({page},use)=>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await use(page);
    }

}); 

/*import { test as base, Page } from '@playwright/test';

// Define fixture type
type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
      .fill('standard_user');

    await page.locator('#password')
      .fill('secret_sauce');

    await page.locator('#login-button')
      .click();

    await use(page);
  }
});   */