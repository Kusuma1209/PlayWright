import {test,expect} from '@playwright/test';
test.beforeAll(async()=>{
    console.log('statting the test and it is using beforeAll');
});

test.beforeEach(async({page})=>{
    console.log('new test started');
    await page.goto('https://the-internet.herokuapp.com');
});

test.afterEach(async()=>{
    console.log('test finished');
});

test.afterAll(async()=>{
    console.log('completed all tests and this is using afterAll')
});



test.describe('Testing Hooks',()=>{

test('first test checkboxes',async({page})=>{
    await page.getByRole('link',{name:'Checkboxes'}).click();
    await expect(page).toHaveTitle('The Internet'); 
    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
});

test('2nd test',async({page})=>{
    await page.getByRole('link',{name:'Status Codes'}).click();
    await page.getByRole('link',{name:'200'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/200');
});
});
