import { Locator, Page } from "@playwright/test";

export default class HomePage {
    readonly homePageHeader: Locator;
    readonly logoutButton: Locator;
    
    constructor(page: Page){
        this.homePageHeader = page.locator('#home-page-header');
        this.logoutButton = page.locator('#logout');
    }
}
