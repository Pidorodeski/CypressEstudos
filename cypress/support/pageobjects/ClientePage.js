/// <reference types="Cypress" />

import ClienteElements from "../elements/ClienteElements.js";
const cliElements = new ClienteElements;

const url = Cypress.config("baseUrl");

class ClientePage {

    acessarSite(){
        cy.visit(url)
    }
    selecionarTema(tema){
        cy.get(cliElements.botaoTema()).select(tema);
    }
    acessarTelaDeCadastro(){
        cy.contains(cliElements.botaoAdicionar()).click();
    }
    inserirNomeCliente(nomeCliente){
        cy.get(cliElements.inserirNome()).type(nomeCliente);
    }
    inserirUltimoNomeContato(contatoUltimoNome){
        cy.get(cliElements.inserirUltimoNome()).type(contatoUltimoNome);
    }
    inserirPrimeiroNomeContato(contatoPrimeiroNome){
        cy.get(cliElements.inserirPrimeiroNome()).type(contatoPrimeiroNome);
    }
    inserirTelefone(telefone){
        cy.get(cliElements.inserirTelefone()).type(telefone);
    }
    inserirEnderecoLinhaUm(endereco1){
        cy.get(cliElements.inserirEndereco1()).type(endereco1);
    }
    inserirEnderecoLinhaDois(endereco2){
        cy.get(cliElements.inserirEndereco2()).type(endereco2);
    }
    inserirCidade(cidade){
        cy.get(cliElements.inserirCidade()).type(cidade);
    }
    inserirEstado(estado){
        cy.get(cliElements.inserirEstado()).type(estado);
    }
    inserirCodigoPostal(codigoPostal){
        cy.get(cliElements.inputPostalCode()).type(codigoPostal);
    }
    inserirPais(pais){
        cy.get(cliElements.inserirPais()).type(pais);
    }
    inserirCodigoEmpregado(numeroEmpregado){
        cy.get(cliElements.inserirCodigoEmpregado()).type(numeroEmpregado);
    }
    inserirLimiteDeCredito(limiteCredito){
        cy.get(cliElements.inserirLimiteCredito()).type(limiteCredito);
    }
    salvarCadastro(){
        cy.get(cliElements.botaoSalvar()).click()
    }
    validarMensagemSucesso(mensagem){
        cy.get(cliElements.mensagemSucesso()).contains(mensagem)
    }
    voltarParaListagemDeClientes(){
        cy.contains(cliElements.botaoVoltarParaListagem()).click();
    }
    inserirBuscaPeloNomeCadastrado(nomeCadastrado){
        cy.xpath(cliElements.inserirPesquisaNaListagem()).type(nomeCadastrado)
    }
    solicitarExclusaoDoClienteCadastrado(nomeCadastrado){
        cy.get('.no-border-left > .floatR > .btn').click();
        cy.xpath(`//body//td[contains(.,'${nomeCadastrado}')]/../td/input`).check();
    }
    confirmarExclusadoDoClienteSelecionado(){
        cy.get('.no-border-left > .floatL > .btn').click();
    }
    validarMensagemDeExclusaoDoCliente(mensagemExclusao){
        cy.get('[data-growl="message"] > p').contains(mensagemExclusao);
    }
}
export default ClientePage;