import {Page} from '@playwright/test';

export class LoginPage{
    constructor(private page:Page){}
    
    usernameInput=()=>this.page.locator('#user-name');
    passwordInput=()=>this.page.locator('#password');
    loginButton=()=>this.page.locator('#login-button');

    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username:string,password:string){
        await this.usernameInput().fill(username);
        await this.passwordInput().fill(password);
        await this.loginButton().click();
    }
}
