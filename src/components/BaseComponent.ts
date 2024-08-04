import { Page, Locator, expect } from "@playwright/test";

export default class BaseComponent {
    public _page: Page;
    public container: Locator; // Add declaration for 'container' property

    constructor(page: Page) {
        this._page = page; 
        this.container = this.container ?? page.locator('html');
    }

    async waitForLoad() {
        await expect(this.container).toBeVisible();
    }
}