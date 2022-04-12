Feature: Realizar validações de Cadastro de cliente
  Com acesso ao link da aplicação
  Quero realizar cadastro e delete de um cliente

  Background: 
    Given que esteja na tela de listagem de cliente com o tema "Bootstrap V4 Theme" selecionado
    And acesse a tela de cadastro de novo cliente

  Scenario: Testes de cadastro de Cliente
    And insira as informações de nome "Teste Sicredi"
    And último nome do contato "Teste"
    And o primeiro nome do contato "Cristian"
    And telefone "51 9999-9999"
    And o endereço linha 1 "Av Assis Brasil, 3970"
    And o endereço linha 2 "Torre D"
    And a cidade "Porto Alegre"
    And o estado "RS"
    And o código postal "91000-000"
    And o país "Brasil"
    And o numero do empregado "2022"
    And o limite de credito "200"
    Then clicar em salvar
    When será exibido a mensagem de sucesso: "Your data has been successfully stored into the database. Edit Record or Go back to list"