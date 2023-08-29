import { Counter } from './index'
import { TestWrapper } from '../../TestWrapper'

describe('<Counter />', () => {
  it('mount', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')

    cy.mount(
      <TestWrapper>
        <Counter quantity={0} key={1} onQuantityChange={onChangeSpy} />
      </TestWrapper>,
    )
  })

  it('clicking + adds one to the count', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    const quantity = 15

    cy.mount(
      <TestWrapper>
        <Counter quantity={quantity} key={1} onQuantityChange={onChangeSpy} />
      </TestWrapper>,
    )
    cy.get('[data-counter=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', quantity + 1)
  })

  it('clicking - subtracts one to the count', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    const quantity = 26

    cy.mount(
      <TestWrapper>
        <Counter quantity={quantity} key={1} onQuantityChange={onChangeSpy} />
      </TestWrapper>,
    )
    cy.get('[data-counter=decrement]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', quantity - 1)
  })

  it('clicking - when quantity is 0 should do nothing', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    const quantity = 0

    cy.mount(
      <TestWrapper>
        <Counter quantity={quantity} key={1} onQuantityChange={onChangeSpy} />
      </TestWrapper>,
    )
    cy.get('[data-counter=decrement]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 0)
  })
})
