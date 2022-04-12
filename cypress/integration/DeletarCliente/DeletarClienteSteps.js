/// <reference types="Cypress" />
import ClientePage from '../../support/pageobjects/ClientePage';
const clientePage = new ClientePage;
const faker = require("faker")
var nomeInserido = faker.random.alphaNumeric(10);

Given(/^que com o tema "([^"]*)" selecionado eu realize o acesso a tela de inclusão de novo cliente$/, (tema) => {
	clientePage.acessarSite();
	clientePage.selecionarTema(tema);
    clientePage.acessarTelaDeCadastro();
});

When(/^insira as informações do formulario$/, () => {
	clientePage.inserirNomeCliente(nomeInserido);
    clientePage.inserirUltimoNomeContato(faker.random.alphaNumeric(15));
    clientePage.inserirPrimeiroNomeContato(faker.random.alphaNumeric(15));
	clientePage.inserirTelefone(faker.random.number());
    clientePage.inserirEnderecoLinhaUm(faker.random.alphaNumeric(15));
	clientePage.inserirEnderecoLinhaDois(faker.random.alphaNumeric(15));
	clientePage.inserirCidade(faker.random.alphaNumeric(5));
	clientePage.inserirEstado(faker.random.alphaNumeric(2));
	clientePage.inserirCodigoPostal(faker.random.number());
	clientePage.inserirPais(faker.random.alphaNumeric(7));
	clientePage.inserirCodigoEmpregado(faker.random.number());
	clientePage.inserirLimiteDeCredito(faker.random.number());
});

When(/^salve esse cadastro$/, () => {
    cy.intercept({ method: 'POST', url: '**/bootstrap-v4/insert'}).as('postCadastro')
	clientePage.salvarCadastro();
});

When(/^validar a mensagem "([^"]*)"$/, (mensagem) => {
	clientePage.validarMensagemSucesso(mensagem)
	cy.wait('@postCadastro').then((interception) => {
		expect(interception.response.statusCode = 200)
  })
});

When(/^retornar para a tela de listagem$/, () => {
	clientePage.voltarParaListagemDeClientes();
});

When(/^realizar a busca pelo nome do cliente cadastrado$/, () => {
	clientePage.inserirBuscaPeloNomeCadastrado(nomeInserido);
});

When(/^solicitar a exclusão deste registro$/, () => {
	clientePage.solicitarExclusaoDoClienteCadastrado(nomeInserido);
});

When(/^confirmar a exclusão$/, () => {
	clientePage.confirmarExclusadoDoClienteSelecionado();
    cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()

});

Then(/^será exibido a mensagem "([^"]*)" confirmando a exclusao$/, (mensagemExclusao) => {
	clientePage.validarMensagemDeExclusaoDoCliente(mensagemExclusao)
});
