import { test } from "../lib/fixtures"

test.describe("Test RPG Game", () => {
    test.beforeEach(async ({ testRpgPage }) => {
        await test.step('Open the Test RPG Game', async () => {
            await testRpgPage.visit();
        });
    })

    test("Playing Test RPG as Thief", async ({ testRpgPage }) => {

        await test.step('Click on "Play" button', async () => {
            await testRpgPage.clickPlayButton();
        });

        await test.step('Enter Name & Select Chaarcter Build', async () => {
            await testRpgPage.nameAndBuild('Thief');
        });

        await test.step('Adventure Time- Click 5 Times to level Up', async () => {
            await testRpgPage.clickFiveTime();
        });

        await test.step('Adventure Time- Upload File to level Up', async () => {
            await testRpgPage.uploadFile();
        });

        await test.step('Adventure Time- Type Text to level Up', async () => {
            await testRpgPage.typeIt();
        });

        await test.step('Adventure Time- Slide it to level Up', async () => {
            await testRpgPage.slideIt();
        });

        await test.step('Highest Level Reached', async () => {
            await testRpgPage.highestLevelMsg();
        });
    })


    test("Playing Test RPG as Knight", async ({ testRpgPage }) => {

        await test.step('Click on "Play" button', async () => {
            await testRpgPage.clickPlayButton();
        });

        await test.step('Enter Name & Select Chaarcter Build', async () => {
            await testRpgPage.nameAndBuild('Knight');
        });

        await test.step('Adventure Time- Click 5 Times to level Up', async () => {
            await testRpgPage.clickFiveTime();
        });

        await test.step('Adventure Time- Upload File to level Up', async () => {
            await testRpgPage.uploadFile();
        });

        await test.step('Adventure Time- Type Text to level Up', async () => {
            await testRpgPage.typeIt();
        });

        await test.step('Adventure Time- Slide it to level Up', async () => {
            await testRpgPage.slideIt();
        });

        await test.step('Highest Level Reached', async () => {
            await testRpgPage.highestLevelMsg();
        });
    })

    test("Playing Test RPG as Mage", async ({ testRpgPage }) => {

        await test.step('Click on "Play" button', async () => {
            await testRpgPage.clickPlayButton();
        });

        await test.step('Enter Name & Select Chaarcter Build', async () => {
            await testRpgPage.nameAndBuild('Mage');
        });

        await test.step('Adventure Time- Click 5 Times to level Up', async () => {
            await testRpgPage.clickFiveTime();
        });

        await test.step('Adventure Time- Upload File to level Up', async () => {
            await testRpgPage.uploadFile();
        });

        await test.step('Adventure Time- Type Text to level Up', async () => {
            await testRpgPage.typeIt();
        });

        await test.step('Adventure Time- Slide it to level Up', async () => {
            await testRpgPage.slideIt();
        });

        await test.step('Highest Level Reached', async () => {
            await testRpgPage.highestLevelMsg();
        });
    })

    test("Playing Test RPG as Brigadier", async ({ testRpgPage }) => {

        await test.step('Click on "Play" button', async () => {
            await testRpgPage.clickPlayButton();
        });

        await test.step('Enter Name & Select Chaarcter Build', async () => {
            await testRpgPage.nameAndBuild('Brigadier');
        });

        await test.step('Adventure Time- Click 5 Times to level Up', async () => {
            await testRpgPage.clickFiveTime();
        });

        await test.step('Adventure Time- Upload File to level Up', async () => {
            await testRpgPage.uploadFile();
        });

        await test.step('Adventure Time- Type Text to level Up', async () => {
            await testRpgPage.typeIt();
        });

        await test.step('Adventure Time- Slide it to level Up', async () => {
            await testRpgPage.slideIt();
        });

        await test.step('Highest Level Reached', async () => {
            await testRpgPage.highestLevelMsg();
        });
    })

})
