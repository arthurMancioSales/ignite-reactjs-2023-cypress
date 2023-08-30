describe('add coffee to cart', () => {
  it('visits Coffee Delivery home page', () => {
    cy.visit('http://localhost:5173')
  })

  it('finds coffee cards', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]')
    cy.get('[data-cart]')
  })

  it('adds coffee to cart', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]').first().click()
    cy.get('[data-cart]').first().click()
  })

  it('adding coffe to cart shows a success notification', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]').first().click()
    cy.get('[data-cart]').first().click()

    cy.contains('Café adicionado ao carrinho!').should('be.visible')
  })

  it('adding coffe to cart increases cart icon counter', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]').first().click()
    cy.get('[data-cart]').first().click()

    cy.get('#cart').find('#counter').should('contain', '1')
  })

  it('clicking my cart button shows current order', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]').first().click()
    cy.get('[data-cart]').first().click()

    cy.get('#cart').click()
    cy.get('[data-coffee-cart]').first()
  })

  it('filling delivery information allows to finish order', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-counter="increment"]').first().click()
    cy.get('[data-cart]').first().click()

    cy.get('#cart').click()
    cy.get('[data-coffee-cart]').first()

    cy.get('[data-input-cep]').type('12380-000')
    cy.get('[data-input-street]').type('nome da rua')
    cy.get('[data-input-number]').type('123')
    cy.get('[data-input-neighborhood]').type('nome do bairro')
    cy.get('[data-input-city]').type('São José dos Campos')
    cy.get('[data-input-uf]').select('SP')

    cy.get('[data-payment-type="creditCard"]').check()
    cy.get('[data-payment-type="debitCard"]').check()
    cy.get('[data-payment-type="money"]').check()

    cy.get('[data-payment-type="creditCard"]').should('not.be.checked')
    cy.get('[data-payment-type="debitCard"]').should('not.be.checked')
    cy.get('[data-payment-type="money"]').should('be.checked')

    cy.get('[data-submit-order]').click()

    cy.get('[data-confirmed-order-title]')
    cy.get('[data-delivery-address]').should('contain', 'nome da rua, 123 ')
    cy.get('[data-delivery-reference]').should(
      'contain',
      'nome do bairro - São José dos Campos, SP',
    )
    cy.get('[data-delivery-payment]').should('contain', 'Dinheiro')
  })
})
