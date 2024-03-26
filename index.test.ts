import { HiBob } from "./index";

describe("hi-bob-typescript-sdk", () => {
    it("initialize client", async () => {
        const hibob = new HiBob({
            apiKey: "API_KEY",
        });
    });
});
