import { APIRequestContext, APIResponse } from "@playwright/test";
import FakeNeptunApiEndpoints from "fake_neptun_common/build/fake_neptun_api_endpoints";

export default class FakeNeptunApi {
    private readonly request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    async register(username: string, password: string): Promise<APIResponse>{
        return await this.request.post(
            `${process.env.FAKE_NEPTUN_API_URL}${FakeNeptunApiEndpoints.REGISTER}`,
            {
                data: {
                    username: username,
                    password: password,
                    passwordAgain: password
                }
            }
        );
    }
}
