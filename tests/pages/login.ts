import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly registerButton: Locator;

    constructor(page: Page){
        this.registerButton = page.locator('#register');
    }
}
