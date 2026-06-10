import test, { expect } from "@playwright/test";

/*Task:

click "Add Element"
verify Delete button appears*/

test('Locators',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/?utm_source=chatgpt.com');
    await page.getByRole('button',{name:'Add Element'}).click();
    await expect(page.getByRole('button',{name:'Delete'})).toBeVisible();

});

test.only('count how many delete elements added',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/?utm_source=chatgpt.com');
    const addElement=page.getByRole('button',{name:'Add Element'});
    const buttondelete=page.getByRole('button',{name:'Delete'});
    await addElement.click();
    await addElement.click();
    await addElement.click();
    await addElement.click();
    await expect(buttondelete).toHaveCount(4);

});