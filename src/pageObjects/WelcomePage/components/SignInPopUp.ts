import BaseComponent from "../../../components/BaseComponent";
import { Locator } from "@playwright/test";


export default class SignInPopUP extends BaseComponent  {

    private _emailInput: Locator;
    private _passwordInput: Locator;
    private _loginBtn: Locator;

    constructor(page){
    super(page);
    this.container = page.locator('app-signin-modal')
    this._emailInput = page.locator('#signinEmail');
    this._passwordInput = page.locator('#signinPassword');
    this._loginBtn = this.container.locator('.btn-primary');
    }

   async fill({email, password}) {
    email && await this.emailInput.fill(email);
    password && await this.passwordInput.fill(password);
   }

    async login ({email, password}){
        await this.fill({email, password})
        await this.loginBtn.click();
    }

    get emailInput(){
        return this._emailInput;
    }

    get passwordInput(){
        return this._passwordInput;
    }

    get loginBtn(){
        return this._loginBtn;
    }


}