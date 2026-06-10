import {Page} from "@playwright/test";

export class InventoryPage{
    constructor(private page:Page){}

    inventoryItems=()=>this.page.locator('.inventory_item');
    addToCartButton=(itemName:string)=>this.page.locator(`.inventory_item:has-text("${itemName}") button`);
    shoppingCartLink=()=>this.page.locator('.shopping_cart_link');
    
    async addItemToCart(itemName:string){
        await this.addToCartButton(itemName).click();
    }
    async goToCart(){
        await this.shoppingCartLink().click();
    }
}   