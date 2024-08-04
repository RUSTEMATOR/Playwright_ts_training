import { Locator, Page } from "@playwright/test";
import BasePage from "../../BasePage";


export default class WelcomePage extends BasePage  {
    readonly signUpButton: Locator

    constructor(page: Page) {
        super(page, '/', page.locator('.header-link.-guest'));

        this.signUpButton = page.locator('.hero-descriptor_btn')
    }

}