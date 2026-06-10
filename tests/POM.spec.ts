import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';

test.describe('POM Test',()=>{
    test('Login Test',async({page})=>{
        const loginPage=new LoginPage(page);
        const inventoryPage=new InventoryPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.goToCart();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        await expect(page.locator('.cart_item')).toHaveCount(1);

        //await page.goBack();
        await page.locator('#continue-shopping').click();

        await inventoryPage.addItemToCart('Sauce Labs Bike Light');
        await inventoryPage.goToCart();
        await expect(page.locator('.cart_item')).toHaveCount(2);
    });
});