import {Locator, Page, expect} from '@playwright/test';
import Header from './components/Header';


export default class BasePage{
    protected _page: Page;
    protected _url: string;
    protected _waitPageLocator: Locator; 
    public header: Header;

    constructor(page: Page, url: string, waitPageLocator: Locator){
        this._page = page;
        this._url = url;
        this._waitPageLocator = waitPageLocator
        this.header = new Header(this._page);
    }

    async navigate() {
        await this._page.goto(this._url);
        await expect(this._waitPageLocator).toBeVisible();
    }

}