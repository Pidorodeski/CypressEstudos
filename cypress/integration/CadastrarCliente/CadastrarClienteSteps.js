/// <reference types="Cypress" />
import ClientePage from '../../support/pageobjects/ClientePage';
const clientePage = new ClientePage;


Given(/^que esteja na tela de listagem de cliente com o tema "([^"]*)" selecionado$/, (tema) => {
	clientePage.acessarSite();
	clientePage.selecionarTema(tema);
});

And(/^acesse a tela de cadastro de novo cliente$/, () => {
	clientePage.acessarTelaDeCadastro();
});

And(/^insira as informações de nome "([^"]*)"$/, (nomeCliente) => {
	clientePage.inserirNomeCliente(nomeCliente);
});

And(/^último nome do contato "([^"]*)"$/, (contatoUltimoNome) => {
	clientePage.inserirUltimoNomeContato(contatoUltimoNome);
});

And(/^o primeiro nome do contato "([^"]*)"$/, (contatoPrimeiroNome) => {
	clientePage.inserirPrimeiroNomeContato(contatoPrimeiroNome);
});

And(/^telefone "([^"]*)"$/, (telefone) => {
	clientePage.inserirTelefone(telefone);
});

And(/^o endereço linha 1 "([^"]*)"$/, (endereco1) => {
	clientePage.inserirEnderecoLinhaUm(endereco1);
});

And(/^o endereço linha 2 "([^"]*)"$/, (endereco2) => {
	clientePage.inserirEnderecoLinhaDois(endereco2);

});

And(/^a cidade "([^"]*)"$/, (cidade) => {
	clientePage.inserirCidade(cidade);
});

And(/^o estado "([^"]*)"$/, (estado) => {
	clientePage.inserirEstado(estado);
});

And(/^o código postal "([^"]*)"$/, (codigoPostal) => {
	clientePage.inserirCodigoPostal(codigoPostal);
});

And(/^o país "([^"]*)"$/, (pais) => {
	clientePage.inserirPais(pais);
});

And(/^o numero do empregado "([^"]*)"$/, (numeroEmpregado) => {
	clientePage.inserirCodigoEmpregado(numeroEmpregado);
});

And(/^o limite de credito "([^"]*)"$/, (limiteCredito) => {
	clientePage.inserirLimiteDeCredito(limiteCredito);
});

Then(/^clicar em salvar$/, () => {
	cy.intercept({ method: 'POST', url: '**/bootstrap-v4/insert'}).as('postCadastro')
	clientePage.salvarCadastro()

});

When(/^será exibido a mensagem de sucesso: "([^"]*)"$/, (mensagem) => {
	clientePage.validarMensagemSucesso(mensagem)
	cy.wait('@postCadastro').then((interception) => {
		expect(interception.response.statusCode = 200)
  })
});
