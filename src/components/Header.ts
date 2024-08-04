import BaseComponent from "./BaseComponent";
import RegPopUp from "../pageObjects/WelcomePage/components/RegPopUp";
import SignInPopUP from "../pageObjects/WelcomePage/components/SignInPopUp";
import { Page, Locator } from "@playwright/test";



export default class Header extends BaseComponent {
    private _signInButton: Locator;
    private _signUpBtn: Locator;
    public _page: Page;

    constructor(page: Page){
        super(page);
        this._page = page;
        this._signInButton = page.locator('.header_signin')
        this._signUpBtn = page.locator('.btn-primary')

    }

    async clickSignInBtn(){
        await this.signInButton.click();
        return new SignInPopUP(this._page);
    }

    async clickRegButton(){
        await this.signUpBtn.click();
        return new RegPopUp(this._page);
    }

    get signInButton(){
        return this._signInButton;
    }

    get signUpBtn(){
        return this._signUpBtn;
    }

}