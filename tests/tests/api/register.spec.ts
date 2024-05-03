import { test, expect } from '@playwright/test';
import FakeNeptunApiEndpoints from 'fake_neptun_common/build/fake_neptun_api_endpoints';
import FakeNeptunApi from '../../api/fake_neptun_api';

test.describe("API Register", () => {
    test.only('New student can register', async ({ request }) => {

        const fakeNeptunApi = new FakeNeptunApi(request);

        const username = 'newUser';
        const password = 'password';

        const newUser = await fakeNeptunApi.register(username, password);

        expect(newUser.status()).toBe(201);
    });
});
