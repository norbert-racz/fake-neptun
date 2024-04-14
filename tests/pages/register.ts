import { Locator, Page } from "@playwright/test";

export default class RegisterPage {
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordAgainInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page){
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.passwordAgainInput = page.locator('#password-again');
        this.registerButton = page.locator('#register');
    }
}
