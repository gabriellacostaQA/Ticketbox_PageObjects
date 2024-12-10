import { elements } from "./elements";

class Login {

    visitarPagina(){
        cy.visit(elements.URL);
    }

    //---------------Dados pessoais---------------//        
    preencherDadosPessoaisOne(){
        cy.get(elements.firstName).type('Test');
        cy.get(elements.lastName).type('One');
        cy.get(elements.email).type('teste1@teste.gamil.com')
    }

    preencherDadosPessoaisTwo(){
        cy.get(elements.firstName).type('Test');
        cy.get(elements.lastName).type('Two');
        cy.get(elements.email).type('teste2@teste.gamil.com')
    }

    preencherDadosPessoaisThree(){
        cy.get(elements.firstName).type('Test');
        cy.get(elements.lastName).type('Three');
        cy.get(elements.email).type('teste3@teste.gamil.com')
    }

    preencherDadosPessoaisFour(){
        cy.get(elements.firstName).type('Test');
        cy.get(elements.lastName).type('Four');
        cy.get(elements.email).type('teste4@teste.gamil.com')
    }

    preencherDadosPessoaisFive(){
        cy.get(elements.firstName).type('Test');
        cy.get(elements.lastName).type('Five');
        cy.get(elements.email).type('teste5@teste.gamil.com')
    }

   //---------------Informações Ticket---------------//
    preencherInformacoesTicketOne(){
        cy.get(elements.ticketQuantity).select('1');
        cy.get(elements.ticketTypeGeral).check();    
        cy.get(elements.findOutFriend).check();
        cy.get(elements.request).type('Filme Legendado');
        cy.get(elements.contract).check();
        //cy.get(elements.signature).type('Gabriella Costa');
    }
    
    preencherInformacoesTicketTwo(){
        cy.get(elements.ticketQuantity).select('2');
        cy.get(elements.ticketTypeVip).check();    
        cy.get(elements.findOutPublication).check();
        cy.get(elements.request).type('Filme Dublado');
        cy.get(elements.contract).check();
        //cy.get(elements.signature).type('Gabriella Costa');
    }

    preencherInformacoesTicketThree(){
        cy.get(elements.ticketQuantity).select('3');
        cy.get(elements.ticketTypeVip).check();    
        cy.get(elements.findOutSocialMedia).check();
        cy.get(elements.request).type('Filme antigo');
        cy.get(elements.contract).check();
        cy.get(elements.signature).type('Gabriella Costa');
    }

    preencherInformacoesTicketFour(){
        cy.get(elements.ticketQuantity).select('4');
        cy.get(elements.ticketTypeGeral).check();    
        cy.get(elements.findOutFriend).check();
        cy.get(elements.request).type('Filme de comedia');
        cy.get(elements.contract).check();
        cy.get(elements.signature).type('Gabriella Costa');
    }

    preencherInformacoesTicketFive(){
        cy.get(elements.ticketQuantity).select('4');
        cy.get(elements.ticketTypeGeral).check();    
        cy.get(elements.findOutFriend).check();
        cy.get(elements.request).type('Filme de comedia');
        cy.get(elements.contract).check();
        cy.get(elements.signature).type('Gabriella Costa');
    }

  //---------------Botões---------------// 
    botaoConfirmar(){
        cy.get('.active').click();
    }

//--------------- Mensagens de Confirmação---------------//
    mensagemConfirmacao(){
        cy.contains('Ticket(s) successfully ordered.').should('be.visible');
    }
}

export default new Login()