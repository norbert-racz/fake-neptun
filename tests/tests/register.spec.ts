import { test, expect } from '@playwright/test';
import Context from '../context';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import RegistrationStatusPage from '../pages/registration_status';
import FakeNeptunTexts from 'fake_neptun_common/build/fake_neptun_texts';
import HomePage from '../pages/home';

test.describe("Register", () => {
    test('Register new student', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);
        const registrationStatusPage = new RegistrationStatusPage(page);
        const homePage = new HomePage(page);

        await page.goto(Context.BASE_URL);
        await loginPage.registerButton.click();
        await registerPage.userNameInput.fill('newUser');
        await registerPage.passwordInput.fill('password');
        await registerPage.passwordAgainInput.fill('password');
        await registerPage.registerButton.click();
        expect(await registrationStatusPage.statusBox.innerText()).toBe(FakeNeptunTexts.SUCCESSFULL_REGISTRATION_STATUS_TEXT);
        await registrationStatusPage.okButton.click();
        await expect(homePage.homePageHeader).toBeVisible();
    });
});
