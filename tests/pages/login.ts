import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly registerButton: Locator;
    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly invalidUserNameOrPasswordErrorMessage: Locator;

    constructor(page: Page){
        this.registerButton = page.locator('#register');
        this.loginButton = page.locator('#login');
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.invalidUserNameOrPasswordErrorMessage = page.locator('#invalid-user-name-or-password-error-message');
    }
}
