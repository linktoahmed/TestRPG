import { expect } from "@playwright/test";

export class testRpgPage {
    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.playButton = page.locator('a:has-text("click here to play")');
        this.playUrl = 'play';
        this.characterName = page.getByPlaceholder('Galactic space lord');
        this.characterNameText = 'playwright';
        this.assertCharName = page.locator('[data-testid="character-name"]');
        this.build = page.locator('button[role="combobox"]');
        this.closeDropDown = page.locator('select > option:nth-child(2)');
        this.startButton = page.locator('form > button');
        this.clickIt = page.locator('div.flex.items-center.justify-between > button');
        this.success = page.locator('.text-blue-500');
        this.clickSuccessText = 'Great job! You levelled up';
        this.filePath = 'test-files/pic.jpg'; 
        this.uploadIt = 'input[type="file"]';
        this.uploadSuccessText = 'File selected, level up!';
        this.typeInput = page.locator('div> input');
        this.typeItText = 'Lorem Ipsum';
        this.typeSuccess = 'Dolar sit amet!';
        this.sliderThumb = page.locator('span[role="slider"]');
        this.endOfSlider = page.locator('span[data-orientation="horizontal"]');
        this.slideSuccess = 'Slid to the next level!';
        this.highestLevel = page.locator('.text-amber-500');
        this.highestLevelSuccess = "You've reached the highest level!"
    }

    async visit() {
        await this.page.goto("/");
    }

    async clickPlayButton() {
        await this.playButton.click();
        await expect(this.page).toHaveURL(this.playUrl);
    }

    async nameAndBuild(buildType) {
        await this.characterName.click();
        await this.characterName.fill(this.characterNameText + buildType);
        await this.build.click();
        await this.page.selectOption('select', buildType);
        await this.build.click({ force: true });
        await this.startButton.click();
        await expect(this.assertCharName).toHaveText(this.characterNameText + buildType);

    }

    async clickFiveTime() {
        for (let i = 0; i < 5; i++) {
            await this.clickIt.click();
        }
        await expect(this.success.nth(0)).toHaveText(this.clickSuccessText);
    }

    async uploadFile() {
        await this.page.setInputFiles(this.uploadIt, this.filePath);
        await expect(this.success.nth(1)).toHaveText(this.uploadSuccessText);
    }

    async typeIt() {
        await this.typeInput.nth(1).click();
        await this.typeInput.nth(1).fill(this.typeItText);
        await expect(this.success.nth(2)).toHaveText(this.typeSuccess);
    }

    async slideIt() {
        await this.sliderThumb.dragTo(this.endOfSlider.nth(0), { targetPosition: { x: 485, y: 0 } });
        await expect(this.success.nth(3)).toHaveText(this.slideSuccess);
    }
    
    async highestLevelMsg() {
        await expect(this.highestLevel).toHaveText(this.highestLevelSuccess);
    }
}