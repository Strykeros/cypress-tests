import { BasePage } from "./base.page";

export class WebTablesPage extends BasePage {

    static get url() {
        return "/webtables";
    }

    static get addNewRecordButton() {
        return cy.get("#addNewRecordButton");
    }

    static get firstNameTextField() {
        return cy.get("#firstName");
    }

    static get lastNameTextField() {
        return cy.get("#lastName");
    }

    static get emailTextField() {
        return cy.get("#userEmail");
    }

    static get ageTextField() {
        return cy.get("#age");
    }

    static get salaryTextField() {
        return cy.get("#salary");
    }

    static get departmentTextField() {
        return cy.get("#department");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get tableOutput() {
        return cy.get(".rt-td");
    }

    static get rows() {
        return cy.get("[role='row']");
    }

    static deleteRowBasedOnOption(opt) {
        return this.rows.contains(opt).parent().find("[title='Delete']");
    }

    static get validat() {
        return cy.get("[class='rt-noData']");
    }
}