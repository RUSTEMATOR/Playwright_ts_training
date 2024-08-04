import BaseComponent from "../../../components/BaseComponent"
import customMethods from "../../../methods"
import { Page, Locator } from "@playwright/test";

type RegistrationPopUp = RegPopUp;

export default class RegPopUp extends BaseComponent{

    private _nameField: Locator;
    private _lastNameField: Locator;
    private _emailField: Locator;
    private _passwordField: Locator;
    private _passRepeatField: Locator;
    private _submitRegisterBtn: Locator;
    private _regPopUpModal: Locator;
    private _validationErr: Locator;
    private randomEmail: string;
    private _errorMessages: { [key: string]: string };

    constructor(page) {
        super(page)
        this._nameField = page.locator('#signupName')
        this._lastNameField = page.locator('#signupLastName')
        this._emailField = page.locator('#signupEmail')
        this._passwordField = page.locator('#signupPassword')
        this._passRepeatField = page.locator('#signupRepeatPassword')
        this._submitRegisterBtn = page.locator('ngb-modal-window > div > div > app-signup-modal > div.modal-footer > button')
        this._regPopUpModal = page.locator('app-signup-modal')

        this._validationErr = page.locator('div.invalid-feedback > p')

        this.randomEmail = customMethods.generateRandomEmail();

        this._errorMessages = {
            nameFieldEmpty: 'Name required',
            passFieldEMpty: 'Password required',
            lastNameFieldEmpty: 'Last name required',
            emailFieldEmpty: 'Email required',
            passRepeatFieldEmpty: 'Re-enter password required',
            nameFieldLength: 'Name has to be from 2 to 20 characters long',
            lastNameFieldLength: 'Last name has to be from 2 to 20 characters long',
            passwordFieldLength: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            emailFieldViolation: 'Email is incorrect',
            nameFieldViolation: 'Name invalid',
            passwordsDontMatch: 'Passwords do not match'
        };
    }

    async fillIn({name, lastName, email, password, passRepeat}) {
        name && await this.nameField.fill(name);
        lastName && await this.lastNameField.fill(lastName);
        email && await this.emailField.fill(email);
        password && await this.passwordField.fill(password);
        passRepeat && await this.passRepeatField.fill(passRepeat);
    }

    async submitRegistration() {
        await this.submitRegisterBtn.click();
        // return new GaragePage(this._page);
    }

    get nameField(){
        return this._nameField
    }

    get lastNameField(){
        return this._lastNameField
    }

    get emailField(){
        return this._emailField
    }


    get passwordField(){
        return this._passwordField
    }


    get passRepeatField(){
        return this._passRepeatField
    }

    get submitRegisterBtn(){
        return this._submitRegisterBtn
    } 

    get regPopUpModal() {
        return this._regPopUpModal;
    }

    get nameFieldErr() {
        return this.nameFieldErr;
    }

    get lastNameFieldErr() {
        return this.lastNameFieldErr;
    }

    get emailFieldErr() {
        return this.emailFieldErr;
    }

    get passwordFieldErr() {
        return this.passwordFieldErr;
    }

    get passRepeatFieldErr() {
        return this.passRepeatFieldErr;
    }

    get nameFieldLengthErr() {
        return this.nameFieldLengthErr;
    }

    get lastNameFieldLengthErr() {
        return this.lastNameFieldLengthErr;
    }

    get passwordFieldLengthErr() {
        return this.passwordFieldLengthErr;
    }

    get emailFieldViolationErr() {
        return this.emailFieldViolationErr;
    }

    get nameFieldViolationErr() {
        return this.nameFieldViolationErr;
    }

    get lastNameFieldViolationErr() {
        return this.lastNameFieldViolationErr;
    }

    get passDontMatchErr() {
        return this.passDontMatchErr;
    }

    get validationErr() {
        return this._validationErr;
    }


    get errorMessages() {
        return this._errorMessages;
    }


}