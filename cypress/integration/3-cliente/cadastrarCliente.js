/// <reference types="cypress" />

const faker = require("faker")
let temaV4 = 'Bootstrap V4 Theme';
let inputNome = "[id=field-customerName]";
let inputUltimoNome = "[id=field-contactLastName]";
let inputPrimeiroNome = "[id=field-contactFirstName]";
let inputTelefone = "[id=field-phone]";
let inputEndereco1 = "[id=field-addressLine1]";
let inputEndereco2 = "[id=field-addressLine2]";
let inputCidade = "[id=field-city]";
let inputEstado = "[id=field-state]"
let inputPostalCode = "[id=field-postalCode]"
let inputPais = "[id=field-country]";
let inputCodigoEmpregado = "[id=field-salesRepEmployeeNumber]";
let inputLimiteCredito = "[id=field-creditLimit]";
let botaoSalvar = "[id=form-button-save]";
let mensagemSucesso = "Your data has been successfully stored into the database.";
let mensagemDeleteConfirm = "Are you sure that you want to delete this 1 item?";
let mensagemDeleteSucesso = "Your data has been successfully deleted from the database.";


describe('Cadastrar Cliente', () => {
    beforeEach(() =>{
        cy.visit("/")
    })

    it('Cadastrar cliente com tema v4 selecionado', () => {
        cy.get("[id=switch-version-select]").select(temaV4);
        cy.contains('Add Record').click()
        let nomeInserido = faker.random.alphaNumeric(15);
        cy.get(inputNome).type(nomeInserido);
        cy.get(inputUltimoNome).type(faker.random.alphaNumeric(15))
        cy.get(inputPrimeiroNome).type(faker.random.alphaNumeric(15))
        cy.get(inputTelefone).type(faker.random.number())
        cy.get(inputEndereco1).type(faker.random.alphaNumeric(15))
        cy.get(inputEndereco2).type(faker.random.alphaNumeric(15))
        cy.get(inputCidade).type(faker.random.alphaNumeric(5))
        cy.get(inputEstado).type(faker.random.alphaNumeric(2))
        cy.get(inputPostalCode).type(faker.random.alphaNumeric(8))
        cy.get(inputPais).type(faker.random.alphaNumeric(8))
        cy.get(inputCodigoEmpregado).type(faker.random.alphaNumeric(8))
        cy.get(inputLimiteCredito).type(faker.random.number())
        cy.intercept({ method: 'POST', url: '**/bootstrap-v4/insert'}).as('postCadastro')
        cy.get(botaoSalvar).click()
        cy.get("[id=report-success").contains(mensagemSucesso)
        cy.wait('@postCadastro').then((interception) => {
                expect(interception.response.statusCode = 200)
          })
        
        cy.contains('Go back to list').click();
        cy.get(':nth-child(3) > .form-control').type(nomeInserido);
        cy.get('.no-border-left > .floatR > .btn').click();
        cy.xpath(`//body//td[contains(.,'${nomeInserido}')]/../td/input`).click();
        cy.get('.no-border-left > .floatL > .btn').click();

        cy.get("[class=alert-delete-multiple-one]").contains(mensagemDeleteConfirm);
        cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()

        cy.get('[data-growl="message"] > p').contains(mensagemDeleteSucesso);

    });
})