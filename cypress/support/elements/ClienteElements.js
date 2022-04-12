class ClienteElements {
    botaoTema = () => {return '[id=switch-version-select]'};
    botaoAdicionar = () => {return 'Add Record'};
    inserirNome = () => {return "[id=field-customerName]"};
    inserirUltimoNome = () => {return "[id=field-contactLastName]"};
    inserirPrimeiroNome = () => {return "[id=field-contactFirstName]"};
    inserirTelefone = () => {return "[id=field-phone]"};
    inserirEndereco1 = () => {return "[id=field-addressLine1]"};
    inserirEndereco2 = () => {return "[id=field-addressLine2]"};
    inserirCidade = () => {return "[id=field-city]"};
    inserirEstado = () => {return "[id=field-state]"};
    inputPostalCode = () => {return "[id=field-postalCode]"};
    inserirPais = () => {return "[id=field-country]"};
    inserirCodigoEmpregado = () => {return "[id=field-salesRepEmployeeNumber]"};
    inserirLimiteCredito = () => {return "[id=field-creditLimit]"};
    botaoSalvar = () => {return "[id=form-button-save]"};
    mensagemSucesso = () => {return "[id=report-success]"}
    botaoVoltarParaListagem = () => {return 'Go back to list'};
    inserirPesquisaNaListagem = () => {return `//body//input[@name='customerName']`}

}
export default ClienteElements;