import { Locator, Page } from "@playwright/test";

export default class UnregisterPage {
    readonly yesButton: Locator;

    constructor(page: Page){
        this.yesButton = page.locator('#yes');
    }
}

