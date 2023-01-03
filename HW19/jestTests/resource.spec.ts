import superagent from "superagent"

describe("Resources suite", () => {
    it("1. Check single resource id.", async () => {
        const result = await superagent
        .get("https://reqres.in/api/unknown/2");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.id).toBe(2);
    });

    it("2. List resource.", async () => {
        const result = await superagent
        .get("https://reqres.in/api/unknown");

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("data");
    });

    it("3. Single resource not found. Status code.", async () => {
        const result = await superagent.get("https://reqres.in/api/unknown/23")
        .catch(reason => reason);
        expect(result.status).toBe(404);
    });
});