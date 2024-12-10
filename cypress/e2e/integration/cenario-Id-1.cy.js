import login from '../pages/login';

describe('template spec', () => {

  beforeEach(() =>{
    login.visitarPagina();
  })

  it('Compra de 1 ticket do tipo General Admission usando a opção Friend', () => {
      
    login.preencherDadosPessoaisOne()
    login.preencherInformacoesTicketOne()
    login.botaoConfirmar()
    login.mensagemConfirmacao()

  })
})