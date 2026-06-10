import {test,expect} from '@playwright/test';

test.describe('Assertions',()=>{
    test('tohavetext,tobevisible,tohaveURL',async({page})=>{
        await page.goto('https://www.saucedemo.com/');

        await expect(page.locator('.login_logo')).toBeVisible();

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('tocontaintext,tohaveTitle',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveTitle('The Internet'); 
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('#flash')).toContainText('You logged into a secur');
        await page.screenshot({path:'assertionss.png'});
        
    });
});