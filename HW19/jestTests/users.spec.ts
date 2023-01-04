import superagent from "superagent"
import {createUser, userNameOnly, emptyUser} from "../testdata/user"

describe("User suite", () => {
    it("1. Request users.", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=2");
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("page");
        expect(result.body).toHaveProperty("per_page");
        expect(result.body).toHaveProperty("total");
        expect(result.body).toHaveProperty("total_pages");
        expect(result.body).toHaveProperty("data");
    });

    it("2. Check email for user with id = 10", async () => {
        const result = await superagent.get("https://reqres.in/api/users/10");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.email).toBe("byron.fields@reqres.in");
    });

    it("3. Create user. POST request. User created with correct name", async () => {
        const result = await superagent
        .post("https://reqres.in/api/users")
        .send(createUser)
        .set('Content-Type','application/json');

        const resObj = JSON.parse(result.text);
        expect(result.status).toBe(201);
        expect(resObj.name).toBe("morpheus");
    });

    it("4. User not found", async () => {
        try {
            const result = await superagent.get("https://reqres.in/api/users/23");
            expect(result.status).toBe(200);
        } catch (error: any) {
            expect(error.message).not.toBe("");
        }
    });

    it("5. List users: get unexisted page. Correct response code.", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=10");
        expect(result.status).toBe(200);
    });

    it("6. List users: get unexisted page. Empty data array.", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=10");
        const resObj = JSON.parse(result.text);
        expect(resObj.data).toStrictEqual([]);
    });

    it("7. Create user without full info: name only. Success - check name field.", async () => {
        const result = await superagent.post("https://reqres.in/api/users")
        .send(userNameOnly)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(resObj.name).toBe("morpheus");
    });

    it("8. Create user without full info: name only. Success - no job field.", async () => {
        const result = await superagent.post("https://reqres.in/api/users")
        .send(userNameOnly)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(resObj).not.toHaveProperty("job");
    });

    it("9. Update user with empty fields. Check empty values in user properties.", async () => {
        const result = await superagent.put("https://reqres.in/api/users/2")
        .send(emptyUser)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(result.status).toBe(200);
        expect(resObj.name).toBe("");
        expect(resObj.job).toBe("");
    });
});