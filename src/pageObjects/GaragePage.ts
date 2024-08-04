import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage";


export default class GaragePage extends BasePage {

    private _addCarBtn: Locator;

    constructor(page: Page) {
        super(page, '/panel/garage', page.locator('.panel-page.btn-primary'));

        this._addCarBtn = page.locator('button.btn.btn-primary').filter({hasText: 'Add car'});
    }


    get addCarBtn(){
        return this._addCarBtn;
    }

}
