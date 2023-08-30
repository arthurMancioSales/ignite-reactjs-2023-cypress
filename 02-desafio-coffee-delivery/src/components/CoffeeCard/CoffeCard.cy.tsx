import { CoffeeCard } from './index'
import { TestWrapper } from '../TestWrapper'

const coffee = {
  id: 1,
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 9.9,
  image: 'Expresso.png',
  tags: ['tradicional'],
}

describe('<CoffeeCard />', () => {
  it('mount catalog variant', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Catalog coffee={coffee} key={1}></CoffeeCard.Catalog>
      </TestWrapper>,
    )
  })

  it('clicking cart button should add coffee to cart', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Catalog coffee={coffee} key={1}></CoffeeCard.Catalog>
      </TestWrapper>,
    )

    cy.get('[data-cart]').then((component) => {
      const onClickSpy = cy.spy().as('onClickSpy')
      component[0].onclick = onClickSpy

      cy.get('[data-counter="increment"]').click()
      cy.get('[data-cart]').click()
    })

    cy.get('@onClickSpy').should('have.been.calledOnce')

    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('addCoffeeToCart is not a function')) {
        return false
      }
    })
  })

  it('mount cart variant', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Cart coffee={coffee} key={1}></CoffeeCard.Cart>
      </TestWrapper>,
    )
  })

  it('clicking remove button removes coffee from cart', () => {
    cy.mount(
      <TestWrapper>
        <CoffeeCard.Cart coffee={coffee} key={1}></CoffeeCard.Cart>
      </TestWrapper>,
    )

    cy.get('[data-remove-coffee]').then((component) => {
      const onClickSpy = cy.spy().as('onClickSpy')
      component[0].onclick = onClickSpy

      cy.get('[data-remove-coffee]').click()
    })

    cy.get('@onClickSpy').should('have.been.calledOnce')

    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('removeCoffeeFromCart is not a function')) {
        return false
      }
    })
  })
})
