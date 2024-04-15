import { Locator, Page } from "@playwright/test";

export default class RegisterPage {
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordAgainInput: Locator;
    readonly registerButton: Locator;
    readonly userNameErrorMessageBox: Locator;
    readonly passwordErrorMessageBox: Locator;
    readonly passwordAgainErrorMessageBox: Locator;

    constructor(page: Page){
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.passwordAgainInput = page.locator('#password-again');
        this.registerButton = page.locator('#register');
        this.userNameErrorMessageBox = page.locator('#user-name-error-message-box');
        this.passwordErrorMessageBox = page.locator('#password-error-message-box');
        this.passwordAgainErrorMessageBox = page.locator('#password-again-error-message-box');
    }
}
