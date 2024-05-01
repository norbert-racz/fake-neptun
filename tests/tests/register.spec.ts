import { test, expect } from '@playwright/test';
import Context from '../context';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import RegistrationStatusPage from '../pages/registration_status';
import FakeNeptunTexts from 'fake_neptun_common/build/fake_neptun_texts';
import HomePage from '../pages/home';

test.describe("Register", () => {
    test('New student can register', async ({ page }) => {
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

    test('Username, password and passwordAgain is required', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        await page.goto(Context.BASE_URL);
        await loginPage.registerButton.click();
        await registerPage.registerButton.click();
        expect(await registerPage.userNameErrorMessageBox.innerText()).toBe(FakeNeptunTexts.USERNAME_IS_REQUIRED_ERROR_MESSAGE);
        expect(await registerPage.passwordErrorMessageBox.innerText()).toBe(FakeNeptunTexts.PASSWORD_IS_REQUIRED_ERROR_MESSAGE);
        expect(await registerPage.passwordAgainErrorMessageBox.innerText()).toBe(FakeNeptunTexts.PASSWORD_AGAIN_IS_REQUIRED_ERROR_MESSAGE);
    });

    test('Password and passwordAgain must match', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        await page.goto(Context.BASE_URL);
        await loginPage.registerButton.click();
        await registerPage.userNameInput.fill('newUser');
        await registerPage.passwordInput.fill('password');
        await registerPage.passwordAgainInput.fill('password1');
        await registerPage.registerButton.click();
        expect(await registerPage.passwordsMustMatchErrorMessageBox.innerText()).toBe(FakeNeptunTexts.PASSWORDS_MUST_MATCH_ERROR_MESSAGE);
    })
});
