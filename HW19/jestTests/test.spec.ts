import superagent from "superagent"
import {createUser, registerUser, loginUser, userNameOnly, emptyUser, emailOnly} from "../testdata/user"

describe("Api test suit. Positive", () => {
    it("1. Request users - response state", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=2");
        expect(result.status).toBe(200);
    });

    it("2. Check email for user with id = 10", async () => {
        const result = await superagent.get("https://reqres.in/api/users/10");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.email).toBe("byron.fields@reqres.in");
    });

    it("3. Create user. POST request - correct answer code.", async () => {
        const result = await superagent
        .post("https://reqres.in/api/users")
        .send(createUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(201);
    });

    it("4. Create user. POST request. User created with correct name", async () => {
        const result = await superagent
        .post("https://reqres.in/api/users")
        .send(createUser)
        .set('Content-Type','application/json');

        const resObj = JSON.parse(result.text);
        expect(resObj.name).toBe("morpheus");
    });

    it("5. Registration - successful. Correct response code.", async () => {
        const result = await superagent
        .post("https://reqres.in/api/register")
        .send(registerUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
    });

    it("6. Check single resource id", async () => {
        const result = await superagent
        .get("https://reqres.in/api/unknown/2");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.id).toBe(2);
    });

    it("7. Login. Correct response", async () => {
        const result = await superagent
        .post("https://reqres.in/api/login")
        .send(loginUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
    });

    it("8. Login. Token in response", async () => {
        const result = await superagent
        .post("https://reqres.in/api/login")
        .send(loginUser)
        .set('Content-Type','application/json');

        expect(result.body).toHaveProperty("token")
    });

    it("9. List resource. Correct response code.", async () => {
        const result = await superagent
        .get("https://reqres.in/api/unknown");

        expect(result.status).toBe(200);
    });

    it("10. List resource. Correct response code.", async () => {
        const result = await superagent
        .get("https://reqres.in/api/unknown");

        expect(result.body).toHaveProperty("data")
    });
});

describe("Api test suit. Negative", () => {
    it("1. User not found", async () => {
        try {
            const result = await superagent.get("https://reqres.in/api/users/23");
            expect(result.status).toBe(200);
        } catch (error: any) {
            expect(error.message).not.toBe("");
        }
    });

    it("2. Single resource not found. Status code.", async () => {
        const result = await superagent.get("https://reqres.in/api/unknown/23")
        .catch(reason => reason);
        expect(result.status).toBe(404);
    });

    it("3. List users: get unexisted page. Correct response code.", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=10");
        expect(result.status).toBe(200);
    });

    it("4. List users: get unexisted page. Empty data array.", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=10");
        const resObj = JSON.parse(result.text);
        expect(resObj.data).toStrictEqual([]);
    });

    it("5. Create user without full info: name only. Success - check name field.", async () => {
        const result = await superagent.post("https://reqres.in/api/users")
        .send(userNameOnly)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(resObj.name).toBe("morpheus");
    });

    it("6. Create user without full info: name only. Success - no job field.", async () => {
        const result = await superagent.post("https://reqres.in/api/users")
        .send(userNameOnly)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(resObj).not.toHaveProperty("job");
    });

    it("7. Update user with empty fields. Correct response code.", async () => {
        const result = await superagent.put("https://reqres.in/api/users/2")
        .send(emptyUser)
        .set('Content-Type','application/json');
        expect(result.status).toBe(200);
    });

    it("8. Update user with empty fields. Check empty values in user properties.", async () => {
        const result = await superagent.put("https://reqres.in/api/users/2")
        .send(emptyUser)
        .set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);
        expect(resObj.name).toBe("");
        expect(resObj.job).toBe("");
    });

    it("9. Register. Unsuccessful. Correct response code.", async () => {
        const result = await superagent.post("https://reqres.in/api/register")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });

    it("10. Login. Unsuccessful. Correct response code.", async () => {
        const result = await superagent.post("https://reqres.in/api/login")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });
});