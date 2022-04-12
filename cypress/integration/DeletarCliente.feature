Feature: Deletar um cliente cadastrado
  Com acesso ao link da aplicação
  quero realizar cadastro e posteriormente a exclusão deste cliente

  Background:
    Given que com o tema "Bootstrap V4 Theme" selecionado eu realize o acesso a tela de inclusão de novo cliente
    And insira as informações do formulario
    And salve esse cadastro
    And validar a mensagem "Your data has been successfully stored into the database. Edit Record or Go back to list"

  Scenario: Realizar deleçao do cliente cadastrado
    And retornar para a tela de listagem
    And realizar a busca pelo nome do cliente cadastrado
    And solicitar a exclusão deste registro
    When confirmar a exclusão
    Then será exibido a mensagem "Your data has been successfully deleted from the database." confirmando a exclusao