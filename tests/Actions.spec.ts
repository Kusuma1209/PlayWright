import {test,expect} from "@playwright/test";

test.describe('Actions',()=>{

    test('click fill type',async({page})=>{
        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').type('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('check uncheck',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
        const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    
        await checkbox1.check();
        await expect(checkbox1).toBeChecked();

        await checkbox2.uncheck();
        await expect(checkbox2).not.toBeChecked();
        await page.screenshot({path:'actionSS.png'});

    });
});