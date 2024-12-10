import login from '../pages/login';

describe('template spec', () => {

  beforeEach(() =>{
    login.visitarPagina();
  })

  it('Compra de 2 ticket do tipo VIP usando a opção Publication', () => {
 
    login.preencherDadosPessoaisTwo()
    login.preencherInformacoesTicketTwo()
    login.botaoConfirmar()
    login.mensagemConfirmacao()

  })
})