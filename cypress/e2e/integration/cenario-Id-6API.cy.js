
  it('Consultar o pet por STATUS', () => {
 
    cy.request({
            method: "GET", //Método
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending'

    }).then((response) => { 
        expect(response.status).to.eq(200)
    })

  })

  it('Consultar o pet por ID', () => {
 
    cy.request({
            method: "GET", //Método
            url: 'https://petstore.swagger.io/v2/pet/99'

    }).then((response) => { 
        expect(response.status).to.eq(200)
    })

  })

  it('Criar um novo petID', () => {
    const petData = {
      id: 1,
      name: "Buddy",
      status: "available"
    };

    cy.request({
      method: "POST", //Método 
      url: 'https://petstore.swagger.io/v2/pet', // Endpoint para criar um novo pet
      body: petData, // Corpo da requisição com os dados do pet
      headers: {
        'Content-Type': 'application/json', // Configuramos o tipo de conteúdo como JSON
      },
    }).then((response) => { // Validamos a resposta
      
      expect(response.status).to.eq(200); // Status esperado
      expect(response.body).to.have.property('id', petData.id); // Confirmamos que o ID foi retornado
      expect(response.body).to.have.property('name', petData.name); // Confirmamos que o nome foi retornado
      expect(response.body).to.have.property('status', petData.status); // Confirmamos que o status foi retornado
    });
});

it('Deletar um pet pelo ID', () => {
    const petId = 1; // ID do pet a ser deletado
  
    cy.request({
      method: "DELETE", // Método DELETE
      url: `https://petstore.swagger.io/v2/pet/501879`, // Endpoint com o ID do pet
    
    }).then((response) => {
      // Validações da resposta
      expect(response.status).to.eq(200); // Confirma que o status é 200
      expect(response.body.message).to.eq(String(petId)); // A mensagem de resposta deve conter o ID deletado
    });
  });
  

