import { Locator, Page } from "@playwright/test";

export default class RegistrationStatusPage {
    readonly statusBox: Locator;
    readonly okButton: Locator;

    constructor(page: Page){
        this.statusBox = page.locator('#status-box');
        this.okButton = page.locator('#ok');
    }
}
