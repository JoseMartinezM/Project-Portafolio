const request = require("supertest");
const app = require("../app");
const db = require("../db");
describe("Test the root path", () => {
    const data = [
        {
            idfavorite: 17,
            idtool: 17
        },
        {
            idfavorite: 18,
            idtool: 19
        },
        {
            idfavorite: 19,
            idtool: 27
        }
    ];
    beforeAll(async () => {
        for (const i in data) {
            await db.query('INSERT INTO favorites (idfavorite, idtool) VALUES ($1, $2)', [data[i].idfavorite, data[i].idtool]);
        }
    });

    afterAll(async () => {
        await db.query('DELETE FROM favorites');
        db.end();
    });

    test("It should response the GET method", async () => {
        const response = await request(app).get("/Tools/getfavorites");
        return expect(response.statusCode).toBe(200);
    });

    test("It should respond with correct body", async () => {
        const response = await request(app).get("/Tools/getfavorites");
        return expect(response.body).toEqual(data);
    });
});