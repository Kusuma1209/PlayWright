import {test} from '/workspaces/PlayWright/fixtures/baseTest.ts';
import {expect} from '@playwright/test';

test('Login test',async({loginPage})=>{
    await expect(loginPage.locator('.title')).toHaveText('Products');
    await expect(loginPage.locator('.inventory_item')).toHaveCount(6);
    await loginPage.getByText('Sauce Labs Backpack').click();
    await loginPage.getByRole('button', { name: 'Add to cart' }).click();
    await loginPage.locator('.shopping_cart_link').click();
    await expect(loginPage.locator('.cart_item')).toHaveCount(1);
    await loginPage.screenshot({path:'fixturesSS.png',fullPage:true});
});