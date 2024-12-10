import login from '../pages/login';

describe('template spec', () => {

  beforeEach(() =>{
    login.visitarPagina();
  })

  it('Compra de 3 ticket do tipo VIP usando a opção Social Media', () => {
  
    login.preencherDadosPessoaisThree()
    login.preencherInformacoesTicketThree()
    login.botaoConfirmar()
    login.mensagemConfirmacao()


  })
})