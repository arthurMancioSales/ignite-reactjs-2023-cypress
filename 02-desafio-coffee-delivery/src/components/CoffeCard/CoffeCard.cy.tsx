import { CoffeeCard } from './index'
import { TestWrapper } from '../TestWrapper'

const coffe = {
  id: 1,
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 9.9,
  image: 'Expresso.png',
  tags: ['tradicional'],
}

describe('<RadioButton />', () => {
  it('mount catalog variant', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Catalog coffee={coffe} key={1}></CoffeeCard.Catalog>
      </TestWrapper>,
    )
  })

  it('clicking cart button should add coffe to cart', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Catalog coffee={coffe} key={1}></CoffeeCard.Catalog>
      </TestWrapper>,
    )

    const addToCartButton = cy.get('[data-cart]')

    cy.stub(addToCartButton, 'click', () => {
      console.log('adicionou ao carrinho')
    }).as('onAddToCart')

    cy.get('[data-counter="increment"]').click()
    cy.get('[data-cart]').click()
    cy.get('@onAddToCart').should('have.been.calledOnce')
  })

  it('mount cart variant', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Cart coffee={coffe} key={1}></CoffeeCard.Cart>
      </TestWrapper>,
    )
  })
})
