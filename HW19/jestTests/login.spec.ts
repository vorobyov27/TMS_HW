import superagent from "superagent"
import {loginUser, emailOnly} from "../testdata/user"

describe("Login suite", () => {
    it("1. Correct Login.", async () => {
        const result = await superagent
        .post("https://reqres.in/api/login")
        .send(loginUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("token");
    });

    it("2. Login. Unsuccessful. Correct response code.", async () => {
        const result = await superagent.post("https://reqres.in/api/login")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });
});