import { test, expect }
from '@playwright/test';

test.describe('Waits',()=>{

    test('Wait Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.locator('button').click();

    await page.waitForSelector('#finish');

    await expect(page.locator('#finish')).toContainText('Hello World!');

    });

    test('Dynamic Controls', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    await page.getByRole('button', {name: 'Remove'}).click();

    await page.waitForSelector('#message');

    await expect(page.locator('#message')).toContainText("It's gone!");

    });
});