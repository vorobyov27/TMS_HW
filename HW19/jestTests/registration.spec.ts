import superagent from "superagent"
import {registerUser, emailOnly} from "../testdata/user"

describe("Registration suite", () => {
    it("1. Registration - successful.", async () => {
        const result = await superagent
        .post("https://reqres.in/api/register")
        .send(registerUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("token");
        expect(result.body).toHaveProperty("id");
    });
    
    it("2. Register. Unsuccessful. Correct response code.", async () => {
        const result = await superagent.post("https://reqres.in/api/register")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });
});