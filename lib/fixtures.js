import { test as baseTest } from "@playwright/test";
import { testRpgPage } from "../pages/testRpgPage.js";

export const test = baseTest.extend({
    testRpgPage: async ({ page, context }, use) => {
        await use(new testRpgPage(page, context));
    },
})